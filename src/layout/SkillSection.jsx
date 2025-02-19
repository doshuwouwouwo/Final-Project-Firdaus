import { useState, useEffect } from "react";

const skillsData = [
  { nama: "WordPress", progress: 90, deskripsi: "Pengalaman dalam pengelolaan website berbasis WordPress." },
  { nama: "Figma", progress: 85, deskripsi: "Keahlian dalam desain UI/UX menggunakan Figma." },
  { nama: "Elementor", progress: 95, deskripsi: "Mahir dalam pembuatan website dengan Elementor." },
  { nama: "Photoshop", progress: 87, deskripsi: "Penggunaan Photoshop untuk desain grafis." },
  { nama: "Ilustrator", progress: 93, deskripsi: "Mendesain vektor dan ilustrasi profesional." },
  { nama: "HTML", progress: 80, deskripsi: "Kemampuan coding HTML untuk pembuatan website." },
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
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-8">
      <div className="container mx-auto flex gap-8">
        {/* Sidebar Navigation */}
        <div className="w-1/4">
          <div className="flex flex-col space-y-4">
            {["Skills", "Experience", "Education", "Awards"].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-6 text-lg font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-3/4">
          <h2 className="text-4xl font-bold mb-6">{activeTab}</h2>

          {/* Skills Tab */}
          {activeTab === "Skills" && (
            <div className="grid grid-cols-2 gap-6">
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg relative overflow-hidden">
                  <h3 className="text-xl font-semibold">{skill.nama}</h3>
                  <p className="text-gray-400 text-sm mt-2">{skill.deskripsi}</p>

                  {/* Percentage Badge */}
                  <div className="absolute top-4 right-4 bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {skill.progress}%
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-blue-500 transition-all duration-1000 ${
                        animated ? "w-full" : "w-0"
                      }`}
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
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

          {/* Education Tab */}
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

          {/* Awards Tab */}
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
