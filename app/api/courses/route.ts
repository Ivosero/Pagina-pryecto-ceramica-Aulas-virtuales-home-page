import { env } from 'cloudflare:workers';
import { createCoursesTable } from '../../../db/schema';

type CourseInput = {
  title: string; description: string; level: string; format: string;
  price: number; imageUrl: string; modules: unknown[];
};

function db() {
  return (env as unknown as { DB: D1Database }).DB;
}

async function ensureSchema() {
  await db().prepare(createCoursesTable).run();
}

export async function GET() {
  await ensureSchema();
  const result = await db().prepare("SELECT * FROM courses WHERE status = 'published' ORDER BY id DESC").all();
  return Response.json(result.results);
}

export async function POST(request: Request) {
  await ensureSchema();
  const body = await request.json() as CourseInput;
  if (!body.title?.trim() || !body.description?.trim()) {
    return Response.json({ error: 'El título y la descripción son obligatorios.' }, { status: 400 });
  }
  const slugBase = body.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const slug = `${slugBase}-${Date.now().toString(36)}`;
  const result = await db().prepare(`
    INSERT INTO courses (title, slug, description, level, format, price, image_url, modules_json, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')
    RETURNING *
  `).bind(body.title.trim(), slug, body.description.trim(), body.level, body.format, Number(body.price), body.imageUrl, JSON.stringify(body.modules ?? [])).first();
  return Response.json(result, { status: 201 });
}

export async function DELETE(request: Request) {
  await ensureSchema();
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return Response.json({ error: 'Falta el identificador.' }, { status: 400 });
  await db().prepare('DELETE FROM courses WHERE id = ?').bind(Number(id)).run();
  return Response.json({ ok: true });
}
