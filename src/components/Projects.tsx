import { Link } from "react-router-dom";
import dpsPcbImage from "@/assets/projects/dps-pcb.jpg";
import roboticsArmImage from "@/assets/projects/robotics-arm.jpg";
import virtualKeyboardImage from "@/assets/projects/virtual-keyboard-device.jpg";
import emgCircuitImage from "@/assets/projects/emg-circuit.jpg";
import allscooImage from "@/assets/projects/allscoo-hero.jpg";
interface Project {
  category: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}
const projects: Project[] = [{
  category: "Human-Machine Interface",
  title: "Virtual Keyboard with Optical Sensors",
  description: "Wearable IR sensors capture finger micro-movements for virtual keyboards, achieving 92% accuracy with machine learning classification.",
  image: virtualKeyboardImage,
  link: "/projects/virtual-keyboard"
}, {
  category: "Electronics",
  title: "12V & 5V Digital Power Supply",
  description: "A dual-output power supply PCB delivering stable 12.15V (±0.4%) and 5.1V (±2%) with short-circuit protection. Features 77.4% efficiency at 12V output and operates from 0°C to 70°C.",
  image: dpsPcbImage,
  link: "/projects/dps"
}, {
  category: "Robotics",
  title: "3-DOF Robotic Arm",
  description: "A 3-degree-of-freedom robotic arm with forward/inverse kinematics and trajectory planning for pick and place operations.",
  image: roboticsArmImage,
  link: "/projects/robotics"
}, {
  category: "Biomedical Electronics",
  title: "EMG Signal Acquisition System",
  description: "Complete electromyography circuit capturing muscle electrical activity with instrumentation amplifier, bandpass filter, and Arduino output visualization.",
  image: emgCircuitImage,
  link: "/projects/emg"
}, {
  category: "3D Modeling & Product Design",
  title: "ALLSCOO - Mobility Scooter",
  description: "User-centered accessible mobility scooter designed through research and 3D CAD modeling. Features foldable design, adjustable components, and terrain adaptability.",
  image: allscooImage,
  link: "/projects/allscoo"
}];
const Projects = () => {
  return <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground">
            Projects & Creations
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
        </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
          const CardContent = <>
                {/* Image */}
                <div className="aspect-[4/3] bg-card rounded-lg border border-border mb-4 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors">
                  {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : <span className="text-muted-foreground text-sm">Preview</span>}
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
              </>;
          return project.link ? <Link key={index} to={project.link} className="group cursor-pointer block">
                {CardContent}
              </Link> : <div key={index} className="group">
                {CardContent}
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Projects;