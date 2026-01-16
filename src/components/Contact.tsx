import { Mail, Linkedin, Github } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
          If you're looking for more coding projects, you can visit my GitHub.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
        </p>
        
        <a href="mailto:your.email@example.com" className="font-display text-2xl md:text-3xl text-foreground hover:text-primary transition-colors">yinchen2063@gmail.com</a>
        
        <div className="flex justify-center gap-6 mt-12">
          <a href="mailto:yinchen2063@gmail.com" className="p-3 text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={22} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/yinan-chen-924781264" target="_blank" rel="noopener noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/yinanchen0" target="_blank" rel="noopener noreferrer" className="p-3 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={22} strokeWidth={1.5} />
          </a>
          
        </div>
      </div>
    </section>;
};
export default Contact;