


// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // Counter Function Component - Maintained with performance optimizations
// function AnimatedCounter({ value, duration = 2 }) {
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
//   const suffix = value.replace(/[0-9]/g, ''); 
  
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-30px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration: duration,
//         ease: "easeOut"
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();

//   // Scroll Grid Animations
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   // Fresh Data Array Structures
//   const stats = [
//     { number: "15+", label: "Years Professional Service" },
//     { number: "5/5", label: "Top Customer Rating" }, 
//     { number: "100%", label: "Treatment Guarantee" },
//     { number: "2K+", label: "Properties Protected" }
//   ];

//   return (
//     <section className="bg-white py-20 sm:py-28 text-neutral-900 overflow-hidden z-20 relative">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* --- TOP ROW LAYOUT: Content Intro Sync --- */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 text-left">
//           <div className="max-w-2xl space-y-4">
//             <div className="flex items-center gap-3">
//               <span className="w-12 h-[1.5px] bg-[#5C4033]" />
//               <span className="text-[#5C4033] text-xs font-black uppercase tracking-[0.25em]">
//                 Our Impact
//               </span>
//             </div>
//             <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 uppercase leading-tight">
//               Providing Premium Protection <br />Across The Region
//             </h2>
//           </div>
          
//           <div className="shrink-0 lg:mb-2">
//             <button 
//               onClick={() => navigate("/contact-us")}
//               className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#5C4033] hover:text-[#F2C12E] transition-colors duration-200 group cursor-pointer"
//             >
//               <span>Book your Inspection</span>
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>

//         {/* --- BOTTOM ROW LAYOUT: Immersive Deep Brown Stats Dashboard Box --- */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-30px" }}
//           className="bg-[#5C4033] rounded-sm text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-neutral-800"
//         >
//           {/* Subtle Graphic Ambient Vector Background Overlay */}
//           <div className="absolute inset-0 bg-black/10 pointer-events-none" />
//           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#F2C12E]/5 rounded-full blur-2xl pointer-events-none" />

//           {/* Fully Responsive Metric Track Display Block */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
//             {stats.map((stat, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={itemVariants}
//                 whileHover={{ y: -4 }}
//                 className="space-y-2 cursor-default text-left lg:border-l lg:border-white/10 lg:pl-6 first:border-l-0 first:pl-0 group"
//               >
//                 {/* Dynamic Counter Output styled with Logo Yellow (#F2C12E) */}
//                 <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none select-none text-[#F2C12E] transition-colors duration-300 group-hover:text-white">
//                   <AnimatedCounter value={stat.number} duration={2.2} />
//                 </div>
                
//                 {/* Descriptive label summary */}
//                 <div className="text-xs sm:text-sm font-bold tracking-wide text-gray-200 uppercase leading-tight pt-1">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }





// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
// import { Shield, ArrowRight, Target, Zap, Clock } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // Custom Tech Theme Colors mapped precisely
// const brandColors = {
//   bgBase: "#020b14",
//   panelCore: "#031E39",
//   cyanTeal: "#4FA3A5",
//   mintNeon: "#76C7C0"
// };

// function AnimatedCounter({ value, duration = 2.2 }) {
//   const isFraction = value.includes('/');
//   const numericString = value.replace(/[^0-9]/g, '');
//   const numericValue = parseInt(numericString, 10) || 0;
  
//   const suffix = value.replace(/[0-9]/g, ''); 
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-20px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration: duration,
//         ease: [0.25, 1, 0.5, 1]
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   if (isFraction) {
//     return (
//       <span ref={ref} className="inline-flex items-center">
//         <motion.span>{rounded}</motion.span>
//         <span className="text-slate-500 mx-1">/</span>
//         <span>{value.split('/')[1]}</span>
//       </span>
//     );
//   }

//   return (
//     <span ref={ref} className="inline-flex">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// export default function PesSaveStatsSection() {
//   const navigate = useNavigate();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const stats = [
//     { number: "15+", label: "Years Operational Depth", icon: Clock, desc: "Field experience across London perimeter grids." },
//     { number: "5/5", label: "Client Security Rating", icon: Shield, desc: "Flawless emergency eradication feedback metrics." }, 
//     { number: "100%", label: "Eradication Guarantee", icon: Target, desc: "Contractual warranty shielding commercial assets." },
//     { number: "2K+", label: "Infrastructures Secured", icon: Zap, desc: "Active domestic and commercial facilities protected." }
//   ];

//   return (
//     <section ref={ref} className="bg-[#020b14] py-20 md:py-28 text-white relative overflow-hidden z-30 border-y border-white/[0.04]">
      
//       {/* Dynamic Cyber Ambient Grid Overlays */}
//       <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />
//       <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />
//       <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />

//       {/* Extreme Radial Neon Blurs */}
//       <div className="absolute -top-40 right-[10%] w-[500px] h-[500px] bg-[#4FA3A5]/5 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute -bottom-20 left-[-5%] w-[400px] h-[400px] bg-[#76C7C0]/5 rounded-full blur-[130px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* THE BENTO FRAME ASYMMETRIC SYSTEM BLOCK */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
//           {/* BIG BLOCK CARD (LG ROW SPAN 5): Contains Text Layout + Mini Embedded Action HUD */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="lg:col-span-5 bg-gradient-to-br from-[#031E39]/40 to-[#020b14] border border-white/[0.08] rounded-3xl p-8 md:p-12 flex flex-col justify-between text-left shadow-[0_30px_65px_rgba(0,0,0,0.5)] relative overflow-hidden group"
//           >
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FA3A5]/5 rounded-full blur-2xl pointer-events-none transition-all duration-500 group-hover:bg-[#4FA3A5]/10" />
            
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] animate-pulse" />
//                 <span className="text-[10px] font-mono tracking-[0.2em] text-[#76C7C0] uppercase font-bold">Data Control Live</span>
//               </div>
//               <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-[1.1]">
//                 Quantifiable <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                   Resilience Metrics
//                 </span>
//               </h2>
//               <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
//                 Real-time operational indicators monitoring corporate biosecurity and active pest suppression networks across the Sidcup sector.
//               </p>
//             </div>

//             {/* Sliced Geometric Action Trigger Control Pod */}
//             <div className="pt-12 lg:pt-0">
//               <button 
//                 onClick={() => navigate("/contact-us")}
//                 className="w-full sm:w-auto inline-flex items-center justify-between gap-6 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] rounded-2xl px-6 py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#4FA3A5]/10 hover:shadow-[#4FA3A5]/20 group/btn cursor-pointer"
//               >
//                 <span>INITIATE AREA DEFENCE</span>
//                 <div className="w-7 h-7 rounded-xl bg-[#020b14]/10 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
//                   <ArrowRight className="w-4 h-4 text-[#020b14]" strokeWidth={2.5} />
//                 </div>
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE NESTED CELL TRACKS (LG ROW SPAN 7): The 4 Metrics Breakdown Block */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {stats.map((stat, idx) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div 
//                   key={idx}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
//                   whileHover={{ y: -4, borderColor: "rgba(118,199,192,0.25)" }}
//                   className="bg-gradient-to-b from-[#031E39]/10 to-transparent border border-white/[0.05] rounded-3xl p-6 md:p-8 text-left flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-xl"
//                 >
//                   {/* Structural neon light accent row */}
//                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-[#4FA3A5]/30 transition-all duration-500" />
                  
//                   <div>
//                     {/* Top Badge Micro Grid Layout */}
//                     <div className="flex items-center justify-between gap-4 mb-6">
//                       <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:border-[#4FA3A5]/30 group-hover:bg-[#4FA3A5]/5">
//                         <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#76C7C0] transition-colors" strokeWidth={1.8} />
//                       </div>
//                       <span className="font-mono text-[10px] font-bold text-white/10 group-hover:text-[#4FA3A5]/30 transition-colors">
//                         // SEC_ID_0{idx+1}
//                       </span>
//                     </div>

//                     {/* Numerical Metric Track Display */}
//                     <div className="text-4xl md:text-5xl font-black tracking-tight select-none text-white font-sans">
//                       <AnimatedCounter value={stat.number} duration={2.5} />
//                     </div>
                    
//                     <h4 className="text-xs font-bold tracking-widest text-[#76C7C0] uppercase mt-2">
//                       {stat.label}
//                     </h4>
//                   </div>

//                   <p className="text-xs text-slate-500 mt-4 leading-relaxed group-hover:text-slate-400 transition-colors">
//                     {stat.desc}
//                   </p>

//                   {/* Neon Running Strip Bar at bottom of metric cells */}
//                   <div className="w-full h-[1.5px] bg-white/5 mt-6 relative overflow-hidden rounded-full">
//                     <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] transition-all duration-500 -translate-x-full group-hover:translate-x-[400%]" />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }










import React, { useEffect, useRef, useState } from "react";
import { Shield, ArrowRight, Target, Zap, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AnimatedCounter({ value, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const isFraction = value.includes("/");
  const numericString = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime = null;

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.round(progress * numericValue);

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [numericValue, duration]);

  if (isFraction) {
    return (
      <span ref={ref} className="inline-flex items-center">
        <span>{count}</span>
        <span className="text-slate-500 mx-1">/</span>
        <span>{value.split("/")[1]}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className="inline-flex">
      <span>{count}</span>
      {suffix}
    </span>
  );
}

export default function PesSaveStatsSection() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "15+",
      label: "Years Operational Depth",
      icon: Clock,
      desc: "Field experience across London perimeter grids.",
    },
    {
      number: "5/5",
      label: "Client Security Rating",
      icon: Shield,
      desc: "Flawless emergency eradication feedback metrics.",
    },
    {
      number: "100%",
      label: "Eradication Guarantee",
      icon: Target,
      desc: "Contractual warranty shielding commercial assets.",
    },
    {
      number: "2K+",
      label: "Infrastructures Secured",
      icon: Zap,
      desc: "Active domestic and commercial facilities protected.",
    },
  ];

  return (
    <section className="bg-[#020b14] py-20 md:py-28 text-white relative overflow-hidden z-30 border-y border-white/[0.04]">
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-white/0 via-white/[0.03] to-white/0 pointer-events-none" />

      <div className="absolute -top-40 right-[10%] w-[360px] h-[360px] bg-[#4FA3A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-[-5%] w-[320px] h-[320px] bg-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#031E39]/40 to-[#020b14] border border-white/[0.08] rounded-3xl p-8 md:p-12 flex flex-col justify-between text-left shadow-xl relative overflow-hidden group animate-[fadeUp_0.7s_ease-out_both]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4FA3A5]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4FA3A5]/10 transition-colors duration-300" />

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#76C7C0] uppercase font-bold">
                  Data Control Live
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-[1.1]">
                Quantifiable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
                  Resilience Metrics
                </span>
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
                Real-time operational indicators monitoring corporate biosecurity
                and active pest suppression networks across the Sidcup sector.
              </p>
            </div>

            <div className="pt-12 lg:pt-0">
              <button
                onClick={() => navigate("/contact-us")}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-6 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] rounded-2xl px-6 py-4 text-xs font-black tracking-widest uppercase transition-transform duration-200 shadow-lg shadow-[#4FA3A5]/10 hover:-translate-y-0.5 active:scale-[0.98] group/btn cursor-pointer"
              >
                <span>INITIATE AREA DEFENCE</span>
                <div className="w-7 h-7 rounded-xl bg-[#020b14]/10 flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-[#020b14]" strokeWidth={2.5} />
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-[#031E39]/10 to-transparent border border-white/[0.05] rounded-3xl p-6 md:p-8 text-left flex flex-col justify-between transition-transform duration-200 relative group overflow-hidden shadow-xl hover:-translate-y-1 animate-[fadeUp_0.7s_ease-out_both]"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-[#4FA3A5]/30 transition-colors duration-300" />

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center transition-colors duration-200 group-hover:border-[#4FA3A5]/30 group-hover:bg-[#4FA3A5]/5">
                        <Icon
                          className="w-4 h-4 text-slate-400 group-hover:text-[#76C7C0] transition-colors duration-200"
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="font-mono text-[10px] font-bold text-white/10 group-hover:text-[#4FA3A5]/30 transition-colors duration-200">
                        // SEC_ID_0{idx + 1}
                      </span>
                    </div>

                    <div className="text-4xl md:text-5xl font-black tracking-tight select-none text-white font-sans">
                      <AnimatedCounter value={stat.number} />
                    </div>

                    <h4 className="text-xs font-bold tracking-widest text-[#76C7C0] uppercase mt-2">
                      {stat.label}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                    {stat.desc}
                  </p>

                  <div className="w-full h-[1.5px] bg-white/5 mt-6 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] transition-transform duration-500 -translate-x-full group-hover:translate-x-[400%]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}