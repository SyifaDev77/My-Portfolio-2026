import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    slug: "math-bingo",
    title: "Math Bingo Game",

    description:
      "Math Bingo Game is a web-based educational application that helps students improve their mathematics skills through a fun and interactive bingo-style gameplay. The system combines learning with gamification by allowing players to answer math questions, earn scores, and compete for the fastest completion time.The game is available to play online at https://mathbingo.gamer.gd.",

      tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL"
  ],

    gallery: [
      "/projects/mathbingo/mathbingo1.png",
      "/projects/mathbingo/mathbingo2.png",
      "/projects/mathbingo/mathbingo3.png",
    ],

    
     features: [
    "Interactive bingo-style mathematics gameplay",
    "Randomized math questions",
    "Real-time score and time tracking",
    "Leaderboard system",
    "Responsive user interface",
    "Player registration and login"
  ],

    role: "Full Stack Developer",
    year: "2025",
  },

    {
    slug: "arvolcano",
    title: "ARVolcano",
    description:
      "ARVolcano is an Augmented Reality mobile learning application developed using Unity and Vuforia. The application allows users to explore volcanic eruptions through interactive 3D visualization and marker-based AR technology. It was created as my Final Year Project to provide a more engaging approach to learning geological concepts compared to traditional textbook-based methods.",

    tech: [
      "Unity",
      "Vuforia",
      "C#",
      "AR",
      "3D Visualization",
    ],

    gallery: [
      "/projects/arvolcano/arvolcano1.jpg",
      "/projects/arvolcano/arvolcano2.png",
      "/projects/arvolcano/arvolcano3.jpg",
    ],


    features: [
      "Interactive 3D volcano visualization",
      "Marker-based AR experience",
      "Scenario-based learning",
      "Interactive quiz system"
    ],

    role: "Final Year Project",
    year: "2025",
  },


  {
    slug: "gims",
    title: "GIMS",

    description:
      "GERIC Integrated Management System (GIMS) is a web-based management platform developed to streamline administrative workflows at the Global Entrepreneurship Research and Innovation Centre (GERIC), Universiti Malaysia Kelantan. The system centralizes document management, reporting, and operational processes to improve efficiency and accessibility.",

    tech: [
    "Laravel",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
  ],

    gallery: [
      "/projects/gims/gims1.png",
      "/projects/gims/gims2.png",
      "/projects/gims/gims3.png",
    ],

     features: [
    "Centralized document management",
    "Reporting and administrative modules",
    "Role-based user access",
    "Responsive dashboard interface",
    "Secure data management"
  ],

    role: "UI/UX Designer Internship",
    year: "2026",
  },

];


export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;


  const project = projects.find(
    (item) => item.slug === slug
  );


  if (!project) {
    notFound();
  }


  return (
    <main className="project-shell">
      <div className="site-ornament site-ornament--mist" />
      <div className="site-ornament site-ornament--moon" />
      <div className="site-ornament site-ornament--snitch" />
      <div className="site-ornament site-ornament--stars" />

      <section className="project-page">
        <div className="project-hero">
          <p className="project-hero__eyebrow">Portfolio Relic</p>
          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__copy">{project.description}</p>

          <div className="project-hero__panel">
            <div className="project-panel">
              <h2 className="project-panel__title">Project Information</h2>
              <div className="project-panel__copy">
                <p>Role: {project.role}</p>
                <p>Year: {project.year}</p>
              </div>
            </div>

            <div className="project-panel">
              <h2 className="project-panel__title">Technologies</h2>
              <div className="project-panel__tags">
                {project.tech.map((item) => (
                  <span key={item} className="project-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="project-page__grid">
          <div className="project-panel">
            <h2 className="project-panel__title">Key Features</h2>
            <div className="project-panel__tags" style={{ marginTop: "1rem" }}>
              {project.features.map((feature) => (
                <div key={feature} className="project-chip" style={{ justifyContent: "flex-start", width: "100%" }}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="project-gallery">
            {project.gallery.map((img, index) => (
              <div key={index} className="project-gallery-card">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={800}
                  height={450}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "1.75rem" }}>
          <Link href="/Project" className="project-back">
            ← Back To Projects
          </Link>
        </div>
      </section>
    </main>
  );
}