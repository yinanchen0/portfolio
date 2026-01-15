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
        </div>

        {/* Skills Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-8">Skills & Technologies</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Python",
              "C/C++",
              "MATLAB",
              "JavaScript",
              "SystemVerilog",
              "SQL",
              "HTML/CSS",
              "C#",
              "PCB Design",
              "3D Modeling",
              "Signal Processing",
              "IoT",
              "Machine Learning",
              "Hardware debugging",
              "Embedded Systems",
              "Soldering",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 bg-secondary/50 rounded-lg text-center text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
