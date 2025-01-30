/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SkillsSection() {
  // Menyimpan state untuk section yang aktif
  const [activeSection, setActiveSection] = useState("Skills");

  // Data untuk skills
  const skills = [
    { nama: "WordPress", deskripsi: "Skill menggunakan WordPress untuk pengembangan situs web.", progress: 90 },
    { nama: "Figma", deskripsi: "Kemampuan desain menggunakan Figma untuk prototyping.", progress: 85 },
    { nama: "Elementor", deskripsi: "Penguasaan Elementor sebagai plugin desain WordPress.", progress: 95 },
    { nama: "Photoshop", deskripsi: "Kemampuan mengedit gambar dan desain grafis di Photoshop.", progress: 87 },
    { nama: "Illustrator", deskripsi: "Skill desain vektor menggunakan Adobe Illustrator.", progress: 93 },
    { nama: "HTML", deskripsi: "Kemampuan markup HTML untuk pengembangan web.", progress: 80 },
  ];

  // Data untuk daftar section di sidebar
  const sections = ["Skills", "Experience", "Education", "Awards"];

  // Komponen untuk menampilkan skill card
  const SkillCard = ({ skill }) => (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{skill.nama}</h3>
        <span className="text-sm font-medium">{skill.progress}%</span>
      </div>
      <p className="text-sm text-gray-400">{skill.deskripsi}</p>
      <div className="w-full bg-gray-700 h-2 mt-4 rounded-full">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.progress}%` }}></div>
      </div>
    </div>
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Sidebar untuk navigasi */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <div className="flex flex-col space-y-4">
            {sections.map((section, index) => (
              <button key={index} className={`py-2 px-4 rounded-lg text-white text-left ${activeSection === section ? "bg-blue-500" : "bg-gray-800 hover:bg-gray-700"}`} onClick={() => setActiveSection(section)}>
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Konten utama */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-bold text-white mb-6">{activeSection}</h2>

          {activeSection === "Skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          )}

          {activeSection !== "Skills" && (
            <div className="text-gray-400">
              <p>Konten untuk {activeSection} akan ditambahkan di sini.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
