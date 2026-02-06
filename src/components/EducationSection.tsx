import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "KL University, Vaddeswaram",
    period: "2024 – 2028",
    grade: "CGPA: 8.88 / 10",
    icon: GraduationCap,
    isCurrent: true,
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Narayana Junior College, Vijayawada",
    period: "Completed",
    grade: "Percentage: 90.5%",
    icon: Award,
    isCurrent: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm tracking-wider uppercase"
            >
              Education
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-2"
            >
              Academic Background
            </motion.h2>
          </div>

          {/* Education Timeline */}
          <div className="max-w-3xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="relative"
              >
                <div
                  className={`p-6 rounded-2xl bg-card border shadow-card transition-all duration-300 hover:shadow-elevated ${
                    edu.isCurrent
                      ? "border-primary/50 ring-1 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        edu.isCurrent
                          ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <edu.icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        {edu.isCurrent && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary" />
                          {edu.institution}
                        </div>
                        <span className="hidden sm:inline text-border">•</span>
                        <span>{edu.period}</span>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium">
                        <Award size={14} className="text-primary" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
