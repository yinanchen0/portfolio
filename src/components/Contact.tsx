import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Contact
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-lg mb-16"
        >
          <Mail size={22} />
          Say Hello
        </a>
        
        <div className="flex justify-center gap-8">
          <a
            href="#"
            className="p-4 card-gradient rounded-xl hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-4 card-gradient rounded-xl hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-4 card-gradient rounded-xl hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin size={18} />
          <span>Your Location</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
