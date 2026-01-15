import { useState } from "react";
import { FileText, X, ExternalLink, Download } from "lucide-react";

interface ThesisItem {
  title: string;
  degree: string;
  year: string;
  abstract: string;
  keywords: string[];
  pdfUrl: string;
}

const thesisItems: ThesisItem[] = [
  {
    title: "Your Thesis Title Goes Here",
    degree: "Your Degree",
    year: "Year",
    abstract: "This thesis explores [brief description of your thesis topic]. Through extensive research and analysis, it investigates [main research question or objective]. The findings contribute to [field/area] by providing insights into [key contributions or discoveries].",
    keywords: ["Research", "Analysis", "Innovation", "Technology", "Design"],
    pdfUrl: "/thesis-1.pdf",
  },
  {
    title: "Your Second Thesis Title",
    degree: "Your Degree",
    year: "Year",
    abstract: "An in-depth study on [topic]. This research presents novel approaches to [problem] and demonstrates practical applications in [field].",
    keywords: ["Engineering", "Development", "Systems", "Analysis"],
    pdfUrl: "/thesis-2.pdf",
  },
];

const Thesis = () => {
  const [activeThesis, setActiveThesis] = useState<ThesisItem | null>(null);

  return (
    <section id="thesis" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-4">
            My Thesis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore my graduation thesis and research work that represents the culmination of my academic journey.
          </p>
        </div>
        
        <div className="space-y-8">
          {thesisItems.map((thesis, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-8"
            >
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
                      onClick={() => setActiveThesis(thesis)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      View Full Thesis
                    </button>
                    <a
                      href={thesis.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md font-medium text-sm hover:bg-secondary transition-colors"
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                  
                  {/* Keywords */}
                  <div>
                    <span className="text-muted-foreground text-sm">Keywords:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {thesis.keywords.map((keyword) => (
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
      
      {/* PDF Viewer Modal */}
      {activeThesis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm">
          <div className="w-full max-w-5xl h-[85vh] bg-card rounded-lg border border-border overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-display text-lg font-medium">{activeThesis.title}</h3>
                <p className="text-sm text-muted-foreground">{activeThesis.degree} • {activeThesis.year}</p>
              </div>
              <button
                onClick={() => setActiveThesis(null)}
                className="p-2 hover:bg-secondary rounded-md transition-colors"
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
