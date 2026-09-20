// import React from "react";
// import { ShieldCheck, Clock, Building2 } from "lucide-react";

// export default function AboutCommitmentSection() {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F36F21]/8 blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#111111]/5 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//           PrimeShield Promise
//         </span>

//         <h2 className="max-w-6xl text-[#111111] text-4xl sm:text-5xl lg:text-[68px] font-black leading-[1.12] tracking-tight">
//           Our commitment goes beyond pest treatment; we help protect your
//           property, comfort and peace of mind.
//         </h2>

//         <div className="w-full h-px bg-[#111111]/15 my-14 md:my-18" />

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
//           <div className="lg:col-span-5">
//             <h3 className="text-[#111111] text-2xl md:text-3xl font-black leading-snug max-w-lg">
//               PrimeShield Services Limited was built to deliver reliable pest
//               control with clear advice, careful inspection and professional
//               service.
//             </h3>

//             <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

//             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
//               {[
//                 {
//                   icon: ShieldCheck,
//                   title: "Safe Treatment",
//                 },
//                 {
//                   icon: Clock,
//                   title: "Responsive Support",
//                 },
//                 {
//                   icon: Building2,
//                   title: "Homes & Businesses",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 bg-[#F7F3EF] border border-[#F36F21]/10 p-4"
//                   >
//                     <div className="w-10 h-10 bg-[#F36F21] text-white flex items-center justify-center shrink-0">
//                       <Icon size={20} />
//                     </div>
//                     <span className="text-[#111111] text-sm font-black">
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-7">
//             <div className="bg-[#F7F3EF] border border-[#111111]/10 p-7 md:p-10 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
//               <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Since our beginning, we have focused on making pest control
//                 simple, professional and dependable for customers across London.
//                 We understand how stressful pests can be, whether it is rodents
//                 in a property, bed bugs in a bedroom, cockroaches in a kitchen or
//                 wasps around an outdoor space.
//               </p>

//               <p className="mt-7 text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Our team takes a practical approach: inspect the issue, explain
//                 the options clearly, carry out targeted treatment and provide
//                 useful prevention advice. This helps customers understand the
//                 problem and take better steps to reduce future infestations.
//               </p>

//               <p className="mt-7 text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 PrimeShield Services Limited supports homeowners, landlords,
//                 managing agents and commercial clients with trusted pest
//                 management services designed around safety, discretion and
//                 long-term property protection.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { ShieldCheck, Clock, Building2 } from "lucide-react";

export default function AboutCommitmentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#F36F21]/8 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#111111]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
          PrimeShield Kensington Promise
        </span>

        <h2 className="max-w-6xl text-[#111111] text-4xl sm:text-5xl lg:text-[68px] font-black leading-[1.12] tracking-tight">
          Our commitment is to protect Kensington properties with clear advice,
          safe treatment and dependable pest control support.
        </h2>

        <div className="w-full h-px bg-[#111111]/15 my-14 md:my-18" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-[#111111] text-2xl md:text-3xl font-black leading-snug max-w-lg">
              PrimeShield Kensington supports local homes, landlords and
              businesses with professional pest control from 40 Harrington Rd,
              South Kensington, London SW7 3ND.
            </h3>

            <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Safe Treatment",
                },
                {
                  icon: Clock,
                  title: "Responsive Support",
                },
                {
                  icon: Building2,
                  title: "Kensington Properties",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#F7F3EF] border border-[#F36F21]/10 p-4"
                  >
                    <div className="w-10 h-10 bg-[#F36F21] text-white flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <span className="text-[#111111] text-sm font-black">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F7F3EF] border border-[#111111]/10 p-7 md:p-10 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
              <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                PrimeShield Kensington is focused on making pest control simple,
                clear and dependable for customers across Kensington and South
                Kensington. We understand how disruptive pest activity can be,
                whether it involves rats or mice inside a property, bed bugs in
                a bedroom, cockroaches around a kitchen or wasps near an outdoor
                space.
              </p>

              <p className="mt-7 text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                Our approach is built around careful inspection, honest
                explanation and targeted treatment. We look at how the pest
                problem is affecting the property, explain the available
                options and provide practical prevention advice to help reduce
                the chance of future activity.
              </p>

              <p className="mt-7 text-[#5F5F5F] text-base md:text-lg leading-relaxed">
                From our local base at 40 Harrington Rd, South Kensington,
                London SW7 3ND, PrimeShield Kensington supports homeowners,
                landlords, managing agents and commercial clients with pest
                control services designed around safety, discretion and
                long-term protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}