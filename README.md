# Terra Forma

Plataforma web responsive basada en las pantallas de Stitch entregadas por el usuario.

## Ejecutar

1. Abrir una terminal en esta carpeta.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.
4. Abrir `http://localhost:3000`.

## Recorridos de demostración

- Sitio público: `/`, `/courses`, `/courses/wheel-throwing`, `/about`, `/contact`
- Acceso: `/login`, `/signup`, `/forgot-password`, `/reset-password`, `/verify-email`
- Alumno: `/student`, `/student/courses`, `/student/course`, `/student/lesson`, `/student/resources`, `/student/profile`
- Administración: `/admin`, `/admin/students`, `/admin/student-progress`, `/admin/courses`, `/admin/course-editor`, `/admin/lesson-editor`, `/admin/enrollments`, `/admin/schedule`, `/admin/resources`, `/admin/messages`, `/admin/content`, `/admin/settings`, `/admin/billing`, `/admin/notifications`

El panel administrativo incluye métricas, acciones rápidas, gestión visual del catálogo, constructor de módulos y clases, configuración de cursos, carga de videos e imágenes, adjuntos descargables, biblioteca de recursos, calendario mensual/semanal/lista y detalle de eventos.

Los formularios, filtros, navegación, progreso, editores, mensajes y descargas incluyen estados de demostración en el navegador. Para producción se debe conectar autenticación, base de datos, almacenamiento de archivos, email, video y cobros a proveedores reales.

La carpeta `stitch-reference` conserva todos los archivos originales del ZIP como referencia visual y documental.
