// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#3B3B3B]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-5xl animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             About Us
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight">
//             Welcome to PrimeShield Services Limited, where reliable pest control
//             meets professional London protection...
//           </h2>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-[#3B3B3B]/20 pt-10">
//           <div className="lg:col-span-6 animate-[fadeLeft_0.75s_ease-out_both]">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="PrimeShield Services Limited pest control technician inspecting a London property"
//                 className="w-full h-[420px] md:h-[520px] object-contain object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent" />
//             </div>
//           </div>

//           <div className="lg:col-span-6 lg:pl-6 animate-[fadeRight_0.75s_ease-out_both]">
//             <h3 className="text-[#111111] text-xl md:text-2xl font-black leading-snug max-w-lg">
//               We understand that every pest problem is different, and our team is
//               here to provide safe, effective and discreet treatment support.
//             </h3>

//             <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//             <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               PrimeShield Services Limited helps homeowners, landlords and local
//               businesses across London deal with unwanted pests quickly and
//               professionally. From rodents and bed bugs to cockroaches, ants,
//               fleas, moths and wasp nests, we focus on clear inspection,
//               targeted treatment and practical prevention advice.
//             </p>

//             <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               Based at 12 Old Bond Street, London, England, W1S 4PW, our service
//               approach is built around reliability, careful property protection
//               and responsive customer support for residential and commercial
//               pest control needs.
//             </p>

//             <div className="mt-9">
//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeRight {
//           from {
//             opacity: 0;
//             transform: translateX(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }







// import React from "react";
// import { Link } from "react-router-dom";

// export default function AboutIntroSection() {
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#3B3B3B]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-5xl animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             About PrimeShield Kensington
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.08] tracking-tight">
//             Local pest control in Kensington with careful inspections, targeted
//             treatments and reliable property protection.
//           </h2>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-[#3B3B3B]/20 pt-10">
//           <div className="lg:col-span-6 animate-[fadeLeft_0.75s_ease-out_both]">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/about-pest-control.webp"
//                 alt="PrimeShield Kensington pest control technician inspecting a property near South Kensington"
//                 className="w-full h-[420px] md:h-[520px] object-contain object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-transparent" />
//             </div>
//           </div>

//           <div className="lg:col-span-6 lg:pl-6 animate-[fadeRight_0.75s_ease-out_both]">
//             <h3 className="text-[#111111] text-xl md:text-2xl font-black leading-snug max-w-lg">
//               We help homes, landlords and businesses across Kensington deal
//               with pest problems quickly, safely and discreetly.
//             </h3>

//             <div className="w-20 h-[3px] bg-[#F36F21] my-7" />

//             <p className="text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               PrimeShield Kensington provides professional pest control support
//               across Kensington and South Kensington, helping local properties
//               manage rodents, bed bugs, cockroaches, ants, fleas, moths, carpet
//               beetles and wasp nests. Our work begins with a clear inspection,
//               followed by a treatment plan designed around the property, pest
//               activity and level of infestation.
//             </p>

//             <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-xl">
//               Based at {address}, PrimeShield Kensington focuses on dependable
//               service, safe treatment methods and practical prevention advice
//               for residential and commercial pest control needs throughout the
//               Kensington area.
//             </p>

//             <div className="mt-9">
//               <Link
//                 to="/about-us"
//                 className="inline-flex items-center justify-center bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors"
//               >
//                 Read About Kensington Team
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeRight {
//           from {
//             opacity: 0;
//             transform: translateX(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }











import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Check,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function AboutIntroSection() {
  const companyName = "PrimeShield Services Carshalton";
  const phone = "07438 756809";
  const address = "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
  const serviceArea = "Carshalton and nearby areas";

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28 lg:py-32">

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.32em] text-[#EE6C1A]">
              About The Company
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              PrimeShield Services Carshalton
            </h2>
          </div>

          <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-white/30">
            <span className="h-2 w-2 bg-[#EE6C1A]" />
            Local Pest Control
          </div>

        </div>

        {/* =====================================================
            MAIN INFORMATION BOARD
        ====================================================== */}
        <div className="mt-10 grid gap-0 border border-white/10 lg:grid-cols-[230px_1fr_330px]">

          {/* =================================================
              LEFT INDEX PANEL
          ================================================== */}
          <div className="flex flex-col justify-between bg-[#151414] p-6 md:p-8 lg:border-r lg:border-white/10">

            <div>

              <div className="flex h-12 w-12 items-center justify-center border border-[#EE6C1A]/30">
                <ShieldCheck className="h-5 w-5 text-[#EE6C1A]" />
              </div>

              <p className="mt-8 text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
                Company Focus
              </p>

              <p className="mt-3 text-sm font-bold leading-6 text-white/65">
                Practical pest control for properties across Carshalton
                and nearby areas.
              </p>

            </div>

            <div className="mt-12 lg:mt-20">

              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">
                Service Area
              </p>

              <p className="mt-2 text-sm font-bold text-[#EE6C1A]">
                Carshalton
              </p>

              <p className="mt-1 text-xs leading-5 text-white/30">
                & nearby areas
              </p>

            </div>

          </div>

          {/* =================================================
              IMAGE COMPOSITION
          ================================================== */}
          <div className="relative min-h-[520px] overflow-hidden bg-[#151414] p-5 md:p-8 lg:min-h-[620px]">

            {/* Main Image */}
            <div className="relative h-[390px] overflow-hidden md:h-[470px]">

              <img
                src="/images/about-pest-control.webp"
                alt={`${companyName} professional pest control`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 flex items-center gap-3">

                <span className="h-2 w-2 bg-[#EE6C1A]" />

                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-white/70">
                  Local Service
                </span>

              </div>

              <div className="absolute bottom-5 left-5">

                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  PrimeShield
                </p>

                <p className="mt-1 text-2xl font-black tracking-[-0.04em]">
                  Carshalton
                </p>

              </div>

            </div>

            {/* Small Secondary Panel */}
            <div className="absolute bottom-7 right-7 flex w-[210px] items-center gap-4 border border-white/15 bg-black/90 p-4 backdrop-blur-md md:bottom-10 md:right-10">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A]">
                <Building2 className="h-4 w-4 text-white" />
              </div>

              <div>

                <p className="text-[7px] font-black uppercase tracking-[0.22em] text-white/30">
                  Property Types
                </p>

                <p className="mt-1 text-xs font-bold text-white/75">
                  Homes & Businesses
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT INFORMATION PANEL
          ================================================== */}
          <div className="bg-[#151414] p-6 md:p-8 lg:border-l lg:border-white/10">

            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
              What We Do
            </p>

            <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.035em]">
              Dealing with unwanted
              <span className="block text-white/30">
                pest activity.
              </span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/40">
              Pest problems can vary considerably from one property
              to another. Our service is focused on understanding the
              situation and selecting suitable pest control measures
              for the circumstances.
            </p>

            <div className="my-8 h-px bg-white/10" />

            {/* Facts */}
            <div className="space-y-5">

              <div className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#EE6C1A]" />

                <div>
                  <p className="text-xs font-bold text-white/70">
                    Residential properties
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/25">
                    Support for common household pest issues.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#EE6C1A]" />

                <div>
                  <p className="text-xs font-bold text-white/70">
                    Commercial premises
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/25">
                    Pest control considerations for working properties.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#EE6C1A]" />

                <div>
                  <p className="text-xs font-bold text-white/70">
                    Targeted treatments
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/25">
                    Treatment selected around the pest and property.
                  </p>
                </div>
              </div>

            </div>

            <Link
              to="/about-us"
              className="group mt-9 flex items-center justify-between border border-white/15 px-4 py-4 transition-all duration-300 hover:border-[#EE6C1A] hover:bg-[#EE6C1A]"
            >

              <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                More About PrimeShield
              </span>

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

            </Link>

          </div>

        </div>

        {/* =====================================================
            BOTTOM INFORMATION BAR
        ====================================================== */}
        <div className="grid border-x border-b border-white/10 md:grid-cols-2 lg:grid-cols-4">

          {/* Item 1 */}
          <div className="border-b border-white/10 p-6 md:border-r md:py-7 lg:border-b-0">

            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
              Location
            </p>

            <div className="mt-3 flex items-start gap-3">

              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EE6C1A]" />

              <p className="text-xs font-semibold leading-5 text-white/55">
                {address}
              </p>

            </div>

          </div>

          {/* Item 2 */}
          <div className="border-b border-white/10 p-6 md:border-r md:py-7 lg:border-b-0">

            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
              Coverage
            </p>

            <p className="mt-3 text-sm font-bold text-white/65">
              {serviceArea}
            </p>

          </div>

          {/* Item 3 */}
          <div className="border-b border-white/10 p-6 md:border-r md:py-7 lg:border-b-0">

            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
              Direct Contact
            </p>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-3 flex items-center gap-3 text-sm font-black text-white/65 transition-colors hover:text-[#EE6C1A]"
            >
              <Phone className="h-4 w-4 text-[#EE6C1A]" />
              {phone}
            </a>

          </div>

          {/* Item 4 */}
          <div className="flex items-center bg-[#EE6C1A] p-6 md:py-7">

            <Link
              to="/services"
              className="group flex w-full items-center justify-between gap-4"
            >

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/60">
                  Explore
                </p>

                <p className="mt-1 text-sm font-black">
                  Pest Control Services
                </p>
              </div>

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}