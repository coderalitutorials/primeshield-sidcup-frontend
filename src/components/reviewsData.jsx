

// import React from "react";
// import { motion } from "framer-motion";
// import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

// // 4 High-Impact Structured Reviews
// const highImpactReviews = [
//   {
//     id: 1,
//     name: "Morgan Rogers",
//     role: "Property Resident",
//     image: "/images/reviews/user1.webp",
//     text: "Absolutely fantastic response from PesSave. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently.",
//     rating: "5.0 Verified"
//   },
//   {
//     id: 2,
//     name: "Eoin Bell",
//     role: "Restaurant Operations",
//     image: "/images/reviews/user2.webp",
//     text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and transparency.",
//     rating: "Audit Pass"
//   },
//   {
//     id: 3,
//     name: "Andrew Ellis",
//     role: "Estate Landlord",
//     image: "/images/reviews/user6.webp",
//     text: "Had a highly persistent bed bug outbreak across two flat layouts. PesSave resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
//     rating: "Core Clear"
//   },
//   {
//     id: 4,
//     name: "Sarah Jenkins",
//     role: "Commercial Manager",
//     image: "/images/reviews/user3.webp",
//     text: "Outstanding commercial contract execution. PesSave setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind.",
//     rating: "5.0 Verified"
//   }
// ];

// export default function PesSaveTestimonials() {
//   return (
//     <section className="relative py-28 md:py-36 bg-[#030d17] overflow-hidden z-20 border-b border-white/[0.04]">
      
//       {/* TECHNICAL BACKDROP ACCENTS */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />
//       <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#4FA3A5]/5 rounded-full blur-[150px] pointer-events-none" />
//       <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-[#76C7C0]/5 rounded-full blur-[150px] pointer-events-none" />

//       {/* ====================================================================== */}
//       {/* ASYMMETRIC HEADER SPLIT LOGIC                                          */}
//       {/* ====================================================================== */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 max-w-xl text-left">
//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/10 px-3.5 py-1 rounded-md backdrop-blur-sm shadow-xl">
//               <MessageSquare className="w-3 h-3 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">Vetted Transcripts</span>
//             </div>
//             <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
//               RELIABILITY <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
//                 WITHOUT COMPROMISE
//               </span>
//             </h2>
//           </div>
//           <div className="max-w-xs text-left md:text-right">
//             <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
//               Real-time response documentation collected across verified structural deployments in the London zones.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ====================================================================== */}
//       {/* SINGLE INFINITE DRIFT MARQUEE TRACK                                    */}
//       {/* ====================================================================== */}
//       <div className="relative w-full flex flex-col gap-6 select-none overflow-hidden max-w-[100vw]">
        
//         {/* SINGLE ROW CAROUSEL */}
//         <div className="w-full overflow-hidden relative mask-gradient">
//           <motion.div 
//             className="flex gap-6 w-max px-4"
//             animate={{ x: [0, -1760] }} // Adjusted to handle exact width spacing of 4 bento assets
//             transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//             whileHover={{ animationPlayState: "paused" }}
//           >
//             {/* Duplicate sequence once to make infinite loop seamless */}
//             {[...highImpactReviews, ...highImpactReviews].map((review, idx) => (
//               <ReviewCard key={`${review.id}-${idx}`} review={review} />
//             ))}
//           </motion.div>
//         </div>

//       </div>

//       {/* Custom Global Masking CSS for smooth side glass fading overlays */}
//       <style>{`
//         .mask-gradient {
//           mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
//           -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
//         }
//       `}</style>

//     </section>
//   );
// }

// {/* ====================================================================== */}
// {/* REUSABLE PREMIUM SLANTED CARD INFRASTRUCTURE                             */}
// {/* ====================================================================== */}
// function ReviewCard({ review }) {
//   return (
//     <div className="w-[360px] sm:w-[420px] bg-white/[0.01] border border-white/[0.05] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-2xl backdrop-blur-md relative overflow-hidden shrink-0 group transition-all duration-300 hover:border-[#4FA3A5]/30 hover:bg-white/[0.02]">
      
//       <div>
//         {/* Rating Head Grid */}
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-1">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-3 h-3 fill-[#76C7C0] text-[#76C7C0]" strokeWidth={0} />
//             ))}
//           </div>
//           <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded">
//             {review.rating}
//           </span>
//         </div>

//         {/* Core Narrative String */}
//         <div className="relative text-left">
//           <Quote className="absolute top-0 left-0 w-8 h-8 text-[#4FA3A5]/5 -translate-x-3 -translate-y-3 pointer-events-none" strokeWidth={1} />
//           <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal relative z-10 pl-1">
//             "{review.text}"
//           </p>
//         </div>
//       </div>

//       {/* User Block Matrix */}
//       <div className="flex items-center gap-3.5 pt-4 mt-6 border-t border-white/[0.04]">
//         <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 p-0.5 shrink-0">
//           <img
//             src={review.image}
//             alt={review.name}
//             className="w-full h-full object-cover rounded-lg filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
//             loading="lazy"
//           />
//         </div>
//         <div className="text-left min-w-0 flex-grow">
//           <div className="flex items-center gap-1">
//             <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate">
//               {review.name}
//             </h4>
//             <ShieldCheck className="w-3.5 h-3.5 text-[#76C7C0] shrink-0" />
//           </div>
//           <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
//             {review.role}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }












import React from "react";
import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

const highImpactReviews = [
  {
    id: 1,
    name: "Morgan Rogers",
    role: "Property Resident",
    image: "/images/reviews/user1.webp",
    text: "Absolutely fantastic response from PesSave. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently.",
    rating: "5.0 Verified",
  },
  {
    id: 2,
    name: "Eoin Bell",
    role: "Restaurant Operations",
    image: "/images/reviews/user2.webp",
    text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and transparency.",
    rating: "Audit Pass",
  },
  {
    id: 3,
    name: "Andrew Ellis",
    role: "Estate Landlord",
    image: "/images/reviews/user6.webp",
    text: "Had a highly persistent bed bug outbreak across two flat layouts. PesSave resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
    rating: "Core Clear",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Commercial Manager",
    image: "/images/reviews/user3.webp",
    text: "Outstanding commercial contract execution. PesSave setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind.",
    rating: "5.0 Verified",
  },
];

export default function PesSaveTestimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-[#030d17] overflow-hidden z-20 border-b border-white/[0.04]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none opacity-60" />
      <div className="absolute -top-40 left-1/4 w-[360px] h-[360px] bg-[#4FA3A5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[360px] h-[360px] bg-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10 animate-[fadeUp_0.7s_ease-out_both]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3.5 py-1 rounded-md shadow-lg">
              <MessageSquare className="w-3 h-3 text-[#76C7C0]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
                Vetted Transcripts
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]">
              RELIABILITY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
                WITHOUT COMPROMISE
              </span>
            </h2>
          </div>

          <div className="max-w-xs text-left md:text-right">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              Real-time response documentation collected across verified
              structural deployments in the London zones.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-6 select-none overflow-hidden max-w-[100vw]">
        <div className="w-full overflow-hidden relative mask-gradient">
          <div className="flex gap-6 w-max px-4 animate-[reviewMarquee_30s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
            {[...highImpactReviews, ...highImpactReviews].map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
        }

        @keyframes reviewMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="w-[360px] sm:w-[420px] bg-white/[0.015] border border-white/[0.05] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden shrink-0 group transition-colors duration-200 hover:border-[#4FA3A5]/30 hover:bg-white/[0.025]">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
         <Star
  key={i}
  className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]"
  strokeWidth={0}
/>
            ))}
          </div>

          <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded">
            {review.rating}
          </span>
        </div>

        <div className="relative text-left">
          <Quote
            className="absolute top-0 left-0 w-8 h-8 text-[#4FA3A5]/5 -translate-x-3 -translate-y-3 pointer-events-none"
            strokeWidth={1}
          />
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal relative z-10 pl-1">
            "{review.text}"
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3.5 pt-4 mt-6 border-t border-white/[0.04]">
        <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/[0.02] border border-white/10 p-0.5 shrink-0">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover rounded-lg grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-200"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="text-left min-w-0 flex-grow">
          <div className="flex items-center gap-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate">
              {review.name}
            </h4>
            <ShieldCheck className="w-3.5 h-3.5 text-[#76C7C0] shrink-0" />
          </div>

          <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
            {review.role}
          </span>
        </div>
      </div>
    </div>
  );
}