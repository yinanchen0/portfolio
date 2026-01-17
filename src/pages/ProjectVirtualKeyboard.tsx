import { ArrowLeft, Github, Download } from "lucide-react";
import { Link } from "react-router-dom";
import virtualKeyboardDevice from "@/assets/projects/virtual-keyboard-device.jpg";
import vkSensingPrinciple from "@/assets/projects/vk-sensing-principle.jpg";
import vkSystemFlow from "@/assets/projects/vk-system-flow.jpg";
import vkMediapipe from "@/assets/projects/vk-mediapipe.jpg";
import vkPcbEvolution from "@/assets/projects/vk-pcb-evolution.png";
import vkPalmSensor from "@/assets/projects/vk-palm-sensor.jpg";

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

      {/* Working Principle */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Working Principle
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={vkSensingPrinciple}
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
                src={vkSystemFlow}
                alt="System architecture showing ESP32 and sensor communication"
                className="w-full h-auto bg-white object-contain max-h-64"
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
              src={vkMediapipe}
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

      {/* PCB Evolution */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            PCB Development Journey
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden max-w-2xl mx-auto">
            <img
              src={vkPcbEvolution}
              alt="PCB layout evolution from solid to flexible PCB across 15+ versions"
              className="w-full h-auto bg-white p-3"
            />
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed text-center max-w-2xl mx-auto">
            Over 15 PCB iterations were developed throughout the project, evolving from traditional rigid 
            boards to flexible PCB designs. The progression shows optimization for wearability, from early 
            ring-mounted prototypes to the final palm-worn flexible sensor arrays.
          </p>
        </div>
      </section>

      {/* Palm Device Image */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Palm-Worn Device
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={vkPalmSensor}
              alt="Palm-worn flexible PCB sensor device"
              className="w-full h-auto"
            />
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The palm-worn device features a flexible PCB with three IR sensor pairs positioned to detect 
            PIP joint bending angles. Medical tape ensures comfortable attachment while maintaining 
            sensor-skin contact for reliable readings.
          </p>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Key Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Ring Device (V1)
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 16-key keyboard layout</li>
                  <li>• 80% typing accuracy</li>
                  <li>• Based on DIP joint angles</li>
                  <li>• 4 sensing units per hand</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
                  Palm Device (V2)
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 7-key keyboard layout</li>
                  <li>• 92% typing accuracy</li>
                  <li>• Surface typing support</li>
                  <li>• Flexible PCB design</li>
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Optical Sensors
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>IR Emitter:</strong> VSMY2940G 940nm infrared LED</li>
                <li>• <strong>IR Receiver:</strong> SFH 3600-Z phototransistor</li>
                <li>• <strong>Detection Range:</strong> 0-180° joint bending</li>
                <li>• <strong>Resolution:</strong> Sub-degree precision</li>
              </ul>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Electronics
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Microcontroller:</strong> ESP32 with WiFi capability</li>
                <li>• <strong>Power:</strong> 9V battery, 3.3V pulsed IR operation</li>
                <li>• <strong>PCB:</strong> Flexible PCB worn as finger rings</li>
                <li>• <strong>Communication:</strong> Real-time wireless data transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Movement Detection */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Micro-Movement Detection
          </h2>
          <div className="bg-card/50 rounded-lg border border-border p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond virtual keyboard applications, the high-frequency sampling (40Hz) enables detection of 
              subtle finger trembling patterns up to 25Hz. This opens possibilities for medical applications, 
              including early Parkinson's disease detection through tremor monitoring.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="text-foreground font-medium mb-2">Research Discoveries</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• DIP-PIP angle relationship characterized</li>
                  <li>• Trembling patterns correlate with fatigue</li>
                  <li>• Sensor fusion improves accuracy by 15%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">Potential Applications</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• VR/AR text input for headsets</li>
                  <li>• Early Parkinson's disease screening</li>
                  <li>• Gesture-based device control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Personal Reflection
          </h2>
          <div className="bg-card/50 rounded-lg border border-border p-6">
            <p className="text-muted-foreground leading-relaxed">
              This has been the proudest personal project I've ever developed. It was a year-long journey 
              of continuous refinement—from optimizing physical sensor placement and experimenting with 
              component selection, to developing robust software pipelines. Every iteration taught me 
              something new about the intersection of hardware and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section className="px-6 pb-24">
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
          <p className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border">
            UCL Department of Electronic & Electrical Engineering • 3rd Year Project Report • April 2024
            <br />
            <Link to="/#thesis" className="text-primary hover:underline">
              View full thesis details →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectVirtualKeyboard;
