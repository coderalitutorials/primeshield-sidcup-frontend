// import React from "react";
// import { Check } from "lucide-react";

// export default function WhyChoosePrimeShield() {
//   const points = [
//     "Safe and targeted pest treatments",
//     "Clear inspection before any service",
//     "Support for homes and businesses",
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#5d5555] min-h-[620px] font-sans">
//       <img
//         src="/images/why-choose-pest-control.webp"
//         alt="PrimeShield Services Limited pest control expert supporting a London property"
//         className="absolute inset-0 w-full h-full object-cover object-left"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/72" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/15 via-[#111111]/85 to-[#111111]/95" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="max-w-3xl ml-auto">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             What Sets Us Apart
//           </span>

//           <h2 className="text-[#F36F21] text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1.12] tracking-tight">
//             We’re here to protect your property with reliable pest control every
//             step of the way.
//           </h2>

//           <div className="w-full h-[2px] bg-[#F36F21]/70 my-14" />

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {points.map((point, index) => (
//               <div key={index}>
//                 <Check className="w-7 h-7 text-[#F36F21] mb-4" strokeWidth={3} />
//                 <p className="text-[#F36F21] text-base font-black leading-snug">
//                   {point}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// import React from "react";
// import { Check } from "lucide-react";

// export default function WhyChoosePrimeShield() {
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const points = [
//     "Kensington-focused pest inspections",
//     "Safe treatments for local properties",
//     "Support from our South Kensington base",
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#5d5555] min-h-[620px] font-sans">
//       <img
//         src="/images/why-choose-pest-control.webp"
//         alt="PrimeShield Kensington pest control expert supporting a property in South Kensington"
//         className="absolute inset-0 w-full h-full object-cover object-left"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/72" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/15 via-[#111111]/85 to-[#111111]/95" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="max-w-3xl ml-auto">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Why Choose PrimeShield Kensington
//           </span>

//           <h2 className="text-[#F36F21] text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1.12] tracking-tight">
//             Trusted pest control in Kensington with careful property protection
//             from inspection to prevention.
//           </h2>

//           <p className="mt-7 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Kensington helps homeowners, landlords and businesses
//             across Kensington and South Kensington deal with pest issues using
//             clear inspections, targeted treatments and practical proofing advice.
//             Our local service is based at {address}.
//           </p>

//           <div className="w-full h-[2px] bg-[#F36F21]/70 my-14" />

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {points.map((point, index) => (
//               <div key={index}>
//                 <Check className="w-7 h-7 text-[#F36F21] mb-4" strokeWidth={3} />
//                 <p className="text-[#F36F21] text-base font-black leading-snug">
//                   {point}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowUpRight,
//   Check,
//   Search,
//   ShieldCheck,
//   MapPin,
// } from "lucide-react";

// export default function WhyChoosePrimeShield() {
//   const navigate = useNavigate();

//   const address = "65 Powster Rd, Bromley BR1 5HE";

//   const points = [
//     {
//       icon: Search,
//       number: "01",
//       title: "Clear Inspection",
//       text:
//         "We look beyond the obvious signs to understand where pest activity is occurring and what may be contributing to it.",
//     },
//     {
//       icon: ShieldCheck,
//       number: "02",
//       title: "Targeted Treatment",
//       text:
//         "Treatment is selected around the pest problem, property and circumstances rather than relying on a one-size-fits-all approach.",
//     },
//     {
//       icon: MapPin,
//       number: "03",
//       title: "Local Bromley Service",
//       text:
//         "A dedicated local service for homeowners, landlords and businesses across Bromley and nearby properties.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#292929] font-sans py-20 md:py-28">
//       {/* Decorative orange geometry */}
//       <div className="absolute top-0 left-0 w-3 md:w-5 h-full bg-[#F47B2B]" />

//       <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full border-[70px] border-[#F47B2B]/10 pointer-events-none" />

//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F47B2B] opacity-[0.06] rounded-tl-full pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         {/* Top heading area */}
//         <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-24 items-start">
//           <div>
//             <div className="inline-flex items-center gap-3 border border-white/15 px-4 py-2">
//               <span className="w-2 h-2 bg-[#F47B2B]" />

//               <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.25em]">
//                 Why PrimeShield Bromley
//               </span>
//             </div>

//             <h2 className="mt-8 text-white text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.02] tracking-[-0.04em]">
//               Pest control with a{" "}
//               <span className="text-[#F47B2B]">local focus.</span>
//             </h2>
//           </div>

//           <div className="lg:pt-4">
//             <p className="text-white/65 text-base md:text-lg leading-[1.8] max-w-2xl">
//               PrimeShield Services Bromley takes a practical approach to pest
//               control, helping local properties identify the problem, deal with
//               active pest activity and understand the steps that can help
//               prevent it from returning.
//             </p>

//             <div className="mt-7 flex items-center gap-3">
//               <div className="w-10 h-[2px] bg-[#F47B2B]" />

//               <span className="text-white/45 text-xs uppercase tracking-[0.18em]">
//                 Serving Bromley
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Image + information composition */}
//         <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-0">
//           {/* Image */}
//           <div className="relative min-h-[380px] md:min-h-[500px] overflow-hidden">
//             <img
//               src="/images/why-choose-pest-control.webp"
//               alt="PrimeShield Services Bromley pest control professional"
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               loading="lazy"
//               decoding="async"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-[#292929]/10" />

//             <div className="absolute left-6 md:left-9 bottom-6 md:bottom-9">
//               <div className="bg-[#F47B2B] text-[#292929] px-5 py-4">
//                 <p className="text-[10px] font-black uppercase tracking-[0.2em]">
//                   Local Service
//                 </p>

//                 <p className="mt-1 text-sm font-black">
//                   Bromley & Surrounding Areas
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Information panel */}
//           <div className="bg-white p-7 md:p-10 lg:p-12">
//             <span className="text-[#F47B2B] text-xs font-black uppercase tracking-[0.25em]">
//               Our Approach
//             </span>

//             <h3 className="mt-4 text-[#292929] text-3xl md:text-4xl font-black leading-tight tracking-tight">
//               The details matter when dealing with pests.
//             </h3>

//             <p className="mt-5 text-[#292929]/60 text-sm md:text-base leading-7">
//               Whether the issue is inside a home, affecting a rental property
//               or disrupting a local business, we focus on the circumstances
//               around the infestation as well as the visible signs.
//             </p>

//             <div className="mt-9 space-y-0">
//               {points.map((point, index) => {
//                 const Icon = point.icon;

//                 return (
//                   <div
//                     key={point.number}
//                     className="group relative flex gap-5 py-6 border-t border-[#292929]/10 first:border-t-0"
//                   >
//                     <div className="shrink-0">
//                       <div className="w-11 h-11 bg-[#292929] text-white flex items-center justify-center group-hover:bg-[#F47B2B] group-hover:text-[#292929] transition-colors duration-300">
//                         <Icon size={19} strokeWidth={2} />
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center justify-between gap-4">
//                         <h4 className="text-[#292929] font-black text-base md:text-lg">
//                           {point.title}
//                         </h4>

//                         <span className="text-[#F47B2B] text-[10px] font-black tracking-[0.18em]">
//                           {point.number}
//                         </span>
//                       </div>

//                       <p className="mt-2 text-[#292929]/55 text-sm leading-6">
//                         {point.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Bottom local information */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center border-t border-white/10 pt-7">
//           <div>
//             <p className="text-white font-black text-lg">
//               Local pest control for Bromley properties.
//             </p>

//             <p className="mt-1 text-white/45 text-sm">
//               PrimeShield Services Bromley · {address}
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/contact-us")}
//             className="group inline-flex items-center justify-center gap-3 bg-[#F47B2B] text-[#292929] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 cursor-pointer"
//           >
//             Speak With Our Team

//             <ArrowUpRight
//               size={17}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }