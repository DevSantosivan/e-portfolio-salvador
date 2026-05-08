import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { PortfolioLayout } from "@/components/portfolio/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Importance, Objectives, TimePlace } from "./pages/introduction";
import { Nature, MissionVision, History, Organization, Services } from "./pages/company";
import { WeeklyReports, DTR, Progress, Analysis } from "./pages/work";
import { Assessment, Appendices } from "./pages/extras";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<PortfolioLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/introduction/importance" element={<Importance />} />
              <Route path="/introduction/objectives" element={<Objectives />} />
              <Route path="/introduction/time-place" element={<TimePlace />} />
              <Route path="/company/services" element={<Services />} />
              <Route path="/company/nature" element={<Nature />} />
              <Route path="/company/mission-vision" element={<MissionVision />} />
              <Route path="/company/history" element={<History />} />
              <Route path="/company/organization" element={<Organization />} />
              <Route path="/work/weekly-reports" element={<WeeklyReports />} />
              <Route path="/work/dtr" element={<DTR />} />
              <Route path="/work/progress" element={<Progress />} />
              <Route path="/work/analysis" element={<Analysis />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/appendices" element={<Appendices />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
