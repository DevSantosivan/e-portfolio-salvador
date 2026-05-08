import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  Building2,
  Briefcase,
  ClipboardCheck,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import omscLogo from "@/assets/omsc-logo.png";

type Item = { to: string; label: string };
type Section = {
  roman?: string;
  title: string;
  icon: React.ElementType;
  items?: Item[];
  to?: string;
};

const sections: Section[] = [
  { title: "Title Page", icon: Home, to: "/" },
  {
    roman: "I.",
    title: "Introduction",
    icon: BookOpen,
    items: [
      { to: "/introduction/importance", label: "Importance of Internship" },
      { to: "/introduction/objectives", label: "Objectives" },
      { to: "/introduction/time-place", label: "Time and Place" },
    ],
  },
  {
    roman: "II.",
    title: "Company Profile",
    icon: Building2,
    items: [
  { to: "/company/services", label: "Company Overview" },
  { to: "/company/nature", label: "Nature of Company" },
  { to: "/company/mission-vision", label: "Mission / Vision" },
  { to: "/company/history", label: "History" },
  { to: "/company/organization", label: "Organization" },
],
  },
  {
    roman: "III.",
    title: "Work Experiences",
    icon: Briefcase,
    items: [
      { to: "/work/weekly-reports", label: "Weekly Reports" },
      { to: "/work/dtr", label: "Daily Time Record" },
      { to: "/work/progress", label: "Progress Report" },
      { to: "/work/analysis", label: "Analysis Report" },
    ],
  },
  {
    roman: "IV.",
    title: "Assessment",
    icon: ClipboardCheck,
    to: "/assessment",
  },
  { roman: "V.", title: "Appendices", icon: FolderOpen, to: "/appendices" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "block rounded-lg px-3 py-2 text-sm transition-colors",
    isActive
      ? "bg-primary text-primary-foreground font-medium"
      : "text-sidebar-foreground hover:bg-sidebar-accent",
  );

export const SidebarNav = ({ onNavigate }: { onNavigate?: () => void }) => {
  return (
    <aside className="flex h-full w-full flex-col bg-sidebar">
      <div className="border-b border-sidebar-border px-6 py-5">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          E-Portfolio
        </p>
        <h2 className="mt-1 font-semibold text-sidebar-foreground">
          Carlos Manuel D. Salvador
        </h2>
        <p className="text-xs text-muted-foreground">OJT Trainee · L&S </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map((s) => (
          <div key={s.title} className="mb-3">
            {s.to ? (
              <NavLink to={s.to} end onClick={onNavigate} className={linkClass}>
                <span className="inline-flex items-center gap-2">
                  <s.icon className="h-4 w-4" />
                  {s.roman && (
                    <span className="text-xs opacity-70">{s.roman}</span>
                  )}
                  {s.title}
                </span>
              </NavLink>
            ) : (
              <>
                <div className="mb-1 flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <s.icon className="h-3.5 w-3.5 text-primary" />
                  <span>{s.roman}</span>
                  <span>{s.title}</span>
                </div>
                <div className="ml-2 space-y-0.5 border-l border-sidebar-border pl-2">
                  {s.items?.map((it) => (
                    <NavLink
                      key={it.to}
                      to={it.to}
                      onClick={onNavigate}
                      className={linkClass}
                    >
                      {it.label}
                    </NavLink>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="m-3 rounded-xl border border-sidebar-border bg-card p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-background p-1">
            <img
              src={omscLogo}
              alt="OMSC logo"
              className="h-full w-full object-contain"
              width={512}
              height={512}
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">OMSC</p>
            <p className="text-xs leading-tight text-muted-foreground">
              Occidental Mindoro State College
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
