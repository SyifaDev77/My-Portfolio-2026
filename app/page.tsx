import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const programmingSkills = [
    {
      label: "Next.js",
      logoSrc: "/skills/nextjs.svg",
    },
    {
      label: "TypeScript",
      logoSrc: "/skills/typescript.svg",
    },
    {
      label: "React",
      logoSrc: "/skills/react.svg",
    },
    {
      label: "Tailwind CSS",
      logoSrc: "/skills/tailwind.svg",
    },
    { label: "HTML", logoSrc: "/skills/html.svg" },
    { label: "CSS", logoSrc: "/skills/css.svg" },
    { label: "JavaScript", logoSrc: "/skills/javascript.svg" },
    { label: "PHP & MySQL", logoSrc: "/skills/php-mysql.svg" },
    { label: "Laravel", logoSrc: "/skills/laravel.svg" },
    { label: "C++", logoSrc: "/skills/cpp.svg" },
    { label: "C#", logoSrc: "/skills/csharp.svg" },
    { label: "Python", logoSrc: "/skills/python.svg" },
    { label: "GitHub", logoSrc: "/skills/github.svg" },
  ];

  const otherSkills = [
    {
      label: "Blender",
      logoSrc: "/skills/blender.svg",
    },
    {
      label: "Canva",
      logoSrc: "/skills/canva.svg",
    },
    {
      label: "Affinity",
      logoSrc: "/skills/affinity.svg",
    },
    {
      label: "Vuforia AR",
      logoSrc: "/skills/vuforia-ar.svg",
    },
    {
      label: "Unity 3D/2D",
      logoSrc: "/skills/unity.svg",
    },
    {
      label: "Adobe Illustrator",
      logoSrc: "/skills/illustrator.svg",
    },
    {
      label: "Figma",
      logoSrc: "/skills/figma.svg",
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
      title: "Foundation of User Experience (UX) Design",
      description: "Issued by Google Coursera",
      image: "/certificates/google-ux.jpeg",
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


  const visibleProgrammingSkills = programmingSkills.slice(0, 4);
  const hiddenProgrammingSkills = programmingSkills.slice(4);
  const visibleOtherSkills = otherSkills.slice(0, 4);
  const hiddenOtherSkills = otherSkills.slice(4);

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#22d3ee2e,transparent_30%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,0.1),transparent_28%)]" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex justify-center">
          <div className="w-full space-y-6 text-center">
            <div className="flex justify-start">
              <p className="hero-eyebrow">
                Portfolio of Asy Syifa&apos;
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h1 className="hero-title">
                Computer Science <span className="hero-title-break">Fresh Graduate</span>
              </h1>
              <p className="hero-copy">
                Multimedia Computing
              </p>
            </div>

            <div className="hero-actions">
  <Link
    href="/Project"
    className="hero-button-secondary"
  >
    View My Projects
  </Link>
</div>
          </div>

          {/* <div className="grid gap-4 rounded-[2rem] border border-[var(--accent)]/20 bg-[var(--surface)]/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.32)] backdrop-blur">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">Focus</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">Frontend Development</p>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted-foreground)]">Strengths</p>
              <p className="mt-2 text-base leading-7 text-[var(--foreground)]">
                Visual hierarchy, responsive layouts, and clean component structure.
              </p>
            </div>
            
            <div className="h-px bg-white/10" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[var(--muted-foreground)]">Experience</p>
                <p className="mt-1 text-lg font-semibold text-[var(--foreground)]">2+ Years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[var(--muted-foreground)]">Projects</p>
                <p className="mt-1 text-lg font-semibold text-[var(--foreground)]">Portfolio Work</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="section-card section-card--pad-lg grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-[var(--accent)]/25 bg-[var(--background)]/40 shadow-[0_18px_50px_rgba(15,23,42,0.28)]">
              <Image
                src="/profile.jpg"
                alt="Portrait of Asy Syifa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 320px"
                priority
              />
            </div>
          </div>
          <div>
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">
              &quot;Every great application begins with a spark of curiosity.&quot;
            </h2>
            <p className="section-copy">
              I&apos;m passionate about full-stack development, game development, and UI/UX design. I enjoy transforming ideas into interactive digital experiences and believe there&apos;s always something new to discover, build, and improve.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="space-y-6">
          <div className="max-w-2xl">
            <p className="section-kicker">Skill Section</p>
            {/* <h2 className="section-title">Tools and strengths I use regularly</h2> */}
          </div>
          <div className="skills-grid lg:grid-cols-2">
            <div className="skills-card skills-card--programming">
              <p className="skills-card-title">Programming Skills</p>
              <div className="skills-tile-grid">
                {visibleProgrammingSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="skill-tile skill-tile--programming"
                  >
                    <div className="skill-icon skill-icon--programming">
                      <Image
                        src={skill.logoSrc}
                        alt={`${skill.label} logo`}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
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
                      <div
                        key={skill.label}
                        className="skill-tile skill-tile--programming"
                      >
                        <div className="skill-icon skill-icon--programming">
                          <Image
                            src={skill.logoSrc}
                            alt={`${skill.label} logo`}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
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
                  <div
                    key={skill.label}
                    className="skill-tile skill-tile--other"
                  >
                    <div className="skill-icon skill-icon--other">
                      <Image
                        src={skill.logoSrc}
                        alt={`${skill.label} logo`}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
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
                      <div
                        key={skill.label}
                        className="skill-tile skill-tile--other"
                      >
                        <div className="skill-icon skill-icon--other">
                          <Image
                            src={skill.logoSrc}
                            alt={`${skill.label} logo`}
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain"
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
  <div className="space-y-6">
    <div className="max-w-2xl">
      <p className="section-kicker">Experiences</p>
      <h2 className="section-title">Recent work and roles</h2>
    </div>

    <div className="timeline">
      {experiences.map((item, index) => (
        <article
          key={`${item.role}-${item.period}`}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-content section-card section-card--experience">
            <span className="timeline-year">{item.period}</span>

            <h3>{item.role}</h3>
            <h4>{item.place}</h4>

            <p>{item.description}</p>

            {/* Skills / Tools Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--accent)] px-3 py-1 text-sm text-[var(--foreground)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="timeline-marker">
            <span className="timeline-dot"></span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="education" className="section-shell">
  <div>
    <p className="section-kicker">Education</p>
    <h2 className="section-title">Academic Journey</h2>

    <div className="education-grid">
      {education.map((item) => (
        <div
          key={item.school}
          className="education-card"
        >
          <div className="education-icon">
            🎓
          </div>

          <h3>{item.school}</h3>

          <p className="education-period">
            {item.period}
          </p>

          <p className="education-detail">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="certificate" className="section-shell">
  <div className="space-y-6">
    <div className="max-w-2xl">
      <p className="section-kicker">Certificate Section</p>
      <h2 className="section-title">Certificates and Training</h2>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate) => (
        <div
          key={certificate.title}
          className="section-card overflow-hidden"
        >
          {/* Certificate Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Certificate Details */}
          <div className="p-4">
            <h3 className="font-semibold text-[var(--foreground)]">
              {certificate.title}
            </h3>

            <p className="section-card-text mt-2">
              {certificate.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="section-shell pb-20">
        <div className="section-card section-card--contact sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="section-kicker">Contact Section</p>
              <h2 className="section-title">Let&apos;s build something memorable.</h2>
              <p className="section-copy max-w-2xl">
               
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:asy.syifa.hamran77@gmail.com"
                className="section-button-primary"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/asy-syifa-hamran-790489346"
                target="_blank"
                rel="noopener noreferrer"
                className="section-button-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
