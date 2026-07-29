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
      "/projects/arvolcano/arvolcano2.jfif",
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
    <main className="min-h-screen bg-[#050B1A] text-white px-6 py-20 ">


      {/* Hero */}
   <section className="max-w-5xl mx-auto">

  {/* Title */}
  <h1 className="
    mt-12
    text-5xl
    font-bold
    text-cyan-300
  ">
    {project.title}
  </h1>


  {/* Description */}
  <p className="
    mt-5
    text-slate-400
    leading-relaxed
  ">
    {project.description}
  </p>

</section>



      {/* Information */}
      <section className="
        max-w-5xl
        mx-auto
        mt-16
        grid
        md:grid-cols-2
        gap-8
      ">


        <div className="
          bg-[#0D1B2A]
          rounded-2xl
          p-6
          border
          border-cyan-500/20
        ">

          <h2 className="text-2xl text-cyan-300 font-semibold">
            Project Information
          </h2>


          <p className="mt-4 text-slate-400">
            Role: {project.role}
          </p>

          <p className="mt-2 text-slate-400">
            Year: {project.year}
          </p>

        </div>



        <div className="
          bg-[#0D1B2A]
          rounded-2xl
          p-6
          border
          border-cyan-500/20
        ">

          <h2 className="text-2xl text-cyan-300 font-semibold">
            Technologies
          </h2>


          <div className="flex flex-wrap gap-2 mt-4">

            {project.tech.map((item)=>(
              <span
                key={item}
                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-cyan-400/10
                  border
                  border-cyan-400/30
                  text-cyan-300
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>


      </section>




      {/* Features */}
      <section className="
        max-w-5xl
        mx-auto
        mt-16
      ">

        <h2 className="
          text-3xl
          font-bold
          text-cyan-300
        ">
          Key Features
        </h2>


        <div className="mt-6 space-y-3">

          {project.features.map((feature)=>(
            <div
              key={feature}
              className="
                bg-[#0D1B2A]
                p-4
                rounded-xl
                border
                border-cyan-500/20
              "
            >
              ✓ {feature}
            </div>
          ))}

        </div>
        

        <div
  className="
    grid
    grid-cols-3
    gap-4
  "
>
  {project.gallery.map((img, index) => (
    <div
      key={index}
      className="
        aspect-video
        overflow-hidden
        rounded-xl
        border
        border-cyan-500/20
        bg-[#0D1B2A]
        flex
        items-center
        justify-center
      "
    >
      <Image
        src={img}
        alt={`${project.title} screenshot ${index + 1}`}
        width={800}
        height={450}
        className="
          w-full
          h-full
          object-contain
          hover:scale-105
          transition
        "
      />
    </div>
  ))}
</div>


      </section>




      {/* Back Button */}
      <div className="max-w-5xl mx-auto mt-16">

        <Link
          href="/Project"
          className="
            inline-block
            px-6
            py-3
            rounded-full
            bg-cyan-400
            text-[#050B1A]
            font-semibold
            hover:bg-cyan-300
            transition
          "
        >
          ← Back To Projects
        </Link>

      </div>


    </main>
  );
}