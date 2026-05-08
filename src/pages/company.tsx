import SimplePage from "./SimplePage";
import LSMissVis from "@/assets/LSMissVis.png";


import {
  Building2,
  MapPin,
  Users,
  Calendar,
} from "lucide-react";

import logo from "@/assets/LS-LOGO.jpg";

export const Services = () => (
  <section className="px-6 py-8">
    {/* Top Label */}
    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
      II. Company Profile
    </p>

    {/* Title */}
    <h1 className="text-4xl font-bold text-black">
      Company Overview
    </h1>

    {/* Divider */}
    <div className="my-6 border-t border-gray-200" />

    {/* Main Card */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Logo */}
        <div className="flex h-[340px] w-[340px] items-center justify-center rounded-3xl border border-gray-100 bg-gray-50">
          <img
            src={logo}
            alt="L&S Cable Television Inc."
            className="w-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Company Name */}
          <h2 className="text-3xl font-bold text-black">
            L&S Cable Television Inc.
          </h2>

          {/* Tagline */}
          <p className="mt-2 text-xl italic text-gray-500">
            Cable & Satellite Company
          </p>

          {/* Details */}
          <div className="mt-6 space-y-4 text-lg text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-orange-500" />
              <span>
                0442 Rajah Soliman Street, Brgy. 4, San Jose, Occidental Mindoro, Philippines
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Building2 size={22} className="text-orange-500" />
              <span>
                Cable Television and Internet Service Provider
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Users size={22} className="text-orange-500" />
              <span>Serving residential and commercial customers</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={22} className="text-orange-500" />
              <span>Established in San Jose, Occidental Mindoro</span>
            </div>
          </div>

          {/* Description (FIXED LEFT ALIGN + TIGHTER WIDTH) */}
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-left text-gray-600">
            L&S Cable Television Inc. is a local company based in San Jose,
            Occidental Mindoro that provides cable television, satellite, and
            internet-related services to residential and business customers.
            The company is committed to delivering reliable connectivity,
            quality entertainment services, and customer support to the local
            community.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const Nature = () => (
  <SimplePage
    eyebrow="II. Company Profile"
    title="Nature of the Company"
    body={
      <>
        <p>
          L&S Cable Television Incorporated is a cable television and
          telecommunications service provider operating in Occidental Mindoro.
          The company is engaged in the distribution of cable TV services,
          internet connectivity, and related communication services to
          residential and commercial clients.
        </p>

        <p>
          Its operations include the installation, maintenance, and repair of
          cable lines, internet networks, and communication systems. The company
          also handles customer service concerns, signal troubleshooting, network
          configuration, and field support through technical personnel such as
          linemen and installers.
        </p>

        <p>
          L&S Cable Television Incorporated operates by installing,
          maintaining, and troubleshooting cable lines, network connections, and
          related telecommunications systems to ensure continuous service
          delivery. It performs technical field operations such as cable
          installation, signal distribution, equipment setup, and system repairs
          for residential and business subscribers.
        </p>

        <p>
          The company also supports customer service operations by responding to
          inquiries, processing service requests, and coordinating with field
          technicians for technical concerns. Its operations are supported by
          both office-based personnel and field technicians who carry out
          installation and maintenance activities.
        </p>

        <p>
          Overall, L&S Cable Television Incorporated is a service-oriented
          telecommunications company dedicated to providing reliable cable and
          internet services while maintaining efficient technical support and
          customer satisfaction.
        </p>
      </>
    }
  />
);


export const MissionVision = () => (
  <SimplePage
    eyebrow="II. Company Profile"
    title="Mission & Vision"
    body={
      <div className="space-y-8">
        <div className="portfolio-card flex justify-center">
          <img
            src={LSMissVis}
            alt="Mission and Vision"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    }
  />
);
export const History = () => (
  <SimplePage
    eyebrow="II. Company Profile"
    title="History / Background of the Company"
    description="Overview and background of L&S Cable Television Inc."
    body={
      <div className="space-y-6 text-justify leading-8 text-gray-700">

        {/* Introduction */}
        <div className="portfolio-card space-y-4">
          <h4 className="text-xl font-semibold text-primary">
            Company Background
          </h4>

          <p>
            L&S Cable Television Incorporated is a
            Philippine-based cable television service
            provider engaged in the delivery of
            entertainment and broadcast content to
            households within its coverage areas. The
            company is registered with the Securities
            and Exchange Commission (SEC) and is part
            of the country’s growing cable television
            industry that expanded significantly in the
            late 1990s and early 2000s, when demand for
            multi-channel television services increased
            across urban and semi-urban communities.
          </p>

          <p>
            It was established to provide accessible
            cable TV services, offering local and
            international channels to improve home
            entertainment options for Filipino viewers.
            Over the years, L&S Cable Television
            Incorporated has operated as a regional
            cable television provider, focusing on
            subscription-based services that cater to
            specific localities rather than nationwide
            coverage.
          </p>
        </div>

        {/* Services */}
        <div className="portfolio-card space-y-4">
          <h4 className="text-xl font-semibold text-primary">
            Services and Operations
          </h4>

          <p>
            The company’s services typically include
            channel distribution, entertainment
            programming, and access to a variety of
            television content designed to meet the
            needs of residential subscribers. Like many
            similar cable companies in the Philippines,
            its operations are influenced by local
            franchise agreements and regulatory
            requirements governing telecommunications
            and broadcast services.
          </p>

          <p>
            L&S Cable Television Incorporated continues
            to support local communities by providing
            reliable access to television entertainment
            and information services, particularly in
            areas where alternative media
            infrastructure may still be developing.
          </p>
        </div>

        {/* Industry Evolution */}
        <div className="portfolio-card space-y-4">
          <h4 className="text-xl font-semibold text-primary">
            Industry Growth and Adaptation
          </h4>

          <p>
            The company functions within the broader
            context of the Philippine cable television
            industry, which has evolved alongside
            advancements in media technology and
            changing consumer preferences. As digital
            platforms and streaming services have grown
            in popularity, traditional cable providers
            such as L&S Cable Television have adapted
            by maintaining localized service offerings
            and sustaining their subscriber base
            through established community networks.
          </p>

          <p>
            Despite the challenges brought about by
            digital transformation, the company remains
            part of the continuing evolution of the
            country’s telecommunications and broadcast
            sector. Through its continued operations,
            L&S Cable Television Incorporated
            contributes to expanding media access and
            communication services in the Philippines.
          </p>
        </div>

      </div>
    }
  />
);
export const Organization = () => (
  <SimplePage
    eyebrow="II. Company Profile"
    title="Organization"
    body={
      <div className="space-y-6">
        {/* Content */}
        <div>
          <p className="mb-4">
            L&S Cable Television Incorporated in Occidental Mindoro follows a
            functional organizational structure where responsibilities are
            divided among different departments to ensure smooth and efficient
            operations. At the top of the organization is the Owner or President,
            who oversees the overall management of the company and makes major
            decisions. Supporting this role is the General Manager, who
            supervises daily operations and coordinates all departments to ensure
            proper service delivery.
          </p>

          <p className="mb-4">
            The Administrative or Office Department is responsible for handling
            clerical and support tasks such as record keeping, billing,
            scheduling, and responding to customer inquiries. This department
            also includes customer service personnel who assist clients with
            their concerns and service requests.
          </p>

          <p className="mb-4">
            Meanwhile, the Technical or Operations Department is in charge of the
            installation, maintenance, and repair of cable television and
            internet services. This includes the Technical Supervisor, linemen,
            installers, and field technicians who perform tasks such as cable
            installation, troubleshooting, CCTV setup, and network maintenance.
          </p>

          <p className="mb-4">
            In addition, support staff assist in maintaining tools, equipment,
            and field operations to ensure efficiency during technical work. OJT
            trainees are also part of the workforce in a learning capacity,
            assisting both office and field personnel while gaining hands-on
            experience in administrative and technical tasks under supervision.
          </p>

          <p>
            Overall, the structure of L&S Cable Television Incorporated promotes
            coordination between office and field operations to deliver reliable
            cable television and internet services to its clients.
          </p>
        </div>
      </div>
    }
  />
);


