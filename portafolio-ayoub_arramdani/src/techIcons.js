/** Iconos de marca (slug de simpleicons.org) y color de cada tecnología. */
export const ICONS = {
  React: { slug: 'react', color: '61DAFB' },
  'React Native': { slug: 'react', color: '61DAFB' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  Express: { slug: 'express', color: 'ffffff' },
  MongoDB: { slug: 'mongodb', color: '47A248' },
  JWT: { slug: 'jsonwebtokens', color: 'ffffff' },
  PostgreSQL: { slug: 'postgresql', color: '4169E1' },
  Vite: { slug: 'vite', color: '646CFF' },
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  // Simple Icons renombró "css3" a "css"; el slug antiguo devuelve 404.
  CSS: { slug: 'css', color: '1572B6' },
  HTML: { slug: 'html5', color: 'E34F26' },
  Git: { slug: 'git', color: 'F05032' },
  GitLab: { slug: 'gitlab', color: 'FC6D26' },
  MySQL: { slug: 'mysql', color: '4479A1' },
  Prisma: { slug: 'prisma', color: 'ffffff' },
  Java: { slug: 'openjdk', color: 'ffffff' },
  '.NET': { slug: 'dotnet', color: '512BD4' },
  Cloudinary: { slug: 'cloudinary', color: '3448C5' },
  // El icono de Expo es casi negro: se fuerza a blanco para el fondo oscuro.
  'Expo Go': { slug: 'expo', color: 'ffffff' },
  Supabase: { slug: 'supabase', color: '3FCF8E' },
  Render: { slug: 'render', color: '46E3B7' },
  'Google OAuth': { slug: 'google', color: '4285F4' },
  // Nota: "SQL Server" no tiene icono en Simple Icons (Microsoft retiró varias
  // marcas), así que se muestra solo con su nombre.
}

/**
 * Color de marca de una tecnología como triplete "r, g, b", listo para usarse
 * dentro de rgba() en CSS. Devuelve null si la tecnología no está en el mapa.
 */
export function techColorRgb(name) {
  const hex = ICONS[name]?.color
  if (!hex) return null

  const value = parseInt(hex, 16)
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`
}
