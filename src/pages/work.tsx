import { PageHeader } from "@/components/portfolio/PageHeader";
import SimplePage from "./SimplePage";
import {
  CalendarDays,
  Clock3,
  BriefcaseBusiness,
  MonitorSmartphone,
  Wrench,
  Network,
  Settings2,
  FileText,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";

import w1 from "@/assets/week1.jpg";
import w2 from "@/assets/week2.jpg";
import w3 from "@/assets/week3.jpg";
import w4 from "@/assets/week4.jpg";
import w5 from "@/assets/week5.jpg";
import w6 from "@/assets/week6.jpg";

const weeks = [
  {
    week: "Week 1",
    focus: "February 2-6",
    hours: 40,
    icon: BriefcaseBusiness,
    image: w1,
    description:
      "•	Encoding daily transactions and updating clients data	"
  },
  {
    week: "Week 2",
    focus: "February 9-13",
    hours: 40,
    icon: ClipboardCheck,
    image: w2,
    description:
      "•	CCTV system installation. "
  },
  {
    week: "Week 3",
    focus: "February 16-20",
    hours: 40,
    icon: FileText,
    image: w3,
    description:
      "•	Filing and organizing documents."
  },
  {
    week: "Week 4",
    focus: "February 22-27",
    hours: 40,
    icon: Wrench,
    image: w4,
    description:
      "•	Assisting in troubleshooting basic computer issues. "
  },
  {
    week: "Week 5",
    focus: "March 2-6",
    hours: 40,
    icon: Network,
    image: w5,
    description:
      "•	Observing internet connectivity processes and understanding how online services are delivered to clients."
  },
  {
    week: "Week 6",
    focus: "March 9-13",
    hours: 40,
    icon: Settings2,
    image: w6,
    description:
      "•	Rebooting the router."
  },
];

export const WeeklyReports = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="III. Work Experiences"
      title="Weekly Reports"
      description="A formal summary of assigned tasks, technical exposure, and learning experiences throughout the internship program."
    />

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {weeks.map((w) => {
        const Icon = w.icon;

        return (
          <div
            key={w.week}
            className="group relative overflow-hidden rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-100 blur-3xl transition-all duration-300 group-hover:bg-orange-200" />

            <div className="relative z-10">
              <div className="mb-5 overflow-hidden rounded-2xl border border-orange-100">
                <img
                  src={w.image}
                  alt={w.week}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-700">
                  {w.hours} Hours
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                  {w.week}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-relaxed text-gray-900">
                  {w.focus}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {w.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const dtr = [
  { date: "Monday", in: "8:00 AM", out: "5:00 PM" },
  { date: "Tuesday", in: "8:00 AM", out: "5:00 PM" },
  { date: "Wednesday", in: "8:00 AM", out: "5:00 PM" },
  { date: "Thursday", in: "8:00 AM", out: "5:00 PM" },
  { date: "Friday", in: "8:00 AM", out: "5:00 PM" },
];

export const DTR = () => (
  <div className="space-y-8">
    <PageHeader
      eyebrow="III. Work Experiences"
      title="Daily Time Record"
      description="Official sample record of attendance and internship working hours."
    />

    <div className="overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-orange-100 bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-5 text-white">
        <div>
          <h2 className="text-xl font-semibold">Internship Attendance Log</h2>
          <p className="mt-1 text-sm text-orange-100">
            Monitoring of daily attendance and working schedule
          </p>
        </div>

        <div className="hidden rounded-2xl bg-white/15 p-3 backdrop-blur-sm md:block">
          <CalendarDays className="h-8 w-8" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-orange-700">Day</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-orange-700">Time In</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-orange-700">Time Out</th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-orange-700">Total Hours</th>
            </tr>
          </thead>

          <tbody>
            {dtr.map((r, index) => (
              <tr
                key={r.date}
                className={`transition-colors hover:bg-orange-50 ${
                  index !== dtr.length - 1 ? "border-b border-orange-100" : ""
                }`}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-gray-800">{r.date}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-gray-600">{r.in}</td>
                <td className="px-6 py-5 text-gray-600">{r.out}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700">
                    8 Hours
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

import PR1 from "@/assets/PR1.jpg";
import PR2 from "@/assets/PR2.jpg";
import PR3 from "@/assets/PR3.jpg";

export const Progress = () => (
  <SimplePage
    eyebrow="III. Work Experiences"
    title="Progress Report"
    body={
      <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg">
        
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
            <TrendingUp className="h-8 w-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Internship Development Progress
            </h2>
            <p className="text-sm text-gray-500">
              Growth and improvements throughout the training period
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-5 text-[15px] leading-8 text-gray-700 mb-8">
          <p>
            Throughout the internship program, I demonstrated continuous improvement...
          </p>
          <p>
            As the training progressed, I became more actively involved in IT support operations...
          </p>
          <p>
            By the latter phase of the internship, I was able to independently handle routine technical concerns...
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={PR1}
              alt="Progress Report 1"
              className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={PR2}
              alt="Progress Report 2"
              className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={PR3}
              alt="Progress Report 3"
              className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>

      </div>
    }
  />
);

export const Analysis = () => (
  <SimplePage
    eyebrow="III. Work Experiences"
    title="Analysis Report"
    body={
      <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
            <MonitorSmartphone className="h-8 w-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Internship Analysis</h2>
            <p className="text-sm text-gray-500">Reflection on technical learning and workplace experience</p>
          </div>
        </div>

        <div className="space-y-5 text-[15px] leading-8 text-gray-700">
          <p>The internship experience emphasized the importance of strong technical fundamentals...</p>
          <p>One of the most valuable lessons gained during the training was systematic troubleshooting...</p>
          <p>Furthermore, the internship strengthened my understanding that successful IT professionals...</p>
        </div>
      </div>
    }
  />
);
