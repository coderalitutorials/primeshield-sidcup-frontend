


// import React from 'react'
// import AboutStorySection from '../components/AboutStorySection'
// import AboutPassionSection from '../components/AboutPassionSection'
// import MissionVisionSection from '../components/MissionVisionSection'
// import AboutCommitmentSection from '../components/AboutCommitmentSection'

// const About = () => {
//   return (
//     <>
//     <AboutStorySection/>
//     <AboutPassionSection/>
//     <MissionVisionSection/>
//     <AboutCommitmentSection/>
//     </>
//   )
// }

// export default About























// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Check,
//   ShieldCheck,
//   Search,
//   Home,
//   Building2,
//   MapPin,
//   Phone,
//   Bug,
//   Rat,
//   Activity,
//   ClipboardCheck,
// } from "lucide-react";

// export default function AboutPrimeShieldBromley() {
//   const phone = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";

//   const pestServices = [
//     {
//       icon: Rat,
//       title: "Rat & Mice Control",
//       text: "Professional inspection and targeted control for signs of rodents around homes, gardens, lofts, kitchens and commercial premises.",
//     },
//     {
//       icon: Bug,
//       title: "Bed Bug Treatment",
//       text: "A structured approach to identifying bed bug activity and treating affected areas with careful attention to hiding places and surrounding spaces.",
//     },
//     {
//       icon: Activity,
//       title: "Wasp Nest Removal",
//       text: "Safe and controlled wasp nest treatment for properties where active nests are creating a nuisance or safety concern.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "General Pest Control",
//       text: "Practical pest management for common household and business pest problems, with solutions based around the individual property.",
//     },
//   ];

//   const process = [
//     {
//       number: "01",
//       title: "Understand the Problem",
//       text: "We begin by listening to what you have noticed and gathering the details needed to understand where the pest activity may be coming from.",
//     },
//     {
//       number: "02",
//       title: "Inspect the Property",
//       text: "The affected areas are assessed carefully for visible signs, activity, access points and conditions that may be allowing pests to remain.",
//     },
//     {
//       number: "03",
//       title: "Plan the Treatment",
//       text: "Once the situation is clearer, the appropriate treatment approach can be selected according to the pest, location and circumstances.",
//     },
//     {
//       number: "04",
//       title: "Treat & Reduce Activity",
//       text: "Treatment is carried out in a controlled and professional manner, with the aim of bringing the pest problem back under control.",
//     },
//     {
//       number: "05",
//       title: "Prevention & Advice",
//       text: "Where appropriate, we highlight practical steps that can help reduce the chance of the same pest problem returning.",
//     },
//   ];

//   return (
//     <main className="bg-white text-[#292929] mt-20 font-sans">
//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative min-h-[620px] md:min-h-[720px] overflow-hidden">
//         <img
//           src="/images/about-primeshield-banner.webp"
//           alt="PrimeShield Services Bromley professional pest control"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-[#292929]/75" />

//         <div className="absolute top-0 left-0 h-2 w-full bg-[#F47B2B]" />

//         <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-6 py-20 md:min-h-[720px] md:px-10 md:py-24 lg:px-12">
//           <div className="max-w-4xl">
//             <div className="mb-7 inline-flex items-center gap-3 border border-white/30 bg-white/10 px-5 py-3 backdrop-blur-sm">
//               <ShieldCheck size={18} className="text-[#F47B2B]" />
//               <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//                 About PrimeShield Services Bromley
//               </span>
//             </div>

//             <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
//               Professional pest control with a clear, practical approach.
//             </h1>

//             <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
//               PrimeShield Services Bromley provides professional pest control
//               for homes and businesses across Bromley. We focus on
//               understanding the problem properly, treating the affected area
//               and helping customers regain control of their property.
//             </p>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <a
//                 href={`tel:${phone.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <Phone size={19} />
//                 Call {phone}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-3 border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 Arrange an Enquiry
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO / COMPANY
//       ========================================================== */}
//       <section className="bg-white py-20 md:py-28">
//         <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
//           <div>
//             <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//               Who We Are
//             </span>

//             <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight md:text-5xl">
//               A local pest control service built around the property, not a
//               one-size-fits-all solution.
//             </h2>
//           </div>

//           <div className="max-w-3xl">
//             <p className="text-lg leading-8 text-[#292929]/75">
//               Pest problems can start in places that are easy to overlook. A
//               few signs around a kitchen, loft, roofline, garden or commercial
//               property can sometimes indicate a much larger issue. That is why
//               PrimeShield Services Bromley takes a practical approach to pest
//               control, looking beyond the most obvious sign and considering the
//               wider property.
//             </p>

//             <p className="mt-6 text-lg leading-8 text-[#292929]/75">
//               Our work is centred around careful inspection, suitable
//               treatment and straightforward communication. Whether the issue
//               involves rodents, bed bugs, wasps or another common pest, the
//               objective is to understand the circumstances first and then
//               provide a treatment approach suited to the situation.
//             </p>

//             <p className="mt-6 text-lg leading-8 text-[#292929]/75">
//               Serving Bromley, we work with both residential and commercial
//               customers who need a professional response to unwanted pest
//               activity.
//             </p>

//             <div className="mt-9 grid gap-4 sm:grid-cols-2">
//               <div className="border-l-4 border-[#F47B2B] bg-[#F7F7F5] p-5">
//                 <p className="text-sm font-bold uppercase tracking-wider text-[#292929]/50">
//                   Based in
//                 </p>
//                 <p className="mt-2 font-bold">{address}</p>
//               </div>

//               <div className="border-l-4 border-[#F47B2B] bg-[#F7F7F5] p-5">
//                 <p className="text-sm font-bold uppercase tracking-wider text-[#292929]/50">
//                   Serving
//                 </p>
//                 <p className="mt-2 font-bold">Bromley & surrounding areas</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           MISSION / VISION IMAGE
//       ========================================================== */}
//       <section className="overflow-hidden bg-[#292929]">
//         <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
//           <div className="relative min-h-[430px] lg:min-h-[650px]">
//             <img
//               src="/images/mission-vision-pest-control.webp"
//               alt="PrimeShield Services Bromley pest control approach"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-[#292929]/25" />

//             <div className="absolute bottom-8 left-8 right-8 border border-white/25 bg-[#292929]/80 p-6 backdrop-blur-sm md:left-12 md:right-12 md:bottom-12">
//               <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F47B2B]">
//                 Our Focus
//               </p>
//               <p className="mt-3 text-2xl font-bold leading-tight text-white">
//                 Identify the cause. Treat the problem. Protect the property.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center px-7 py-16 md:px-12 md:py-20 lg:px-16">
//             <div>
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//                 Mission & Vision
//               </span>

//               <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
//                 Better pest control starts with understanding what is actually
//                 happening.
//               </h2>

//               <p className="mt-7 text-lg leading-8 text-white/70">
//                 Our mission is simple: to provide customers in Bromley with a
//                 professional pest control service that is clear, considered
//                 and focused on the actual problem at the property.
//               </p>

//               <p className="mt-6 text-lg leading-8 text-white/70">
//                 Rather than treating every situation exactly the same, we
//                 believe the right response should reflect the pest involved,
//                 the location of activity and the conditions surrounding it.
//               </p>

//               <div className="mt-10 space-y-5">
//                 <div className="flex gap-4">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
//                     <Search size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">
//                       Look beyond the obvious
//                     </h3>
//                     <p className="mt-1 leading-7 text-white/60">
//                       Understand where signs are appearing and what may be
//                       contributing to the problem.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
//                     <ShieldCheck size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">
//                       Use a considered treatment approach
//                     </h3>
//                     <p className="mt-1 leading-7 text-white/60">
//                       Match the treatment strategy to the pest and property
//                       rather than relying on a generic response.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F47B2B] text-white">
//                     <Check size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">
//                       Leave customers with clarity
//                     </h3>
//                     <p className="mt-1 leading-7 text-white/60">
//                       Keep the process straightforward and explain the next
//                       practical steps where appropriate.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHY PRIMESHIELD
//       ========================================================== */}
//       <section className="bg-[#F5F5F2] py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="max-w-3xl">
//             <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//               Why PrimeShield
//             </span>

//             <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
//               A straightforward service from the first conversation to the
//               final treatment.
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-[#292929]/70">
//               When you have a pest problem, you want to know what is happening,
//               what can be done and what comes next. Our service is designed
//               around keeping that process clear.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//             <div className="bg-white p-7">
//               <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                 <Search size={21} />
//               </div>
//               <h3 className="mt-7 text-xl font-bold">Detailed Assessment</h3>
//               <p className="mt-3 leading-7 text-[#292929]/65">
//                 We look at the affected area and surrounding conditions before
//                 deciding how the situation should be approached.
//               </p>
//             </div>

//             <div className="bg-white p-7">
//               <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                 <ShieldCheck size={21} />
//               </div>
//               <h3 className="mt-7 text-xl font-bold">Targeted Treatment</h3>
//               <p className="mt-3 leading-7 text-[#292929]/65">
//                 Treatment is selected according to the pest, location and
//                 circumstances found during the assessment.
//               </p>
//             </div>

//             <div className="bg-white p-7">
//               <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                 <ClipboardCheck size={21} />
//               </div>
//               <h3 className="mt-7 text-xl font-bold">Clear Process</h3>
//               <p className="mt-3 leading-7 text-[#292929]/65">
//                 We keep communication practical so customers understand what
//                 is being addressed and what happens next.
//               </p>
//             </div>

//             <div className="bg-white p-7">
//               <div className="flex h-12 w-12 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                 <MapPin size={21} />
//               </div>
//               <h3 className="mt-7 text-xl font-bold">Local Service</h3>
//               <p className="mt-3 leading-7 text-[#292929]/65">
//                 PrimeShield Services Bromley is focused on providing pest
//                 control support to properties in Bromley and nearby areas.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SERVICES
//       ========================================================== */}
//       <section className="bg-white py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
//             <div className="max-w-3xl">
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//                 What We Help With
//               </span>

//               <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
//                 Pest control for the problems that disrupt everyday spaces.
//               </h2>
//             </div>

//             <Link
//               to="/services"
//               className="inline-flex w-fit items-center gap-3 border-b-2 border-[#F47B2B] pb-2 font-bold transition hover:gap-5"
//             >
//               Explore Our Services
//               <ArrowRight size={18} />
//             </Link>
//           </div>

//           <div className="mt-14 grid gap-px overflow-hidden border border-[#292929]/10 bg-[#292929]/10 md:grid-cols-2">
//             {pestServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <div
//                   key={service.title}
//                   className="group bg-white p-8 transition hover:bg-[#292929] md:p-10"
//                 >
//                   <div className="flex items-start justify-between gap-5">
//                     <div className="flex h-14 w-14 items-center justify-center bg-[#F47B2B] text-white">
//                       <Icon size={24} />
//                     </div>

//                     <ArrowRight
//                       size={21}
//                       className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
//                     />
//                   </div>

//                   <h3 className="mt-8 text-2xl font-bold group-hover:text-white">
//                     {service.title}
//                   </h3>

//                   <p className="mt-4 max-w-lg leading-7 text-[#292929]/65 group-hover:text-white/65">
//                     {service.text}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           RESIDENTIAL / COMMERCIAL
//       ========================================================== */}
//       <section className="bg-[#292929] py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
//             <div>
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//                 Who We Serve
//               </span>

//               <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
//                 Support for homes, workplaces and commercial properties.
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-white/65">
//                 Different properties can experience very different pest
//                 pressures. A family home, rental property, office, shop or
//                 other commercial premises may require a different way of
//                 investigating and managing the issue.
//               </p>

//               <p className="mt-5 text-lg leading-8 text-white/65">
//                 PrimeShield Services Bromley works with both residential and
//                 commercial customers, adapting the service to the property and
//                 the pest problem being addressed.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="mt-9 inline-flex items-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 Talk to PrimeShield
//                 <ArrowRight size={18} />
//               </Link>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               <div className="border border-white/10 bg-white/5 p-8">
//                 <Home className="text-[#F47B2B]" size={30} />
//                 <h3 className="mt-7 text-2xl font-bold text-white">
//                   Residential
//                 </h3>
//                 <p className="mt-4 leading-7 text-white/60">
//                   Pest control support for houses, flats, rental properties
//                   and other residential spaces across Bromley.
//                 </p>
//               </div>

//               <div className="border border-white/10 bg-white/5 p-8">
//                 <Building2 className="text-[#F47B2B]" size={30} />
//                 <h3 className="mt-7 text-2xl font-bold text-white">
//                   Commercial
//                 </h3>
//                 <p className="mt-4 leading-7 text-white/60">
//                   Professional pest management support for workplaces,
//                   businesses and commercial environments.
//                 </p>
//               </div>

//               <div className="border border-white/10 bg-white/5 p-8 sm:col-span-2">
//                 <MapPin className="text-[#F47B2B]" size={30} />
//                 <h3 className="mt-7 text-2xl font-bold text-white">
//                   Local to Bromley
//                 </h3>
//                 <p className="mt-4 max-w-2xl leading-7 text-white/60">
//                   Based at {address}, PrimeShield Services Bromley focuses on
//                   providing a local response to pest problems throughout the
//                   Bromley service area.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           OUR PROCESS
//       ========================================================== */}
//       <section className="bg-[#F5F5F2] py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="max-w-3xl">
//             <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//               How We Work
//             </span>

//             <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
//               From the first signs to a clearer path forward.
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-[#292929]/70">
//               A professional pest control visit should feel organised rather
//               than confusing. Our approach follows a straightforward sequence
//               so the property and the pest problem can be considered properly.
//             </p>
//           </div>

//           <div className="mt-14 border-t border-[#292929]/15">
//             {process.map((item) => (
//               <div
//                 key={item.number}
//                 className="grid gap-5 border-b border-[#292929]/15 py-8 md:grid-cols-[100px_0.8fr_1.2fr] md:items-center md:gap-10"
//               >
//                 <span className="text-4xl font-bold text-[#F47B2B]">
//                   {item.number}
//                 </span>

//                 <h3 className="text-2xl font-bold">{item.title}</h3>

//                 <p className="leading-7 text-[#292929]/65">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROFESSIONAL VALUES
//       ========================================================== */}
//       <section className="bg-white py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
//             <div>
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//                 Our Standards
//               </span>

//               <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
//                 Professional service should be clear at every stage.
//               </h2>
//             </div>

//             <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
//               <div>
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
//                   <Check size={19} />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold">
//                   Straightforward Communication
//                 </h3>
//                 <p className="mt-3 leading-7 text-[#292929]/65">
//                   We keep explanations practical and focused on the pest
//                   problem being dealt with.
//                 </p>
//               </div>

//               <div>
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
//                   <Check size={19} />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold">
//                   Property-Conscious Work
//                 </h3>
//                 <p className="mt-3 leading-7 text-[#292929]/65">
//                   Treatment is approached with consideration for the
//                   surrounding property and affected areas.
//                 </p>
//               </div>

//               <div>
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
//                   <Check size={19} />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold">
//                   Practical Prevention
//                 </h3>
//                 <p className="mt-3 leading-7 text-[#292929]/65">
//                   Where relevant, we identify practical measures that may help
//                   reduce future pest activity.
//                 </p>
//               </div>

//               <div>
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#F47B2B] text-white">
//                   <Check size={19} />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold">
//                   Local Customer Focus
//                 </h3>
//                 <p className="mt-3 leading-7 text-[#292929]/65">
//                   Our service is focused on helping customers across Bromley
//                   deal with unwanted pest activity professionally.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           ABOUT FAQ
//       ========================================================== */}
//       <section className="bg-[#F5F5F2] py-20 md:py-28">
//         <div className="mx-auto max-w-5xl px-6 md:px-10">
//           <div className="text-center">
//             <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#F47B2B]">
//               About Our Service
//             </span>

//             <h2 className="mt-5 text-4xl font-bold md:text-5xl">
//               Questions customers often have
//             </h2>
//           </div>

//           <div className="mt-12 divide-y divide-[#292929]/15 border-y border-[#292929]/15">
//             <details className="group py-6">
//               <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
//                 What areas does PrimeShield Services Bromley cover?
//                 <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
//                   +
//                 </span>
//               </summary>
//               <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
//                 PrimeShield Services Bromley provides pest control support
//                 across Bromley and surrounding areas. Contact us with your
//                 property location and pest problem to discuss the service.
//               </p>
//             </details>

//             <details className="group py-6">
//               <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
//                 Do you provide pest control for homes and businesses?
//                 <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
//                   +
//                 </span>
//               </summary>
//               <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
//                 Yes. Our pest control service is designed for both residential
//                 and commercial properties, with the approach adjusted to the
//                 property and circumstances.
//               </p>
//             </details>

//             <details className="group py-6">
//               <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
//                 Why is inspection important before treatment?
//                 <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
//                   +
//                 </span>
//               </summary>
//               <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
//                 Inspection can help establish where pest activity is occurring,
//                 what signs are present and which areas may require attention.
//                 This information helps shape a more suitable treatment
//                 approach.
//               </p>
//             </details>

//             <details className="group py-6">
//               <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold">
//                 What should I do if I notice signs of pests?
//                 <span className="text-2xl text-[#F47B2B] transition group-open:rotate-45">
//                   +
//                 </span>
//               </summary>
//               <p className="mt-4 max-w-3xl leading-7 text-[#292929]/65">
//                 Avoid disturbing the affected area unnecessarily and contact a
//                 professional pest control service for advice. Early
//                 assessment can help establish the extent and nature of the
//                 problem.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#F47B2B]">
//         <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10" />
//         <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[55px] border-[#292929]/10" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
//           <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
//             <div className="max-w-3xl">
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-white/75">
//                 Need Professional Pest Control?
//               </span>

//               <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
//                 Let's get your property back under control.
//               </h2>

//               <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
//                 If you have noticed signs of rats, mice, bed bugs, wasps or
//                 another pest problem, speak with PrimeShield Services Bromley
//                 about the situation at your property.
//               </p>

//               <p className="mt-5 font-semibold text-white">
//                 {address}
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col gap-4">
//               <a
//                 href={`tel:${phone.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-[#292929] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <Phone size={19} />
//                 {phone}
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 Contact PrimeShield
//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Phone,
//   Mail,
//   MapPin,
//   ShieldCheck,
//   Search,
//   Bug,
//   Rat,
//   Activity,
//   Home,
//   Building2,
// } from "lucide-react";

// export default function AboutPrimeShieldCarshalton() {
//   const phone = "07438 756809";
//   const email = "info@primeshieldcarshalton.uk";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   const hotspots = [
//     {
//       icon: Rat,
//       label: "01",
//       title: "Kitchen & Utility Areas",
//       text: "Rodent signs can appear around food areas, cupboards, pipework and hidden access routes.",
//       position: "left-[8%] top-[18%]",
//     },
//     {
//       icon: Bug,
//       label: "02",
//       title: "Bedrooms & Sleeping Areas",
//       text: "Bed bug activity can remain hidden around beds, furniture and nearby spaces.",
//       position: "right-[7%] top-[29%]",
//     },
//     {
//       icon: Activity,
//       label: "03",
//       title: "Roof & Exterior",
//       text: "Wasps and other pests may establish activity around roofs, walls, gardens and external areas.",
//       position: "left-[13%] bottom-[16%]",
//     },
//   ];

//   const stages = [
//     {
//       number: "01",
//       title: "Identify",
//       text: "We begin with the signs, location and circumstances surrounding the pest activity.",
//       icon: Search,
//     },
//     {
//       number: "02",
//       title: "Control",
//       text: "The response is selected around the pest involved and the conditions at the property.",
//       icon: ShieldCheck,
//     },
//     {
//       number: "03",
//       title: "Prevent",
//       text: "Where appropriate, practical steps can help reduce the opportunity for further activity.",
//       icon: ArrowRight,
//     },
//   ];

//   return (
//     <main className="mt-20 overflow-hidden bg-black font-sans text-white">

//       {/* =========================================================
//           HERO — INSIDE THE SHIELD
//       ========================================================== */}

//       <section className="relative min-h-[780px] overflow-hidden bg-[#151414]">

//         <img
//           src="/images/about-primeshield-banner.webp"
//           alt="PrimeShield Services Carshalton pest control"
//           className="absolute inset-0 h-full w-full object-cover opacity-45"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

//         <div className="absolute left-0 top-0 h-full w-[3px] bg-[#EE6C1A]" />

//         <div className="relative mx-auto flex min-h-[780px] max-w-[1500px] flex-col justify-between px-5 py-10 sm:px-8 lg:px-12 xl:px-16">

//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <ShieldCheck size={17} className="text-[#EE6C1A]" />

//               <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/60">
//                 PrimeShield Services Carshalton
//               </span>
//             </div>

//             <span className="hidden text-[8px] font-black uppercase tracking-[0.3em] text-white/30 sm:block">
//               About / 01
//             </span>
//           </div>

//           <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//             <div>

//               <p className="mb-6 text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Inside The Shield
//               </p>

//               <h1 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[105px]">
//                 Protection
//                 <span className="block text-white/25">
//                   starts with
//                 </span>
//                 understanding.
//               </h1>

//               <p className="mt-9 max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
//                 PrimeShield Services Carshalton provides practical pest
//                 control support for homes and businesses dealing with
//                 unwanted pest activity across Carshalton and nearby areas.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">

//                 <a
//                   href={`tel:${phone.replace(/\s/g, "")}`}
//                   className="inline-flex items-center gap-3 bg-[#EE6C1A] px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-white"
//                 >
//                   <Phone size={14} />
//                   {phone}
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/60 transition hover:border-[#EE6C1A] hover:text-white"
//                 >
//                   Contact Us
//                   <ArrowUpRight size={14} className="text-[#EE6C1A]" />
//                 </Link>

//               </div>

//             </div>

//             <div className="hidden lg:block">

//               <div className="ml-auto max-w-xs border-l border-[#EE6C1A] pl-6">

//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   Local Base
//                 </p>

//                 <p className="mt-4 text-sm font-bold leading-6 text-white/60">
//                   {address}
//                 </p>

//                 <div className="mt-7 flex items-center gap-3">
//                   <MapPin size={14} className="text-[#EE6C1A]" />

//                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
//                     {serviceArea}
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>

//           <div className="grid grid-cols-3 border-t border-white/15 pt-6">

//             <div>
//               <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                 Focus
//               </p>
//               <p className="mt-2 text-xs font-bold text-white/60">
//                 Homes & Businesses
//               </p>
//             </div>

//             <div className="border-l border-white/10 pl-5">
//               <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                 Area
//               </p>
//               <p className="mt-2 text-xs font-bold text-white/60">
//                 Carshalton
//               </p>
//             </div>

//             <div className="border-l border-white/10 pl-5">
//               <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                 Approach
//               </p>
//               <p className="mt-2 text-xs font-bold text-white/60">
//                 Practical & Precise
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           THE PROBLEM — PROPERTY HOTSPOT
//       ========================================================== */}

//       <section className="relative bg-black py-24 md:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 The Property
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
//                 Pest activity
//                 <span className="block text-white/20">
//                   rarely stays
//                 </span>
//                 obvious.
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
//                 A scratching sound, a nest outside, signs around a bed or
//                 evidence in a kitchen can be the first visible indication
//                 of a wider problem. Understanding where activity appears
//                 helps establish where attention is required.
//               </p>

//               <div className="mt-10 flex items-center gap-4">
//                 <div className="h-px w-16 bg-[#EE6C1A]" />
//                 <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
//                   Look beyond the obvious
//                 </span>
//               </div>

//             </div>


//             <div className="relative">

//               <div className="relative aspect-[1.25/1] overflow-hidden border border-white/10 bg-[#151414]">

//                 <img
//                   src="/images/about-pest-control.webp"
//                   alt="Professional pest control inspection"
//                   className="h-full w-full object-cover opacity-35"
//                 />

//                 <div className="absolute inset-0 bg-black/55" />

//                 {/* FLOOR PLAN LINES */}

//                 <div className="absolute inset-[9%] border border-white/15">

//                   <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

//                   <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />

//                   <div className="absolute left-[24%] top-0 h-1/2 w-px bg-white/10" />

//                   <div className="absolute right-[25%] bottom-0 h-1/2 w-px bg-white/10" />

//                 </div>


//                 <div className="absolute left-[13%] top-[11%]">
//                   <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                     Kitchen
//                   </span>
//                 </div>

//                 <div className="absolute right-[13%] top-[11%]">
//                   <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                     Bedroom
//                   </span>
//                 </div>

//                 <div className="absolute bottom-[11%] left-[13%]">
//                   <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                     Exterior
//                   </span>
//                 </div>

//                 {hotspots.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.label}
//                       className={`absolute ${item.position} group`}
//                     >

//                       <div className="relative">

//                         <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EE6C1A] bg-black text-[#EE6C1A] shadow-[0_0_0_8px_rgba(238,108,26,0.08)]">
//                           <Icon size={16} />
//                         </div>

//                         <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EE6C1A]/20" />

//                       </div>

//                     </div>
//                   );
//                 })}

//                 <div className="absolute bottom-7 right-7">
//                   <span className="text-5xl font-black tracking-[-0.06em] text-white/10">
//                     01
//                   </span>
//                 </div>

//               </div>


//               <div className="mt-6 grid gap-5 md:grid-cols-3">

//                 {hotspots.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div key={item.label} className="border-t border-white/10 pt-4">

//                       <div className="flex items-center gap-3">
//                         <Icon size={14} className="text-[#EE6C1A]" />

//                         <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/25">
//                           {item.label}
//                         </span>
//                       </div>

//                       <h3 className="mt-3 text-sm font-black">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-[11px] leading-5 text-white/30">
//                         {item.text}
//                       </p>

//                     </div>
//                   );
//                 })}

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           OUR DIFFERENCE — IMAGE / ORANGE ARCHITECTURE
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#151414] py-24 md:py-32">

//         <div className="absolute right-0 top-0 h-full w-[18%] bg-[#EE6C1A]" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

//             <div className="relative z-10">

//               <div className="max-w-xl">

//                 <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                   Why PrimeShield
//                 </p>

//                 <h2 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.055em] md:text-7xl">
//                   Not every
//                   <span className="block text-white/20">
//                     pest problem
//                   </span>
//                   looks the same.
//                 </h2>

//                 <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
//                   The pest involved, where activity has appeared and the
//                   circumstances around the property can all affect the
//                   response. Our focus is on understanding those details
//                   before treatment is approached.
//                 </p>

//                 <Link
//                   to="/services"
//                   className="mt-9 inline-flex items-center gap-3 border-b border-[#EE6C1A] pb-3 text-[9px] font-black uppercase tracking-[0.22em] text-white/60 transition hover:text-white"
//                 >
//                   Explore pest control services
//                   <ArrowRight size={14} className="text-[#EE6C1A]" />
//                 </Link>

//               </div>

//             </div>


//             <div className="relative mt-12 lg:mt-0">

//               <div className="relative ml-auto aspect-[4/3] max-w-2xl overflow-hidden border-[10px] border-black">

//                 <img
//                   src="/images/about-primeshield-banner.webp"
//                   alt="PrimeShield Services Carshalton"
//                   className="h-full w-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

//                 <div className="absolute bottom-6 left-6">

//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     PrimeShield
//                   </p>

//                   <p className="mt-2 text-xl font-black">
//                     Practical protection.
//                   </p>

//                 </div>

//               </div>

//               <div className="absolute -bottom-8 -left-8 hidden h-32 w-32 border-l-2 border-b-2 border-[#EE6C1A] md:block" />

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           PROTECTION MAP — SERVICES
//       ========================================================== */}

//       <section className="bg-black py-24 md:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Protection Map
//               </p>

//               <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
//                 Different pests.
//                 <span className="block text-white/20">
//                   Different points of entry.
//                 </span>
//               </h2>

//             </div>

//             <p className="max-w-sm text-sm leading-7 text-white/35">
//               PrimeShield Services Carshalton supports common pest-control
//               requirements across residential and commercial properties.
//             </p>

//           </div>


//           <div className="relative overflow-hidden border border-white/10 bg-[#151414]">

//             <div className="grid lg:grid-cols-[1fr_0.7fr]">

//               <div className="relative min-h-[500px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">

//                 <img
//                   src="/images/about-pest-control.webp"
//                   alt="Pest control property"
//                   className="absolute inset-0 h-full w-full object-cover opacity-15"
//                 />

//                 <div className="absolute inset-0">

//                   <div className="absolute left-[12%] top-[15%] h-[68%] w-[76%] border border-white/15">

//                     <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

//                     <div className="absolute left-0 top-[52%] h-px w-full bg-white/10" />

//                     <div className="absolute left-[32%] top-0 h-[52%] w-px bg-white/10" />

//                     <div className="absolute right-[30%] top-[52%] h-[48%] w-px bg-white/10" />

//                     <div className="absolute left-0 top-[25%] h-px w-[32%] bg-white/10" />

//                   </div>


//                   <div className="absolute left-[18%] top-[23%]">

//                     <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                       Rodent control
//                     </span>

//                     <div className="mt-3 h-3 w-3 rounded-full bg-[#EE6C1A] shadow-[0_0_0_7px_rgba(238,108,26,0.1)]" />

//                   </div>


//                   <div className="absolute right-[19%] top-[29%]">

//                     <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                       Bed bug treatment
//                     </span>

//                     <div className="mt-3 ml-auto h-3 w-3 rounded-full bg-[#EE6C1A] shadow-[0_0_0_7px_rgba(238,108,26,0.1)]" />

//                   </div>


//                   <div className="absolute bottom-[22%] left-[25%]">

//                     <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
//                       Wasp treatment
//                     </span>

//                     <div className="mt-3 h-3 w-3 rounded-full bg-[#EE6C1A] shadow-[0_0_0_7px_rgba(238,108,26,0.1)]" />

//                   </div>

//                 </div>


//                 <div className="absolute bottom-7 left-7">

//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     Property view
//                   </p>

//                   <p className="mt-2 text-lg font-black">
//                     Where activity can appear.
//                   </p>

//                 </div>

//               </div>


//               <div className="flex flex-col justify-between p-8 md:p-12">

//                 <div>

//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">
//                     Core Services
//                   </p>

//                   <div className="mt-8 space-y-7">

//                     <div>
//                       <div className="flex items-center gap-3">
//                         <Rat size={17} className="text-[#EE6C1A]" />
//                         <h3 className="text-lg font-black">
//                           Rat & Mice Control
//                         </h3>
//                       </div>

//                       <p className="mt-2 text-xs leading-6 text-white/30">
//                         Support with identifying rodent activity and areas
//                         requiring attention.
//                       </p>
//                     </div>


//                     <div>
//                       <div className="flex items-center gap-3">
//                         <Bug size={17} className="text-[#EE6C1A]" />
//                         <h3 className="text-lg font-black">
//                           Bed Bug Treatment
//                         </h3>
//                       </div>

//                       <p className="mt-2 text-xs leading-6 text-white/30">
//                         Focused treatment for suspected bed bug activity
//                         around sleeping and surrounding areas.
//                       </p>
//                     </div>


//                     <div>
//                       <div className="flex items-center gap-3">
//                         <Activity size={17} className="text-[#EE6C1A]" />
//                         <h3 className="text-lg font-black">
//                           Wasp Nest Removal
//                         </h3>
//                       </div>

//                       <p className="mt-2 text-xs leading-6 text-white/30">
//                         Controlled treatment for active wasp nests around
//                         roofs, walls, gardens and other areas.
//                       </p>
//                     </div>


//                     <div>
//                       <div className="flex items-center gap-3">
//                         <ShieldCheck size={17} className="text-[#EE6C1A]" />
//                         <h3 className="text-lg font-black">
//                           General Pest Control
//                         </h3>
//                       </div>

//                       <p className="mt-2 text-xs leading-6 text-white/30">
//                         Practical support for common pest problems affecting
//                         local properties.
//                       </p>
//                     </div>

//                   </div>

//                 </div>


//                 <Link
//                   to="/services"
//                   className="mt-12 inline-flex items-center justify-between border-t border-white/10 pt-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
//                 >
//                   View services
//                   <ArrowUpRight size={15} className="text-[#EE6C1A]" />
//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           LOCAL IDENTITY
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

//         <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[180px] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[260px]">
//           SM5
//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 md:py-24 lg:px-12 xl:px-16">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/50">
//                 Local Presence
//               </p>

//               <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl">
//                 Based in Carshalton.
//                 <span className="block text-black/35">
//                   Focused on the local area.
//                 </span>
//               </h2>

//             </div>

//             <div className="border-l border-black/25 pl-6">

//               <MapPin size={20} />

//               <p className="mt-4 max-w-xs text-sm font-bold leading-6">
//                 {address}
//               </p>

//               <p className="mt-4 text-[8px] font-black uppercase tracking-[0.25em] text-black/45">
//                 {serviceArea}
//               </p>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           THREE STAGE RESPONSE
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 md:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Treatment Philosophy
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.055em] md:text-7xl">
//                 Understand.
//                 <span className="block text-white/20">
//                   Respond.
//                 </span>
//                 Protect.
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-white/35">
//                 A straightforward approach keeps the focus on what has been
//                 noticed, where it is happening and what needs to be done
//                 next.
//               </p>

//             </div>


//             <div className="relative">

//               <div className="absolute left-[27px] top-8 h-[calc(100%-64px)] w-px bg-white/10" />

//               <div className="space-y-0">

//                 {stages.map((stage) => {
//                   const Icon = stage.icon;

//                   return (
//                     <div
//                       key={stage.number}
//                       className="group relative grid gap-7 border-b border-white/10 py-10 md:grid-cols-[90px_1fr]"
//                     >

//                       <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#EE6C1A] bg-[#151414] text-[#EE6C1A]">
//                         <Icon size={18} />
//                       </div>

//                       <div>

//                         <div className="flex items-center gap-4">

//                           <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                             Stage {stage.number}
//                           </span>

//                         </div>

//                         <h3 className="mt-3 text-3xl font-black tracking-[-0.035em]">
//                           {stage.title}
//                         </h3>

//                         <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
//                           {stage.text}
//                         </p>

//                       </div>

//                     </div>
//                   );
//                 })}

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           WHO WE SERVE — VISUAL SPLIT
//       ========================================================== */}

//       <section className="bg-black py-24 md:py-32">

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="relative overflow-hidden">

//             <div className="grid lg:grid-cols-2">

//               <div className="relative min-h-[520px]">

//                 <img
//                   src="/images/about-primeshield-banner.webp"
//                   alt="PrimeShield pest control property"
//                   className="absolute inset-0 h-full w-full object-cover grayscale opacity-55"
//                 />

//                 <div className="absolute inset-0 bg-black/55" />

//                 <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">

//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     Who We Serve
//                   </p>

//                   <p className="mt-3 text-3xl font-black tracking-[-0.04em]">
//                     Homes.
//                     <span className="text-white/30"> Businesses.</span>
//                   </p>

//                 </div>

//               </div>


//               <div className="flex flex-col justify-center bg-[#151414] p-8 md:p-14 lg:p-16">

//                 <div className="flex items-center gap-4">

//                   <Home size={19} className="text-[#EE6C1A]" />

//                   <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/30">
//                     Residential
//                   </span>

//                 </div>

//                 <h3 className="mt-5 text-3xl font-black tracking-[-0.035em] md:text-4xl">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-4 max-w-lg text-sm leading-7 text-white/35">
//                   Support for homeowners, tenants, landlords and residential
//                   properties dealing with unwanted pest activity.
//                 </p>


//                 <div className="my-9 h-px w-full bg-white/10" />


//                 <div className="flex items-center gap-4">

//                   <Building2 size={19} className="text-[#EE6C1A]" />

//                   <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/30">
//                     Commercial
//                   </span>

//                 </div>

//                 <h3 className="mt-5 text-3xl font-black tracking-[-0.035em] md:text-4xl">
//                   Business Premises
//                 </h3>

//                 <p className="mt-4 max-w-lg text-sm leading-7 text-white/35">
//                   Pest control support for shops, offices, workplaces and
//                   other commercial environments.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           FAQ — SPECIFICATION STYLE
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 md:py-32">

//         <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

//           <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Information
//               </p>

//               <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-6xl">
//                 Before you call.
//               </h2>

//             </div>

//             <p className="max-w-sm text-xs leading-6 text-white/30">
//               A few straightforward answers about PrimeShield Services
//               Carshalton and the areas we cover.
//             </p>

//           </div>


//           <div className="border-t border-white/10">

//             <details className="group border-b border-white/10 py-7">

//               <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

//                 <div className="flex items-center gap-6">
//                   <span className="text-[9px] font-black text-[#EE6C1A]">
//                     01
//                   </span>

//                   <span className="text-base font-black md:text-lg">
//                     What areas do you cover?
//                   </span>
//                 </div>

//                 <span className="text-2xl font-light text-white/30 transition-transform group-open:rotate-45">
//                   +
//                 </span>

//               </summary>

//               <p className="mt-5 max-w-2xl pl-12 text-sm leading-7 text-white/35">
//                 PrimeShield Services Carshalton provides pest control
//                 support across Carshalton and nearby areas. Contact us with
//                 your property location and details of the issue to discuss
//                 the appropriate service.
//               </p>

//             </details>


//             <details className="group border-b border-white/10 py-7">

//               <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

//                 <div className="flex items-center gap-6">
//                   <span className="text-[9px] font-black text-[#EE6C1A]">
//                     02
//                   </span>

//                   <span className="text-base font-black md:text-lg">
//                     Do you work with homes and businesses?
//                   </span>
//                 </div>

//                 <span className="text-2xl font-light text-white/30 transition-transform group-open:rotate-45">
//                   +
//                 </span>

//               </summary>

//               <p className="mt-5 max-w-2xl pl-12 text-sm leading-7 text-white/35">
//                 Yes. We provide pest control support for residential and
//                 commercial properties, with the response considered around
//                 the pest involved and the property.
//               </p>

//             </details>


//             <details className="group border-b border-white/10 py-7">

//               <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

//                 <div className="flex items-center gap-6">
//                   <span className="text-[9px] font-black text-[#EE6C1A]">
//                     03
//                   </span>

//                   <span className="text-base font-black md:text-lg">
//                     What should I do when I notice pest activity?
//                   </span>
//                 </div>

//                 <span className="text-2xl font-light text-white/30 transition-transform group-open:rotate-45">
//                   +
//                 </span>

//               </summary>

//               <p className="mt-5 max-w-2xl pl-12 text-sm leading-7 text-white/35">
//                 Take note of where you have noticed signs and avoid
//                 unnecessarily disturbing the area. Professional advice can
//                 help establish what may be happening and what options are
//                 available.
//               </p>

//             </details>


//             <details className="group border-b border-white/10 py-7">

//               <summary className="flex cursor-pointer list-none items-center justify-between gap-6">

//                 <div className="flex items-center gap-6">
//                   <span className="text-[9px] font-black text-[#EE6C1A]">
//                     04
//                   </span>

//                   <span className="text-base font-black md:text-lg">
//                     Which pest problems do you deal with?
//                   </span>
//                 </div>

//                 <span className="text-2xl font-light text-white/30 transition-transform group-open:rotate-45">
//                   +
//                 </span>

//               </summary>

//               <p className="mt-5 max-w-2xl pl-12 text-sm leading-7 text-white/35">
//                 Our services include rat and mice control, bed bug
//                 treatment, wasp nest removal and general pest control for
//                 common unwanted pest problems.
//               </p>

//             </details>

//           </div>

//         </div>
//       </section>


//       {/* =========================================================
//           FINAL CONTACT — CINEMATIC
//       ========================================================== */}

//       <section className="relative min-h-[560px] overflow-hidden bg-black">

//         <img
//           src="/images/about-primeshield-banner.webp"
//           alt="PrimeShield Services Carshalton"
//           className="absolute inset-0 h-full w-full object-cover opacity-30"
//         />

//         <div className="absolute inset-0 bg-black/75" />

//         <div className="absolute right-0 top-0 h-full w-[5px] bg-[#EE6C1A]" />

//         <div className="relative mx-auto flex min-h-[560px] max-w-[1500px] items-end px-5 py-12 sm:px-8 md:py-16 lg:px-12 xl:px-16">

//           <div className="grid w-full gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 PrimeShield Services Carshalton
//               </p>

//               <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl lg:text-8xl">
//                 When something
//                 <span className="block text-white/25">
//                   doesn't belong,
//                 </span>
//                 call us.
//               </h2>

//               <div className="mt-8 flex flex-wrap gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">

//                 <span>{serviceArea}</span>

//                 <span className="hidden h-3 w-px bg-white/20 sm:block" />

//                 <span>{address}</span>

//               </div>

//             </div>


//             <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

//               <a
//                 href={`tel:${phone.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-[#EE6C1A] px-7 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-white"
//               >
//                 <Phone size={15} />
//                 {phone}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border border-white/20 bg-black/40 px-7 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/60 transition hover:border-[#EE6C1A] hover:text-white"
//               >
//                 <Mail size={15} />
//                 {email}
//               </a>

//             </div>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }











// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Check,
//   ChevronDown,
//   Mail,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   Target,
//   Eye,
//   Building2,
//   Home,
// } from "lucide-react";

// export default function AboutPrimeShieldCarshalton() {
//   const companyName = "PrimeShield Services Carshalton";
//   const phoneNumber = "07438 756809";
//   const email = "info@primeshieldcarshalton.uk";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   const services = [
//     "Rat & Mice Control",
//     "Bed Bug Treatment",
//     "Wasp Nest Removal",
//     "General Pest Control",
//   ];

//   const faqs = [
//     {
//       question: "What types of pest problems do you deal with?",
//       answer:
//         "PrimeShield Services Carshalton provides professional pest control for common residential and commercial pest problems, including rats and mice, bed bugs, wasps and other unwanted pests.",
//     },
//     {
//       question: "Do you provide pest control for both homes and businesses?",
//       answer:
//         "Yes. Our services are suitable for residential properties, rental properties, offices, shops and other commercial premises across Carshalton and nearby areas.",
//     },
//     {
//       question: "How does a pest control visit work?",
//       answer:
//         "The process starts with an inspection to understand the signs of activity and identify likely access points or affected areas. Treatment is then selected according to the pest problem and property.",
//     },
//     {
//       question: "Do you cover areas outside Carshalton?",
//       answer:
//         "Yes. PrimeShield Services Carshalton serves Carshalton and nearby areas. Contact us with your location and pest issue to discuss the available service.",
//     },
//   ];

//   return (
//     <main className="bg-black font-sans text-white">

//       {/* =========================================================
//           HERO — INSIDE THE SHIELD
//       ========================================================= */}
//       <section className="relative min-h-[780px] mt-28 overflow-hidden">
//         <img
//           src="/images/about-primeshield-banner.webp"
//           alt="PrimeShield Services Carshalton pest control"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/70" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

//         <div className="absolute left-0 top-0 h-full w-[5px] bg-[#EE6C1A]" />

//         <div className="relative mx-auto flex min-h-[780px] max-w-[1500px] flex-col justify-between px-5 py-8 sm:px-8 lg:px-14 xl:px-20">

//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#EE6C1A]">
//                 About PrimeShield
//               </p>

//               <p className="mt-2 text-xs font-medium text-white/45">
//                 Carshalton • SM5
//               </p>
//             </div>

//             <div className="hidden items-center gap-3 sm:flex">
//               <div className="h-px w-12 bg-white/20" />

//               <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
//                 Local Protection
//               </span>
//             </div>
//           </div>

//           <div className="max-w-5xl py-20">
//             <p className="mb-7 text-[10px] font-black uppercase tracking-[0.4em] text-[#EE6C1A]">
//               INSIDE THE SHIELD
//             </p>

//             <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
//               Protection starts
//               <br />
//               with understanding.
//             </h1>

//             <div className="mt-10 flex max-w-2xl flex-col gap-7 border-l border-[#EE6C1A] pl-5 sm:pl-7">

//               <p className="text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
//                 Pest control is not simply about treating what you can see.
//                 It is about understanding how pests entered, where they are
//                 active and what can be done to protect the property properly.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 <a
//                   href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                   className="inline-flex items-center gap-3 bg-[#EE6C1A] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-white"
//                 >
//                   <Phone size={15} />
//                   {phoneNumber}
//                 </a>

//                 <Link
//                   to="/contact-us"
//                   className="inline-flex items-center gap-3 border border-white/20 bg-black/30 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                 >
//                   Contact Us
//                   <ArrowUpRight size={15} />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="grid border-t border-white/15 sm:grid-cols-3">

//             <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:pr-8">
//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Based In
//               </p>

//               <p className="mt-2 text-sm font-bold text-white/75">
//                 Carshalton, SM5
//               </p>
//             </div>

//             <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:px-8">
//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Service Area
//               </p>

//               <p className="mt-2 text-sm font-bold text-white/75">
//                 {serviceArea}
//               </p>
//             </div>

//             <div className="py-5 sm:pl-8">
//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Contact
//               </p>

//               <p className="mt-2 text-sm font-bold text-white/75">
//                 Professional pest control
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           THE PROBLEM — PROPERTY HOTSPOT
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-black py-24 sm:py-32">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             <div>
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="h-px w-12 bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                   Understanding The Problem
//                 </span>
//               </div>

//               <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
//                 Pests rarely stay
//                 <span className="text-[#EE6C1A]">
//                   {" "}where you first see them.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
//                 Signs of pest activity can appear in one part of a property
//                 while the source or access route is somewhere completely
//                 different. That is why understanding the property is an
//                 important part of effective pest control.
//               </p>

//               <div className="mt-10 space-y-5">

//                 {[
//                   [
//                     "01",
//                     "Identify activity",
//                     "Look for visible signs, movement, damage and other indicators.",
//                   ],
//                   [
//                     "02",
//                     "Trace the cause",
//                     "Consider access points, harbourage areas and property conditions.",
//                   ],
//                   [
//                     "03",
//                     "Plan the response",
//                     "Choose an appropriate treatment based on the pest and situation.",
//                   ],
//                 ].map(([number, title, text]) => (

//                   <div
//                     key={number}
//                     className="grid grid-cols-[42px_1fr] gap-4 border-t border-white/10 pt-5"
//                   >
//                     <span className="text-[10px] font-black text-[#EE6C1A]">
//                       {number}
//                     </span>

//                     <div>
//                       <h3 className="text-sm font-black uppercase tracking-[0.08em] text-white">
//                         {title}
//                       </h3>

//                       <p className="mt-2 text-xs leading-6 text-white/40">
//                         {text}
//                       </p>
//                     </div>
//                   </div>

//                 ))}
//               </div>
//             </div>


//             <div className="relative">
//               <div className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#EE6C1A]" />

//               <div className="relative overflow-hidden border border-white/10 bg-[#151414] p-3">

//                 <img
//                   src="/images/mission-vision-pest-control.webp"
//                   alt="Professional pest control inspection"
//                   className="h-[460px] w-full object-cover sm:h-[540px]"
//                 />

//                 <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">

//                   <div className="border border-white/10 bg-black/85 p-4 backdrop-blur-sm">
//                     <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]">
//                       Kitchen
//                     </p>

//                     <p className="mt-1 text-[10px] text-white/60">
//                       Food & water sources
//                     </p>
//                   </div>

//                   <div className="border border-white/10 bg-black/85 p-4 backdrop-blur-sm">
//                     <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]">
//                       Bedrooms
//                     </p>

//                     <p className="mt-1 text-[10px] text-white/60">
//                       Hidden activity
//                     </p>
//                   </div>

//                   <div className="border border-white/10 bg-black/85 p-4 backdrop-blur-sm">
//                     <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]">
//                       Exterior
//                     </p>

//                     <p className="mt-1 text-[10px] text-white/60">
//                       Access routes
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           OUR DIFFERENCE
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">

//             <div className="relative order-2 lg:order-1">

//               <div className="absolute -bottom-8 -left-8 hidden h-32 w-32 border-b border-l border-[#EE6C1A] lg:block" />

//               <div className="relative border border-[#EE6C1A]/30 bg-black p-10 sm:p-14">

//                 <div className="absolute right-0 top-0 h-24 w-24 border-r border-t border-[#EE6C1A]" />

//                 <ShieldCheck
//                   size={42}
//                   strokeWidth={1.4}
//                   className="text-[#EE6C1A]"
//                 />

//                 <p className="mt-10 max-w-lg text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
//                   Protection should be
//                   <span className="text-[#EE6C1A]"> considered, </span>
//                   not rushed.
//                 </p>

//                 <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                       Focus
//                     </p>

//                     <p className="mt-2 text-xs leading-5 text-white/45">
//                       The property and the pest issue.
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                       Response
//                     </p>

//                     <p className="mt-2 text-xs leading-5 text-white/45">
//                       Practical treatment options.
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </div>


//             <div className="order-1 lg:order-2">

//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Our Difference
//               </p>

//               <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl">
//                 Professional service.
//                 <br />
//                 Clear thinking.
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   Practical protection.
//                 </span>
//               </h2>

//               <p className="mt-8 text-sm leading-7 text-white/50 sm:text-base">
//                 PrimeShield Services Carshalton focuses on making pest
//                 problems easier to understand. From the first inspection to
//                 treatment and follow-up recommendations, our approach is
//                 centred around the property and the specific pest issue.
//               </p>

//               <div className="mt-10 grid gap-5 sm:grid-cols-2">

//                 <div className="border-t border-white/10 pt-5">
//                   <Target size={19} className="text-[#EE6C1A]" />

//                   <h3 className="mt-4 text-sm font-black uppercase tracking-[0.08em]">
//                     Targeted
//                   </h3>

//                   <p className="mt-2 text-xs leading-6 text-white/35">
//                     Treatments are considered according to the pest problem
//                     and affected property.
//                   </p>
//                 </div>

//                 <div className="border-t border-white/10 pt-5">
//                   <Eye size={19} className="text-[#EE6C1A]" />

//                   <h3 className="mt-4 text-sm font-black uppercase tracking-[0.08em]">
//                     Thorough
//                   </h3>

//                   <p className="mt-2 text-xs leading-6 text-white/35">
//                     Understanding where activity occurs helps shape the
//                     response.
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>

//         <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[120px] bg-[#EE6C1A] lg:block" />
//       </section>


//       {/* =========================================================
//           PROTECTION MAP
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-black py-24 sm:py-32">
//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Protection Map
//               </p>

//               <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
//                 Built around the
//                 <span className="text-[#EE6C1A]">
//                   {" "}problem in front of us.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-6 text-white/35">
//               Different pests create different challenges. Our services are
//               designed around the type of activity and the property involved.
//             </p>

//           </div>


//           <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

//             <div className="relative min-h-[500px] overflow-hidden border border-white/10 bg-[#151414]">

//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="Pest control property protection"
//                 className="absolute inset-0 h-full w-full object-cover opacity-65"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

//               <div className="absolute bottom-8 left-8 right-8">

//                 <div className="mb-5 flex items-center gap-3">

//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EE6C1A] text-black">
//                     <ShieldCheck size={17} />
//                   </div>

//                   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-white/60">
//                     Property Protection
//                   </span>

//                 </div>

//                 <h3 className="max-w-md text-2xl font-black leading-tight sm:text-3xl">
//                   From visible signs to the areas pests use out of sight.
//                 </h3>

//               </div>
//             </div>


//             <div className="divide-y divide-white/10 border-y border-white/10">

//               {services.map((service, index) => (

//                 <Link
//                   key={service}
//                   to="/services"
//                   state={{
//                     scrollToService: service,
//                     category:
//                       index === 0
//                         ? "Rodents & Wildlife"
//                         : "Insects",
//                   }}
//                   className="group flex items-center justify-between gap-6 py-7 transition-all duration-300 hover:px-4"
//                 >

//                   <div className="flex items-center gap-6">

//                     <span className="text-[10px] font-black text-[#EE6C1A]">
//                       0{index + 1}
//                     </span>

//                     <div>
//                       <h3 className="text-xl font-black tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#EE6C1A]">
//                         {service}
//                       </h3>

//                       <p className="mt-2 max-w-md text-xs leading-5 text-white/30">
//                         Professional support for identifying and addressing
//                         unwanted pest activity.
//                       </p>
//                     </div>

//                   </div>

//                   <ArrowUpRight
//                     size={19}
//                     className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
//                   />

//                 </Link>

//               ))}

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           LOCAL IDENTITY
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#EE6C1A] py-24 text-black sm:py-32">

//         <div className="pointer-events-none absolute right-[-4%] top-1/2 -translate-y-1/2 text-[180px] font-black leading-none tracking-[-0.08em] text-black/10 sm:text-[280px]">
//           SM5
//         </div>

//         <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/55">
//                 Local Identity
//               </p>

//               <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
//                 Carshalton
//                 <br />
//                 is home base.
//               </h2>
//             </div>

//             <div className="border-l border-black/20 pl-6">

//               <MapPin size={22} />

//               <p className="mt-5 text-sm font-black leading-6">
//                 {address}
//               </p>

//               <p className="mt-3 max-w-sm text-xs font-semibold leading-6 text-black/55">
//                 Serving homes and businesses across{" "}
//                 {serviceArea.toLowerCase()}.
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="mt-7 inline-flex items-center gap-2 border-b-2 border-black pb-2 text-[9px] font-black uppercase tracking-[0.2em]"
//               >
//                 Speak With Us
//                 <ArrowUpRight size={14} />
//               </Link>

//             </div>
//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           THREE STAGE RESPONSE
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 Our Approach
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl">
//                 Understand.
//                 <br />
//                 Respond.
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   Protect.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
//                 A pest control service should leave you with more than a
//                 treatment. It should give you a clearer understanding of the
//                 problem and what can be done next.
//               </p>
//             </div>


//             <div className="relative">

//               <div className="absolute left-[20px] top-5 h-[calc(100%-40px)] w-px bg-white/10 sm:left-[28px]" />

//               <div className="space-y-12">

//                 {[
//                   {
//                     number: "01",
//                     title: "Understand",
//                     text: "We look at the signs of activity and the property conditions that may be contributing to the problem.",
//                     icon: Eye,
//                   },
//                   {
//                     number: "02",
//                     title: "Respond",
//                     text: "Treatment is selected around the pest issue, the affected area and the practical requirements of the property.",
//                     icon: Target,
//                   },
//                   {
//                     number: "03",
//                     title: "Protect",
//                     text: "The goal is to address the current problem while helping identify practical steps that can reduce future activity.",
//                     icon: ShieldCheck,
//                   },
//                 ].map((item) => {

//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.number}
//                       className="relative grid grid-cols-[58px_1fr] gap-6 sm:grid-cols-[70px_1fr] sm:gap-8"
//                     >

//                       <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#EE6C1A] bg-[#151414] sm:h-14 sm:w-14">
//                         <Icon
//                           size={17}
//                           className="text-[#EE6C1A] sm:h-5 sm:w-5"
//                         />
//                       </div>

//                       <div className="border-b border-white/10 pb-10">

//                         <div className="flex flex-wrap items-center gap-4">

//                           <span className="text-[9px] font-black tracking-[0.25em] text-[#EE6C1A]">
//                             {item.number}
//                           </span>

//                           <h3 className="text-2xl font-black tracking-[-0.02em]">
//                             {item.title}
//                           </h3>

//                         </div>

//                         <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
//                           {item.text}
//                         </p>

//                       </div>
//                     </div>
//                   );
//                 })}

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           WHO WE SERVE — NO IMAGE
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-black py-24 sm:py-32">

//         <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">

//             {/* Left Identity Panel */}
//             <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden border border-white/10 bg-[#151414] p-8 sm:p-12">

//               <div className="absolute right-0 top-0 h-32 w-32 border-r border-t border-[#EE6C1A]" />

//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                   Who We Serve
//                 </p>

//                 <h2 className="mt-7 text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl">
//                   Everyday
//                   <br />
//                   spaces.
//                 </h2>
//               </div>

//               <div>
//                 <div className="mb-6 h-px w-20 bg-[#EE6C1A]" />

//                 <p className="max-w-sm text-sm leading-7 text-white/40">
//                   Pest problems can affect any property. Our services are
//                   designed for both residential and commercial environments
//                   across Carshalton and nearby areas.
//                 </p>
//               </div>

//             </div>


//             {/* Right Service Categories */}
//             <div className="grid gap-px bg-white/10 sm:grid-cols-2">

//               <div className="group relative flex min-h-[250px] flex-col justify-between bg-black p-8 transition-all duration-300 hover:bg-[#151414] sm:p-10">

//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] font-black text-[#EE6C1A]">
//                     01
//                   </span>

//                   <Home
//                     size={23}
//                     strokeWidth={1.5}
//                     className="text-white/25 transition-colors duration-300 group-hover:text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Homes
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/35">
//                     Support for homeowners, tenants and residential
//                     properties experiencing unwanted pest activity.
//                   </p>
//                 </div>

//               </div>


//               <div className="group relative flex min-h-[250px] flex-col justify-between bg-black p-8 transition-all duration-300 hover:bg-[#151414] sm:p-10">

//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] font-black text-[#EE6C1A]">
//                     02
//                   </span>

//                   <Building2
//                     size={23}
//                     strokeWidth={1.5}
//                     className="text-white/25 transition-colors duration-300 group-hover:text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Businesses
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/35">
//                     Practical pest control support for workplaces,
//                     commercial premises and customer-facing environments.
//                   </p>
//                 </div>

//               </div>


//               <div className="group relative flex min-h-[250px] flex-col justify-between bg-black p-8 transition-all duration-300 hover:bg-[#151414] sm:p-10">

//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] font-black text-[#EE6C1A]">
//                     03
//                   </span>

//                   <ShieldCheck
//                     size={23}
//                     strokeWidth={1.5}
//                     className="text-white/25 transition-colors duration-300 group-hover:text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Properties
//                   </h3>

//                   <p className="mt-4 text-xs leading-6 text-white/35">
//                     A considered approach for different property types,
//                     layouts and pest-related situations.
//                   </p>
//                 </div>

//               </div>


//               <div className="group relative flex min-h-[250px] flex-col justify-between bg-[#EE6C1A] p-8 text-black transition-all duration-300 hover:bg-white sm:p-10">

//                 <div className="flex items-center justify-between">

//                   <span className="text-[10px] font-black">
//                     04
//                   </span>

//                   <ArrowUpRight
//                     size={23}
//                     strokeWidth={1.7}
//                   />

//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-black tracking-[-0.03em]">
//                     Nearby Areas
//                   </h3>

//                   <p className="mt-4 text-xs font-semibold leading-6 text-black/55">
//                     Serving Carshalton and nearby areas with professional
//                     pest control support.
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           FAQ
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-[#151414] py-24 sm:py-32">

//         <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">

//           <div className="mb-14">

//             <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//               Common Questions
//             </p>

//             <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.045em] sm:text-5xl">
//               About PrimeShield
//             </h2>

//           </div>

//           <div className="border-t border-white/10">

//             {faqs.map((faq, index) => (

//               <details
//                 key={faq.question}
//                 className="group border-b border-white/10"
//               >

//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">

//                   <div className="flex items-start gap-5">

//                     <span className="pt-1 text-[9px] font-black text-[#EE6C1A]">
//                       0{index + 1}
//                     </span>

//                     <h3 className="text-sm font-black leading-6 text-white sm:text-base">
//                       {faq.question}
//                     </h3>

//                   </div>

//                   <ChevronDown
//                     size={18}
//                     className="shrink-0 text-white/30 transition-transform duration-300 group-open:rotate-180 group-open:text-[#EE6C1A]"
//                   />

//                 </summary>

//                 <div className="pb-7 pl-10 pr-8">

//                   <p className="max-w-3xl text-sm leading-7 text-white/40">
//                     {faq.answer}
//                   </p>

//                 </div>

//               </details>

//             ))}

//           </div>
//         </div>
//       </section>


//       {/* =========================================================
//           FINAL CONTACT
//       ========================================================= */}
//       <section className="relative min-h-[600px] overflow-hidden bg-black">

//         <img
//           src="/images/about-primeshield-banner.webp"
//           alt="PrimeShield Services Carshalton professional pest control"
//           className="absolute inset-0 h-full w-full object-cover opacity-35"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

//         <div className="relative mx-auto flex min-h-[600px] max-w-[1400px] items-center px-5 py-24 sm:px-8 lg:px-14 xl:px-20">

//           <div className="max-w-5xl">

//             <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#EE6C1A]">
//               Need Professional Pest Control?
//             </p>

//             <h2 className="mt-7 text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
//               When something
//               <br />
//               doesn't belong,
//               <br />
//               <span className="text-[#EE6C1A]">
//                 call us.
//               </span>
//             </h2>

//             <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
//               Tell us what is happening at your property and where you are
//               located. PrimeShield Services Carshalton can discuss the pest
//               issue and the available treatment options.
//             </p>

//             <div className="mt-10 flex flex-wrap gap-3">

//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="inline-flex items-center gap-3 bg-[#EE6C1A] px-7 py-4 text-xs font-black uppercase tracking-[0.17em] text-black transition-all duration-300 hover:bg-white"
//               >
//                 <Phone size={15} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center gap-3 border border-white/20 bg-black/40 px-7 py-4 text-xs font-black uppercase tracking-[0.17em] text-white transition-all duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 <Mail size={15} />
//                 Email Us
//               </a>

//             </div>

//             <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">

//               <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
//                 <MapPin size={13} className="text-[#EE6C1A]" />
//                 Carshalton & Nearby Areas
//               </div>

//               <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
//                 <Check size={13} className="text-[#EE6C1A]" />
//                 Residential & Commercial
//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }















import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  Home,
  Building2,
  MapPin,
  Phone,
  ShieldCheck,
  Search,
  Target,
  MousePointer2,
} from "lucide-react";

export default function AboutPrimeShieldSidcup() {
  const companyName = "PrimeShield Services Sidcup";
  const phoneNumber = "07356 295780";
  const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
  const serviceArea = "Sidcup and nearby areas";

  const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

  const principles = [
    {
      number: "01",
      icon: Search,
      title: "Start With The Signs",
      text: "We first understand what you have noticed, where activity is appearing and what may be happening around the property.",
    },
    {
      number: "02",
      icon: Target,
      title: "Focus On The Cause",
      text: "The visible pest is only part of the picture. Access points, harbourage and property conditions can all matter.",
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "Plan The Response",
      text: "Treatment is considered around the pest issue, the affected space and the practical requirements of the property.",
    },
  ];

  const faqs = [
    {
      question: "What pest problems does PrimeShield Services Sidcup handle?",
      answer:
        "We provide professional pest-control support for common residential and commercial pest problems, including rats, mice, bed bugs, wasps and other unwanted pest activity.",
    },
    {
      question: "Do you provide pest control for homes and businesses?",
      answer:
        "Yes. Our services are suitable for homes, flats, rental properties, local businesses and other commercial premises across Sidcup and nearby areas.",
    },
    {
      question: "How does a pest-control visit work?",
      answer:
        "We begin by understanding the signs of activity and the affected area. The situation is then considered before an appropriate treatment approach is discussed.",
    },
    {
      question: "Do you cover areas outside Sidcup?",
      answer:
        "Yes. PrimeShield Services Sidcup serves Sidcup and nearby areas. Contact us with your location and pest issue so we can discuss the available service.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#050505] text-[#E8E3DE]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border border-[#EE6C1A]/10" />
        <div className="pointer-events-none absolute right-[-90px] top-[-90px] h-[340px] w-[340px] rounded-full border border-[#EE6C1A]/10" />

        <div className="absolute left-0 top-0 h-full w-px bg-[#E8E3DE]/10" />

        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid min-h-[760px] items-center gap-16 py-28 lg:grid-cols-[1.35fr_.65fr] lg:py-32">
            <div className="relative">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8B8B8B]">
                  About {companyName}
                </span>
              </div>

              <h1 className="max-w-6xl text-[3.6rem] font-bold leading-[0.9] tracking-[-0.065em] sm:text-[5rem] md:text-[6.3rem] lg:text-[8rem]">
                Pest control
                <span className="block text-[#EE6C1A]">
                  with a reason
                </span>
                behind it.
              </h1>

              <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="max-w-2xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
                  PrimeShield Services Sidcup takes a practical approach to
                  pest control. We look beyond the immediate signs to
                  understand the property, the pest activity and the situation
                  that needs attention.
                </p>

                <a
                  href={phoneHref}
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#EE6C1A] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#050505]"
                >
                  <Phone size={14} />

                  {phoneNumber}

                  <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#EE6C1A] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative lg:pt-20">
              <div className="border-l border-[#EE6C1A] pl-6 sm:pl-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#EE6C1A]">
                  The Sidcup Approach
                </p>

                <p className="mt-5 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#E8E3DE] sm:text-3xl">
                  Understand what is happening before deciding what should
                  happen next.
                </p>

                <p className="mt-6 text-xs leading-6 text-[#8B8B8B]">
                  Pest problems can look simple from the outside. Our approach
                  is built around understanding the circumstances behind the
                  activity and communicating the next steps clearly.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 border-t border-[#E8E3DE]/10">
                <div className="py-5 pr-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                    Based In
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#E8E3DE]">
                    Sidcup, DA15
                  </p>
                </div>

                <div className="border-l border-[#E8E3DE]/10 py-5 pl-5">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                    Coverage
                  </p>

                  <p className="mt-2 text-sm font-semibold text-[#E8E3DE]">
                    Sidcup + nearby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E3DE]/10">
          <div className="mx-auto grid max-w-[1500px] sm:grid-cols-3">
            <div className="border-b border-[#E8E3DE]/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-8">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                01
              </p>

              <p className="mt-2 text-xs text-[#8B8B8B]">
                Residential pest control
              </p>
            </div>

            <div className="border-b border-[#E8E3DE]/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-8">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                02
              </p>

              <p className="mt-2 text-xs text-[#8B8B8B]">
                Commercial pest control
              </p>
            </div>

            <div className="px-5 py-5 sm:px-8">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                03
              </p>

              <p className="mt-2 text-xs text-[#8B8B8B]">
                Local support across Sidcup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-[#EE6C1A]" />

              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/images/mission-vision-pest-control.webp"
                  alt="Professional pest control inspection in Sidcup"
                  className="h-[480px] w-full object-cover sm:h-[600px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E3DE]/15 bg-[#050505]/75 px-4 py-2 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E8E3DE]">
                      Inspection matters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
                More Than A Treatment
              </p>

              <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                The right response
                <span className="block text-[#8B8B8B]">
                  starts with the right questions.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
                A pest problem can develop around food sources, hidden spaces,
                access points or conditions within a building. Simply treating
                the visible sign does not always explain the bigger picture.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
                That is why PrimeShield Services Sidcup places importance on
                understanding the circumstances before recommending the next
                step.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E8E3DE]/10 bg-[#050505] p-6">
                  <Eye
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#EE6C1A]"
                  />

                  <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.08em]">
                    Look Closely
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#8B8B8B]">
                    Understand the signs and affected areas before choosing a
                    response.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E3DE]/10 bg-[#050505] p-6">
                  <Target
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#EE6C1A]"
                  />

                  <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.08em]">
                    Act Precisely
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#8B8B8B]">
                    Consider the pest, property and practical treatment
                    requirements together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
              What Guides Us
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              A straightforward
              <span className="text-[#8B8B8B]"> way of working.</span>
            </h2>
          </div>

          <div className="grid border-t border-[#E8E3DE]/10 lg:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`group min-h-[360px] border-b border-[#E8E3DE]/10 p-7 sm:p-9 lg:min-h-[430px] lg:border-b-0 ${
                    index !== 2 ? "lg:border-r" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#EE6C1A]">
                      {item.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#8B8B8B] transition-colors duration-300 group-hover:text-[#EE6C1A]"
                    />
                  </div>

                  <div className="mt-28">
                    <h3 className="max-w-xs text-2xl font-bold leading-tight tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-xs leading-6 text-[#8B8B8B]">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 h-px w-8 bg-[#EE6C1A] transition-all duration-500 group-hover:w-20" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROPERTY IMAGE STORY
      ========================================================= */}
      <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/about-pest-control.webp"
                alt="Professional pest control property inspection"
                className="h-[480px] w-full object-cover sm:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505]">
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#EE6C1A]">
                      Property Focus
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#E8E3DE]">
                      Homes, flats and local businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
                Around The Property
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl">
                The property
                <span className="block text-[#8B8B8B]">
                  is part of the answer.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-7 text-[#8B8B8B] sm:text-base">
                Pest activity is influenced by the environment around it.
                Different buildings, rooms and surroundings can create very
                different conditions for pests.
              </p>

              <div className="mt-10 space-y-0 border-t border-[#E8E3DE]/10">
                {[
                  {
                    icon: Home,
                    title: "Residential Properties",
                    text: "Homes, flats and rental properties.",
                  },
                  {
                    icon: Building2,
                    title: "Commercial Premises",
                    text: "Workplaces, shops and local businesses.",
                  },
                  {
                    icon: MapPin,
                    title: "Local Coverage",
                    text: "Sidcup and surrounding nearby areas.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-5 border-b border-[#E8E3DE]/10 py-5"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#EE6C1A]"
                      />

                      <div>
                        <h3 className="text-sm font-bold text-[#E8E3DE]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[11px] text-[#8B8B8B]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE BANNER — NEW IMAGE
      ========================================================= */}
      <section className="bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/images/about-primeshield-banner.webp"
              alt="PrimeShield Services Sidcup professional pest control"
              className="h-[500px] w-full object-cover sm:h-[620px] lg:h-[700px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/45 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-7 sm:px-12 lg:px-20">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
                  The PrimeShield Standard
                </p>

                <h2 className="mt-6 text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                  Clear thinking.
                  <span className="block text-[#E8E3DE]/60">
                    Practical action.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-sm leading-7 text-[#B9B2AA] sm:text-base">
                  From the first signs of activity to understanding the
                  property involved, our approach is designed to keep pest
                  control straightforward and focused on the situation at
                  hand.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/15 bg-[#050505]/50 px-4 py-2.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE]">
                      Local service
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E3DE]/15 bg-[#050505]/50 px-4 py-2.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE]">
                      Sidcup & nearby
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCAL SIDCUP
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EE6C1A] py-24 text-[#050505] sm:py-32 lg:py-40">
        <div className="pointer-events-none absolute right-[-80px] top-1/2 -translate-y-1/2 text-[190px] font-bold leading-none tracking-[-0.1em] text-[#050505]/10 sm:text-[300px]">
          DA15
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#050505]/55">
                Local Presence
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.88] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                Sidcup is where
                <br />
                we operate.
              </h2>

              <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-[#050505]/60 sm:text-base">
                PrimeShield Services Sidcup provides pest-control support for
                local homes, flats and businesses across Sidcup and nearby
                areas.
              </p>
            </div>

            <div className="border-l border-[#050505]/20 pl-7">
              <MapPin size={24} />

              <p className="mt-6 max-w-sm text-base font-bold leading-6">
                {address}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#050505]/20 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                  Sidcup
                </span>

                <span className="rounded-full border border-[#050505]/20 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                  DA15
                </span>

                <span className="rounded-full border border-[#050505]/20 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                  Nearby Areas
                </span>
              </div>

              <Link
                to="/contact-us"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#050505] pb-2 text-[9px] font-bold uppercase tracking-[0.2em]"
              >
                Contact PrimeShield
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIFFERENCE
      ========================================================= */}
      <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
                The Difference
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                Less confusion.
                <span className="block text-[#8B8B8B]">
                  More clarity.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#8B8B8B]">
                Dealing with pests can be stressful enough without unclear
                communication. We keep the process straightforward and explain
                what the situation means and what happens next.
              </p>
            </div>

            <div className="grid gap-px bg-[#E8E3DE]/10 sm:grid-cols-2">
              <div className="bg-[#050505] p-8 sm:p-10">
                <MousePointer2
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#EE6C1A]"
                />

                <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em]">
                  Clear communication
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#8B8B8B]">
                  Straightforward information about the pest issue and the
                  practical next steps.
                </p>
              </div>

              <div className="bg-[#050505] p-8 sm:p-10">
                <Search
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#EE6C1A]"
                />

                <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em]">
                  Situation first
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#8B8B8B]">
                  Understanding what is happening before rushing into a
                  treatment decision.
                </p>
              </div>

              <div className="bg-[#050505] p-8 sm:p-10">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.5}
                  className="text-[#EE6C1A]"
                />

                <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em]">
                  Property aware
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#8B8B8B]">
                  The environment, affected area and property conditions all
                  form part of the bigger picture.
                </p>
              </div>

              <div className="bg-[#EE6C1A] p-8 text-[#050505] sm:p-10">
                <Check size={22} />

                <h3 className="mt-16 text-2xl font-bold tracking-[-0.04em]">
                  Practical response
                </h3>

                <p className="mt-4 text-xs font-semibold leading-6 text-[#050505]/55">
                  A considered response built around the pest problem and the
                  property involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1150px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
              Frequently Asked
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl">
              Questions about
              <span className="text-[#8B8B8B]"> PrimeShield.</span>
            </h2>
          </div>

          <div className="border-t border-[#E8E3DE]/10">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[#E8E3DE]/10"
              >
                <summary className="flex cursor-pointer list-none items-center gap-6 py-7">
                  <span className="text-[9px] font-bold text-[#EE6C1A]">
                    0{index + 1}
                  </span>

                  <h3 className="flex-1 text-sm font-bold leading-6 text-[#E8E3DE] sm:text-base">
                    {faq.question}
                  </h3>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8E3DE]/10 text-[#8B8B8B] transition duration-300 group-open:rotate-45 group-open:border-[#EE6C1A] group-open:text-[#EE6C1A]">
                    <ArrowUpRight size={13} />
                  </span>
                </summary>

                <div className="pb-7 pl-9 pr-10 sm:pl-10">
                  <p className="max-w-3xl text-sm leading-7 text-[#8B8B8B]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#151414]">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#EE6C1A]/[0.035]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#EE6C1A]">
                Speak With PrimeShield
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-bold leading-[0.88] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
                Not sure what
                <span className="block text-[#EE6C1A]">
                  you're dealing with?
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
                Tell us what you have noticed, where the problem is occurring
                and where the property is located. We can discuss the situation
                and the appropriate next step.
              </p>
            </div>

            <div className="lg:pb-2">
              <a
                href={phoneHref}
                className="group flex items-center justify-between border-t border-b border-[#E8E3DE]/10 py-6"
              >
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#EE6C1A]">
                    Call PrimeShield
                  </p>

                  <p className="mt-2 text-2xl font-bold tracking-[-0.04em] text-[#E8E3DE] sm:text-3xl">
                    {phoneNumber}
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EE6C1A] text-[#050505] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#EE6C1A]"
                />

                <p className="text-[10px] leading-5 text-[#8B8B8B]">
                  {address}
                  <br />
                  {serviceArea}
                </p>
              </div>

              <Link
                to="/contact-us"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E8E3DE]/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE] transition hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}