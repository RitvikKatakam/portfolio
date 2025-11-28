import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skills, experiences } from "../constants";

const About = () => {
  useGSAP(() => {
    skills.forEach((_, index) => {
      gsap.to(`.skill-card-${index}`, {
        y: -12 - (index % 3) * 4,
        duration: 2.5 + (index % 4) * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  });

  return (
  <section id="about" className="relative overflow-hidden bg-black text-white-100">
    <div className="about-layout mb-20 pt-5 flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 md:gap-20 px-5 md:px-20 py-16">
      {/* LEFT: About Content */}
      <div className="max-w-xl flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-lg md:text-xl text-white-50 leading-relaxed">
AI enthusiast and aspiring IT professional from NITK, skilled in Python, Java, and AI/ML. Experienced as a Data Analyst Intern at TCS. Passionate about building data-driven solutions and leveraging technology to solve real-world problems.
        </p>
      </div>
      {/* RIGHT: 3D Visual or Image Placeholder */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/profile2.jpg"
          alt="About Me"
          className="w-100 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Skills Section */}
      <div className="skills-section px-5 md:px-20 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">My Skills</h2>
      <div className="marquee px-0">
        <div className="marquee-box">
          <div className="flex gap-4 items-center">
            {skills.map((skill, index) => (
              <div
                key={`a-${skill.name}-${index}`}
                className={`marquee-item skill-card-${index} flex flex-col items-center justify-center p-4 rounded-lg bg-black-200 border border-black-50 w-24 h-24 md:w-28 md:h-28 hover:border-white-50 transition-all duration-300`}
                title={skill.name}
              >
                {skill.imgPath ? (
                  <img src={skill.imgPath} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12" />
                ) : (
                  <span className="text-3xl md:text-4xl">{skill.icon}</span>
                )}
                <span className="text-xs md:text-sm text-white-50 mt-2 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {skills.map((skill, index) => (
              <div
                key={`b-${skill.name}-${index}`}
                className={`marquee-item skill-card-${index} flex flex-col items-center justify-center p-4 rounded-lg bg-black-200 border border-black-50 w-24 h-24 md:w-28 md:h-28 hover:border-white-50 transition-all duration-300`}
                title={skill.name}
              >
                {skill.imgPath ? (
                  <img src={skill.imgPath} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12" />
                ) : (
                  <span className="text-3xl md:text-4xl">{skill.icon}</span>
                )}
                <span className="text-xs md:text-sm text-white-50 mt-2 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Experience Section */}
      <div className="experience-section px-5 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white text-center">Experience</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-4">
          {/* Left: NITK */}
          <div className="flex-1 p-4 rounded-lg bg-black-200 border border-black-50 flex flex-col justify-center">
            {(() => {
              const leftExp = experiences.find((e) => e.company.toLowerCase().includes("nitk")) || experiences[1] || experiences[0];
              return (
                <>
                  <div className="font-semibold text-lg">{leftExp.role} <span className="text-white-50">— {leftExp.company}</span></div>
                  <div className="text-sm text-white-50">{leftExp.duration}</div>
                  <p className="mt-2 text-white-50 text-sm">{leftExp.desc}</p>
                </>
              );
            })()}
          </div>

          {/* Divider: decorative segmented line with dots */}
          <div className="hidden md:flex items-center">
            <div className="exp-divider mx-4">
              <svg viewBox="0 0 100 300" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path className="exp-path" d="M50 10 L50 290" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle className="exp-dot" cx="50" cy="20" r="2.5" />
                  <circle className="exp-dot" cx="50" cy="110" r="2.5" />
                  <circle className="exp-dot" cx="50" cy="200" r="2.5" />
                  <circle className="exp-dot" cx="50" cy="280" r="2.5" />
                </svg>
            </div>
          </div>

          {/* Right: TCS */}
          <div className="flex-1 p-4 rounded-lg bg-black-200 border border-black-50 flex flex-col justify-center">
            {(() => {
              const rightExp = experiences.find((e) => e.company.toLowerCase().includes("tcs")) || experiences[0] || experiences[1];
              return (
                <>
                  <div className="font-semibold text-lg">{rightExp.role} <span className="text-white-50">— {rightExp.company}</span></div>
                  <div className="text-sm text-white-50">{rightExp.duration}</div>
                  <p className="mt-2 text-white-50 text-sm">{rightExp.desc}</p>
                </>
              );
            })()}
          </div>
        </div>
      </div>
  </section>
  );
};

export default About;