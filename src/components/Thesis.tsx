import { FileText, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import PdfViewer from "./PdfViewer";

// Helper function to get correct PDF path
const getPdfUrl = (filename: string) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.endsWith("/") ? base.slice(0, -1) : base}/${filename}`;
};

interface ThesisItem {
  title: string;
  degree: string;
  year: string;
  abstract: string;
  keywords: string[];
  pdfFilename: string;
}

const thesisItems: ThesisItem[] = [{
  title: "Investigate the Feasibility of Capturing Micromovements on Fingers for Sensor Fusion in Virtual Keyboard",
  degree: "BEng Electronic & Electrical Engineering, UCL",
  year: "2024",
  abstract: "This study explores the potential of optical sensors in capturing finger micro movements for virtual keyboard applications. Two wearable devices equipped with infrared reflection sensors were developed and tested. The keyboard design achieved 80% accuracy with the ring device and 92% accuracy with the palm-worn device. Results revealed the device's ability to recognize high-frequency trembling up to 25Hz.",
  keywords: ["Optical Sensors", "Virtual Keyboard", "Machine Learning", "Sensor Fusion", "Wearable Devices"],
  pdfFilename: "final-report.pdf"
}, {
  title: "Industrial Vapor Recovery",
  degree: "MSc Cleantech Innovation, Imperial College London",
  year: "2025",
  abstract: "Industrial drying wastes billions of litres of water and ~80% of heat through exhaust vapor. This project explored membrane condensers as a solution—passing humid air across hydrophobic PTFE membranes with cold water on the other side to recover water and energy. Prototypes were built and tested, and Life Cycle Assessment showed potential to cut water use by 22-25% and energy by 15-20%. Industry validation confirmed this as an overlooked but valuable opportunity. (Note: Some content has been removed from the PDF due to file size constraints.)",
  keywords: ["Membrane Condensers", "Vapor Recovery", "Industrial Sustainability", "Water Conservation", "Energy Efficiency"],
  pdfFilename: "thesis-2.pdf"
}];

const Thesis = () => {
  const [expandedPdf, setExpandedPdf] = useState<string | null>(null);

  const togglePdfPreview = (filename: string) => {
    setExpandedPdf(expandedPdf === filename ? null : filename);
  };

  return (
    <section id="thesis" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-4">
            My Thesis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore my graduation thesis and research work.
          </p>
        </div>
        
        <div className="space-y-8">
          {thesisItems.map((thesis, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-8">
              <div className="flex gap-6">
                {/* PDF Icon */}
                <div className="hidden sm:flex w-32 h-40 bg-secondary rounded-lg items-center justify-center flex-shrink-0">
                  <FileText className="text-muted-foreground" size={48} strokeWidth={1} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-normal text-foreground mb-2">
                    {thesis.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Submitted in partial fulfillment of the requirements for the degree of {thesis.degree} • {thesis.year}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    <span className="font-medium text-foreground">Abstract:</span> {thesis.abstract}
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <button
                      onClick={() => togglePdfPreview(thesis.pdfFilename)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      {expandedPdf === thesis.pdfFilename ? "Hide Preview" : "Preview Report"}
                    </button>
                    <a
                      href={getPdfUrl(thesis.pdfFilename)}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md font-medium text-sm hover:bg-secondary transition-colors"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>

                  {/* Embedded PDF Preview */}
                  {expandedPdf === thesis.pdfFilename && (
                    <div className="mb-6">
                      <PdfViewer url={getPdfUrl(thesis.pdfFilename)} />
                    </div>
                  )}
                  
                  {/* Keywords */}
                  <div>
                    <span className="text-muted-foreground text-sm">Keywords:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {thesis.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;