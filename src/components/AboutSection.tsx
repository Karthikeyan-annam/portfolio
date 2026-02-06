import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Globe } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const languages = ["English", "Telugu", "Hindi", "Japanese"];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm tracking-wider uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-2"
            >
              Get to know me
            </motion.h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:col-span-2"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a B.Tech Computer Science & Engineering student with a strong 
                foundation in software development and web technologies. Through 
                academic and team projects, I've gained hands-on experience in 
                building practical solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm actively seeking a software development internship to gain 
                real-world exposure and enhance my industry skills. I'm passionate 
                about learning new technologies and collaborating with teams to 
                create impactful software.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-foreground">India</p>
              </div>

              <div className="p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Graduation</span>
                </div>
                <p className="text-foreground">2028</p>
              </div>

              <div className="p-4 rounded-xl bg-card shadow-card border border-border">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <Globe size={18} />
                  <span className="text-sm font-medium">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
