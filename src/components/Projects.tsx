import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of your first project. What problem did it solve? What technologies did you use?",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description: "Another amazing project you've worked on. Highlight the key features and your role in development.",
    tags: ["Python", "Machine Learning", "Data Science"],
    github: "#",
  },
  {
    title: "Project Three",
    description: "Describe what makes this project special. What did you learn from building it?",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-gradient rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-4xl font-display">{index + 1}</span>
                </div>
              </div>
              
              <h3 className="font-display text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
