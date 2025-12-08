import useFadeIn from "/src/data/useFadeIn";
import FadeInSection from "./FadeInSection";
import SkillCard from "./SkillCard";

export default function About() {
  const ref = useFadeIn(10);

  const skills = [
    {
      category: "Bahasa Pemrograman, Framework & Tools",
      items: [
        "JavaScript",
        "PHP",
        "C++",
        "Python",
        "React",
        "Node.js",
        "Next.js",
        "Laravel",
        "CodeIgniter 3",
        "TailwindCSS",
      ],
    },
    { category: "Database", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase"] },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100"
      id="about"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* JUDUL */}
        <FadeInSection>
          <h2 className="text-2xl md:text-2xl font-bold text-center mb-14 ">
            Tentang Saya
          </h2>
        </FadeInSection>

        {/* GRID UTAMA */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* FOTO */}
          <FadeInSection>
            <div className="flex justify-center md:justify-start relative">

              {/* Gradient Ring Glow lebih tegas */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-80 h-[24rem] md:w-[22rem] md:h-[30rem] 
                                rounded-3xl bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400
                                opacity-50 blur-2xl animate-[pulse_5s_ease-in-out_infinite]">
                </div>
                <div className="absolute inset-0 w-full h-full 
                                rounded-3xl border-2 border-white/20">
                </div>
              </div>

              {/* Foto */}
              <div className="transition-transform duration-300 hover:scale-[1.03] relative z-10">
                <img
                  src="/profile2.jpg"
                  alt="Profile"
                  className="w-72 h-[22rem] md:w-[22rem] md:h-[26rem] 
                            rounded-3xl object-cover shadow-xl shadow-gray-300/60
                            border border-gray-200"
                />
              </div>

            </div>
          </FadeInSection>


          {/* TEXT */}
          <FadeInSection>
            <div className="text-justify space-y-6 text-gray-700 text-[15.8px] leading-relaxed">

              <p className="indent-10">
                Saya <span className="font-semibold text-gray-900">Hamzah Akbar Pratama</span>, 
                lulusan dari Universitas Duta Bangsa pada program studi Teknik Informatika. 
                Selama kuliah, saya fokus pada Pengembangan Web Modern, Internet of Things (IoT), serta 
                Perancangan dan Manajemen Basis Data. Saya terus meningkatkan kemampuan melalui 
                berbagai proyek dan eksplorasi teknologi terbaru sebagai persiapan memasuki dunia profesional.
              </p>

              <p className="indent-10">
                Saya berkomitmen untuk membangun solusi teknologi yang efisien, interaktif, 
                serta memberikan dampak positif baik untuk kebutuhan personal maupun profesional. 
                Berikut adalah <span className="font-semibold text-gray-900 underline">sertifikat dan keahlian</span> yang saya miliki sebagai pendukung kompetensi saya.
              </p>


              {/* SERTIFIKAT */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <a
                  href="/Sertif_Hamzah_JWP.pdf"
                  download
                  className="flex items-center justify-center gap-2 text-sm px-4 py-3
                  bg-white/30 backdrop-blur-md border border-gray-200
                  rounded-xl shadow hover:shadow-lg hover:-translate-y-1 
                  transition-all duration-200"
                  >
                  <i className="bi bi-award-fill text-blue-600"></i>
                  Sertifikat Junior Web Programmer
                </a>

                <a
                  href="/Sertif_Hamzah_TOEFL.pdf"
                  download
                  className="flex items-center justify-center gap-2 text-sm px-4 py-3
                             bg-white/30 backdrop-blur-md border border-gray-200
                             rounded-xl shadow hover:shadow-lg hover:-translate-y-1 
                             transition-all duration-200"
                >
                  <i className="bi bi-journal-bookmark-fill text-blue-600"></i>
                  Sertifikat TOEFL (Score 480)
                </a>

              </div>

              {/* SKILL */}
              <div className="mt-10">
                {skills.map((skillGroup, idx) => (
                  <div key={idx} className="mb-6">

                    <h4 className="font-semibold text-gray-800 text-center mb-3 text-[16px]">
                      {skillGroup.category}
                    </h4>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {skillGroup.items.map((item, i) => (
                        <div className="transition-transform hover:scale-[1.05]">
                          <SkillCard key={i} name={item} small />
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
