import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDPS from "./pages/ProjectDPS";
import ProjectRobotics from "./pages/ProjectRobotics";
import ProjectVirtualKeyboard from "./pages/ProjectVirtualKeyboard";
import ProjectEMG from "./pages/ProjectEMG";
import ProjectAllscoo from "./pages/ProjectAllscoo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/dps" element={<ProjectDPS />} />
          <Route path="/projects/robotics" element={<ProjectRobotics />} />
          <Route path="/projects/virtual-keyboard" element={<ProjectVirtualKeyboard />} />
          <Route path="/projects/emg" element={<ProjectEMG />} />
          <Route path="/projects/allscoo" element={<ProjectAllscoo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
