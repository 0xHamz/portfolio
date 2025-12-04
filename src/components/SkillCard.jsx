export default function SkillCard({ name, small }) {
  // Mapping skill → icon Bootstrap
  const icons = {
    "JavaScript": "bi-filetype-js",
    "PHP": "bi-filetype-php",
    "C++": "bi-laptop",
    "Python": "bi-filetype-py",
    "React": "bi-filetype-jsx",
    "Node.js": "bi-node-plus",
    "Next.js": "bi-laptop",
    "Laravel": "bi-laptop",
    "CodeIgniter 3": "bi-code",
    "TailwindCSS": "bi-braces",
    "MySQL": "bi-filetype-sql",
    "PostgreSQL": "bi-server",
    "SQLite": "bi-server",
    "Supabase": "bi-cloud"
  };

  // Default icon jika skill tidak ada di mapping
  const iconClass = icons[name] || "bi-laptop";

  return (
    <div
      className={`
        flex items-center justify-center gap-2
        py-1 px-3
        ${small ? "text-[11px]" : "text-[12px]"}
        text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm
        hover:shadow-md hover:bg-gray-50 transition-transform hover:scale-105
      `}
    >
      <i className={`bi ${iconClass} text-[14px]`}></i>
      <span>{name}</span>
    </div>
  );
}
