import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:pl-24">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">About Me</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a recent graduate in Electrical and Electronic Engineering, I initially pursued the degree simply
              because I loved building random, fun projects—even if they seemed useless at first. Over time, I realized
              that I genuinely enjoy what I'm creating, and I also discovered a passion for coding, combining hardware
              and software in ways that are both challenging and rewarding. My projects are driven by curiosity,
              creativity, and the joy of making ideas come to life.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={profileImage}
              alt="Profile photo"
              className="w-[28rem] h-[32rem] object-cover rounded-lg border border-border lg:-ml-5"
            />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-normal text-foreground">10+</p>
              <p className="text-muted-foreground text-sm mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-normal text-foreground">12+</p>
              <p className="text-muted-foreground text-sm mt-2">Technologies Used</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-normal text-foreground">2</p>
              <p className="text-muted-foreground text-sm mt-2">Thesis Papers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl font-normal text-foreground">∞</p>
              <p className="text-muted-foreground text-sm mt-2">Curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
