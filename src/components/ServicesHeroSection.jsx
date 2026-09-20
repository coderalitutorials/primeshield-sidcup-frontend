




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     // h-full ki jagah mobile par min-h aur automatic spacing handle karne ke liye padding add ki hai
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Services Limited pest control services for London homes and businesses"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       {/* Decorative Bars */}
//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
          
//           {/* Subtitle */}
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Pest Control
//           </span>

//           {/* Main Heading - Responsive sizing saaf overlap khatam karega */}
//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           {/* Divider Line */}
//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           {/* Description */}
//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for London homes, landlords and
//             businesses. From rodents and bed bugs to wasps, cockroaches, ants
//             and fleas, our team helps protect your property with reliable
//             treatment and prevention support.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Us
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About Company
//             </Link>
//           </div>

//           {/* Info Badges - Grid automatic rows control karega */}
//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                12 Old Bond Street, London, England,W1S4PW
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }













// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative min-h-[620px] sm:min-h-[680px] md:min-h-[640px] lg:h-[720px] flex items-center overflow-hidden bg-[#7a6363] font-sans pt-28 pb-12 md:py-0">
//       <img
//         src="/images/services-primeshield-banner.webp"
//         alt="PrimeShield Kensington pest control services for Kensington and South Kensington properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="eager"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/65" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/65 to-[#111111]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="absolute top-0 right-0 w-64 md:w-96 h-[6px] bg-[#F36F21]" />
//       <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#F36F21]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full flex items-center">
//         <div className="max-w-4xl w-full">
//           <span className="inline-flex items-center gap-3 text-[#F36F21] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] mb-4 sm:mb-6">
//             <span className="w-6 sm:w-10 h-[2px] bg-[#F36F21]" />
//             PrimeShield Kensington
//           </span>

//           <h1 className="text-white text-4xl sm:text-6xl lg:text-[88px] font-black leading-[1.05] sm:leading-[1.02] tracking-tight uppercase">
//             Services
//           </h1>

//           <div className="w-16 sm:w-24 h-[3px] bg-[#F36F21] mt-5 mb-5 sm:mt-8 sm:mb-8" />

//           <p className="text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
//             Professional pest control services for Kensington homes, landlords
//             and businesses. From rodents and bed bugs to wasps, cockroaches,
//             ants and fleas, PrimeShield Kensington helps protect local
//             properties with reliable treatment, inspection and prevention
//             support from 40 Harrington Rd, South Kensington, London SW7 3ND.
//           </p>

//           <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
//             <Link
//               to="/contact-us"
//               className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors w-full sm:w-auto"
//             >
//               Contact Kensington Team
//               <ArrowRight size={17} />
//             </Link>

//             <Link
//               to="/about-us"
//               className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-6 py-3.5 sm:px-8 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors w-full sm:w-auto"
//             >
//               About PrimeShield Kensington
//             </Link>
//           </div>

//           <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <ShieldCheck className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 Safe & Targeted Treatments
//               </span>
//             </div>

//             <div className="bg-white/10 border border-white/15 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-3">
//               <MapPin className="w-5 h-5 text-[#F36F21] shrink-0" />
//               <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
//                 40 Harrington Rd, South Kensington, London SW7 3ND
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   MapPin,
//   Phone,
//   Bug,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#292929] font-sans pt-24 lg:pt-28">
//       <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">

//         {/* Main Hero */}
//         <div className="relative min-h-[680px] lg:min-h-[700px] grid lg:grid-cols-[0.92fr_1.08fr]">

//           {/* Left Content Panel */}
//           <div className="relative z-20 flex flex-col justify-center bg-[#292929] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

//             {/* Small Label */}
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-8 h-8 flex items-center justify-center border border-[#F47B2B]">
//                 <Bug size={15} className="text-[#F47B2B]" />
//               </div>

//               <span className="text-[#F47B2B] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
//                 Pest Control • Bromley
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase leading-[0.94] tracking-[-0.04em]">
//               The Right
//               <span className="block text-[#F47B2B] mt-2">
//                 Response
//               </span>
//               <span className="block mt-2">
//                 For Pests.
//               </span>
//             </h1>

//             {/* Orange Divider */}
//             <div className="flex items-center gap-4 mt-8 mb-7">
//               <div className="w-20 h-[3px] bg-[#F47B2B]" />
//               <div className="w-2 h-2 rounded-full bg-[#F47B2B]" />
//             </div>

//             {/* Description */}
//             <p className="text-white/75 text-sm sm:text-base leading-7 max-w-xl">
//               From an isolated sighting to a pest problem that keeps returning,
//               PrimeShield Services Bromley provides focused pest control for
//               residential and commercial properties. Our services are built
//               around identifying the issue, treating it appropriately and
//               helping reduce the chance of further activity.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 mt-9">
//               <Link
//                 to="/contact-us"
//                 className="group inline-flex items-center justify-center gap-4 bg-[#F47B2B] text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:opacity-90 transition-opacity"
//               >
//                 Arrange An Enquiry
//                 <ArrowUpRight
//                   size={17}
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                 />
//               </Link>

//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] hover:bg-white hover:text-[#292929] transition-colors"
//               >
//                 About PrimeShield
//               </Link>
//             </div>

//             {/* Local Detail */}
//             <div className="mt-10 pt-7 border-t border-white/15 grid sm:grid-cols-2 gap-6">

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={18}
//                   className="text-[#F47B2B] mt-0.5 shrink-0"
//                 />

//                 <div>
//                   <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
//                     Local Office
//                   </p>

//                   <p className="text-white/60 text-xs leading-5">
//                     65 Powster Rd,
//                     <br />
//                     Bromley BR1 5HE
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Phone
//                   size={18}
//                   className="text-[#F47B2B] mt-0.5 shrink-0"
//                 />

//                 <div>
//                   <p className="text-white text-[10px] font-black uppercase tracking-[0.18em] mb-1">
//                     Call PrimeShield
//                   </p>

//                   <a
//                     href="tel:07356271145"
//                     className="text-white/70 text-sm font-bold hover:text-[#F47B2B] transition-colors"
//                   >
//                     07356 271145
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Right Image Area */}
//           <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">

//             <img
//               src="/images/services-primeshield-banner.webp"
//               alt="PrimeShield Services Bromley pest control"
//               className="absolute inset-0 w-full h-full object-cover object-center"
//               loading="eager"
//               decoding="async"
//             />

//             {/* Image Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/45 via-transparent to-[#292929]/10" />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />

//             {/* Orange Vertical Accent */}
//             <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#F47B2B]" />

//             {/* Image Label */}
//             <div className="absolute top-7 right-7 sm:top-10 sm:right-10 bg-[#292929] px-5 py-4">
//               <div className="flex items-center gap-3">
//                 <ShieldCheck
//                   size={18}
//                   className="text-[#F47B2B]"
//                 />

//                 <span className="text-white text-[10px] font-black uppercase tracking-[0.18em]">
//                   Professional Service
//                 </span>
//               </div>
//             </div>

//             {/* Image Bottom Information */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

//               <div className="max-w-md bg-[#292929]/90 backdrop-blur-sm p-6 sm:p-7 border-l-4 border-[#F47B2B]">

//                 <p className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.22em] mb-3">
//                   Services Across Bromley
//                 </p>

//                 <p className="text-white text-xl sm:text-2xl font-black leading-tight uppercase">
//                   One place for
//                   <span className="text-[#F47B2B]"> pest control support.</span>
//                 </p>

//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Bottom Service Strip */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">

//           <div className="px-5 sm:px-8 py-6 border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               01
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Rodent Control
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6 lg:border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               02
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Bed Bug Treatment
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6 border-r border-white/10">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               03
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Cockroach Control
//             </p>
//           </div>

//           <div className="px-5 sm:px-8 py-6">
//             <p className="text-[#F47B2B] text-2xl sm:text-3xl font-black">
//               04
//             </p>

//             <p className="text-white/65 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] mt-2">
//               Wasp & Insect Control
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }












// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   MapPin,
//   Phone,
//   Bug,
//   Home,
//   Building2,
// } from "lucide-react";

// export default function ServicesHeroSection() {
//   return (
//     <main className="bg-black font-sans text-white">
//       {/* =========================================================
//           SERVICES HERO
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-black pt-24 lg:pt-28">
//         {/* Subtle background geometry */}
//         <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/3 translate-x-1/3 rounded-full border border-[#EE6C1A]/10" />

//         <div className="pointer-events-none absolute left-[7%] top-[25%] hidden h-px w-[20%] bg-white/5 lg:block" />

//         <div className="pointer-events-none absolute right-[8%] top-[38%] hidden h-px w-[16%] bg-[#EE6C1A]/20 lg:block" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           {/* =====================================================
//               TOP IDENTITY BAR
//           ====================================================== */}
//           <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EE6C1A]">
//                 <Bug
//                   size={16}
//                   className="text-[#EE6C1A]"
//                   strokeWidth={1.8}
//                 />
//               </div>

//               <div>
//                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                   PrimeShield Services
//                 </p>

//                 <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
//                   Carshalton / SM5
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-6">
//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                 Residential
//               </span>

//               <span className="h-1 w-1 rounded-full bg-[#EE6C1A]" />

//               <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                 Commercial
//               </span>
//             </div>
//           </div>

//           {/* =====================================================
//               MAIN INTRO
//           ====================================================== */}
//           <div className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:py-32">
//             {/* LEFT CONTENT */}
//             <div className="relative">
//               <div className="flex items-center gap-4">
//                 <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                   01 / Services
//                 </span>

//                 <span className="h-px w-14 bg-[#EE6C1A]" />
//               </div>

//               <h1 className="mt-8 max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[112px]">
//                 Pest
//                 <br />
//                 <span className="text-[#EE6C1A]">Control</span>
//                 <br />
//                 <span className="text-white/20">With Purpose.</span>
//               </h1>

//               <div className="mt-12 max-w-2xl border-l-2 border-[#EE6C1A] pl-6 sm:pl-8">
//                 <p className="text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
//                   Unwanted pests can affect kitchens, bedrooms, workplaces,
//                   storage areas and the wider property. PrimeShield Services
//                   Carshalton provides practical pest control support based on
//                   the type of activity, the affected space and the circumstances
//                   surrounding the problem.
//                 </p>
//               </div>

//               <div className="mt-10 flex flex-wrap gap-3">
//                 <Link
//                   to="/contact-us"
//                   className="group inline-flex items-center gap-4 bg-[#EE6C1A] px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white"
//                 >
//                   Discuss Your Pest Problem

//                   <ArrowUpRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </Link>

//                 <Link
//                   to="/about-us"
//                   className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//                 >
//                   About PrimeShield
//                 </Link>
//               </div>
//             </div>

//             {/* RIGHT INFORMATION / IMAGE */}
//             <div className="relative flex flex-col justify-end">
//               {/* Small image composition */}
//               <div className="relative ml-auto w-full max-w-[430px]">
//                 <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#EE6C1A]" />

//                 <div className="relative overflow-hidden border border-white/10 bg-[#151414] p-2">
//                   <img
//                     src="/images/services-primeshield-banner.webp"
//                     alt="PrimeShield Services Carshalton professional pest control"
//                     className="h-[300px] w-full object-cover grayscale-[20%] transition duration-700 hover:scale-105"
//                     loading="eager"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-2 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-4">
//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                           Local Service
//                         </p>

//                         <p className="mt-2 text-lg font-black text-white">
//                           Carshalton
//                         </p>
//                       </div>

//                       <ShieldCheck
//                         size={25}
//                         strokeWidth={1.3}
//                         className="text-[#EE6C1A]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* LOCAL CONTACT */}
//               <div className="mt-8 grid gap-5 border-t border-white/10 pt-7">
//                 <div className="flex items-start gap-4">
//                   <MapPin
//                     size={18}
//                     className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                   />

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                       Carshalton Base
//                     </p>

//                     <p className="mt-2 text-xs font-bold leading-5 text-white/65">
//                       36 Glebe Rd, Carshalton
//                       <br />
//                       SM5 3EX, United Kingdom
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Phone
//                     size={18}
//                     className="shrink-0 text-[#EE6C1A]"
//                   />

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                       Direct Enquiries
//                     </p>

//                     <a
//                       href="tel:07438756809"
//                       className="mt-2 block text-sm font-black text-white/70 transition-colors hover:text-[#EE6C1A]"
//                     >
//                       07438 756809
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               SERVICE RANGE / PROPERTY TYPES
//               SERVICE STRIP REMOVED
//           ====================================================== */}
//           <div className="border-b border-t border-white/10">
//             <div className="grid sm:grid-cols-3">
//               {/* RESIDENTIAL */}
//               <div className="group border-b border-white/10 p-7 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-9">
//                 <Home
//                   size={21}
//                   strokeWidth={1.4}
//                   className="text-[#EE6C1A]"
//                 />

//                 <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                   Residential
//                 </p>

//                 <h3 className="mt-3 text-lg font-black">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-3 text-xs leading-6 text-white/30">
//                   Pest control support for houses, flats, rental properties
//                   and other residential spaces.
//                 </p>
//               </div>

//               {/* COMMERCIAL */}
//               <div className="group border-b border-white/10 p-7 transition-colors duration-300 hover:bg-[#151414] sm:border-b-0 sm:border-r sm:p-9">
//                 <Building2
//                   size={21}
//                   strokeWidth={1.4}
//                   className="text-[#EE6C1A]"
//                 />

//                 <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//                   Commercial
//                 </p>

//                 <h3 className="mt-3 text-lg font-black">
//                   Workplaces & Premises
//                 </h3>

//                 <p className="mt-3 text-xs leading-6 text-white/30">
//                   Practical support for offices, shops, workplaces and other
//                   commercial environments.
//                 </p>
//               </div>

//               {/* COVERAGE */}
//               <div className="group p-7 transition-colors duration-300 hover:bg-[#EE6C1A] hover:text-black sm:p-9">
//                 <MapPin
//                   size={21}
//                   strokeWidth={1.4}
//                   className="text-[#EE6C1A] transition-colors duration-300 group-hover:text-black"
//                 />

//                 <p className="mt-8 text-[8px] font-black uppercase tracking-[0.28em] text-white/25 transition-colors duration-300 group-hover:text-black/50">
//                   Coverage
//                 </p>

//                 <h3 className="mt-3 text-lg font-black">
//                   Carshalton & Nearby Areas
//                 </h3>

//                 <p className="mt-3 text-xs leading-6 text-white/35 transition-colors duration-300 group-hover:text-black/55">
//                   Local pest control support across Carshalton and surrounding
//                   areas.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* =====================================================
//               FINAL SERVICE CTA
//           ====================================================== */}
//           <div className="flex flex-col justify-between gap-8 py-12 sm:flex-row sm:items-center sm:py-16">
//             <div>
//               <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Need Help With A Pest Problem?
//               </p>

//               <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
//                 Tell us what you have noticed at your property and where you
//                 are located. PrimeShield Services Carshalton can discuss the
//                 type of pest control support you may require.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href="tel:07438756809"
//                 className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
//               >
//                 <Phone size={15} />
//                 07438 756809
//               </a>

//               <Link
//                 to="/contact-us"
//                 className="inline-flex items-center gap-3 bg-[#EE6C1A] px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-white"
//               >
//                 Contact Us
//                 <ArrowUpRight size={15} />
//               </Link>
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
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Phone,
  Bug,
  Home,
  Building2,
  Search,
  MousePointer2,
  CheckCircle2,
} from "lucide-react";

export default function ServicesHeroSection() {
  const services = [
    "Rat & Mice Control",
    "Bed Bug Treatment",
    "Cockroach Control",
    "Wasp Nest Removal",
    "Ant & Flea Control",
    "Squirrel & Bird Control",
  ];

  return (
    <main className="min-h-screen mt-20 bg-black font-sans text-white">
      <section className="relative overflow-hidden bg-black">
        {/* =========================================================
            BACKGROUND DETAILS
        ========================================================== */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-180px] top-[80px] h-[520px] w-[520px] rounded-full border border-[#EE6C1A]/10" />
          <div className="absolute right-[-100px] top-[160px] h-[360px] w-[360px] rounded-full border border-white/5" />
          <div className="absolute left-0 top-[48%] h-px w-[18%] bg-[#EE6C1A]/20" />
          <div className="absolute bottom-[14%] right-0 h-px w-[24%] bg-white/5" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 pb-8 pt-24 sm:px-8 lg:px-14 lg:pb-12 lg:pt-28 xl:px-20">
          {/* =========================================================
              TOP NAV / LABEL
          ========================================================== */}
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5 lg:mb-16">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EE6C1A] text-black">
                <Bug size={15} strokeWidth={2.2} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white">
                  PrimeShield Services Sidcup
                </p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Professional Pest Control
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-5 sm:flex">
              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">
                Sidcup
              </span>

              <span className="h-1 w-1 rounded-full bg-[#EE6C1A]" />

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">
                DA15
              </span>
            </div>
          </div>

          {/* =========================================================
              HERO INTRO
          ========================================================== */}
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
            {/* LEFT — IMAGE */}
            <div className="relative min-h-[460px] overflow-hidden border border-white/10 lg:min-h-[650px]">
              <img
                src="/images/servicehero.webp"
                alt="PrimeShield Services Sidcup professional pest control"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="eager"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/5" />

              {/* Image corner detail */}
              <div className="absolute left-5 top-5 h-14 w-14 border-l border-t border-[#EE6C1A]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#EE6C1A]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                    Local Pest Control
                  </span>
                </div>

                <h2 className="max-w-md text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                  Protecting
                  <br />
                  <span className="text-white/40">Homes &</span>
                  <br />
                  Businesses.
                </h2>

                <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5">
                  <MapPin size={15} className="text-[#EE6C1A]" />

                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/60">
                    Sidcup & Nearby Areas
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — MAIN CONTENT */}
            <div className="flex flex-col justify-between py-2 lg:py-5">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                    Our Services
                  </span>

                  <span className="h-px w-16 bg-[#EE6C1A]" />
                </div>

                <h1 className="mt-7 max-w-3xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[92px] xl:text-[108px]">
                  Pest
                  <br />
                  <span className="text-[#EE6C1A]">Control</span>
                  <br />
                  <span className="text-white/15">Done Right.</span>
                </h1>

                <p className="mt-9 max-w-xl border-l border-[#EE6C1A] pl-5 text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                  From unwanted rodents and crawling insects to seasonal wasp
                  activity and nuisance pests, PrimeShield Services Sidcup
                  provides practical pest control support for properties
                  across Sidcup and nearby areas.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-4 bg-[#EE6C1A] px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white"
                  >
                    Get In Touch
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>

                  <a
                    href="tel:07356295780"
                    className="inline-flex items-center gap-3 border border-white/15 px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-[#EE6C1A] hover:text-[#EE6C1A]"
                  >
                    <Phone size={14} />
                    07356 295780
                  </a>
                </div>
              </div>

              {/* CONTACT MINI PANEL */}
              <div className="mt-14 grid border-t border-white/10 sm:grid-cols-2">
                <div className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-7">
                  <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                    Local Address
                  </p>

                  <div className="mt-3 flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-[#EE6C1A]"
                    />

                    <p className="text-xs font-bold leading-5 text-white/65">
                      29 Station Rd,
                      <br />
                      Sidcup DA15 7DZ
                    </p>
                  </div>
                </div>

                <div className="py-6 sm:pl-7">
                  <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
                    Direct Enquiries
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <Phone
                      size={16}
                      className="shrink-0 text-[#EE6C1A]"
                    />

                    <a
                      href="tel:07356295780"
                      className="text-sm font-black text-white/70 transition-colors hover:text-[#EE6C1A]"
                    >
                      07356 295780
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              SERVICE GRID
          ========================================================== */}
          {/* <div className="mt-20 lg:mt-28">
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  What We Deal With
                </p>

                <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                  Pest Control Services
                </h2>
              </div>

              <p className="max-w-md text-xs leading-6 text-white/30">
                Support for common domestic and commercial pest problems,
                tailored around the property and the activity involved.
              </p>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group relative min-h-[170px] border-b border-r border-white/10 p-6 transition-all duration-300 hover:bg-[#EE6C1A] hover:text-black sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] font-black tracking-[0.2em] text-[#EE6C1A] transition-colors group-hover:text-black">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                    />
                  </div>

                  <h3 className="mt-12 max-w-[220px] text-lg font-black uppercase leading-tight tracking-[-0.025em]">
                    {service}
                  </h3>

                  <div className="absolute bottom-6 left-6 h-px w-8 bg-[#EE6C1A] transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
                </div>
              ))}
            </div>
          </div> */}

          {/* =========================================================
              PROPERTY TYPES
          ========================================================== */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <div className="group border border-white/10 bg-[#151414] p-7 transition-colors duration-300 hover:border-[#EE6C1A]/50 sm:p-9">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-[#EE6C1A]/40">
                  <Home
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#EE6C1A]"
                  />
                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                  01
                </span>
              </div>

              <h3 className="mt-9 text-xl font-black uppercase tracking-[-0.03em]">
                Residential Properties
              </h3>

              <p className="mt-3 max-w-lg text-xs leading-6 text-white/30">
                Pest control support for houses, flats, rental properties and
                other residential spaces throughout Sidcup and nearby areas.
              </p>
            </div>

            <div className="group border border-white/10 bg-[#151414] p-7 transition-colors duration-300 hover:border-[#EE6C1A]/50 sm:p-9">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-[#EE6C1A]/40">
                  <Building2
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#EE6C1A]"
                  />
                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                  02
                </span>
              </div>

              <h3 className="mt-9 text-xl font-black uppercase tracking-[-0.03em]">
                Commercial Premises
              </h3>

              <p className="mt-3 max-w-lg text-xs leading-6 text-white/30">
                Practical pest control assistance for offices, shops,
                workplaces, rental premises and other commercial environments.
              </p>
            </div>
          </div>

          {/* =========================================================
              HOW WE APPROACH PEST PROBLEMS
          ========================================================== */}
          <div className="mt-20 border-y border-white/10 py-14 lg:mt-28 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  A Practical Approach
                </p>

                <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl">
                  Identify.
                  <br />
                  <span className="text-white/20">Address.</span>
                  <br />
                  Protect.
                </h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <Search
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#EE6C1A]"
                  />

                  <h3 className="mt-5 text-sm font-black uppercase">
                    Understand
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    Consider the pest activity, location and signs present at
                    the property.
                  </p>
                </div>

                <div>
                  <MousePointer2
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#EE6C1A]"
                  />

                  <h3 className="mt-5 text-sm font-black uppercase">
                    Respond
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    Discuss the appropriate pest control support based on the
                    circumstances of the enquiry.
                  </p>
                </div>

                <div>
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#EE6C1A]"
                  />

                  <h3 className="mt-5 text-sm font-black uppercase">
                    Protect
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/30">
                    Focus on practical measures that help address the problem
                    and reduce future pest activity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              LOCAL DETAILS
          ========================================================== */}
          <div className="grid gap-0 border-b border-white/10 lg:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-white/10 py-12 lg:border-b-0 lg:border-r lg:pr-14">
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                Based In Sidcup
              </p>

              <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-4xl">
                Local Support
                <br />
                <span className="text-white/20">For Local Properties.</span>
              </h2>

              <p className="mt-6 max-w-md text-xs leading-6 text-white/30">
                PrimeShield Services Sidcup provides pest control support
                across Sidcup and nearby areas, helping homeowners, landlords
                and businesses deal with unwanted pest activity.
              </p>
            </div>

            <div className="py-12 lg:pl-14">
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="flex gap-4">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0 text-[#EE6C1A]"
                  />

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                      Address
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-white/65">
                      29 Station Rd,
                      <br />
                      Sidcup DA15 7DZ,
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    size={19}
                    className="mt-0.5 shrink-0 text-[#EE6C1A]"
                  />

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                      Phone
                    </p>

                    <a
                      href="tel:07356295780"
                      className="mt-2 block text-sm font-black text-white/65 transition-colors hover:text-[#EE6C1A]"
                    >
                      07356 295780
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-7">
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-[#EE6C1A]"
                />

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/35">
                  Serving Sidcup & Nearby Areas
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================
              FINAL CTA
          ========================================================== */}
          <div className="relative mt-12 overflow-hidden bg-[#EE6C1A] p-7 sm:p-10 lg:mt-16 lg:p-14">
            <div className="pointer-events-none absolute right-[-50px] top-[-100px] h-[280px] w-[280px] rounded-full border border-black/10" />
            <div className="pointer-events-none absolute bottom-[-120px] left-[35%] h-[240px] w-[240px] rounded-full border border-black/10" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-black/55">
                  Have A Pest Problem?
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl">
                  Let’s Talk About
                  <br />
                  What’s Happening.
                </h2>

                <p className="mt-5 max-w-xl text-xs font-medium leading-6 text-black/60">
                  Tell PrimeShield Services Sidcup what you have noticed,
                  where the activity is occurring and the type of property
                  involved.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:07356295780"
                  className="inline-flex items-center gap-3 border border-black/30 px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  <Phone size={15} />
                  07356 295780
                </a>

                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 bg-black px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  Contact PrimeShield
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="pt-10 text-center">
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/15">
              PrimeShield Services Sidcup • Pest Control • Sidcup & Nearby
              Areas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}