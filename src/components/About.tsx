const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Python", 
    "Machine Learning", "Data Analysis", "Research", "UI/UX"
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Turning ideas into reality
          </h2>
        </div>

        {/* Main content with image */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-6 shadow-card border border-border sticky top-24">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-foreground">Your Name</h3>
                <p className="text-muted-foreground text-sm mt-1">Fresh Graduate</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-display font-semibold text-primary">2</p>
                  <p className="text-muted-foreground text-xs">Thesis</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-semibold text-primary">2024</p>
                  <p className="text-muted-foreground text-xs">Graduated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-xl font-medium mb-4 text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a recent graduate with a deep passion for technology and innovation. 
                  My academic journey has equipped me with strong foundations in both 
                  theoretical concepts and practical applications.
                </p>
                <p>
                  During my studies, I completed two thesis projects that challenged me 
                  to think critically and solve complex problems. These experiences have 
                  shaped my approach to development and research.
                </p>
                <p>
                  I'm always eager to learn new technologies and take on challenging 
                  projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-xl font-medium mb-6 text-foreground">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
