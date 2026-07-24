import Project from "./project";

const projects = [
  {
    title: "ARVolcano",
    description:
      "An Augmented Reality educational application that allows users to explore volcano eruptions through interactive 3D visualization and scenario-based learning.",
    tech: ["Unity", "Vuforia", "C#", "AR"],
    image: "/projects/arvolcano.png",
  },
  {
    title: "GIMS",
    description:
      "A web-based management system developed to manage documents, reports, and administrative workflows.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/gims.png",
  },
  {
    title: "Math Bingo Game",
    description:
      "An educational web game that combines learning and gameplay with interactive features.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/mathbingo.png",
  },
];


export default function Page() {
  return (
    <main className="min-h-screen bg-[#050B1A] text-white px-6 py-20">

      {/* Title */}
      <section className="max-w-5xl mx-auto text-center">

        <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm">
          Portfolio
        </p>

        <h1 className="
          text-5xl 
          font-bold 
          mt-4
          bg-gradient-to-r 
          from-cyan-300 
          to-blue-500
          bg-clip-text 
          text-transparent
        ">
          My Projects
        </h1>


        <p className="text-slate-400 mt-5">
          A showcase of my development projects, research,
          and creative works in multimedia computing.
        </p>

      </section>



      {/* Cards */}
      <section className="
        max-w-6xl mx-auto
        mt-16
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {projects.map((project,index)=>(
          <article
            key={index}
            className="
              group
              bg-[#0D1B2A]
              border
              border-cyan-500/20
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              transition-all
              duration-300
            "
          >

            {/* Image */}
            <div className="
              h-52
              bg-[#112240]
              overflow-hidden
            ">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                "
              />
            </div>


            <div className="p-6">

              <h2 className="
                text-2xl
                font-semibold
                text-cyan-300
              ">
                {project.title}
              </h2>


              <p className="
                text-slate-400
                mt-3
                text-sm
                leading-relaxed
              ">
                {project.description}
              </p>



              <div className="
                flex
                flex-wrap
                gap-2
                mt-5
              ">
                {project.tech.map((item)=>(
                  <span
                    key={item}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-cyan-400/10
                      text-cyan-300
                      border
                      border-cyan-400/30
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>



              <button
                className="
                  mt-6
                  px-6
                  py-2
                  rounded-full
                  bg-cyan-400
                  text-[#050B1A]
                  font-semibold
                  hover:bg-cyan-300
                  transition
                "
              >
                View Details
              </button>

            </div>


          </article>
        ))}

      </section>

    </main>
  );
}