import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Fresh Graduate • Developer • Researcher
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hello, I'm{" "}
          <span className="text-gradient">Your Name</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          A passionate developer with a focus on creating meaningful digital experiences. 
          Recently graduated with research experience in innovative technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
