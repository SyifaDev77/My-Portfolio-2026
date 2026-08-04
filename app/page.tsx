"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const programmingSkills = [
    {label: "Next.js",logoSrc: "/skills/nextjs.png",},
    {label: "Tailwind CSS",logoSrc: "/skills/tailwind.png",},
    { label: "HTML", logoSrc: "/skills/html.png" },
    { label: "CSS", logoSrc: "/skills/css.png" },
    { label: "JavaScript", logoSrc: "/skills/java.png" },
    { label: "PHP & MySQL", logoSrc: "/skills/phpmysql.png" },
    { label: "Laravel", logoSrc: "/skills/larvel.png" },
    { label: "C++", logoSrc: "/skills/cpp.png" },
    { label: "C#", logoSrc: "/skills/csharp.png" },
    { label: "Python", logoSrc: "/skills/python.png" },
    { label: "GitHub", logoSrc: "/skills/github.png" },
  ];

  const otherSkills = [
    {label: "Blender",logoSrc: "/skills/blender.png",},
    {
      label: "Canva",
      logoSrc: "/skills/canva.png",
    },
    {
      label: "Affinity",
      logoSrc: "/skills/affinity.png",
    },
    {
      label: "Vuforia AR",
      logoSrc: "/skills/vuforia.png",
    },
    {
      label: "Unity 3D/2D",
      logoSrc: "/skills/unity.png",
    },
    {
      label: "Adobe Illustrator",
      logoSrc: "/skills/illustrator.png",
    },
    {
      label: "Figma",
      logoSrc: "/skills/figma.png",
    },
  ];

  const experiences = [
    {
      role: "Project Assistant Data Management Masterlist",
      place: "KM VET PHARM ,Selangor",
      period: "22 June - 21 July 2026",
      description:
        "Successfully completed and submitted the masterlist project ahead of the scheduled deadline while ensuring data accuracy and completeness.",
                skills: [
      "Data Management",
      "Documentation",
      "Microsoft Excel",
      "Project Coordination"
    ]
    },
    {
      role: "Graphic Designer",
      place: "Pustaka Iqra ,Kelantan",
      period: "December 2025 - March 2026",
      description:
        "Design and preparation of high-impact marketing materials including banners, stickers, and labels for various events and campaigns, ensuring brand consistency and visual appeal.",
        skills: [
      "Adobe Illustrator",
      "Canva",
      "Mutoh Printer",
    ]
    },
    {
      role: "UI/UX Designer / System Developer",
      place: "UMK,Kelantan",
      period: "September - December 2025",
      description:
         "Designed system architecture and UI/UX system using Laravel for GERIC Integrated Management System",
        skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "Joomla",
      "Adobe Illustrator",
      "UI Design"
    ]   
    },
    {
      role: "Website Developer",
      place: "HEP Department,UiTM Kelantan",
      period: "September 2022 - February 2023",
      description:
         "Developed a web-based E-Merit System for managing student merit records"   ,
          skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Full Stack Development",
    ]   
    },
    

  ];

  const education = [

    {
      school: "Bachelor of Computer Science (Hons) Multimedia Computing",
      detail: "UiTM Cawangan Shah Alam, Malaysia",
      period: "2023 - 2025",
    },

    {
      school: "Diploma in Computer Science",
      detail: "UiTM Cawangan Kelantan, Malaysia",
      period: "2021 - 2023",
    },
  ];

const certificates = [

  {
      title: "Notification of Copyright Registration",
      description: "Issued by Copyright Act 1987 [Act 332]",
      image: "/certificates/cp-gims.png",
    },
    {
      title: "Foundation of User Experience (UX) Design",
      description: "Issued by Google Coursera",
      image: "/certificates/google-ux(1).jpeg",
    },
    {
      title: "Fundamentals of sustainable and Technology",
      description: "Issued by IBMSkillBuild",
      image: "/certificates/fund.png",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      description: "Issued by IBMSkillBuild",
      image: "/certificates/ai.png",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const GITHUB_URL = "https://github.com/SyifaDev77/SyifaDev77";


  const visibleProgrammingSkills = programmingSkills.slice(0, 5);
  const hiddenProgrammingSkills = programmingSkills.slice(5);
  const visibleOtherSkills = otherSkills.slice(0, 5);
  const hiddenOtherSkills = otherSkills.slice(5);

  return (
    <main className="site-shell">
      <div className="site-ornament site-ornament--mist" />
      <div className="site-ornament site-ornament--moon" />
      <div className="site-ornament site-ornament--snitch" />
      <div className="site-ornament site-ornament--stars" />

      <section className="section-shell hero-shell">
        <div className="hero-card">
          <div className="hero-copy-block hero-copy-block--center">
            <p className="hero-eyebrow">Portfolio of Asy Syifa&apos;</p>

            <h1 className="hero-title">
              Computer Science <span className="hero-title__line">Fresh Graduate</span>
            </h1>

            <p className="hero-copy-text">
              Multimedia computing, enchanted interfaces, and playful digital craft.
            </p>

            <div className="hero-chip-row" aria-label="Portfolio highlights">
              <span className="magic-chip">Frontend charm</span>
              <span className="magic-chip">UI/UX spellwork</span>
              <span className="magic-chip">Game-ready thinking</span>
            </div>

            <div className="hero-actions">
              <Link href="/Project" className="magic-button magic-button--primary">
                View My Projects
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="magic-button magic-button--secondary"
                aria-label="GitHub profile"
              >
                View GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="content-card content-card--split">
          <div className="content-card__media">
            <div className="portrait-frame portrait-frame--compact">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Asy Syifa"
                fill
                className="portrait-image"
                sizes="(max-width: 1024px) 80vw, 320px"
                priority
              />
            </div>
          </div>

          <div className="content-card__body">
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">
              &quot;Every great interface begins with a spark of curiosity.&quot;
            </h2>
            <p className="section-copy">
              I&apos;m passionate about full-stack development, game development, and UI/UX design. I enjoy transforming ideas into interactive digital experiences and believe there&apos;s always something new to discover, build, and improve.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="section-stack">
          <div className="section-heading">
            <p className="section-kicker">Skill Section</p>
            <h2 className="section-title">Tools and charms I use regularly</h2>
          </div>

          <div className="skills-grid">
            <div className="skills-card skills-card--programming">
              <p className="skills-card-title">Programming Skills</p>
              <div className="skills-tile-grid">
                {visibleProgrammingSkills.map((skill) => (
                  <div key={skill.label} className="skill-tile skill-tile--programming">
                    <div className="skill-icon skill-icon--programming">
                      <Image
                        src={skill.logoSrc}
                        alt={`${skill.label} logo`}
                        width={40}
                        height={40}
                        className="skill-icon__image"
                      />
                    </div>
                    <p className="skill-label">{skill.label}</p>
                  </div>
                ))}
              </div>

              {hiddenProgrammingSkills.length > 0 ? (
                <details className="skills-more">
                  <summary className="skills-more-trigger">
                    <span className="skills-more-label skills-more-label--more">See more</span>
                    <span className="skills-more-label skills-more-label--less">See less</span>
                  </summary>
                  <div className="skills-tile-grid">
                    {hiddenProgrammingSkills.map((skill) => (
                      <div key={skill.label} className="skill-tile skill-tile--programming">
                        <div className="skill-icon skill-icon--programming">
                          <Image
                            src={skill.logoSrc}
                            alt={`${skill.label} logo`}
                            width={40}
                            height={40}
                            className="skill-icon__image"
                          />
                        </div>
                        <p className="skill-label">{skill.label}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ) : null}
            </div>

            <div className="skills-card skills-card--other">
              <p className="skills-card-title">Multimedia and Design Tools</p>
              <div className="skills-tile-grid">
                {visibleOtherSkills.map((skill) => (
                  <div key={skill.label} className="skill-tile skill-tile--other">
                    <div className="skill-icon skill-icon--other">
                      <Image
                        src={skill.logoSrc}
                        alt={`${skill.label} logo`}
                        width={40}
                        height={40}
                        className="skill-icon__image"
                      />
                    </div>
                    <p className="skill-label">{skill.label}</p>
                  </div>
                ))}
              </div>

              {hiddenOtherSkills.length > 0 ? (
                <details className="skills-more">
                  <summary className="skills-more-trigger">
                    <span className="skills-more-label skills-more-label--more">See more</span>
                    <span className="skills-more-label skills-more-label--less">See less</span>
                  </summary>
                  <div className="skills-tile-grid">
                    {hiddenOtherSkills.map((skill) => (
                      <div key={skill.label} className="skill-tile skill-tile--other">
                        <div className="skill-icon skill-icon--other">
                          <Image
                            src={skill.logoSrc}
                            alt={`${skill.label} logo`}
                            width={40}
                            height={40}
                            className="skill-icon__image"
                          />
                        </div>
                        <p className="skill-label">{skill.label}</p>
                      </div>
                    ))}
                  </div>
                </details>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-stack">
          <div className="section-heading">
            <p className="section-kicker">Experiences</p>
            <h2 className="section-title">Recent work and roles</h2>
          </div>

          <div className="timeline">
            {experiences.map((item, index) => (
              <article
                key={`${item.role}-${item.period}`}
                className={`timeline-item ${index % 2 === 0 ? "timeline-item--left" : "timeline-item--right"}`}
              >
                <div className="timeline-card content-card">
                  <span className="timeline-year">{item.period}</span>
                  <h3 className="timeline-title">{item.role}</h3>
                  <h4 className="timeline-subtitle">{item.place}</h4>
                  <p className="timeline-copy">{item.description}</p>

                  <div className="tag-row">
                    {item.skills?.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="timeline-marker">
                  <span className="timeline-marker__core" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-shell">
        <div className="section-stack">
          <div className="section-heading">
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Academic Journey</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article key={item.school} className="education-card">
                <div className="education-icon">🎓</div>
                <h3 className="education-title">{item.school}</h3>
                <p className="education-period">{item.period}</p>
                <p className="education-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certificate" className="section-shell">
        <div className="section-stack">
          <div className="section-heading">
            <p className="section-kicker">Certificate Section</p>
            <h2 className="section-title">Certificates and Training</h2>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="certificate-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedImage(certificate.image)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedImage(certificate.image);
                }}
              >
                <div className="certificate-media">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                  />
                </div>

                <div className="certificate-body">
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-copy">{certificate.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          className="certificate-modal"
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.7)",
            zIndex: 60,
            padding: "2rem",
          }}
        >
          <img
            src={selectedImage}
            alt="Full certificate"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
              borderRadius: "6px",
            }}
          />
        </div>
      ) : null}

      <section id="contact" className="section-shell section-shell--end">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-kicker">Contact Section</p>
            <h2 className="section-title">Let&apos;s build something memorable.</h2>
            <p className="section-copy">
              If you want a portfolio, interface, or system with more personality, I&apos;m ready to craft it.
            </p>
          </div>

          <div className="contact-actions">
            <a href="mailto:asy.syifa.hamran77@gmail.com" className="magic-button magic-button--primary">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/asy-syifa-hamran-790489346"
              target="_blank"
              rel="noopener noreferrer"
              className="magic-button magic-button--secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
