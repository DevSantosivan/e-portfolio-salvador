import SimplePage from "./SimplePage";

export const Importance = () => (
  <SimplePage
    eyebrow="I. INTRODUCTION"
    title="A. Importance of Internship"
    description="Understanding the value of on-the-job training in career preparation."
    body={
      <div className="space-y-5 leading-relaxed text-foreground">
        <div className="rounded-xl border border-border bg-accent/20 p-5">
          <p>
            On-the-Job Training (OJT), also known as internship, is an essential
            requirement in the academic curriculum for all fourth-year college
            students. It serves as preparation for future careers by providing
            the opportunity to experience real workplace settings and gain
            practical knowledge and skills related to their chosen field.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <p>
            Through this training, students are able to understand how
            organizations operate in actual work environments and become
            familiar with the responsibilities, tasks, and expectations of
            professionals. It also helps develop important values such as
            discipline, responsibility, and professionalism.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <p>
            Internship also plays a significant role in shaping students’
            attitudes by building confidence, adaptability, and critical
            thinking as they encounter different work situations and challenges.
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
          <p>
            Furthermore, OJT prepares students to become globally competitive
            individuals who can meet industry standards and perform effectively
            under pressure, while practicing proper communication, teamwork,
            time management, and ethical behavior in the workplace.
          </p>
        </div>
      </div>
    }
  />
);

export const Objectives = () => (
  <SimplePage
    eyebrow="I. INTRODUCTION"
    title="B. Objectives of Internship"
    description="Guiding students toward skills, competence, and professional growth."
    body={
      <div className="space-y-6 text-foreground leading-relaxed">
        {/* Intro */}
        <div className="rounded-xl border border-border bg-accent/20 p-5">
          <p>
            The internship aims to provide students with hands-on experience in
            real work settings while integrating their academic knowledge and
            skills.
          </p>
        </div>

        {/* Items */}
        <div className="grid gap-4 md:grid-cols-1">
          <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
            <p>
              a. Provide students the opportunity to be exposed to real work
              environments with the integration of their academic learning.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
            <p>
              b. Develop and instill values such as positive work attitude, good
              relationships with co-workers, technical proficiency based on
              their field of study, and willingness to learn.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
            <p>
              c. Allow students to gain confidence, competence, and satisfaction
              through applying their knowledge in solving real-life industrial
              problems and scenarios.
            </p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
          <p>
            Overall, the internship helps students become more prepared,
            capable, and confident in handling real-world work situations.
          </p>
        </div>
      </div>
    }
  />
);

export const TimePlace = () => (
  <SimplePage
    eyebrow="I. INTRODUCTION"
    title="C. Time and Place of Agency"
    description="Internship details including location, duration, and schedule."
    body={
      <div className="space-y-6 text-foreground leading-relaxed">
        {/* Agency */}
        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <p className="font-semibold text-primary">🏢 Agency</p>
          <p>L&S Cable Television Incorporated</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Rajah Soliman St., Barangay 4, San Jose, Occidental Mindoro
          </p>
        </div>

        {/* Duration */}
        <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
          <p className="font-semibold text-primary">📅 Duration</p>
          <p>February 2, 2026 – April 30, 2026</p>
          <p className="text-sm text-muted-foreground">Total: 486 Hours</p>
        </div>

        {/* Schedule */}
        <div className="rounded-xl border border-border bg-accent/10 p-5">
          <p className="font-semibold text-primary">⏰ Work Schedule</p>

          <div className="mt-3 space-y-2 text-sm">
            <p className="font-semibold">Morning</p>
            <p>8:00 AM – 12:00 PM (Monday – Friday)</p>

            <p className="font-semibold mt-2">Afternoon</p>
            <p>1:00 PM – 5:00 PM (Monday – Friday)</p>
          </div>
        </div>

        {/* Description */}
        <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
          <p>
            During the internship, the trainee was exposed to actual workplace
            operations, allowing the development of technical skills, work
            discipline, and professional behavior in a real-world environment.
          </p>
        </div>
      </div>
    }
  />
);