// import React from 'react';
// import { motion } from 'framer-motion';

// export default function CertifiedLogosSection() {
//   // Simple clean container animation
//   const containerVariants = {
//     hidden: { opacity: 0, y: 15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.1,
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
//   };

//   // UK Pest Control Authority Logo Badges
//   const certifications = [
//     { name: "BPCA", label: "BRITISH PEST CONTROL ASSOC." },
//     { name: "CEPA", label: "CERTIFIED EUROPEAN STANDARDS" },
//     { name: "NPTA", label: "NATURAL PEST TECHNICIANS" },
//     { name: "PROMPT", label: "BASIS PROFESSIONAL REGISTER" },
//     { name: "RSPH", label: "MEMBER OF PUBLIC HEALTH" }
//   ];

//   return (
//     <section className="bg-gray-50/70 border-b border-gray-100 py-12 md:py-16 text-center z-10 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* Exact Uppercase Subheading Tracker From image_e60309.png */}
//         <motion.p 
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-xs md:text-sm font-black tracking-[0.25em] text-[#5C4033] uppercase mb-10 md:mb-12"
//         >
//           We Are Certified By
//         </motion.p>

//         {/* Distributed Clean Inline Grid View Row */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center opacity-80"
//         >
//           {certifications.map((cert, index) => (
//             <motion.div 
//               key={index}
//               variants={itemVariants}
//               whileHover={{ scale: 1.03, opacity: 1 }}
//               className="flex flex-col items-center justify-center text-center select-none cursor-default group"
//             >
//               {/* Graphic Icon Layout Badge Container */}
//               <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-[#F2C12E] transition-colors duration-300">
//                 <svg 
//                   className="w-6 h-6 text-[#5C4033] group-hover:text-[#F2C12E] transition-colors duration-300" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>

//               {/* Authority Bold Initials Text */}
//               <h4 className="text-base font-black tracking-tight text-gray-800 group-hover:text-[#5C4033] transition-colors">
//                 {cert.name}
//               </h4>
              
//               {/* Context Tag Tracking Subtext Description */}
//               <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 max-w-[140px] block leading-tight">
//                 {cert.label}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }













// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Award, ShieldAlert, FileCheck, CheckCircle2 } from 'lucide-react';

// export default function CertifiedLogosSection() {
//   // UK Pest Control Authority Premium Dataset with precise technical mapping icons
//   const certifications = [
//     { name: "BPCA", label: "British Pest Control Association", icon: ShieldCheck },
//     { name: "CEPA", label: "Certified European Standards", icon: Award },
//     { name: "NPTA", label: "National Pest Technicians", icon: ShieldAlert },
//     { name: "PROMPT", label: "Basis Professional Register", icon: FileCheck },
//     { name: "RSPH", label: "Royal Society for Public Health", icon: CheckCircle2 }
//   ];

//   // Doubling the array to ensure a flawless, seamless marquee infinite slide
//   const infiniteScrollData = [...certifications, ...certifications];

//   return (
//     <section className="bg-[#020b14] py-12 border-y border-white/[0.04] relative overflow-hidden z-30">
      
//       {/* High-end Technical Background Ambient Glows */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
//         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-32 bg-[#4FA3A5]/10 blur-[60px]" />
//         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-32 bg-[#76C7C0]/10 blur-[60px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
//         {/* Header Block: Asymmetrical high-end typography alignment */}
//         <div className="text-left max-w-sm">
//           <span className="text-[10px] font-black tracking-[0.3em] text-[#76C7C0] uppercase block mb-1">
//             Vetted Security
//           </span>
//           <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
//             Approved Regulatory Compliance
//           </h3>
//         </div>
        
//         {/* Right Side Live Status Tracker */}
//         <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md self-start md:self-auto">
//           <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//           <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Active Status Grid Verified</span>
//         </div>
//       </div>

//       {/* INFINITE MARQUEE TRACK */}
//       <div className="relative w-full overflow-hidden flex items-center py-2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#020b14] before:to-transparent before:z-20 after:content-[''] after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#020b14] after:to-transparent after:z-20">
        
//         <motion.div 
//           className="flex gap-16 whitespace-nowrap min-w-full"
//           animate={{ x: [0, -1200] }}
//           transition={{
//             ease: "linear",
//             duration: 28,
//             repeat: Infinity,
//           }}
//         >
//           {infiniteScrollData.map((cert, index) => {
//             const IconComponent = cert.icon;
//             return (
//               <div 
//                 key={index}
//                 className="flex items-center gap-4 select-none cursor-default group shrink-0"
//               >
//                 {/* Clean, glassmorphic icon housing that replacing the old "//" wrapper */}
//                 <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[#4FA3A5]/40 group-hover:bg-[#4FA3A5]/5 transition-all duration-300 shadow-inner">
//                   <IconComponent 
//                     className="w-5 h-5 text-slate-400 group-hover:text-[#76C7C0] transition-all duration-300 drop-shadow-[0_0_8px_rgba(118,199,192,0)] group-hover:drop-shadow-[0_0_8px_rgba(118,199,192,0.4)]"
//                     strokeWidth={1.8}
//                   />
//                 </div>

//                 {/* Minimalist Inline Identity Details */}
//                 <div className="flex flex-col text-left">
//                   <div className="flex items-center gap-2.5">
//                     <h4 className="text-base font-black tracking-widest text-white transition-all duration-300 group-hover:text-[#76C7C0] uppercase">
//                       {cert.name}
//                     </h4>
                    
//                     {/* Compact Intermediary Asset Divider */}
//                     <span className="text-white/10 group-hover:text-[#4FA3A5]/30 text-xs transition-colors duration-300">
//                       ✦
//                     </span>
//                   </div>
                  
//                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block group-hover:text-slate-400 transition-colors duration-300 mt-0.5">
//                     {cert.label}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// }











import React from "react";
import {
  ShieldCheck,
  Award,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

export default function CertifiedLogosSection() {
  const certifications = [
    { name: "BPCA", label: "British Pest Control Association", icon: ShieldCheck },
    { name: "CEPA", label: "Certified European Standards", icon: Award },
    { name: "NPTA", label: "National Pest Technicians", icon: ShieldAlert },
    { name: "PROMPT", label: "Basis Professional Register", icon: FileCheck },
    { name: "RSPH", label: "Royal Society for Public Health", icon: CheckCircle2 },
  ];

  const infiniteScrollData = [...certifications, ...certifications];

  return (
    <section className="bg-[#020b14] py-12 border-y border-white/[0.04] relative overflow-hidden z-30">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-32 bg-[#4FA3A5]/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-32 bg-[#76C7C0]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 animate-[fadeUp_0.7s_ease-out_both]">
        <div className="text-left max-w-sm">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#76C7C0] uppercase block mb-1">
            Vetted Security
          </span>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Approved Regulatory Compliance
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-4 py-1.5 self-start md:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            Active Status Grid Verified
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#020b14] before:to-transparent before:z-20 after:content-[''] after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#020b14] after:to-transparent after:z-20">
        <div className="flex gap-16 whitespace-nowrap min-w-max animate-[marquee_28s_linear_infinite] will-change-transform">
          {infiniteScrollData.map((cert, index) => {
            const IconComponent = cert.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 select-none cursor-default group shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-[#4FA3A5]/40 group-hover:bg-[#4FA3A5]/5 transition-colors duration-200 shadow-inner">
                  <IconComponent
                    className="w-5 h-5 text-slate-400 group-hover:text-[#76C7C0] transition-colors duration-200"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-base font-black tracking-widest text-white transition-colors duration-200 group-hover:text-[#76C7C0] uppercase">
                      {cert.name}
                    </h4>

                    <span className="text-white/10 group-hover:text-[#4FA3A5]/30 text-xs transition-colors duration-200">
                      ✦
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block group-hover:text-slate-400 transition-colors duration-200 mt-0.5">
                    {cert.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}