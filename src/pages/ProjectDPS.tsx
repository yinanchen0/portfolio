import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dpsPcbImage from "@/assets/projects/dps-pcb.jpg";
import dpsSchematic from "@/assets/projects/dps-schematic.png";
import dpsEfficiency from "@/assets/projects/dps-efficiency.png";
import dpsVoltageCurrent from "@/assets/projects/dps-voltage-current.png";
import dpsInputOutput from "@/assets/projects/dps-input-output.png";

const ProjectDPS = () => {
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/#projects");
    requestAnimationFrame(() => {
      setTimeout(() => {
        const element = document.getElementById("projects");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Electronics
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            12V & 5V Digital Power Supply
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A dual-output power supply PCB delivering stable 12.15V (±0.4%) and 5.1V (±2%) with short-circuit protection.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={dpsPcbImage}
              alt="Digital Power Supply PCB"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  12V Output
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Voltage: 12.15V (±0.4% regulation)</li>
                  <li>• Max Current: 500mA</li>
                  <li>• Efficiency: 77.4%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  5V Output
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Voltage: 5.1V (±2% regulation)</li>
                  <li>• Max Current: 1A</li>
                  <li>• Ripple: &lt;50mV</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Protection Features
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Short-circuit protection</li>
                  <li>• Overcurrent protection</li>
                  <li>• Thermal shutdown</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Operating Conditions
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Temperature: 0°C to 70°C</li>
                  <li>• Input Voltage: 15-24V DC</li>
                  <li>• PCB Size: 50mm × 50mm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schematic Diagram */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Schematic Diagram
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={dpsSchematic}
              alt="DPS Schematic Diagram"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Performance Graphs */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Performance Analysis
          </h2>
          <div className="space-y-8">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={dpsEfficiency}
                alt="Efficiency vs Load"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={dpsVoltageCurrent}
                alt="Voltage and Current Output vs Load"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={dpsInputOutput}
                alt="Voltage Output vs Input"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Design Details
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              This project involved designing and fabricating a dual-output linear power supply PCB. 
              The design uses voltage regulators to step down input voltage to stable 12V and 5V rails, 
              suitable for powering microcontrollers, sensors, and other electronic components.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The PCB was designed using DipTrace and fabricated using photolithography etching process. 
              Surface-mount components were used where possible to minimize board size while maintaining 
              good thermal characteristics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDPS;
