import { useState } from "react";
import { FileText, X, ExternalLink } from "lucide-react";

interface ThesisItem {
  title: string;
  description: string;
  year: string;
  pdfUrl: string;
}

const thesisItems: ThesisItem[] = [
  {
    title: "Thesis Title One",
    description: "A comprehensive study on [topic]. This research explores innovative approaches to solving [problem] using [methodology].",
    year: "2024",
    pdfUrl: "/thesis-1.pdf", // Replace with actual PDF URL
  },
  {
    title: "Thesis Title Two",
    description: "An in-depth analysis of [subject]. This work investigates [research question] and proposes novel solutions.",
    year: "2024",
    pdfUrl: "/thesis-2.pdf", // Replace with actual PDF URL
  },
];

const Thesis = () => {
  const [activeThesis, setActiveThesis] = useState<ThesisItem | null>(null);

  return (
    <section id="thesis" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Research
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Academic Thesis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my research work completed during my academic journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {thesisItems.map((thesis) => (
            <div
              key={thesis.title}
              className="card-gradient rounded-2xl p-8 shadow-card group hover:shadow-glow transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <span className="text-primary text-sm font-medium">{thesis.year}</span>
                  <h3 className="font-display text-xl font-medium mt-1 group-hover:text-primary transition-colors">
                    {thesis.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {thesis.description}
              </p>
              
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveThesis(thesis)}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-center"
                >
                  View PDF
                </button>
                <a
                  href={thesis.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      {activeThesis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
          <div className="w-full max-w-5xl h-[85vh] card-gradient rounded-2xl shadow-card overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-display text-lg font-medium">{activeThesis.title}</h3>
                <p className="text-sm text-muted-foreground">{activeThesis.year}</p>
              </div>
              <button
                onClick={() => setActiveThesis(null)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 bg-muted">
              <iframe
                src={activeThesis.pdfUrl}
                className="w-full h-full"
                title={activeThesis.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Thesis;
