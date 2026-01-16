import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import emgCircuitImage from "@/assets/projects/emg-circuit.jpg";

const ProjectEMG = () => {
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
            Biomedical Electronics
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
            EMG Signal Acquisition System
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A complete electromyography (EMG) signal processing circuit that captures and processes muscle electrical activity for visualization and control applications.
          </p>
        </div>
      </section>

      {/* Demo Video */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <video
              src="/videos/emg-demo.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Specs */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-semibold text-foreground">±4.5V</p>
              <p className="text-sm text-muted-foreground mt-1">Supply Voltage</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-semibold text-foreground">10-500Hz</p>
              <p className="text-sm text-muted-foreground mt-1">Passband</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-semibold text-foreground">~68,000</p>
              <p className="text-sm text-muted-foreground mt-1">Total Gain</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <p className="text-2xl font-semibold text-foreground">£75.21</p>
              <p className="text-sm text-muted-foreground mt-1">Total Cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            System Architecture
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/emg-system-overview.png"
              alt="EMG System Block Diagram"
              className="w-full h-auto bg-white"
            />
          </div>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The system captures EMG signals from three electrodes, processes them through analog circuitry, 
            and outputs to an Arduino for digital processing and display via LED bar, buzzer, and servo motor.
          </p>
        </div>
      </section>

      {/* Potential Divider */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Power Supply: Potential Divider
          </h2>
          <p className="text-muted-foreground mb-6">
            The function of this module is to convert the 9V battery input into the required voltages of +4.5V and -4.5V for the analog circuitry.
          </p>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/emg-potential-divider.jpg"
              alt="Potential Divider Circuit"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Instrumentation Amplifier */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Pre-amplification: Instrumentation Amplifier
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <ul className="text-muted-foreground space-y-2">
                <li>• <strong>Gain:</strong> ~1001 V/V</li>
                <li>• <strong>Supply:</strong> Vcc = 4.5V, Vee = -4.5V</li>
                <li>• Two non-inverting amplifiers provide high input impedance</li>
                <li>• Difference amplifier provides low output impedance and high CMRR</li>
                <li>• Two capacitors to block DC</li>
                <li>• LMC660CN provides high input impedance</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-instrumentation-amp.png"
                alt="Instrumentation Amplifier Circuit"
                className="w-full h-auto bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DRL Circuit */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            DRL Circuit (Driven Right Leg)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-drl-circuit.jpg"
                alt="DRL Circuit"
                className="w-full h-auto"
              />
            </div>
            <div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Reduces interference due to common-mode voltage</li>
                <li>• Provides a stable reference point</li>
                <li>• Uses TL084CN op-amp</li>
                <li>• Resistor values: 1kΩ, 1MΩ, 10kΩ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bandpass Filter */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Bandpass Filter
          </h2>
          <p className="text-muted-foreground mb-6">
            This section is designed to filter the frequency of the signal, allowing only signals in the 10Hz to 500Hz frequency interval to pass through.
          </p>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/emg-filter.jpg"
              alt="Bandpass Filter Circuit"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Precision Rectifier */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Precision Rectifier
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Super diode configuration, suitable for small signal processing</li>
                <li>• Full-wave rectification used</li>
                <li>• Using TL084 for low frequency signal processing</li>
                <li>• Rectifies the bipolar EMG signal into unipolar</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-rectifier.jpg"
                alt="Precision Rectifier Circuit"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-6 bg-card rounded-lg border border-border overflow-hidden">
            <img
              src="/images/emg-rectifier-simulation.png"
              alt="Rectifier Simulation"
              className="w-full h-auto bg-white"
            />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Rectifier simulation showing signal envelope extraction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrator */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Integrator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-integrator.jpg"
                alt="Integrator Circuit"
                className="w-full h-auto"
              />
            </div>
            <div>
              <ul className="text-muted-foreground space-y-2">
                <li>• 1.7Hz corner frequency</li>
                <li>• Provides mean estimation of muscle activity</li>
                <li>• Uses 10kΩ resistor and 8μF capacitor</li>
                <li>• Smooths the rectified signal for stable output</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Further Amplifier */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-4">
            Output Amplifier
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Inverts the result of the integrator output</li>
                <li>• <strong>Gain:</strong> 68x (68kΩ / 1kΩ)</li>
                <li>• Output signal voltage range: 500mV to 2.9V</li>
                <li>• ADC-compatible output for Arduino</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/emg-further-amp.jpg"
                alt="Output Amplifier Circuit"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Output Features */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Output Features
          </h2>
          <div className="bg-card rounded-lg border border-border overflow-hidden mb-8">
            <img
              src="/images/emg-output.jpg"
              alt="Output Configuration with Arduino"
              className="w-full h-auto"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                LED Bar Display
              </h3>
              <p className="text-muted-foreground text-sm">
                10-element multi-color LED bar (red, yellow, green) that increases illumination with muscle activity level.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Audio Feedback
              </h3>
              <p className="text-muted-foreground text-sm">
                Buzzer (0905 model) that produces higher tones as muscle activity increases for audio biofeedback.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                Servo Control
              </h3>
              <p className="text-muted-foreground text-sm">
                SG90 servo motor that displays muscle values from different angles for physical visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components List */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-normal text-foreground mb-8">
            Components
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-4">
                Main Components
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Component</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Model</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2">Microcontroller</td>
                      <td className="py-2">Orangepip Kona 328</td>
                      <td className="text-right py-2">£14.95</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">EMG Electrodes</td>
                      <td className="py-2">Surface (x3)</td>
                      <td className="text-right py-2">£3.00</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">LED Bar</td>
                      <td className="py-2">10-element multi-color</td>
                      <td className="text-right py-2">£5.30</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Servo</td>
                      <td className="py-2">SG90</td>
                      <td className="text-right py-2">£3.90</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Buzzer</td>
                      <td className="py-2">0905</td>
                      <td className="text-right py-2">£3.90</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Battery</td>
                      <td className="py-2">9V PP3</td>
                      <td className="text-right py-2">£2.26</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-primary font-medium text-sm uppercase tracking-wide mb-4">
                Electronic Components
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Component</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Model</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Qty</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2">Op-Amp (CMOS)</td>
                      <td className="py-2">LMC660CN</td>
                      <td className="text-right py-2">1</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Op-Amp (JFET)</td>
                      <td className="py-2">TL084</td>
                      <td className="text-right py-2">2</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Resistors</td>
                      <td className="py-2">Various values</td>
                      <td className="text-right py-2">45</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Capacitors</td>
                      <td className="py-2">Ceramic</td>
                      <td className="text-right py-2">14</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Diodes</td>
                      <td className="py-2">1N4001</td>
                      <td className="text-right py-2">2</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">Breadboards</td>
                      <td className="py-2">Big + Small</td>
                      <td className="text-right py-2">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectEMG;
