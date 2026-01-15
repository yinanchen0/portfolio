import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Fresh Graduate • Engineer
        </p>
        
        <h1 className="font-display text-6xl md:text-7xl lg:text-[6rem] font-normal mb-8 animate-fade-up text-foreground" style={{ animationDelay: "0.2s" }}>
          Your Name
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          I'm passionate about electronics and coding, and I love
          building projects that bring ideas to life.
        </p>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors animate-float"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </a>
    </section>
  );
};

export default Hero;
