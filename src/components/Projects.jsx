import ProjectCard from "./ProjectCard";
import useFadeIn from "/src/data/useFadeIn";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "E-commerce UI (TravelApp) - QRIS Payment",
    description: "UI modern untuk pemesanan tiket online dengan pembayaran via QRIS.",
    tech: ["Laravel", "Tailwind", "PostgreSQL", "QRIS Payment"],
    image: "/p3.jpg",
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://ibb.co.com/35GZsP9Q",
  },
  {
    title: "Kasir App - Scan Kamera & Alat Scan",
    description: "Aplikasi kasir dengan fitur scan barcode (via Kamera / Alat Scan), input manual, dan cetak struk. Integrasi dengan Firebase untuk manajemen produk dan transaksi.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "ZXing Barcode Scanner"],
    image: "/p4.jpg",   
    github: "https://github.com/username/kasir-app",
    demo: "https://kasir-app-iota.vercel.app/",  
  },
  {
    title: "IoT Monitoring Dashboard - Penyiraman Otomatis",
    description: "Dashboard untuk ESP32 dengan real-time database, untuk memantau kelembapan tanah secara realtime dan melakukan penyiraman otomatis berbasis ambang batas.",
    tech: ["Supabase", "ESP32", "React", "Telegram"],
    image: "/p1.jpg",
    github: "https://github.com/username/iot-dashboard",
    demo: "https://bayam.vercel.app/",
  },
  {
    title: "Website Portfolio",
    description: "Portfolio modern dengan React + Tailwind.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/p2.jpg",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-577c.vercel.app/",
  },
];


export default function Projects() {
  const ref = useFadeIn(150); // 150ms per item
  
  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <FadeInSection>
        <h2 className="text-center text-2xl font-bold mb-10">Project</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
        </FadeInSection>
      </div>
    </section>
  );
}
