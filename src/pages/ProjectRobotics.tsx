import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import roboticsArmImage from "@/assets/projects/robotics-arm.jpg";
import roboticsDemo1 from "@/assets/projects/robotics-demo-1.gif";
import roboticsDemo2 from "@/assets/projects/robotics-demo-2.gif";

const ProjectRobotics = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Robotics
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            3-DOF Robotic Arm
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A 3-degree-of-freedom robotic arm capable of pick and place operations using forward kinematics, 
            inverse kinematics, and trajectory planning. Built as part of the ELEC0129 Introduction to Robotics module.
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src={roboticsArmImage}
              alt="3-DOF Robotic Arm"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Demo GIFs */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Pick and Place Demo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={roboticsDemo1}
                alt="Robotic arm pick and place demonstration"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src={roboticsDemo2}
                alt="Robotic arm trajectory planning demonstration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Physical Parameters
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Link 1 Length (L₁)</span>
                  <span className="text-foreground font-medium">94mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Link 2 Length (L₂)</span>
                  <span className="text-foreground font-medium">180mm</span>
                </li>
                <li className="flex justify-between">
                  <span>Degrees of Freedom</span>
                  <span className="text-foreground font-medium">3</span>
                </li>
                <li className="flex justify-between">
                  <span>End Effector</span>
                  <span className="text-foreground font-medium">Gripper</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Control System
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Controller</span>
                  <span className="text-foreground font-medium">Arduino</span>
                </li>
                <li className="flex justify-between">
                  <span>Simulation</span>
                  <span className="text-foreground font-medium">MATLAB</span>
                </li>
                <li className="flex justify-between">
                  <span>Configuration</span>
                  <span className="text-foreground font-medium">Elbow-up/down</span>
                </li>
                <li className="flex justify-between">
                  <span>Trajectory</span>
                  <span className="text-foreground font-medium">Cubic polynomial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-foreground font-medium mb-3">Forward Kinematics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Denavit-Hartenberg parameters used to calculate end-effector position from joint angles 
                with transformation matrices.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-foreground font-medium mb-3">Inverse Kinematics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Geometric approach to calculate joint angles from desired end-effector position, 
                supporting both elbow-up and elbow-down configurations.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-foreground font-medium mb-3">Trajectory Planning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cubic polynomial trajectory generation for smooth motion with controlled 
                velocity and acceleration profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Foundation */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Mathematical Foundation
          </h2>
          <div className="bg-card rounded-lg border border-border p-6 space-y-6">
            <div>
              <h3 className="text-foreground font-medium mb-3">Joint Angle Calculations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The inverse kinematics solution uses trigonometric relationships and the cosine rule 
                to derive joint angles from Cartesian coordinates:
              </p>
              <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                <li>θ₁ = tan⁻¹(Y/X) - Base rotation angle</li>
                <li>θ₂ = α + β - Shoulder angle using cosine rule</li>
                <li>θ₃ = 180° - k - Elbow angle calculation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-medium mb-3">DH Parameters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Denavit-Hartenberg convention was applied to define the coordinate frames and 
                derive homogeneous transformation matrices between consecutive links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Source Code */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Source Code
          </h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <p className="text-muted-foreground leading-relaxed mb-6">
              For detailed code implementation including MATLAB scripts for forward kinematics, 
              inverse kinematics, and trajectory planning, check out the GitHub repository.
            </p>
            <a
              href="https://github.com/yinanchen0/robotic-arm-kinematics-trajectory-planning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectRobotics;
