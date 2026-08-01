import Link from "next/link";


const projects = [
  
  {
    slug: "math-bingo",
    title: "Math Bingo Game",
    description:
      "An educational web game that combines learning and gameplay with interactive features.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/mathbingo.png",
  },

    {
    slug: "arvolcano",
    title: "ARVolcano",
    description:
      "An Augmented Reality educational application that allows users to explore volcano eruptions through interactive 3D visualization and scenario-based learning.",
    tech: ["Unity", "Vuforia", "AR"],
    image: "/projects/arvolcano.png",
  },
  {
    slug: "gims",
    title: "GIMS",
    description:
      "A web-based management system developed to manage documents, reports, and administrative workflows.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/gims.png",
  },
];


export default function Page() {
  return (
    <main className="project-shell">
      <div className="site-ornament site-ornament--mist" />
      <div className="site-ornament site-ornament--moon" />
      <div className="site-ornament site-ornament--snitch" />
      <div className="site-ornament site-ornament--stars" />

      <section className="project-page">
        <div className="project-hero">
          <p className="project-hero__eyebrow">Portfolio</p>
          <h1 className="project-hero__title">My Projects</h1>
          <p className="project-hero__copy">
            A showcase of my development projects, research, and creative works in multimedia computing.Each project is treated like a magical object in the cabinet: built with care, tested in the wild, and polished for presentation.
          </p>
        </div>

        <section className="project-page__grid project-grid project-page__grid--summary">
          {projects.map((project) => (
            <article key={project.slug} className="project-card">
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__copy">{project.description}</p>

                <div className="project-chip-row project-card__tags">
                  {project.tech.map((item) => (
                    <span key={item} className="project-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <Link href={`/Project/${project.slug}`} className="project-button">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}