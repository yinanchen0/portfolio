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
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Embedded & Electronics */}
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-4">Embedded & Electronics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Embedded C/C++, Python, MATLAB</li>
                <li>• ARM Cortex-M microcontrollers (MSP432), ESP32, Arduino</li>
                <li>• Low-level peripheral interfacing (GPIO, ADC, DAC, timers, interrupts)</li>
                <li>• Analogue signal conditioning (biasing, filtering, amplification)</li>
                <li>• Schematic capture & PCB layout (KiCad, DipTrace)</li>
                <li>• Hardware bring-up & debugging (oscilloscope, logic analyser)</li>
              </ul>
            </div>

            {/* Software & Analysis */}
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-4">Software & Analysis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python for data analysis and signal validation</li>
                <li>• MATLAB for signal processing and frequency-domain analysis</li>
                <li>• Mechanical design for electronics (Fusion 360, SolidWorks)</li>
                <li>• Multisim/RoboDK</li>
                <li>• Python, C, C++, C#, SystemVerilog, HTML/CSS, JavaScript, SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
