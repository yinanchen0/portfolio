import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/projects/allscoo-hero.jpg";

const ProjectAllscoo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            3D Modeling & Product Design
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-normal text-foreground mb-6">
            ALLSCOO - A Scooter for All
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
            An accessible mobility scooter designed through user research and 3D CAD modeling. 
            Featuring foldable design, adjustable components, and terrain adaptability for users with mobility challenges.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src={heroImage} 
            alt="ALLSCOO Mobility Scooter Render" 
            className="w-full rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Design */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-normal text-foreground mb-8">Design</h2>
          <img 
            src="/images/allscoo-sketches.jpg" 
            alt="ALLSCOO Design Sketches" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-normal text-foreground mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl text-foreground mb-3">Foldable Design</h3>
              <p className="text-muted-foreground text-sm">
                Compact folding mechanism with hinge lock for easy transport and storage. 
                Perfect for users who need to load the scooter into vehicles.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl text-foreground mb-3">Adjustable Height</h3>
              <p className="text-muted-foreground text-sm">
                Linear motor adjustment system allows the seat and footrest to be customized 
                for different user heights and comfort preferences.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-display text-xl text-foreground mb-3">Terrain Adaptability</h3>
              <p className="text-muted-foreground text-sm">
                Enhanced wheel friction and stable wheelbase designed to handle steep inclines 
                and various outdoor terrains safely.
              </p>
            </div>
          </div>
          
          {/* Folding Mechanism Development */}
          <div className="mb-12">
            <h3 className="font-display text-2xl text-foreground mb-6">Folding Mechanism Development</h3>
            <div className="space-y-8">
              <div>
                <img 
                  src="/images/allscoo-folding-1.png" 
                  alt="Folding mechanism design iterations - First and second trials" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-muted-foreground text-sm mt-3 text-center">
                  Initial mechanism based on varying-radius components, with iterative improvements through multiple trials.
                </p>
              </div>
              <div>
                <img 
                  src="/images/allscoo-folding-2.png" 
                  alt="Final folding mechanism with spring system" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-muted-foreground text-sm mt-3 text-center">
                  Final mechanism featuring automatic spring return, enclosed design for environmental protection, and locked/unlocked states.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="/images/allscoo-foldable.jpg" 
              alt="Foldable Mechanism" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="/images/allscoo-motor.jpg" 
              alt="Motor Adjustment System" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* User-Centered Design */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-normal text-foreground mb-8">User-Centered Design</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-xl text-foreground mb-4">Research-Driven Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>User interviews with mobility scooter and wheelchair users</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Focus on safety, stability, comfort, and independence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Sustainable material considerations throughout design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Accessible controls and adjustable components</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <blockquote className="text-xl text-foreground italic font-display">
                "Bring back the smile, because no one gets left behind"
              </blockquote>
              <p className="text-muted-foreground mt-4 text-sm">— ALLSCOO Design Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Skills */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-normal text-foreground mb-8">Tools & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["3D CAD Modeling", "Product Design", "Rendering", "User Research", "Technical Drawing", "Accessibility Design"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectAllscoo;
