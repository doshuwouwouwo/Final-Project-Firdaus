import { useState } from "react";

const skills = [
  { nama: "WordPress", deskripsi: "Skill menggunakan WordPress untuk pengembangan situs web.", progress: 90 },
  { nama: "Figma", deskripsi: "Kemampuan desain menggunakan Figma untuk prototyping.", progress: 85 },
  { nama: "Elementor", deskripsi: "Penguasaan Elementor sebagai plugin desain WordPress.", progress: 95 },
  { nama: "Photoshop", deskripsi: "Kemampuan mengedit gambar dan desain grafis di Photoshop.", progress: 87 },
  { nama: "Illustrator", deskripsi: "Skill desain vektor menggunakan Adobe Illustrator.", progress: 93 },
  { nama: "HTML", deskripsi: "Kemampuan markup HTML untuk pengembangan web.", progress: 80 },
];

const experiences = [
  { time: "03/2008 – 07/2011", role: "Mobile Apps Designer", company: "In The Global Tech Inc." },
  { time: "04/2012 – 07/2015", role: "UI/UX Designer", company: "In The Creative Tech Inc." },
  { time: "06/2012 – 08/2019", role: "Website Designer", company: "In The Code Tech Inc." },
  { time: "03/2019 – Present", role: "Graphic Designer", company: "In The Moba Tech Inc." },
];

const education = [
  { time: "03/2000 – 07/2002", course: "UI/UX Design Specialization", academy: "Bali Design Academy" },
  { time: "04/2002 – 07/2004", course: "Website Design Specialization", academy: "Bali Code Academy" },
  { time: "06/2004 – 08/2006", course: "Graphic Designer", academy: "Bali College Academy" },
  { time: "03/2006 – 05/2007", course: "Motion Designer", academy: "Bali Motion Academy" },
];

const awards = [
  { year: "2016", title: "01x Developer Award", status: "Winner" },
  { year: "2016", title: "02x Developer Award", status: "Second Place" },
  { year: "2016", title: "03x Developer Award", status: "Winner" },
  { year: "2016", title: "04x Developer Award", status: "Nominee" },
];

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="flex gap-5">
        <div className="flex flex-col gap-3 w-full">
          {["Skills", "Experience", "Education", "Awards"].map((tab) => (
            <button key={tab} className={`p-3 rounded-lg text-left ${activeTab === tab ? "bg-blue-600" : "bg-gray-800"}`} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-5">{activeTab}</h2>
          {activeTab === "Skills" && (
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.nama}>
                  <div className="flex justify-between">
                    <span>{skill.nama}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-400">{skill.deskripsi}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Experience" && (
            <div className="grid gap-4">
              {experiences.map((exp) => (
                <div key={exp.role} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-400">{exp.time}</p>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p>{exp.company}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Education" && (
            <div className="grid gap-4">
              {education.map((edu) => (
                <div key={edu.course} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-gray-400">{edu.time}</p>
                  <h3 className="text-lg font-semibold">{edu.course}</h3>
                  <p>{edu.academy}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Awards" && (
            <div className="grid grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                  <p className="text-gray-400">{award.year}</p>
                  <h3 className="text-lg font-semibold text-center">{award.title}</h3>
                  <p>{award.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
