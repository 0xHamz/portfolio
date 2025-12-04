export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 px-2 py-1 rounded-md text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
