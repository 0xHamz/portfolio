import { useState, useEffect } from "react";

export default function Hero() {
  const texts = [
    "Hamzah Akbar Pratama",
    "Frontend Developer",
    "Backend Developer"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentText.substring(0, displayedText.length - 1)
          : currentText.substring(0, displayedText.length + 1)
      );

      if (!isDeleting && displayedText === currentText) {
        // selesai mengetik, tunggu sebentar lalu hapus
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        // selesai menghapus, lanjut ke teks berikutnya
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, texts]);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 px-6 md:px-20 bg-gradient-to-r from-white via-gray-100 to-white relative ">
    {/* Teks kiri */}
    <div className="md:w-1/2 text-center md:text-left space-y-4 z-10">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-black">I’m </span>
        <span className="text-yellow-500">{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </h1>

      <p className="text-gray-600 max-w-md">
        Saya membangun aplikasi web modern dengan UI/UX yang bersih, responsif, dan elegan.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={scrollToProjects}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition text-center"
        >
          Lihat Project
        </button>
        <a
          href="/Hamzah-CV.pdf"
          download
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-center"
        >
          Download CV
        </a>
      </div>
      {/* SOCIAL ICONS */}
      <div className="flex justify-center md:justify-start gap-5 mt-5 text-gray-700 text-2xl">
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-yellow-600 transition"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="mailto:hamzahakbar17@gmail.com"
          className="hover:text-yellow-600 transition"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>

        <a
          href="https://instagram.com/akbarpratamaaaaa"
          target="_blank"
          className="hover:text-yellow-600 transition"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          className="hover:text-yellow-600 transition"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

    </div>

    {/* Foto kanan */}
    <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 rounded-full bg-yellow-100 flex items-center justify-center relative">
        <img
          src="/profile2.jpg"
          alt="Hamzah Akbar Pratama"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    
  </section>


  );
}
