const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Python", 
    "Machine Learning", "Data Analysis", "Research", "UI/UX"
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Turning ideas into reality
            </h2>
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
          
          <div className="card-gradient rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-medium mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-display font-semibold text-primary">2</p>
                  <p className="text-muted-foreground text-sm">Thesis Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-semibold text-primary">2024</p>
                  <p className="text-muted-foreground text-sm">Graduated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
