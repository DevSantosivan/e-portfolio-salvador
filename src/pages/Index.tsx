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

import { Button } from "@/components/ui/button";
import campusBg from "@/assets/omsc-campus.jpg";
import PrayerImg from "@/assets/Prayer.png";

/**
 * Reusable type for profile items
 */
type ProfileItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

/**
 * PROFILE INFORMATION (Work / Academic)
 */
export const profileItems: ProfileItem[] = [
  {
    icon: IdCard,
    label: "Student ID",
    value: "MA21-01286",
  },
  {
    icon: Building2,
    label: "Company",
    value: "L&S Cable Television Inc.",
  },
  {
    icon: Briefcase,
    label: "Role",
    value: "OJT Trainee",
  },
  {
    icon: Wrench,
    label: "Skills",
    value: "IT Support · Documentation · Troubleshooting",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Jose, Occidental Mindoro, Philippines",
  },
  {
    icon: GraduationCap,
    label: "Course & Year",
    value: "Bachelor of Science in Information Technology, 4th Year",
  },
];

/**
 * PERSONAL INFORMATION
 */
export const personalInfo: ProfileItem[] = [
  {
    icon: User,
    label: "Gender",
    value: "Male",
  },
  {
    icon: Calendar,
    label: "Age",
    value: "23 Years Old",
  },
  {
    icon: Phone,
    label: "Contact",
    value: "0924 546 4840",
  },
  {
    icon: Mail,
    label: "Email",
    value: "carlossalvador.bsit@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Philippines",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "Filipino · English",
  },
];

const careerPlan = [
  "Become a well-rounded IT professional",
  "Continuously improve technical and analytical skills",
  "Gain meaningful real-world industry experience",
];

const Index = () => {
  return (
    <div className="space-y-16">
      {/* 1. TITLE / HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-border">
        <img
          src={campusBg}
          alt="Occidental Mindoro State College campus"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1024}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/65 to-background/40 dark:from-background/95 dark:via-background/85 dark:to-background/30" />

        {/* 🌟 FLOATING CIRCLES (IMPROVED SPACING + HIGHER POSITION) */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-end gap-10 z-20 pointer-events-none">
          
          {/* Left small circle */}
          <div className="h-24 w-24 sm:h-18 sm:w-18 rounded-full bg-white/80 shadow-lg border overflow-hidden flex items-center justify-center">
            <img
              src="/src/assets/CAST-LOGO.png"
              alt="Logo 1"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Middle big circle */}
          <div className="h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-white/90 shadow-2xl border-1 border-primary overflow-hidden flex items-center justify-center -translate-y-1">
            <img
              src="/src/assets/omsc-logo.png"
              alt="Logo 2"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right small circle */}
          <div className="h-18 w-18 sm:h-20 sm:w-20 rounded-full bg-white/80 shadow-lg border overflow-hidden flex items-center justify-center">
            <img
              src="/src/assets/LS-LOGO.jpg"
              alt="Logo 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center pt-28 sm:pt-32">
          <div>
            <span className="pink-chip">
              COLLEGE OF ARTS, SCIENCE, AND TECHNOLOGY
            </span>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary sm:text-base">
              On-The-Job-Training
            </p>

            <h1 className="mt-2 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Carlos Manuel D. <span className="text-primary">Salvador</span>
            </h1>

            <p className="mt-3 text-base font-medium text-foreground sm:text-lg">
              Occidental Mindoro State College — {" Bachelor of Science in Information Technology"}
              <span className="text-muted-foreground">
                
              </span>
            </p>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              OJT Trainee at {""}
              <span className="font-medium text-foreground">
              L&S Cable Television Inc.
              </span>{" "}
              — exploring IT support, documentation and the craft of solving real problems.
            </p>

            
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-3 rounded-2xl bg-primary/30 blur-2xl" />
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <img
                src="/src/assets/PROFILE-Carlos.jpg"
                alt="Carlos Manuel D. Salvador portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL INFORMATION */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
          Personal Information
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {personalInfo.map((p) => (
            <div
              key={p.label}
              className="portfolio-card flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.label}
                </p>
                <p className="truncate font-medium">{p.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFILE CARDS */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
          Profile
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profileItems.map((p) => (
            <div key={p.label} className="portfolio-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.label}
                  </p>
                  <p className="font-medium">{p.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Table of Contents */}
      {/* TABLE OF CONTENTS */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
          Table of Contents
        </h2>

        <div className="portfolio-card space-y-6">
          {/* Front Matter */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Front Matter
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Title Page</p>
              <p>Table of Contents</p>
              <p>Acknowledgment</p>
              <p>Student Trainee Prayer</p>
              <p>Personal Philosophy</p>
              <p>Career Plan</p>
            </div>
          </div>

          {/* Chapter I */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Chapter I: Introduction
            </p>
            <div className="space-y-2 text-sm text-muted-foreground pl-3 border-l border-border">
              <p>A. Importance of Internship</p>
              <p>B. Objectives of Internship</p>
              <p>C. Time and Place</p>
            </div>
          </div>

          {/* Chapter II */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Chapter II: Company Profile
            </p>
            <div className="space-y-2 text-sm text-muted-foreground pl-3 border-l border-border">
              <p>A. Nature of the Agency</p>
              <p>B. Mission / Vision / Goal Statement</p>
              <p>C. History / Background of the Agency</p>
              <p>D. Organizational Structure</p>
            </div>
          </div>

          {/* Chapter III */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Chapter III: Work Experiences
            </p>
            <div className="space-y-2 text-sm text-muted-foreground pl-3 border-l border-border">
              <p>A. Weekly Accomplishment Report</p>
              <p>B. Daily Time Record</p>
              <p>C. Internship Progress Report</p>
              <p>D. Internship Analysis Report</p>
            </div>
          </div>

          {/* Chapter IV */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Chapter IV: Assessment of Practicum Program
            </p>
            <div className="space-y-2 text-sm text-muted-foreground pl-3 border-l border-border">
              <p>A. Student Internship Evaluation Form</p>
            </div>
          </div>

          {/* Appendices */}
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
              Appendices
            </p>
            <div className="space-y-2 text-sm text-muted-foreground pl-3 border-l border-border">
              <p>Appendix A: Evaluation Form</p>
              <p>Appendix B: Photocopy Registration Form</p>
              <p>Appendix C: Photocopy Validated ID</p>
              <p>Appendix D: Parent's Consent</p>
              <p>Appendix E: Medical Certificate</p>
              <p>
                Appendix F: Certificate of Good Moral Character & Application
                Letter
              </p>
              <p>Appendix G: Application Letter</p>
              <p>Appendix H: Endorsement Letter</p>
              <p>Appendix I: Memorandum of Agreement</p>
              <p>Appendix J: Daily Time Record (Time Card)</p>
              <p>Appendix K: Certificate of Completion</p>
              <p>Appendix L: Certificate of Clearance</p>
              <p>Appendix M: Pictures during Pre-service Seminar</p>
              <p>Appendix N: Pictures during Office Works</p>
              <p>Appendix O: Code of Ethics for CAST Student Internship</p>
              <p>Appendix P: Curriculum Vitae</p>
              <p>Appendix Q: OJT Portfolio Evaluation Form</p>
            </div>
          </div>
        </div>
      </section>
      {/* 2. ACKNOWLEDGEMENT */}
      <section>
  <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
    Acknowledgement
  </h2>

  <div className="portfolio-card leading-relaxed text-muted-foreground space-y-4">
    <p>
      I would like to express my sincere gratitude to everyone who made my
      On-the-Job Training experience meaningful and impactful.
    </p>

    <p>
      First and foremost, I thank Almighty God for granting me wisdom,
      knowledge, and strength each day, for all the graces and blessings, and
      for His continuous guidance and good health that enabled me to perform my
      tasks and successfully complete my On-the-Job Training.
    </p>

    <p>
      I am profoundly grateful to the Occidental Mindoro State College for
      their continued support in facilitating internship opportunities for
      students like me. Your commitment to academic and professional growth is
      truly appreciated.
    </p>

    <p>
      I would also like to extend my heartfelt appreciation to my OJT
      instructor,{" "}
      <span className="text-primary font-semibold">
        Ms. Marites D. Escultor
      </span>
      , for her perseverance in assisting, teaching, and monitoring us before,
      during, and after our OJT hours. Your advice and guidance will greatly
      help me in achieving my goals as I continue on my life’s path.
    </p>

    <p>
      My sincere thanks go to{" "}
      <span className="text-primary font-semibold">
        Mr. Dan Patrick Sebastian
      </span>
      , Head Manager of L&S Cable Television Incorporated, along with all the
      L&S staff, for their guidance, support, and for sharing their valuable
      knowledge and skills. Your mentorship and the life lessons you imparted
      will undoubtedly be valuable in my future career.
    </p>

    <p>
      To my family, friends, and classmates, thank you for your encouragement
      from the beginning of this journey, for keeping me motivated, and for your
      unconditional love, as well as your financial, emotional, and spiritual
      support.
    </p>

    <p>
      To all who contributed to the success of my On-the-Job Training, your
      support will always be remembered and deeply appreciated.
    </p>
  </div>
</section>

      {/* 3. STUDENT TRAINEE PRAYER */}
      {/* 3. STUDENT TRAINEE PRAYER */}
      

<section>
  <h2 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-primary">
    Student Trainee Prayer
  </h2>

  <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-accent/40 p-8 flex justify-center">
    <img
      src={PrayerImg}
      alt="Student Trainee Prayer"
      className="max-w-full h-auto rounded-lg"
    />
  </div>
</section>

      {/* 4. PERSONAL PHILOSOPHY */}
      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
          Personal Philosophy
        </h2>

        <div className="portfolio-card leading-relaxed text-muted-foreground space-y-4">
          <p>
            My personal philosophy in life is grounded in{" "}
            <span className="text-primary font-medium">continuous growth</span>,{" "}
            <span className="text-primary font-medium">integrity</span>, and{" "}
            <span className="text-primary font-medium">faith</span>. I believe
            that every experience, whether a success or a challenge, is an
            opportunity to learn and become a better version of myself. I strive
            to approach each task with dedication, responsibility, and a
            willingness to improve.
          </p>

          <p>
            I value honesty and respect in all that I do, understanding that
            true success is not only measured by achievements but also by the
            character I build along the way. I believe in treating others with
            kindness and professionalism, fostering positive relationships
            wherever I go.
          </p>

          <p>
            Faith plays a central role in my journey. I trust that God guides my
            path and gives me the strength and wisdom to overcome obstacles.
            With this, I remain hopeful and determined, knowing that every step
            I take is part of a greater purpose.
          </p>

          <p>
            As I continue to grow personally and professionally, I commit to
            carrying these values with me— working hard, staying humble, and
            never ceasing to learn.
          </p>
        </div>
      </section>
      {/* 5. CAREER PLAN */}
      <section>
  <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
    Career Plan
  </h2>

  <div className="portfolio-card leading-relaxed text-muted-foreground space-y-4">
    <p>
      To build a stable and growth-oriented career in the field of Information
      Technology by applying my technical knowledge and skills in a
      professional work environment, while continuously improving my
      competencies and contributing to organizational success and my family’s
      future.
    </p>

    <p>
      After graduation, my primary objective is to prepare for and pass the
      Civil Service Examination in order to qualify for government employment.
      At the same time, I will actively seek job opportunities that will allow
      me to gain practical experience and further develop my professional
      skills. I plan to apply for office-based positions where I can maximize
      my IT knowledge, such as administrative support, technical assistance,
      data management, encoding, and other computer-related tasks that will
      enhance both my technical and organizational abilities.
    </p>

    <p>
      I am also willing to participate in short vocational trainings, seminars,
      and certification programs to continuously improve my competencies and to
      better identify the career path that best suits my skills and interests. I
      aspire to work in a professional, organized, and positive work environment
      where I can grow, develop my abilities, and contribute meaningfully to the
      success of the organization.
    </p>

    <p>
      In the long term, I aim to pursue better career opportunities in urban
      areas where there are greater chances for advancement, learning, and
      professional growth. If given the opportunity, I am also open to working
      abroad to gain international experience, enhance my skills further, and
      provide greater financial support for my family.
    </p>

    <p>
      Ultimately, I aspire to become a successful and competent IT professional
      in an office or corporate setting, where I can fully apply my knowledge
      and skills. Through continuous learning and dedication, I aim to achieve
      long-term career stability, personal growth, and the ability to support my
      family and improve our quality of life.
    </p>
  </div>
</section>
    </div>
  );
};

export default Index;
