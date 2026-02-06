import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Leaf, Car } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Farm Connect Website",
    role: "Team Lead",
    description:
      "Developed a responsive agriculture support website using HTML, CSS, and JavaScript. Led a team and ensured timely delivery.",
    icon: Leaf,
    tags: ["HTML", "CSS", "JavaScript", "Leadership"],
    hasLink: true,
    link: "https://celadon-youtiao-2940c5.netlify.app/",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconBg: "from-emerald-500 to-green-600",
  },
  {
    title: "Smart Parking System",
    role: "Team Lead",
    description:
      "IoT-based smart parking system using camera detection to identify vacant slots and reduce traffic congestion.",
    icon: Car,
    tags: ["IoT", "Camera Detection", "Hardware", "Teamwork"],
    hasLink: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "from-blue-500 to-cyan-600",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span className="text-primary font-mono text-sm tracking-wider uppercase">
              Projects
            </motion.span>
            <motion.h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Featured Work
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* FIXED: overlay no longer blocks clicks */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center`}
                    >
                      <project.icon size={28} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <Users size={16} />
                      {project.role}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.hasLink && (
                    <Button variant="outline" size="sm" className="group/btn" asChild>
                      <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
                        <span>Live Project</span>
                        <ExternalLink
                          size={14}
                          className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
