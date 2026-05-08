import SimplePage from "./SimplePage";
import { useEffect, useRef, useState } from "react";

/* =========================
   ASSESSMENT PAGE
========================= */
// import image sa taas ng file
import eval1 from "@/assets/EVAL1.jpg";

export const Assessment = () => (
  <SimplePage
    eyebrow="IV. Assessment"
    title="A. Student Internship Evaluation Form"
    description="Student Internship Performance Evaluation"
    body={
      <div className="space-y-8">

        {/* Header Section */}
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-2 rounded-full bg-orange-500" />

            <h2 className="text-xl font-bold tracking-wide text-orange-900">
              STUDENT INTERNSHIP PERFORMANCE EVALUATION
            </h2>
          </div>

          <p className="leading-relaxed text-gray-700">
            This section presents the official evaluation of the student’s
            internship performance based on workplace competencies,
            professionalism, discipline, and overall contribution during the
            On-the-Job Training program.
          </p>
        </div>

        {/* Student Details */}
        <div className="rounded-2xl border border-orange-200 bg-white shadow-sm overflow-hidden">

          {/* Header */}
          <div className="border-b border-orange-200 bg-orange-500 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">
              Student Internship Details
            </h3>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6 p-6 text-sm">

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Student Name</p>
              <p className="text-gray-700">
                Carlos Manuel D. Salvador
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Student ID</p>
              <p className="text-gray-700">
                MA-21-IT-01286
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Program/Course</p>
              <p className="text-gray-700">
                BS Information Technology
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Academic Year</p>
              <p className="text-gray-700">
                2025-2026
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">
                Internship Start Date
              </p>
              <p className="text-gray-700">
                February 02, 2025
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">
                Internship End Date
              </p>
              <p className="text-gray-700">
                April 30, 2025
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Company</p>
              <p className="text-gray-700">
                L&S Cable Television Inc.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-orange-700">Supervisor</p>
              <p className="text-gray-700">
                Dan Patrick Sebastian
              </p>
            </div>

          </div>
        </div>

        {/* Performance Evaluation */}
        <div className="rounded-2xl border border-orange-200 bg-white shadow-sm overflow-hidden">

          {/* Header */}
          <div className="border-b border-orange-200 bg-orange-500 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">
              Performance Evaluation
            </h3>
          </div>

          {/* Content */}
          <div className="p-6">

            <div className="mb-8 rounded-xl border border-orange-100 bg-orange-50 px-5 py-4">
              <p className="text-center text-sm font-medium tracking-wide text-orange-800">
                L&S Cable Television Inc. × Occidental Mindoro State College
              </p>
            </div>

            {/* Images */}
            <div className="grid gap-6 md:grid-cols-2">

              <div className="group overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <img
                  src={eval1}
                  alt="Evaluation Form 1"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <img
                  src={eval1}
                  alt="Evaluation Form 2"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <img
                  src={eval1}
                  alt="Evaluation Form 3"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <img
                  src={eval1}
                  alt="Evaluation Form 4"
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    }
  />
);

/* =========================
   APPENDICES DATA
========================= */

const appendixItems = [
  {
    title: "Appendix A: Evaluation Form",
    img: "src/assets/EvaluationForm.jpg",
  },
  {
    title: "Appendix B: Registration Form",
    img: "src/assets/RegistrationForm.jpg",
  },
  {
    title: "Appendix C: Validated ID",
    img: "src/assets/id1.jpg",
  },
  {
    title: "Appendix C: Validated ID",
    img: "src/assets/id2.jpg",
  },
  {
    title: "Appendix D: Parent's Consent",
    img: "src/assets/Parent.jpg",
  },
  {
    title: "Appendix E: Medical Certificate",
    img: "src/assets/MedCert.jpg",
  },
  {
    title: "Appendix F: Good Moral & Application Letter",
    img: "src/assets/GoodMoral.jpg",
  },
  {
    title: "Appendix G: Application Letter",
    img: "src/assets/AppLet.jpg",
  },
  {
    title: "Appendix H: Endorsement Letter",
    img: "src/assets/MOA2.jpg",
  },
  {
    title: "Appendix I: Memorandum of Agreement",
    img: "src/assets/MOA.jpg",
  },
  {
    title: "Appendix I: Memorandum of Agreement",
    img: "src/assets/MOA2.jpg",
  },
  {
    title: "Appendix J: Daily Time Record (DTR)",
    img: "src/assets/DTR.jpg",
  },
  {
    title: "Appendix K: Certificate of Completion",
    img: "src/assets/FAKECERT.png",
  },
  {
    title: "Appendix L: Certificate of Clearance",
    img: "https://picsum.photos/seed/L/800/600",
  },
  {
    title: "Appendix M: Pre-service Seminar Photos",
    img: "src/assets/PRE-SEM.jpg",
  },
  {
    title: "Appendix N: Office Works Documentation",
    img: "https://picsum.photos/seed/N/800/600",
  },
  {
    title: "Appendix O: Code of Ethics",
    img: "https://picsum.photos/seed/O/800/600",
  },
  {
    title: "Appendix P: Curriculum Vitae",
    img: "src/assets/CV1.jpg",
  },
  {
    title: "Appendix P: Curriculum Vitae",
    img: "src/assets/CV2.jpg",
  },
  {
    title: "Appendix Q: Portfolio Evaluation Form",
    img: "src/assets/EVAL1.jpg",
  },
];
/* =========================
   COMPONENT
========================= */
export const Appendices = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<null | (typeof appendixItems)[0]>(
    null,
  );

  /* AUTO SCROLL */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let scroll = 0;
    let frame: number;

    const animate = () => {
      scroll += 0.5; // smooth speed

      if (scroll >= el.scrollWidth / 2) {
        scroll = 0;
      }

      el.scrollLeft = scroll;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <SimplePage
      eyebrow="V. Appendices"
      title="Supporting Documentation"
      description="This page contains all supporting documents relevant to the On-the-Job Training experience, including official forms, certifications, and visual documentation of the internship."
      body={
        <div className="space-y-10">
          {/* =========================
              CAROUSEL (TOP HIGHLIGHT)
          ========================= */}
          <div className="relative portfolio-card overflow-hidden">
            {/* fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div
              ref={trackRef}
              className="flex gap-5 overflow-hidden whitespace-nowrap py-2"
            >
              {[...appendixItems, ...appendixItems].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(item)}
                  className="min-w-[260px] cursor-pointer group rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to view
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              FULL LIST (VISIBLE ALL)
          ========================= */}
          <div className="portfolio-card">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Complete Appendix List
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              {appendixItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(item)}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:bg-accent cursor-pointer transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              MODAL VIEWER
          ========================= */}
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <div
                className="w-full max-w-5xl rounded-2xl overflow-hidden bg-background shadow-2xl border border-border"
                onClick={(e) => e.stopPropagation()}
              >
                {/* HEADER */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <p className="font-semibold text-foreground">
                      {selected.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Document Preview
                    </p>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="text-sm px-3 py-1 rounded-lg bg-accent hover:bg-accent/80 transition"
                  >
                    Close
                  </button>
                </div>

                {/* IMAGE */}
                <div className="bg-black flex items-center justify-center">
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="max-h-[80vh] w-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};
