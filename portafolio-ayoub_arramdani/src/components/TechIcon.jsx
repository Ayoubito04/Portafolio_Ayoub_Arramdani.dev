const ICONS = {
  React: { slug: 'react', color: '61DAFB' },
  'React Native': { slug: 'react', color: '61DAFB' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  Express: { slug: 'express', color: 'ffffff' },
  MongoDB: { slug: 'mongodb', color: '47A248' },
  JWT: { slug: 'jsonwebtokens', color: 'ffffff' },
  PostgreSQL: { slug: 'postgresql', color: '4169E1' },
  Vite: { slug: 'vite', color: '646CFF' },
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  CSS: { slug: 'css3', color: '1572B6' },
  HTML: { slug: 'html5', color: 'E34F26' },
  Git: { slug: 'git', color: 'F05032' },
  GitLab: { slug: 'gitlab', color: 'FC6D26' },
  MySQL: { slug: 'mysql', color: '4479A1' },
  Prisma: { slug: 'prisma', color: 'ffffff' },
  Java: { slug: 'openjdk', color: 'ffffff' },
  '.NET': { slug: 'dotnet', color: '512BD4' },
  Cloudinary: { slug: 'cloudinary', color: '3448C5' },
  'SQL Server': { slug: 'microsoftsqlserver', color: 'CC2927' },
}

function TechIcon({ name, className }) {
  const icon = ICONS[name]
  if (!icon) return name

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
      alt={name}
      title={name}
      loading="lazy"
      className={className}
    />
  )
}

export default TechIcon
