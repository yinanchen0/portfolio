interface Project {
  category: string;
  title: string;
  description: string;
  image?: string;
}

const projects: Project[] = [
  {
    category: "Web Development",
    title: "E-Commerce Platform",
    description: "A full-stack online shopping experience with modern UI and seamless checkout flow.",
  },
  {
    category: "Design",
    title: "Brand Identity Design",
    description: "Complete visual identity system for a sustainable fashion startup.",
  },
  {
    category: "Data Science",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing and presenting complex datasets.",
  },
  {
    category: "Product Design",
    title: "Mobile App Concept",
    description: "UX/UI design for a wellness tracking application.",
  },
  {
    category: "Web Development",
    title: "Portfolio Website",
    description: "Custom portfolio site for a photographer showcasing their work.",
  },
  {
    category: "Research",
    title: "Research Publication",
    description: "Academic paper on emerging technologies in the field.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground">
            Projects & Creations
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects that showcase my skills and passion for creating meaningful digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-card rounded-lg border border-border mb-4 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors">
                <span className="text-muted-foreground text-sm">Preview</span>
              </div>
              
              {/* Content */}
              <p className="text-primary font-medium tracking-[0.15em] uppercase text-xs mb-2">
                {project.category}
              </p>
              <h3 className="font-display text-xl font-normal text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
