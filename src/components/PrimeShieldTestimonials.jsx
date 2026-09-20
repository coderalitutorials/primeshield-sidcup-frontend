// import React from "react";

// export default function PrimeShieldTestimonials() {
//   const reviews = [
//     {
//       quote:
//         "PrimeShield dealt with a rodent issue in our property quickly and professionally. The inspection was clear, the advice was practical, and the treatment gave us real peace of mind.",
//       name: "Sarah L.",
//       service: "Rodent Control",
//     },
//     {
//       quote:
//         "We had bed bugs in one room and were really stressed. The team explained everything properly, treated the affected areas and helped us understand what to do after the visit.",
//       name: "James R.",
//       service: "Bed Bug Treatment",
//     },
//     {
//       quote:
//         "Very reliable pest control service for our London office. They arrived on time, checked the problem areas and gave us a simple prevention plan going forward.",
//       name: "Amelia T.",
//       service: "Commercial Pest Control",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-7">
//             <div className="text-[#F36F21] text-[90px] md:text-[130px] font-black leading-none">
//               ”
//             </div>

//             <h2 className="-mt-6 text-[#F36F21] text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug max-w-3xl">
//               “PrimeShield Services Limited helped us deal with a stressful pest
//               issue quickly, safely and with clear communication from start to
//               finish.”
//             </h2>

//             <div className="mt-10">
//               <h4 className="text-[#111111] font-black text-base">
//                 Emily P.
//               </h4>
//               <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.25em]">
//                 London Homeowner
//               </p>
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/testimonial-client.webp"
//                 alt="PrimeShield Services Limited happy customer after pest control service in London"
//                 className="w-full h-[420px] md:h-[520px] object-cover object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/25 via-transparent to-transparent" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="py-10 md:py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15"
//             >
//               <div className="text-[#F36F21] text-5xl font-black leading-none mb-7">
//                 ”
//               </div>

//               <p className="text-[#333333] text-sm leading-relaxed">
//                 “{review.quote}”
//               </p>

//               <div className="mt-8">
//                 <h4 className="text-[#111111] font-black text-base">
//                   {review.name}
//                 </h4>
//                 <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.22em]">
//                   {review.service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";

// export default function PrimeShieldTestimonials() {
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const reviews = [
//     {
//       quote:
//         "We noticed scratching sounds in our Kensington flat and contacted PrimeShield. The technician checked the problem areas, explained the rodent activity clearly and gave us useful proofing advice after the treatment.",
//       name: "Hannah M.",
//       service: "Rodent Control Kensington",
//     },
//     {
//       quote:
//         "Our bedroom had signs of bed bugs and we needed help quickly. PrimeShield Kensington inspected the room carefully, treated the affected areas and told us exactly how to prepare and what to do afterwards.",
//       name: "Oliver B.",
//       service: "Bed Bug Treatment Kensington",
//     },
//     {
//       quote:
//         "We booked PrimeShield Kensington for our small business near South Kensington. The visit was organised, discreet and professional, with clear recommendations to help prevent the issue returning.",
//       name: "Priya S.",
//       service: "Commercial Pest Control Kensington",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-7">
//             <div className="text-[#F36F21] text-[90px] md:text-[130px] font-black leading-none">
//               ”
//             </div>

//             <h2 className="-mt-6 text-[#F36F21] text-2xl sm:text-3xl lg:text-[38px] font-black leading-snug max-w-3xl">
//               “PrimeShield Kensington gave us clear guidance, careful treatment
//               and calm support when pests started affecting our South Kensington
//               property.”
//             </h2>

//             <p className="mt-7 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//               From {address}, PrimeShield Kensington supports local homeowners,
//               landlords and businesses with practical pest control solutions
//               across Kensington and South Kensington.
//             </p>

//             <div className="mt-10">
//               <h4 className="text-[#111111] font-black text-base">
//                 Laura K.
//               </h4>
//               <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.25em]">
//                 South Kensington Homeowner
//               </p>
//             </div>
//           </div>

//           <div className="lg:col-span-5">
//             <div className="relative overflow-hidden rounded-tr-[180px] md:rounded-tr-[260px] shadow-2xl">
//               <img
//                 src="/images/testimonial-client.webp"
//                 alt="PrimeShield Kensington happy customer after pest control service in South Kensington"
//                 className="w-full h-[420px] md:h-[520px] object-cover object-center"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/25 via-transparent to-transparent" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="py-10 md:py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15"
//             >
//               <div className="text-[#F36F21] text-5xl font-black leading-none mb-7">
//                 ”
//               </div>

//               <p className="text-[#333333] text-sm leading-relaxed">
//                 “{review.quote}”
//               </p>

//               <div className="mt-8">
//                 <h4 className="text-[#111111] font-black text-base">
//                   {review.name}
//                 </h4>
//                 <p className="mt-1 text-[#5F5F5F] text-xs font-black uppercase tracking-[0.22em]">
//                   {review.service}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Quote,
  Star,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";

export default function PrimeShieldTestimonials() {
  const navigate = useNavigate();

  const companyName = "PrimeShield Services Carshalton";
  const phone = "07438 756809";
  const address = "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
  const serviceArea = "Carshalton and nearby areas";

  const reviews = [
    {
      number: "01",
      quote:
        "We noticed scratching and signs of activity around the kitchen and called PrimeShield. The technician took time to look at the affected areas, explained what could be causing the problem and talked us through the treatment.",
      name: "Oliver M.",
      service: "Rat & Mice Control",
    },
    {
      number: "02",
      quote:
        "We were concerned about possible bed bug activity in one of the bedrooms. The inspection was handled carefully and the treatment process was explained clearly, which made the situation much easier to deal with.",
      name: "Sophie W.",
      service: "Bed Bug Treatment",
    },
    {
      number: "03",
      quote:
        "We had an active wasp nest around the property and needed professional help. PrimeShield explained what was involved and dealt with the treatment in a straightforward and professional way.",
      name: "Thomas B.",
      service: "Wasp Nest Treatment",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 font-sans text-white md:py-32">
      {/* Background details */}
      <div className="pointer-events-none absolute left-[8%] top-24 h-px w-[28%] bg-[#EE6C1A]/25" />

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EE6C1A]/10" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section intro */}
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#EE6C1A]" />

              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/35">
                Customer Feedback
              </span>
            </div>

            <div className="mt-8 border-l border-[#EE6C1A]/40 pl-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                PrimeShield
              </p>

              <p className="mt-3 text-sm leading-6 text-white/35">
                Experiences from customers who have used pest control
                services for their Carshalton properties.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <ShieldCheck
                size={17}
                className="text-[#EE6C1A]"
                strokeWidth={2}
              />

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/30">
                Local Service
              </span>
            </div>
          </div>

          <div>
            <p className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[72px]">
              A pest problem is personal.
              <span className="block text-white/25">
                So is the service you receive.
              </span>
            </p>

            <div className="mt-8 flex max-w-2xl items-start gap-4">
              <span className="mt-2 h-px w-12 shrink-0 bg-[#EE6C1A]" />

              <p className="text-sm leading-7 text-white/35 md:text-base">
                Clear communication, careful attention to the affected
                property and practical treatment are important parts of
                dealing with unwanted pest activity.
              </p>
            </div>
          </div>
        </div>

        {/* Main testimonial composition */}
        <div className="relative mt-20 border-y border-white/10 py-10 md:mt-24 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[110px_1fr_260px] lg:items-stretch">
            {/* Vertical index */}
            <div className="flex lg:flex-col lg:justify-between">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                  Reviews
                </p>

                <p className="mt-3 text-5xl font-black tracking-[-0.07em] text-[#EE6C1A]">
                  03
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="h-24 w-px bg-gradient-to-b from-[#EE6C1A] to-transparent" />
              </div>
            </div>

            {/* Large quote */}
            <div className="relative min-h-[390px] border border-white/10 bg-[#151414] p-7 sm:p-10 md:p-14">
              <Quote
                size={72}
                strokeWidth={1}
                className="absolute right-8 top-8 text-[#EE6C1A]/10 md:right-12 md:top-10"
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                        className="text-[#EE6C1A]"
                      />
                    ))}
                  </div>

                  <p className="mt-10 max-w-4xl text-2xl font-black leading-[1.35] tracking-[-0.025em] text-white sm:text-3xl md:text-[38px]">
                    “The technician took time to look at the affected areas,
                    explained what could be causing the problem and talked us
                    through the treatment.”
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-base font-black text-white">
                      Oliver M.
                    </p>

                    <p className="mt-1 text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
                      Carshalton Customer
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                      Service
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/45">
                      Rat & Mice Control
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side statement */}
            <div className="flex flex-col justify-between border-l border-white/10 pl-6 lg:pl-7">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/20">
                  Our Focus
                </p>

                <p className="mt-5 text-xl font-black leading-tight tracking-[-0.03em]">
                  Understand the problem.
                  <span className="block text-white/25">
                    Explain the treatment.
                  </span>
                </p>
              </div>

              <div className="mt-10">
                <p className="text-[8px] font-black uppercase tracking-[0.28em] text-white/20">
                  Coverage
                </p>

                <p className="mt-3 text-sm font-bold text-white/55">
                  {serviceArea}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer feedback rail */}
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
              More Customer Experiences
            </p>

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
              01 — 03
            </span>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.number}
                className="group relative min-h-[280px] bg-black p-7 transition-colors duration-500 hover:bg-[#151414] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.25em] text-[#EE6C1A]">
                    {review.number}
                  </span>

                  <div className="flex gap-0.5 opacity-60 transition-opacity group-hover:opacity-100">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={11}
                        fill="currentColor"
                        className="text-[#EE6C1A]"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-8 text-sm leading-7 text-white/45 transition-colors group-hover:text-white/60">
                  “{review.quote}”
                </p>

                <div className="absolute bottom-7 left-7 right-7 border-t border-white/10 pt-5 md:left-8 md:right-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-white">
                        {review.name}
                      </p>

                      <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
                        {review.service}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom contact band */}
        <div className="mt-20 overflow-hidden border border-white/10 bg-[#151414] md:mt-24">
          <div className="grid md:grid-cols-[1fr_auto]">
            <div className="p-7 md:p-9">
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                Need Pest Control?
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.035em] md:text-3xl">
                Talk to {companyName} about your property.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/30">
                Professional pest control support for homes and businesses
                across Carshalton and nearby areas.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact-us")}
              className="group flex min-h-[150px] items-center justify-center gap-4 bg-[#EE6C1A] px-8 text-black transition-colors duration-300 hover:bg-white md:min-w-[250px]"
            >
              <span className="text-[9px] font-black uppercase tracking-[0.22em]">
                Contact PrimeShield
              </span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>

          <div className="grid border-t border-white/10 md:grid-cols-2">
            <div className="flex items-start gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-6">
              <MapPin
                size={15}
                className="mt-0.5 shrink-0 text-[#EE6C1A]"
              />

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
                  Address
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  {address}
                </p>
              </div>
            </div>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 p-5 transition-colors hover:bg-white/[0.02] md:p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center border border-white/10 transition-colors group-hover:border-[#EE6C1A]">
                <Phone
                  size={14}
                  className="text-[#EE6C1A]"
                />
              </div>

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-white/20">
                  Direct Contact
                </p>

                <p className="mt-1 text-sm font-black text-white/60 transition-colors group-hover:text-[#EE6C1A]">
                  {phone}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}