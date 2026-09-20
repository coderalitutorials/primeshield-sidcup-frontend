// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   // Animation sets for smooth scannable display
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   const listStagger = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.1 } },
//   };

//   return (
//     <section className="relative py-16 md:py-24 bg-white overflow-hidden z-20">
      
//       {/* 1. BACKGROUND ACCENT STRIP - Replaced reference blue with your exact Logo Yellow (#F2C12E) */}
//       <div className="absolute top-0 left-0 right-0 h-[320px] md:h-[400px] bg-[#F2C12E] z-0" />

//       {/* 2. MAIN SPLIT CONTAINER CARD (Exact layout symmetry from image_e50896.png) */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-2xl rounded-sm overflow-hidden items-stretch border border-gray-100">
          
          
//           {/* <div className="lg:col-span-5 min-h-[300px] sm:min-h-[400px] lg:h-auto relative bg-neutral-900 shrink-0">
//             <img
//               src="/images/moth-control.webp" // Replace with your exact filename here
//               alt="Professional mouse or moth pest control inspection in Chelsea"
//               className="w-full h-full object-cover object-center  absolute inset-0 select-none"
//               loading="lazy"
//             />
//           </div> */}


//           {/* LEFT SIDE: Responsive Image Frame Block */}
// <div className="lg:col-span-5 relative bg-[#F2C12E] flex items-center justify-center overflow-hidden">

//   <img
//     src="/images/moth-control.webp"
//     alt="Professional moth pest control treatment in Chelsea"
//     className="
//       w-full
//       h-auto
//       object-contain
//       object-center
//       select-none

//       min-h-[250px]
//       sm:min-h-[350px]
//       md:min-h-[450px]

//       lg:h-full
//       lg:min-h-full
//       lg:object-cover
//       lg:object-top
//     "
//     loading="lazy"
//   />

// </div>

//           {/* RIGHT SIDE: Information Block with Premium Typography */}
//           <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center text-left bg-white">
            
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={fadeInUp}
//               className="space-y-4"
//             >
//               {/* Premium Heading Text without any discount metrics */}
//               <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
//                 Complete eradication when you secure your premium treatment
//               </h2>
              
//               {/* Trust Descriptive Paragraph block */}
//               <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal pt-1">
//                 Our local Chelsea technicians deploy targeted eco-certified systems to neutralize nests permanently. We focus on long-term prevention protocols so your premises remain clean, safe, and hygienic year-round.
//               </p>
//             </motion.div>

//             {/* Feature Points Row List with custom Leaf SVGs matching image_e50896.png layout */}
//             <motion.ul
//               variants={listStagger}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="space-y-3.5 pt-6 pb-8 text-sm font-semibold text-neutral-800"
//             >
//               <motion.li variants={fadeInUp} className="flex items-center gap-3">
//                 {/* Custom Leaf SVG matching original image accent skin with brand color tint */}
//                 <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
//                 </svg>
//                 Client oriented and certified approach
//               </motion.li>

//               <motion.li variants={fadeInUp} className="flex items-center gap-3">
//                 <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
//                 </svg>
//                 Eco-Friendly oriented premium products
//               </motion.li>

//               <motion.li variants={fadeInUp} className="flex items-center gap-3">
//                 <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
//                 </svg>
//                 Complete structural safety guarantee
//               </motion.li>
//             </motion.ul>

//             {/* Core Action Call Button Block */}
//             <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="w-full sm:w-auto bg-[#F2C12E] text-neutral-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#dbad24] transition-all duration-200 active:scale-95 shadow-md shadow-[#F2C12E]/10 cursor-pointer"
//               >
//                 Make Appointment
//               </button>
//             </motion.div>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }
























// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CornerDownRight, ArrowRight, ShieldCheck, Leaf, Zap } from "lucide-react";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   // Pure premium physics animation tuning
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.1 }
//     }
//   };

//   const elementUp = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="relative py-28 md:py-36 bg-[#0a1622] overflow-hidden z-20 border-b border-white/[0.04] group/section">
      
//       {/* ====================================================================== */}
//       {/* FULL-COVER BACKGROUND IMAGE WITH OPTIMIZED LUMINANCE CONTRAST          */}
//       {/* ====================================================================== */}
//       <div className="absolute inset-0 z-0 select-none pointer-events-none">
//         <img
//           src="/images/moth-control.webp"
//           alt="Professional moth pest control treatment context background"
//           className="w-full h-full object-cover object-center scale-100 group-hover/section:scale-[1.02] transition-transform duration-1000 ease-out opacity-45 filter contrast-[1.15] brightness-125 saturate-[1.05]"
//           loading="lazy"
//         />
//         {/* Balanced structural mask: Top and bottom fades for framing, center keeps high visibility */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1622] via-[#0a1622]/40 to-[#0a1622]" />
//         <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_10%,#0a1622_85%)" />
//       </div>

//       {/* GLOBAL TECH SCIFI GRID OVERLAY */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50 group-hover/section:opacity-70 transition-opacity duration-700" />

//       {/* AMBIENT GLOW FLUIDS */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[350px] bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] rounded-full blur-[150px] pointer-events-none opacity-10 group-hover/section:opacity-25 transition-all duration-1000 mix-blend-screen" />

//       {/* ====================================================================== */}
//       {/* CENTERED CONTENT WRAPPER                                               */}
//       {/* ====================================================================== */}
//       <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
//         <motion.div 
//           className="space-y-12"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//         >
          
//           {/* TOP TEXT IDENTITY MATRIX */}
//           <div className="space-y-6 max-w-3xl mx-auto">
//             {/* Tech Spec Tag */}
//             <motion.div variants={elementUp} className="inline-flex items-center gap-2 bg-[#0a1622]/60 border border-white/10 px-3.5 py-1 rounded-md backdrop-blur-md shadow-xl">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">Remediation Blueprint</span>
//             </motion.div>

//             {/* Main Title Setup with Clean White Text */}
//             <motion.h2 
//               variants={elementUp}
//               className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1] [text-shadow:0_4px_16px_rgba(10,22,34,0.9)]"
//             >
//               Complete suppression <br />
//               <span className="text-white">
//                 when you secure elite treatment
//               </span>
//             </motion.h2>
            
//             {/* Context Subtitle Description */}
//             <motion.p 
//               variants={elementUp}
//               className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium [text-shadow:0_3px_12px_rgba(10,22,34,0.95)]"
//             >
//               Our specialized London technicians deploy targeted eco-certified systems to neutralize nests permanently. We focus on long-term structural restriction protocols so your premises remain completely secure, certified, and hygienic year-round.
//             </motion.p>
//           </div>

//           {/* INTERACTIVE CENTERED HORIZONTAL FEATURE GLYPHS */}
//           <motion.div 
//             variants={elementUp} 
//             className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2"
//           >
//             {/* Card 1 */}
//             <div className="bg-[#0a1622]/80 backdrop-blur-md hover:bg-[#0a1622]/40 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-all duration-300 group/card flex flex-col items-center text-center shadow-2xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-all">
//                 <ShieldCheck className="w-5 h-5 text-[#4FA3A5]" />
//               </div>
//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">Biological Core</h4>
//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">Client oriented and certified approach.</p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-[#0a1622]/80 backdrop-blur-md hover:bg-[#0a1622]/40 border border-white/[0.08] hover:border-[#76C7C0]/50 p-6 rounded-2xl transition-all duration-300 group/card flex flex-col items-center text-center shadow-2xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#76C7C0]/10 group-hover/card:border-[#76C7C0] transition-all">
//                 <Leaf className="w-5 h-5 text-[#76C7C0]" />
//               </div>
//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">Eco Formulations</h4>
//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">Premium chemical-free compounds.</p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-[#0a1622]/80 backdrop-blur-md hover:bg-[#0a1622]/40 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-all duration-300 group/card flex flex-col items-center text-center shadow-2xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-all">
//                 <Zap className="w-5 h-5 text-[#4FA3A5]" />
//               </div>
//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">Infrastructure</h4>
//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">Complete structural safety guarantee.</p>
//             </div>
//           </motion.div>

//           {/* MAIN CALL TO ACTION ACTION HUB */}
//           <motion.div variants={elementUp} className="pt-2 flex justify-center">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#0a1622]/60 hover:bg-[#0a1622]/90 border border-white/10 hover:border-[#4FA3A5]/60 text-white font-black text-xs tracking-widest uppercase px-10 py-4.5 rounded-xl transition-all duration-300 group shadow-2xl backdrop-blur-md cursor-pointer overflow-hidden relative"
//             >
//               <div className="flex items-center gap-2">
//                 <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                 <span>Secure Appointment</span>
//               </div>
//               <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4FA3A5] transition-colors">
//                 <ArrowRight className="w-3 h-3 text-white transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
//               </div>
//             </button>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }





















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   CornerDownRight,
//   ArrowRight,
//   ShieldCheck,
//   Leaf,
//   Zap,
// } from "lucide-react";

// export default function PesSaveFeatureSection() {
//   const navigate = useNavigate();

//   return (
//     <section className="relative py-28 md:py-36 bg-[#0a1622] overflow-hidden z-20 border-b border-white/[0.04] group/section">
//       <div className="absolute inset-0 z-0 select-none pointer-events-none">
//         <img
//           src="/images/moth-control.webp"
//           alt="Professional moth pest control treatment context background"
//           className="w-full h-full object-cover object-center opacity-45 contrast-[1.08] brightness-110 saturate-[1.02]"
//           loading="lazy"
//           decoding="async"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a1622] via-[#0a1622]/45 to-[#0a1622]" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0a1622_85%)]" />
//       </div>

//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[260px] bg-[#4FA3A5]/10 rounded-full blur-3xl pointer-events-none opacity-40 group-hover/section:opacity-70 transition-opacity duration-300" />

//       <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
//         <div className="space-y-12 animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="space-y-6 max-w-3xl mx-auto">
//             <div className="inline-flex items-center gap-2 bg-[#0a1622]/75 border border-white/10 px-3.5 py-1 rounded-md shadow-lg">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Remediation Blueprint
//               </span>
//             </div>

//             <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1] [text-shadow:0_4px_16px_rgba(10,22,34,0.9)]">
//               Complete suppression <br />
//               <span className="text-white">
//                 when you secure elite treatment
//               </span>
//             </h2>

//             <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium [text-shadow:0_3px_12px_rgba(10,22,34,0.95)]">
//               Our specialized London technicians deploy targeted eco-certified
//               systems to neutralize nests permanently. We focus on long-term
//               structural restriction protocols so your premises remain completely
//               secure, certified, and hygienic year-round.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
//             <div className="bg-[#0a1622]/85 hover:bg-[#0a1622]/70 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-colors duration-200">
//                 <ShieldCheck className="w-5 h-5 text-[#4FA3A5]" />
//               </div>

//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
//                 Biological Core
//               </h4>

//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
//                 Client oriented and certified approach.
//               </p>
//             </div>

//             <div className="bg-[#0a1622]/85 hover:bg-[#0a1622]/70 border border-white/[0.08] hover:border-[#76C7C0]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#76C7C0]/10 group-hover/card:border-[#76C7C0] transition-colors duration-200">
//                 <Leaf className="w-5 h-5 text-[#76C7C0]" />
//               </div>

//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
//                 Eco Formulations
//               </h4>

//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
//                 Premium chemical-free compounds.
//               </p>
//             </div>

//             <div className="bg-[#0a1622]/85 hover:bg-[#0a1622]/70 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
//               <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-colors duration-200">
//                 <Zap className="w-5 h-5 text-[#4FA3A5]" />
//               </div>

//               <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
//                 Infrastructure
//               </h4>

//               <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
//                 Complete structural safety guarantee.
//               </p>
//             </div>
//           </div>

//           <div className="pt-2 flex justify-center">
//             <button
//               onClick={() => navigate("/contact-us")}
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#0a1622]/75 hover:bg-[#0a1622]/95 border border-white/10 hover:border-[#4FA3A5]/60 text-white font-black text-xs tracking-widest uppercase px-10 py-4 rounded-xl transition-transform duration-200 group shadow-xl cursor-pointer overflow-hidden relative hover:-translate-y-0.5 active:scale-[0.98]"
//             >
//               <div className="flex items-center gap-2">
//                 <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
//                 <span>Secure Appointment</span>
//               </div>

//               <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4FA3A5] transition-colors duration-200">
//                 <ArrowRight
//                   className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-0.5"
//                   strokeWidth={3}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CornerDownRight,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Zap,
} from "lucide-react";

export default function PesSaveFeatureSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 md:py-36 bg-[#0a1622] overflow-hidden z-20 border-b border-white/[0.04] group/section">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/images/moth-control.webp"
          alt="Professional moth pest control treatment context background"
          className="w-full h-full object-cover object-center opacity-60 contrast-[1.1] brightness-115 saturate-[1.05]"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1622]/85 via-[#0a1622]/25 to-[#0a1622]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0a1622_85%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-35" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[260px] bg-[#4FA3A5]/10 rounded-full blur-3xl pointer-events-none opacity-30 group-hover/section:opacity-50 transition-opacity duration-300" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="space-y-12 animate-[fadeUp_0.7s_ease-out_both]">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0a1622]/75 border border-white/10 px-3.5 py-1 rounded-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
                Remediation Blueprint
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1] [text-shadow:0_4px_16px_rgba(10,22,34,0.9)]">
              Complete suppression <br />
              <span className="text-white">
                when you secure elite treatment
              </span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium [text-shadow:0_3px_12px_rgba(10,22,34,0.95)]">
              Our specialized London technicians deploy targeted eco-certified
              systems to neutralize nests permanently. We focus on long-term
              structural restriction protocols so your premises remain completely
              secure, certified, and hygienic year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-2">
            <div className="bg-[#0a1622]/82 hover:bg-[#0a1622]/68 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-colors duration-200">
                <ShieldCheck className="w-5 h-5 text-[#4FA3A5]" />
              </div>

              <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
                Biological Core
              </h4>

              <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
                Client oriented and certified approach.
              </p>
            </div>

            <div className="bg-[#0a1622]/82 hover:bg-[#0a1622]/68 border border-white/[0.08] hover:border-[#76C7C0]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#76C7C0]/10 group-hover/card:border-[#76C7C0] transition-colors duration-200">
                <Leaf className="w-5 h-5 text-[#76C7C0]" />
              </div>

              <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
                Eco Formulations
              </h4>

              <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
                Premium chemical-free compounds.
              </p>
            </div>

            <div className="bg-[#0a1622]/82 hover:bg-[#0a1622]/68 border border-white/[0.08] hover:border-[#4FA3A5]/50 p-6 rounded-2xl transition-colors duration-200 group/card flex flex-col items-center text-center shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover/card:bg-[#4FA3A5]/10 group-hover/card:border-[#4FA3A5] transition-colors duration-200">
                <Zap className="w-5 h-5 text-[#4FA3A5]" />
              </div>

              <h4 className="text-white font-bold text-xs uppercase tracking-wider mt-4 mb-1">
                Infrastructure
              </h4>

              <p className="text-slate-300 text-[11px] leading-normal font-normal max-w-[200px]">
                Complete structural safety guarantee.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => navigate("/contact-us")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#0a1622]/75 hover:bg-[#0a1622]/95 border border-white/10 hover:border-[#4FA3A5]/60 text-white font-black text-xs tracking-widest uppercase px-10 py-4 rounded-xl transition-transform duration-200 group shadow-xl cursor-pointer overflow-hidden relative hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <CornerDownRight className="w-3.5 h-3.5 text-[#4FA3A5]" />
                <span>Secure Appointment</span>
              </div>

              <div className="w-5 h-5 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#4FA3A5] transition-colors duration-200">
                <ArrowRight
                  className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={3}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}