

// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#111111] text-white overflow-hidden border-t border-[#F36F21]/20 z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Services Limited"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               PrimeShield Services Limited provides professional pest control
//               support for London homes, landlords and businesses with reliable
//               treatments, inspections and prevention advice.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#F36F21]/10 border border-[#F36F21]/30 px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-200 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Treatment",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Treatment",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Control Services",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.08]">
//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Location
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//           {/* <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Company Number
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 17263881
//               </span>
//             </div>
//           </div> */}

//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Service Area
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 London, UK
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-300">
//               PrimeShield Services Limited
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] opacity-90" />
//             <span>PrimeShield Protection Framework</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;














// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   const phoneNumber = "07404 736153";
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   return (
//     <footer className="relative bg-[#111111] text-white overflow-hidden border-t border-[#F36F21]/20 z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-[#F36F21]/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/primelogo.webp"
//               alt="PrimeShield Kensington Pest Control"
//               className="h-20 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               PrimeShield Kensington provides professional pest control support
//               for homes, landlords and businesses across Kensington and South
//               Kensington, with clear inspections, safe treatments and prevention
//               advice from {address}.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-[#F36F21]/10 border border-[#F36F21]/30 px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-200 uppercase font-bold">
//                 Kensington Pest Control Support
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Kensington Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "PrimeShield Kensington Home", path: "/" },
//                   { name: "About PrimeShield Kensington", path: "/about-us" },
//                   { name: "Kensington Pest Services", path: "/services" },
//                   { name: "Contact Kensington Team", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase font-black">
//                 Kensington Services
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control Kensington",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Treatment Kensington",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Treatment Kensington",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Control Kensington",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#F36F21] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.08]">
//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Location
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 {address}
//               </span>
//             </div>
//           </div>

//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Call PrimeShield Kensington
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 {phoneNumber}
//               </span>
//             </div>
//           </a>

//           <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/25 transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#F36F21]/10 text-[#F36F21] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Service Area
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 Kensington & South Kensington, London
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-300">PrimeShield Kensington</span>. All
//             rights reserved.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] opacity-90" />
//             <span>PrimeShield Kensington Protection Framework</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ShieldCheck,
//   Phone,
//   MapPin,
//   Mail,
//   ArrowUpRight,
// } from "lucide-react";

// const Footer = () => {
//   const phoneNumber = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const email = "info@primeshieldbromley.uk";

//   const navigationLinks = [
//     {
//       name: "Home",
//       path: "/",
//     },
//     {
//       name: "About PrimeShield",
//       path: "/about-us",
//     },
//     {
//       name: "Pest Control Services",
//       path: "/services",
//     },
//     {
//       name: "Contact Our Team",
//       path: "/contact-us",
//     },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control Bromley",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment Bromley",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control Bromley",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control Bromley",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#292929] text-white font-sans border-t border-[#F47B2B]/20">

//       {/* =========================================================
//           BACKGROUND DETAIL
//       ========================================================= */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
//             backgroundSize: "55px 55px",
//           }}
//         />
//       </div>

//       <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full border border-[#F47B2B]/10 pointer-events-none" />

//       <div className="absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full border border-[#F47B2B]/10 pointer-events-none" />

//       <div className="absolute left-[-180px] bottom-[-180px] w-[420px] h-[420px] rounded-full bg-[#F47B2B]/5 blur-3xl pointer-events-none" />

//       {/* TOP ACCENT */}
//       <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F47B2B]" />

//       {/* =========================================================
//           MAIN FOOTER
//       ========================================================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-20 md:pt-24 pb-10">

//         {/* =======================================================
//             BRAND / NAVIGATION
//         ======================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 pb-16 border-b border-white/10">

//           {/* BRAND AREA */}
//           <div className="lg:col-span-5">

//             <div className="flex flex-col items-start">

//               <img
//                 src="/images/primelogo.webp"
//                 alt="PrimeShield Services Bromley"
//                 className="h-20 sm:h-24 w-auto object-contain object-left"
//                 loading="lazy"
//                 decoding="async"
//               />

//               <div className="mt-7 flex items-center gap-3">

//                 <span className="w-10 h-[2px] bg-[#F47B2B]" />

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Bromley Pest Control
//                 </span>

//               </div>

//               <p className="mt-6 text-white/55 text-sm sm:text-[15px] leading-7 max-w-md">
//                 PrimeShield Services Bromley provides practical pest control
//                 support for homes, landlords and businesses across Bromley.
//                 From identifying pest activity to targeted treatment and
//                 property protection, our service is built around the problem
//                 at hand.
//               </p>

//               {/* BRAND TAG */}
//               <div className="mt-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-3">

//                 <div className="w-8 h-8 bg-[#F47B2B] text-[#292929] flex items-center justify-center">
//                   <ShieldCheck size={16} />
//                 </div>

//                 <div>
//                   <span className="block text-[9px] text-white/35 uppercase tracking-[0.18em] font-black">
//                     Local Service
//                   </span>

//                   <span className="block mt-0.5 text-[11px] text-white font-bold uppercase tracking-[0.08em]">
//                     Bromley Pest Control
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* NAVIGATION AREA */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">

//             {/* QUICK NAV */}
//             <div>

//               <div className="flex items-center gap-3 mb-7">

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Explore
//                 </span>

//                 <span className="h-px flex-1 bg-white/10" />

//               </div>

//               <nav className="space-y-4">

//                 {navigationLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="group flex items-center justify-between gap-4 text-white/55 hover:text-white transition-colors duration-200 max-w-[260px]"
//                   >

//                     <span className="text-sm font-medium">
//                       {link.name}
//                     </span>

//                     <ArrowUpRight
//                       size={15}
//                       className="text-white/20 group-hover:text-[#F47B2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
//                     />

//                   </Link>
//                 ))}

//               </nav>

//             </div>

//             {/* SERVICES */}
//             <div>

//               <div className="flex items-center gap-3 mb-7">

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Services
//                 </span>

//                 <span className="h-px flex-1 bg-white/10" />

//               </div>

//               <div className="space-y-4">

//                 {serviceLinks.map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="group flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200"
//                   >

//                     <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#F47B2B] transition-colors duration-200 shrink-0" />

//                     <span className="text-sm font-medium">
//                       {service.name}
//                     </span>

//                   </Link>
//                 ))}

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =======================================================
//             CONTACT STRIP
//         ======================================================= */}
//         <div className="py-10 border-b border-white/10">

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">

//             {/* LOCATION */}
//             <div className="bg-[#292929] p-6 sm:p-7 group">

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <MapPin size={19} />
//                 </div>

//                 <div>

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Local Base
//                   </span>

//                   <span className="block text-sm text-white/80 font-medium leading-6">
//                     {address}
//                   </span>

//                 </div>

//               </div>

//             </div>

//             {/* PHONE */}
//             <a
//               href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//               className="bg-[#292929] p-6 sm:p-7 group block hover:bg-[#F47B2B]/5 transition-colors duration-200"
//             >

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <Phone size={19} />
//                 </div>

//                 <div>

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Call Us
//                   </span>

//                   <span className="block text-sm text-white/80 font-bold leading-6 group-hover:text-[#F47B2B] transition-colors">
//                     {phoneNumber}
//                   </span>

//                 </div>

//               </div>

//             </a>

//             {/* EMAIL */}
//             <a
//               href={`mailto:${email}`}
//               className="bg-[#292929] p-6 sm:p-7 group block hover:bg-[#F47B2B]/5 transition-colors duration-200"
//             >

//               <div className="flex items-start gap-4">

//                 <div className="w-11 h-11 bg-[#F47B2B] text-[#292929] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   <Mail size={19} />
//                 </div>

//                 <div className="min-w-0">

//                   <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//                     Email
//                   </span>

//                   <span className="block text-sm text-white/80 font-medium leading-6 break-all group-hover:text-[#F47B2B] transition-colors">
//                     {email}
//                   </span>

//                 </div>

//               </div>

//             </a>

//           </div>

//         </div>

//         {/* =======================================================
//             SERVICE AREA BAR
//         ======================================================= */}
//         <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//           <div>

//             <span className="block text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mb-2">
//               Service Area
//             </span>

//             <p className="text-white/70 text-sm font-medium">
//               Bromley and surrounding local areas
//             </p>

//           </div>

//           <div className="flex items-center gap-3">

//             <span className="w-8 h-px bg-[#F47B2B]" />

//             <span className="text-[9px] text-white/35 uppercase tracking-[0.18em] font-black">
//               Professional Pest Control Support
//             </span>

//           </div>

//         </div>

//         {/* =======================================================
//             COPYRIGHT
//         ======================================================= */}
//         <div className="pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">

//           <p className="text-[12px] text-white/30 text-center sm:text-left">
//             © {new Date().getFullYear()}{" "}
//             <span className="text-white/55">
//               PrimeShield Services Bromley
//             </span>
//             . All rights reserved.
//           </p>

//           <div className="flex items-center gap-2">

//             <span className="w-1.5 h-1.5 rounded-full bg-[#F47B2B]" />

//             <span className="text-[9px] text-white/30 uppercase tracking-[0.16em] font-black">
//               Bromley • Pest Control • Property Protection
//             </span>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;








// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   MapPin,
//   Mail,
//   ShieldCheck,
//   ArrowUpRight,
// } from "lucide-react";

// const Footer = () => {
//   const companyName = "PrimeShield Services Carshalton";
//   const phoneNumber = "07438 756809";
//   const email = "info@primeshieldcarshalton.uk";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   const navigationLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about-us" },
//     { name: "Pest Control Services", path: "/services" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const serviceLinks = [
//     {
//       name: "Rat & Mice Control",
//       state: {
//         scrollToService: "Rat & Mice Control",
//         category: "Rodents & Wildlife",
//       },
//     },
//     {
//       name: "Bed Bug Treatment",
//       state: {
//         scrollToService: "Bed Bug Treatment",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Cockroach Control",
//       state: {
//         scrollToService: "Cockroach Control",
//         category: "Insects",
//       },
//     },
//     {
//       name: "Flea Control",
//       state: {
//         scrollToService: "Flea Control",
//         category: "Insects",
//       },
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-black font-sans text-white">
//       {/* Top accent */}
//       <div className="absolute left-0 top-0 h-[2px] w-full bg-[#EE6C1A]" />

//       <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
//         {/* =====================================================
//             BRAND HEADER
//         ===================================================== */}

//         <div className="flex flex-col gap-6 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
//           <Link to="/" className="group flex items-center gap-3.5">
//             <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#EE6C1A] text-black transition-transform duration-300 group-hover:scale-105">
//               <ShieldCheck size={19} strokeWidth={2.5} />
//             </div>

//             <div>
//               <p className="text-sm font-black tracking-[-0.025em] text-white">
//                 PrimeShield Services
//               </p>

//               <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Carshalton
//               </p>
//             </div>
//           </Link>

//           <p className="max-w-md text-xs leading-5 text-white/35 sm:text-right">
//             Professional pest control services for homes and businesses
//             across Carshalton and nearby areas.
//           </p>
//         </div>

//         {/* =====================================================
//             FOOTER CONTENT
//         ===================================================== */}

//         <div className="grid gap-10 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.25fr_0.8fr] lg:gap-12">
//           {/* Navigation */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Navigation
//             </p>

//             <nav className="space-y-3.5">
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Services */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Services
//             </p>

//             <div className="space-y-3.5">
//               {serviceLinks.map((service) => (
//                 <Link
//                   key={service.name}
//                   to="/services"
//                   state={service.state}
//                   className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-colors duration-300 hover:text-white"
//                 >
//                   <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
//                   {service.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Contact
//             </p>

//             <div className="space-y-4">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="group flex items-start gap-3"
//               >
//                 <Phone
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="text-xs font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
//                   {phoneNumber}
//                 </span>
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="group flex items-start gap-3"
//               >
//                 <Mail
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="break-all text-xs font-semibold text-white/45 transition-colors duration-300 group-hover:text-white">
//                   {email}
//                 </span>
//               </a>

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={14}
//                   className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                 />

//                 <span className="text-xs leading-5 text-white/40">
//                   {address}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Coverage */}
//           <div>
//             <p className="mb-5 text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
//               Coverage
//             </p>

//             <div className="border-l border-[#EE6C1A]/40 pl-4">
//               <p className="text-sm font-black leading-6 text-white/70">
//                 {serviceArea}
//               </p>

//               <Link
//                 to="/contact-us"
//                 className="group mt-5 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]"
//               >
//                 Get in touch
//                 <ArrowUpRight
//                   size={13}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             BOTTOM BAR
//         ===================================================== */}

//         <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
//             © {new Date().getFullYear()} PrimeShield Services Carshalton
//           </p>

//           <div className="flex items-center gap-5">
//             <Link
//               to="/about-us"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               About
//             </Link>

//             <Link
//               to="/services"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Services
//             </Link>

//             <Link
//               to="/contact-us"
//               className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

















import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const companyName = "PrimeShield Services Sidcup";
  const phoneNumber = "07356 295780";
  const email = "info@primeshieldsidcup.uk";
  const address =
    "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
  const serviceArea = "Sidcup and nearby areas";

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Pest Control Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const serviceLinks = [
    {
      name: "Rat & Mice Control",
      state: {
        scrollToService: "Rat & Mice Control",
        category: "Rodents & Wildlife",
      },
    },
    {
      name: "Bed Bug Treatment",
      state: {
        scrollToService: "Bed Bug Treatment",
        category: "Insects",
      },
    },
    {
      name: "Cockroach Control",
      state: {
        scrollToService: "Cockroach Control",
        category: "Insects",
      },
    },
    {
      name: "Flea Control",
      state: {
        scrollToService: "Flea Control",
        category: "Insects",
      },
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black font-sans text-white">
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-[#EE6C1A]" />

      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#EE6C1A]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-48 w-48 rounded-full border border-white/[0.03]" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            BRAND HEADER
        ===================================================== */}

        <div className="flex flex-col gap-7 border-b border-white/10 py-9 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-[#EE6C1A] text-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              <ShieldCheck size={20} strokeWidth={2.5} />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
            </div>

            <div>
              <p className="text-[15px] font-black tracking-[-0.03em] text-white">
                PrimeShield Services
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-px w-5 bg-[#EE6C1A]" />
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  Sidcup
                </p>
              </div>
            </div>
          </Link>

          <div className="max-w-lg sm:text-right">
            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
              Local Pest Control
            </p>

            <p className="mt-2 text-xs leading-5 text-white/40">
              Professional pest control services for homes and businesses
              across Sidcup and nearby areas.
            </p>
          </div>
        </div>

        {/* =====================================================
            FOOTER CONTENT
        ===================================================== */}

        <div className="grid gap-10 border-b border-white/10 py-11 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1.3fr_0.9fr] lg:gap-12">
          {/* Navigation */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                01
              </span>

              <span className="h-px w-6 bg-[#EE6C1A]/50" />

              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
                Navigation
              </p>
            </div>

            <nav className="space-y-3.5">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                02
              </span>

              <span className="h-px w-6 bg-[#EE6C1A]/50" />

              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
                Services
              </p>
            </div>

            <div className="space-y-3.5">
              {serviceLinks.map((service) => (
                <Link
                  key={service.name}
                  to="/services"
                  state={service.state}
                  className="group flex w-fit items-center gap-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#EE6C1A] transition-all duration-300 group-hover:w-3" />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                03
              </span>

              <span className="h-px w-6 bg-[#EE6C1A]/50" />

              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
                Contact
              </p>
            </div>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
                  <Phone
                    size={13}
                    className="text-[#EE6C1A]"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
                    Phone
                  </p>

                  <span className="text-xs font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
                    {phoneNumber}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414] transition-colors duration-300 group-hover:border-[#EE6C1A]/60">
                  <Mail
                    size={13}
                    className="text-[#EE6C1A]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
                    Email
                  </p>

                  <span className="break-all text-xs font-semibold text-white/45 transition-colors duration-300 group-hover:text-white">
                    {email}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-[#EE6C1A]/25 bg-[#151414]">
                  <MapPin
                    size={13}
                    className="text-[#EE6C1A]"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[7px] font-black uppercase tracking-[0.18em] text-white/20">
                    Location
                  </p>

                  <span className="text-xs leading-5 text-white/40">
                    {address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                04
              </span>

              <span className="h-px w-6 bg-[#EE6C1A]/50" />

              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/45">
                Coverage
              </p>
            </div>

            <div className="relative border-l border-[#EE6C1A]/40 pl-5">
              <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />

              <p className="text-[15px] font-black leading-6 tracking-[-0.02em] text-white/70">
                {serviceArea}
              </p>

              <p className="mt-3 max-w-[230px] text-[10px] leading-5 text-white/25">
                Pest control support for residential and commercial
                properties in the local area.
              </p>

              <Link
                to="/contact-us"
                className="group mt-6 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]"
              >
                Get in touch

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
              © {new Date().getFullYear()} {companyName}
            </p>

            <p className="text-[7px] uppercase tracking-[0.16em] text-white/10">
              Professional pest control • Sidcup
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/about-us"
              className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
            >
              About
              <ArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
            >
              Services
              <ArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact-us"
              className="group flex items-center gap-1 text-[8px] font-black uppercase tracking-[0.18em] text-white/25 transition-colors hover:text-[#EE6C1A]"
            >
              Contact
              <ArrowRight
                size={10}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;