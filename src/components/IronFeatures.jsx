// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   ShieldCheck, 
//   Clock, 
//   PhoneCall, 
//   Sparkles, 
//   Activity, 
//   UserCheck 
// } from "lucide-react"; // Using lucide-react icons matching image_99f39b.png layout

// const featureItems = [
//   {
//     id: 1,
//     title: "Perfection Anytime",
//     icon: Clock,
//     desc: "We deliver precise pest control treatments timed perfectly to fit your domestic schedule without disruptions.",
//   },
//   {
//     id: 2,
//     title: "24/7 Communication",
//     icon: PhoneCall,
//     desc: "Direct round-the-clock emergency assistance line always active to handle sudden domestic pest breakthroughs.",
//   },
//   {
//     id: 3,
//     title: "Our Fleet",
//     icon: ShieldCheck,
//     desc: "Rapid response structural team equipped with highly advanced practical local treatment tools ready for deployment.",
//   },
//   {
//     id: 4,
//     title: "Emergency Help",
//     icon: Sparkles,
//     desc: "Immediate emergency counter-measures deployed to instantly clear intense rat or insect activity safely.",
//   },
//   {
//     id: 5,
//     title: "Advanced Methods",
//     icon: Activity,
//     desc: "Using direct, high-impact localized treatment solutions to clear out colonies and block recurring entry paths.",
//   },
//   {
//     id: 6,
//     title: "Certified Team",
//     icon: UserCheck,
//     desc: "Fully trained and certified treatment specialists ensuring safe, straightforward execution across properties.",
//   },
// ];

// // Staggered layout entry animations matching your premium SaaS flow
// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// export default function IronFeatures() {
//   return (
//     <section className="relative min-h-screen py-20 sm:py-28 flex items-center justify-center overflow-hidden bg-[#131E29]">
      
//       {/* 
//         =======================================================================
//         PLACE YOUR BIG BACKGROUND IMAGE HERE
//         Replace the placeholder URL inside standard tailwind style if needed.
//         =======================================================================
//       */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
//         style={{ 
//           backgroundImage: `url('/images/about/contact.webp')` /* <-- APNI BADI IMAGE KA PATH YAHAN LAGAYEIN */
//         }} 
//       />

//       {/* Extreme Dark Overlay matching image_99f39b.png opacity to maximize text contrast */}
//       <div className="absolute inset-0 bg-[#131E29]/90 backdrop-blur-[2px]" />

//       {/* Main Structural Content Wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
//         {/* Section Typography Headers */}
//         <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
//           <span className="text-[#EE6002] text-xs font-black uppercase tracking-[0.3em] block mb-4">
//             Why Choose Us
//           </span>
//           <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             What Sets Us Apart
//           </h2>
//           <div className="w-20 h-1 bg-[#EE6002] mx-auto mt-6" />
//         </div>

//         {/* 6-Box Thin Border Layout Grid directly mapping image_99f39b.png */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-3 border border-white/10"
//         >
//           {featureItems.map((item) => {
//             const IconComponent = item.icon;
//             return (
//               <motion.div
//                 key={item.id}
//                 variants={itemVariants}
//                 whileHover={{ backgroundColor: "rgba(26, 38, 51, 0.4)" }}
//                 className="p-8 sm:p-12 flex flex-col items-center text-center border border-white/10 transition-colors duration-300 relative group"
//               >
//                 {/* Accent Hover Line Over Each Grid Box */}
//                 <div className="absolute top-0 left-0 w-full h-[3px] bg-[#EE6002] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

//                 {/* Tactical Brand Orange Icon */}
//                 <div className="mb-6 text-[#EE6002] p-3 bg-[#1A2633]/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
//                   <IconComponent className="w-8 h-8" strokeWidth={2.5} />
//                 </div>

//                 {/* Text Layout Block */}
//                 <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide mb-4 transition-colors duration-200 group-hover:text-[#EE6002]">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium max-w-xs">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// }














import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  Sparkles, 
  Activity, 
  UserCheck 
} from "lucide-react"; 

const featureItems = [
  {
    id: 1,
    title: "Perfection Anytime",
    icon: Clock,
    desc: "We deliver precise pest control treatments timed perfectly to fit your domestic schedule without disruptions.",
  },
  {
    id: 2,
    title: "24/7 Communication",
    icon: PhoneCall,
    desc: "Direct round-the-clock emergency assistance line always active to handle sudden domestic pest breakthroughs.",
  },
  {
    id: 3,
    title: "Our Fleet",
    icon: ShieldCheck,
    desc: "Rapid response structural team equipped with highly advanced practical local treatment tools ready for deployment.",
  },
  {
    id: 4,
    title: "Emergency Help",
    icon: Sparkles,
    desc: "Immediate emergency counter-measures deployed to instantly clear intense rat or insect activity safely.",
  },
  {
    id: 5,
    title: "Advanced Methods",
    icon: Activity,
    desc: "Using direct, high-impact localized treatment solutions to clear out colonies and block recurring entry paths.",
  },
  {
    id: 6,
    title: "Certified Team",
    icon: UserCheck,
    desc: "Fully trained and certified treatment specialists ensuring safe, straightforward execution across properties.",
  },
];

// Staggered layout entry animations
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function IronFeatures() {
  return (
    <section className="relative min-h-screen py-20 sm:py-28 flex items-center justify-center overflow-hidden bg-[#131E29]">
      
      {/* =======================================================================
          DYNAMIC RESPONSIVE BACKGROUND IMAGE LAYER (ART DIRECTION)
          ======================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
        <picture className="w-full h-full block transform scale-105">
          {/* Desktop & Tablet Screens (768px and up) -> Loads Landscape Image */}
          <source media="(min-width: 768px)" srcSet="/images/about/contact.webp" />
          
          {/* Mobile Screens (< 768px) -> Loads Vertical 9:16 Asset */}
          <img 
            src="/images/about/contact-mobile.webp" /* <-- RESPONSIVE MOBILE IMAGE YAHAN RAKHEIN */
            alt="Why Choose Us" 
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Extreme Dark Overlay matching your aesthetic to maximize text contrast */}
      <div className="absolute inset-0 bg-[#131E29]/92 backdrop-blur-[2px] z-1" />

      {/* Main Structural Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Typography Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[#EE6002] text-xs font-black uppercase tracking-[0.3em] block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
            What Sets Us Apart
          </h2>
          <div className="w-20 h-1 bg-[#EE6002] mx-auto mt-6" />
        </div>

        {/* 6-Box Thin Border Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 border border-white/10"
        >
          {featureItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ backgroundColor: "rgba(26, 38, 51, 0.4)" }}
                className="p-8 sm:p-12 flex flex-col items-center text-center border border-white/10 transition-colors duration-300 relative group"
              >
                {/* Accent Hover Line Over Each Grid Box */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#EE6002] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Tactical Brand Orange Icon */}
                <div className="mb-6 text-[#EE6002] p-3 bg-[#1A2633]/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* Text Layout Block */}
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide mb-4 transition-colors duration-200 group-hover:text-[#EE6002]">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}