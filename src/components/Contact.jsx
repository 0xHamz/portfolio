export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "hamzahakbar17@gmail.com",
      link: "mailto:hamzahakbar17@gmail.com",
      icon: "bi-envelope-fill",
    },
    {
      label: "Instagram",
      value: "@akbarpratamaaaaa",
      link: "https://instagram.com/akbarpratamaaaaa",
      icon: "bi-instagram",
    },
    {
      label: "GitHub",
      value: "github.com/0xHamz",
      link: "https://github.com/0xHamz",
      icon: "bi-github",
    },
  ];

  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Kontak</h2>
        <p className="text-gray-600 mb-10 text-sm sm:text-base">
          Terhubung dengan saya melalui platform berikut:
        </p>

        {/* Responsive grid */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <i className={`text-2xl sm:text-3xl ${item.icon}`}></i>
              <span className="text-base sm:text-lg font-medium">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
