import SimplePage from "./SimplePage";
import { useEffect, useRef, useState } from "react";

import {
  FileText,
  Mail,
  Facebook,
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  Wrench,
  Sparkles,
  Target,
  GraduationCap,
  User,
  Phone,
  Globe,
  IdCard,
  LucideIcon,
} from "lucide-react";

/* =========================
   ASSESSMENT IMAGES
========================= */
import eval1 from "@/assets/EVAL1.jpg";

/* =========================
   APPENDICES IMAGES
========================= */
import EvaluationForm from "@/assets/EvaluationForm.jpg";
import RegistrationForm from "@/assets/RegistrationForm.jpg";

import ID1 from "@/assets/id1.jpg";
import ID2 from "@/assets/id2.jpg";

import ParentConsent from "@/assets/Parent.jpg";
import MedCert from "@/assets/MedCert.jpg";

import GoodMoral from "@/assets/GoodMoral.jpg";
import AppLet from "@/assets/AppLet.jpg";

import MOA from "@/assets/MOA.jpg";
import MOA2 from "@/assets/MOA2.jpg";

import DTR from "@/assets/DTR.jpg";
import FakeCert from "@/assets/FAKECERT.png";

import PreSem from "@/assets/PRE-SEM.jpg";

import CV1 from "@/assets/CV1.jpg";
import CV2 from "@/assets/CV2.jpg";

/* =========================
   ASSESSMENT PAGE
========================= */

export const Assessment = () => (
  <SimplePage
    eyebrow="IV. Assessment"
    title="A. Student Internship Evaluation Form"
    description="Student Internship Performance Evaluation"
    body={
      <div className="space-y-8">
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-2 rounded-full bg-orange-500" />
            <h2 className="text-xl font-bold tracking-wide text-orange-900">
              STUDENT INTERNSHIP PERFORMANCE EVALUATION
            </h2>
          </div>

          <p className="leading-relaxed text-gray-700">
            This section presents the official evaluation of the student’s
            internship performance.
          </p>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-orange-200 bg-orange-500 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">
              Student Internship Details
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6 text-sm">
            <div>
              <p className="font-semibold text-orange-700">Student Name</p>
              <p>Carlos Manuel D. Salvador</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Student ID</p>
              <p>MA-21-IT-01286</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Program</p>
              <p>BS Information Technology</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Company</p>
              <p>L&S Cable Television Inc.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-orange-200 bg-orange-500 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">
              Performance Evaluation
            </h3>
          </div>

          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[eval1, eval1, eval1, eval1].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-orange-200 shadow-sm"
                >
                  <img src={img} className="h-72 w-full object-cover" />
                </div>
              ))}
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
  { title: "Appendix A: Evaluation Form", img: EvaluationForm },
  { title: "Appendix B: Registration Form", img: RegistrationForm },
  { title: "Appendix C: Validated ID (Front)", img: ID1 },
  { title: "Appendix C: Validated ID (Back)", img: ID2 },
  { title: "Appendix D: Parent's Consent", img: ParentConsent },
  { title: "Appendix E: Medical Certificate", img: MedCert },
  { title: "Appendix F: Good Moral & Application Letter", img: GoodMoral },
  { title: "Appendix G: Application Letter", img: AppLet },
  { title: "Appendix H: Endorsement Letter", img: MOA2 },
  { title: "Appendix I: Memorandum of Agreement", img: MOA },
  { title: "Appendix J: Daily Time Record (DTR)", img: DTR },
  { title: "Appendix K: Certificate of Completion", img: FakeCert },
  { title: "Appendix L: Certificate of Clearance", img: FakeCert },
  { title: "Appendix M: Pre-service Seminar", img: PreSem },
  { title: "Appendix N: Office Works", img: PreSem },
  { title: "Appendix P: Curriculum Vitae (1)", img: CV1 },
  { title: "Appendix P: Curriculum Vitae (2)", img: CV2 },
  { title: "Appendix Q: Portfolio Evaluation", img: eval1 },
];

/* =========================
   APPENDICES COMPONENT
========================= */

export const Appendices = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<null | (typeof appendixItems)[0]>(
    null,
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let scroll = 0;
    let frame: number;

    const animate = () => {
      scroll += 0.5;
      if (scroll >= el.scrollWidth / 2) scroll = 0;

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
      description="All internship documents and attachments."
      body={
        <div className="space-y-10">
          {/* CAROUSEL */}
          <div className="portfolio-card overflow-hidden relative">
            <div
              className="flex gap-5 overflow-hidden whitespace-nowrap"
              ref={trackRef}
            >
              {[...appendixItems, ...appendixItems].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(item)}
                  className="min-w-[260px] cursor-pointer rounded-2xl overflow-hidden border shadow-sm"
                >
                  <img src={item.img} className="h-44 w-full object-cover" />
                  <div className="p-3 text-sm font-medium">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LIST */}
          <div className="portfolio-card">
            <h3 className="mb-4 font-semibold">Complete List</h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {appendixItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(item)}
                  className="flex gap-3 p-3 border rounded-xl cursor-pointer hover:bg-accent"
                >
                  <img
                    src={item.img}
                    className="h-12 w-12 rounded object-cover"
                  />
                  <p className="text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MODAL */}
          {selected && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="bg-white max-w-5xl w-full rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b flex justify-between">
                  <p>{selected.title}</p>
                  <button onClick={() => setSelected(null)}>Close</button>
                </div>
                <img
                  src={selected.img}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};
