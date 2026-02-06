import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
  {
    name: "Email",
    value: "annamkarthikeyan17@gmail.com",
    href: "mailto:annamkarthikeyan17@gmail.com",
    icon: Mail,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    value: "github.com/Karthikeyan-annam",
    href: "https://github.com/Karthikeyan-annam",
    icon: Github,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/karthikeyan-annam",
    href: "https://www.linkedin.com/in/karthikeyan-annam-a98215368",
    icon: Linkedin,
    color: "from-blue-600 to-blue-800",
  },
];



const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-secondary/30">
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
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mt-2 mb-4"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-lg mx-auto"
            >
              I'm currently looking for internship opportunities. Feel free to
              reach out if you'd like to collaborate or just say hi!
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <link.icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-1 flex items-center gap-2">
                  {link.name}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:annamkarthikeyan17@gmail.com">
                <Send size={18} />
                Send a Message
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
