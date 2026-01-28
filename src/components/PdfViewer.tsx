import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

// Set up the worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js`;

interface PdfViewerProps {
  url: string;
  className?: string;
}

const PdfViewer = ({ url, className = "" }: PdfViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load PDF document
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setCurrentPage(1);
      } catch (err) {
        console.error("Error loading PDF:", err);
        setError("Failed to load PDF");
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [url]);

  // Render current page
  useEffect(() => {
    if (!pdf || !canvasRef.current) return;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(currentPage);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      } catch (err) {
        console.error("Error rendering page:", err);
      }
    };

    renderPage();
  }, [pdf, currentPage, scale]);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-[500px] bg-muted rounded-lg ${className}`}>
        <div className="animate-pulse text-muted-foreground">Loading PDF...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center h-[500px] bg-muted rounded-lg ${className}`}>
        <p className="text-muted-foreground mb-4">{error}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Open PDF in New Tab
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-col bg-muted rounded-lg overflow-hidden ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border">
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-muted-foreground min-w-[80px] text-center">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage >= totalPages}
            className="p-1.5 rounded hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-1.5 rounded hover:bg-muted transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-sm text-muted-foreground min-w-[50px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-1.5 rounded hover:bg-muted transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn size={18} />
          </button>
        </div>
      </div>
      
      {/* Canvas container */}
      <div className="overflow-auto h-[500px] md:h-[600px] flex justify-center p-4">
        <canvas ref={canvasRef} className="shadow-lg" />
      </div>
    </div>
  );
};

export default PdfViewer;
