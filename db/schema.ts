export const createCoursesTable = `
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    level TEXT NOT NULL,
    format TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT NOT NULL,
    modules_json TEXT NOT NULL DEFAULT '[]',
    status TEXT NOT NULL DEFAULT 'published',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;
