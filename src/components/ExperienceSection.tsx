import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30">
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
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-2"
            >
              Professional Journey
            </motion.h2>
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-8 rounded-2xl bg-card border border-border shadow-card">
              {/* Icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Briefcase size={20} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-4">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>May 2025 – June 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>KL University</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">Social Internship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Worked on community development and social awareness
                  initiatives. Collaborated with peers to drive positive change
                  in local communities through various outreach programs.
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute left-12 top-14 bottom-8 w-px bg-gradient-to-b from-primary/50 to-transparent hidden sm:block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
