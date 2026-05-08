import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarNav } from "./SidebarNav";
import { Topbar } from "./Topbar";

export const PortfolioLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <div className="hidden lg:block">
          <div className="sticky top-0 h-screen w-72 border-r border-sidebar-border">
            <SidebarNav />
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-72 p-0">
            <SidebarNav onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <div className="min-w-0 flex-1">
          <Topbar onMenu={() => setOpen(true)} />
          <main className="mx-auto max-w-5xl px-4 py-8 lg:px-10 lg:py-12">
            <Outlet />
          </main>
          <footer className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Carlos Manuel D. Salvador · E-Portfolio · OJT @ L&S
          </footer>
        </div>
      </div>
    </div>
  );
};
