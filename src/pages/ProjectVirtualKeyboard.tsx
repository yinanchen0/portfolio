import { ArrowLeft, Github, Download } from "lucide-react";
import { Link } from "react-router-dom";
import virtualKeyboardDevice from "@/assets/projects/virtual-keyboard-device.jpg";

const ProjectVirtualKeyboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/#projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Human-Machine Interface
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            Virtual Keyboard with Optical Sensors
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Investigating the feasibility of capturing micro-movements on fingers using infrared sensors for sensor fusion in virtual keyboards.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={virtualKeyboardDevice}
              alt="Virtual Keyboard Wearable Device"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Project Overview
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              This 3rd year research project at UCL explores the potential of optical sensors in capturing 
              finger micro-movements for virtual keyboard applications. Two wearable devices were developed, 
              each equipped with three infrared reflection sensors—one worn as a ring and another on the palm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The keyboard design, based on the bending angle of the Proximal Interphalangeal (PIP) joint, 
              achieved 80% accuracy with the ring device and 92% accuracy with the palm-worn device during 
              surface typing tests.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Diagrams */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Sensing Principle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/vk-sensing-principle.jpg"
                alt="IR sensing principle for finger bending detection"
                className="w-full h-auto bg-white"
              />
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  IR sensors measure bending angles of DIP & PIP joints and finger spread using reflected infrared light.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/vk-system-flow.jpg"
                alt="System architecture showing ESP32 and sensor communication"
                className="w-full h-auto bg-white"
              />
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  ESP32 microcontroller collects data from 4 sensing units wirelessly at 40Hz sampling rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MediaPipe Integration */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Machine Learning Pipeline
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/vk-mediapipe.jpg"
              alt="MediaPipe hand tracking flowchart"
              className="w-full h-auto bg-white"
            />
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The recognition system uses MediaPipe for camera-based hand skeleton labeling in parallel with 
            serial data collection. XGBoost machine learning model classifies finger positions based on 
            combined IR sensor readings and camera angle labels.
          </p>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Key Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Ring Device (V1)
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 16-key keyboard layout</li>
                  <li>• 80% typing accuracy</li>
                  <li>• Based on DIP joint angles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Palm Device (V2)
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 7-key keyboard layout</li>
                  <li>• 92% typing accuracy</li>
                  <li>• Surface typing support</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Technical Features
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 40Hz sampling frequency</li>
                  <li>• Wireless ESP32 communication</li>
                  <li>• XGBoost classification</li>
                  <li>• MediaPipe hand tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Micro-Movement Detection
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Captures trembling up to 25Hz</li>
                  <li>• Potential for Parkinson's monitoring</li>
                  <li>• DIP-PIP angle relationship discovered</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Components */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Hardware Components
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ul className="text-muted-foreground space-y-2">
              <li>• <strong>IR Emitter:</strong> VSMY2940G 940nm infrared LED</li>
              <li>• <strong>IR Receiver:</strong> SFH 3600-Z phototransistor</li>
              <li>• <strong>Microcontroller:</strong> ESP32 with WiFi capability</li>
              <li>• <strong>Power:</strong> 9V battery, 3.3V pulsed IR operation</li>
              <li>• <strong>PCB:</strong> Flexible PCB worn as finger rings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Future Applications
          </h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The research demonstrates potential for integration with VR headsets like Apple Vision Pro 
              for enhanced virtual keyboard experiences. The micro-movement detection capability also 
              opens possibilities for medical applications, including early Parkinson's disease detection 
              through tremor monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/final-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Report</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            UCL Department of Electronic & Electrical Engineering • 3rd Year Project Report • April 2024
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectVirtualKeyboard;
