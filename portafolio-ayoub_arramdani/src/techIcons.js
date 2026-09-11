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
  // Los azules de marca de Flutter (02569B), Dart (0175C2) y XML (005FAD) son
  // demasiado oscuros sobre el fondo de la web: se usan los tonos claros de sus
  // logos (y blanco en XML, que no tiene variante clara).
  Flutter: { slug: 'flutter', color: '54C5F8' },
  Dart: { slug: 'dart', color: '00D2B8' },
  Kotlin: { slug: 'kotlin', color: '7F52FF' },
  XML: { slug: 'xml', color: 'ffffff' },
  Supabase: { slug: 'supabase', color: '3FCF8E' },
  Render: { slug: 'render', color: '46E3B7' },
  'Google OAuth': { slug: 'google', color: '4285F4' },
  // Vercel e IntelliJ IDEA son negros en Simple Icons: en blanco para el fondo.
  Vercel: { slug: 'vercel', color: 'ffffff' },
  'IntelliJ IDEA': { slug: 'intellijidea', color: 'ffffff' },
  'Android Studio': { slug: 'androidstudio', color: '3DDC84' },
  // Nota: "SQL Server", "Visual Studio Code" y "C#" no tienen icono en Simple
  // Icons (Microsoft retiró varias marcas), así que se muestran solo con su
  // nombre. Para C# no se reutiliza el icono de .NET: saldrían dos tarjetas
  // seguidas con el mismo logo morado y parecerían duplicadas.
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
