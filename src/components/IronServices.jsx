

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();

//   const servicesData = [
//     {
//       id: "01",
//       title: "Rodent Control",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Professional rat and mice control for London homes and businesses, including inspection, safe treatment and entry-point advice.",
//     },
//     {
//       id: "02",
//       title: "Bed Bug Treatment",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Targeted bed bug inspections and treatment plans for bedrooms, furniture and affected areas to help restore a clean, comfortable space.",
//     },
//     {
//       id: "03",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Fast and careful wasp nest control for residential and commercial properties, handled with the right protective methods.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Our Services
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
//             Expert pest control services built to protect London properties.
//           </h2>

//           <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Services Limited provides reliable pest inspections,
//             treatments and prevention advice for homeowners, landlords and
//             businesses across London.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both] cursor-pointer"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="flex items-center justify-between mb-7">
//                   <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
//                     <Icon size={22} strokeWidth={2.2} />
//                   </div>

//                   <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
//                     {service.id}
//                   </span>
//                 </div>

//                 <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
//                   {service.details}
//                 </p>

//                 <div className="inline-flex items-center gap-2 text-[#111111] group-hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8">
//                   Contact Us
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
//                   <img
//                     src={service.image}
//                     alt={`PrimeShield Services Limited ${service.title} service in London`}
//                     className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                     {/* <span className="bg-white text-[#111111] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
//                       London Service
//                     </span> */}
//                     {/* <span className="bg-[#F36F21] text-white w-10 h-10 flex items-center justify-center">
//                       <ArrowRight size={18} />
//                     </span> */}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: Home,
//               title: "Residential Properties",
//               text: "Safe treatments for homes, flats and rented properties.",
//             },
//             {
//               icon: Building2,
//               title: "Commercial Premises",
//               text: "Support for offices, shops, restaurants and businesses.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Professional Approach",
//               text: "Clear inspection, treatment planning and prevention advice.",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
//                   <Icon size={21} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#111111] font-black text-base">
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-14">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
//           >
//             View All Services
//             <ArrowRight size={17} />
//           </button>
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
//       `}</style>
//     </section>
//   );
// }







// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const servicesData = [
//     {
//       id: "01",
//       title: "Rodent Control Kensington",
//       image: "/images/rodents.webp",
//       icon: Rat,
//       details:
//         "Local rat and mice control in Kensington, including inspection, safe treatment and entry-point advice for homes, flats and business premises.",
//     },
//     {
//       id: "02",
//       title: "Bed Bug Treatment Kensington",
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       details:
//         "Focused bed bug inspections and treatment support across Kensington and South Kensington for bedrooms, furniture and affected living spaces.",
//     },
//     {
//       id: "03",
//       title: "Wasp Nest Removal Kensington",
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       details:
//         "Careful wasp nest removal in Kensington for residential and commercial properties, using suitable protective methods and targeted treatment.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EF] py-20 md:py-28 font-sans">
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F36F21]" />
//       <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//       <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#111111]/10 blur-3xl" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="max-w-4xl mb-14 md:mb-18 animate-[fadeUp_0.7s_ease-out_both]">
//           <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.28em] mb-5">
//             Pest Control Services Kensington
//           </span>

//           <h2 className="text-[#111111] text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.08] tracking-tight">
//             Expert pest control services in Kensington for homes, landlords and
//             local businesses.
//           </h2>

//           <p className="mt-6 text-[#5F5F5F] text-sm md:text-base leading-relaxed max-w-2xl">
//             PrimeShield Kensington provides reliable pest inspections,
//             treatments and prevention advice across Kensington and South
//             Kensington. From our local base at {address}, we support properties
//             with safe, practical and professional pest control solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <div
//                 key={service.id}
//                 onClick={() => navigate("/contact-us")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     navigate("/contact-us");
//                   }
//                 }}
//                 className="group relative px-0 md:px-6 lg:px-8 py-10 md:py-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[#111111]/15 animate-[fadeUp_0.7s_ease-out_both] cursor-pointer"
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 <div className="flex items-center justify-between mb-7">
//                   <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#F36F21] transition-colors duration-300">
//                     <Icon size={22} strokeWidth={2.2} />
//                   </div>

//                   <span className="text-[#F36F21] text-xs font-black tracking-[0.22em]">
//                     {service.id}
//                   </span>
//                 </div>

//                 <h3 className="text-[#111111] text-2xl font-black leading-tight mb-5 group-hover:text-[#F36F21] transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-[#5F5F5F] text-sm leading-relaxed mb-7 min-h-[96px]">
//                   {service.details}
//                 </p>

//                 <div className="inline-flex items-center gap-2 text-[#111111] group-hover:text-[#F36F21] text-xs font-black uppercase tracking-[0.22em] transition-colors duration-300 mb-8">
//                   Contact Kensington Team
//                   <ArrowRight
//                     size={16}
//                     className="group-hover:translate-x-1 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="relative overflow-hidden rounded-br-[130px] rounded-tl-2xl shadow-xl">
//                   <img
//                     src={service.image}
//                     alt={`PrimeShield Kensington ${service.title} service near South Kensington`}
//                     className="w-full h-[310px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
//                     loading="lazy"
//                     decoding="async"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/55 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: Home,
//               title: "Kensington Homes & Flats",
//               text: "Safe pest treatments for houses, flats, apartments and rented properties across Kensington.",
//             },
//             {
//               icon: Building2,
//               title: "Kensington Commercial Premises",
//               text: "Support for offices, shops, restaurants and local businesses in Kensington and South Kensington.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "Local Professional Approach",
//               text: `Clear inspection, treatment planning and prevention advice from ${address}.`,
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white border border-[#111111]/10 p-6 flex items-start gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-11 h-11 bg-[#F36F21]/10 text-[#F36F21] flex items-center justify-center shrink-0">
//                   <Icon size={21} />
//                 </div>
//                 <div>
//                   <h4 className="text-[#111111] font-black text-base">
//                     {item.title}
//                   </h4>
//                   <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-14">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-9 py-4 text-xs font-black uppercase tracking-[0.22em] hover:bg-[#D95A13] transition-colors cursor-pointer"
//           >
//             View All Kensington Services
//             <ArrowRight size={17} />
//           </button>
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
//       `}</style>
//     </section>
//   );
// }












import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Rat,
  Bug,
  ShieldAlert,
  Home,
  Building2,
  SearchCheck,
  Phone,
  MapPin,
} from "lucide-react";

export default function PrimeShieldServices() {
  const navigate = useNavigate();

  const companyName = "PrimeShield Services Carshalton";
  const phone = "07438 756809";
  const address = "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
  const serviceArea = "Carshalton and nearby areas";

  const servicesData = [
    {
      number: "01",
      title: "Rat & Mice Control",
      shortTitle: "Rodent Control",
      image: "/images/rodents.webp",
      icon: Rat,
      description:
        "Targeted rodent control for homes, flats, landlords and local businesses. We focus on identifying signs of activity, addressing the affected areas and helping reduce the conditions that allow rodents to return.",
    },
    {
      number: "02",
      title: "Bed Bug Treatment",
      shortTitle: "Bed Bug Treatment",
      image: "/images/bedbugs.webp",
      icon: Bug,
      description:
        "Careful bed bug treatment for bedrooms, rental properties and other affected spaces. Each situation is assessed individually so treatment can be planned around the property and extent of activity.",
    },
    {
      number: "03",
      title: "Wasp Nest Removal",
      shortTitle: "Wasp Treatment",
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      description:
        "Professional treatment for active wasp nests around residential and commercial properties. Our approach is designed around the location of the nest and the circumstances of the property.",
    },
  ];

  const propertyTypes = [
    {
      number: "A",
      icon: Home,
      label: "Homes",
      title: "Residential Pest Control",
      text:
        "Support for houses, flats, rented homes and other residential properties across Carshalton.",
    },
    {
      number: "B",
      icon: Building2,
      label: "Business",
      title: "Commercial Premises",
      text:
        "Pest control for shops, offices, hospitality premises and other local working environments.",
    },
    {
      number: "C",
      icon: SearchCheck,
      label: "Assessment",
      title: "Inspect & Understand",
      text:
        "We look at the pest activity, affected areas and property circumstances before deciding on suitable measures.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 font-sans text-white md:py-32">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full border border-[#EE6C1A]/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="pointer-events-none absolute right-0 top-[35%] h-[500px] w-[1px] bg-[#EE6C1A]/10" />

      <div className="pointer-events-none absolute bottom-0 left-[12%] h-px w-[35%] bg-white/10" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="relative">
            <div className="sticky top-10">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />
                <span className="text-[9px] font-black uppercase tracking-[0.32em] text-white/35">
                  Services · Carshalton
                </span>
              </div>

              <div className="mt-8">
                <span className="block text-[100px] font-black leading-none tracking-[-0.08em] text-white/[0.045] sm:text-[130px]">
                  03
                </span>

                <h2 className="-mt-8 max-w-md text-4xl font-black leading-[0.96] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                  Pest problems.
                  <span className="block text-[#EE6C1A]">
                    Properly addressed.
                  </span>
                </h2>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/40 md:text-base">
                From unwanted rodents to bed bugs and active wasp nests,
                {` ${companyName}`} provides practical pest control for
                properties throughout {serviceArea}.
              </p>

              <button
                onClick={() => navigate("/contact-us")}
                className="group mt-9 inline-flex items-center gap-4 border border-white/15 px-5 py-4 text-[9px] font-black uppercase tracking-[0.24em] transition-all duration-300 hover:border-[#EE6C1A] hover:bg-[#EE6C1A] hover:text-black"
              >
                Speak With Us
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  onClick={() => navigate("/contact-us")}
                  className={`group relative cursor-pointer overflow-hidden border border-white/10 bg-[#151414] transition-all duration-500 hover:border-[#EE6C1A]/60 ${
                    index === 1 ? "lg:translate-x-10" : ""
                  } ${
                    index === 2 ? "lg:translate-x-20" : ""
                  }`}
                >
                  <div className="relative p-5 sm:p-7 md:p-8">
                    {/* Top service line */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black tracking-[0.25em] text-[#EE6C1A]">
                          {service.number}
                        </span>

                        <span className="h-px w-8 bg-white/15" />

                        <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
                          {service.shortTitle}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
                      />
                    </div>

                    {/* Main service content */}
                    <div className="mt-7 grid items-center gap-8 md:grid-cols-[150px_1fr] lg:grid-cols-[170px_1fr]">
                      {/* Image window */}
                      <div className="relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-[48%_52%_45%_55%/52%_44%_56%_48%] border border-white/10 md:mx-0">
                        <img
                          src={service.image}
                          alt={`${companyName} ${service.title}`}
                          className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                          loading="lazy"
                          decoding="async"
                        />

                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/0" />

                        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#EE6C1A] text-black">
                          <Icon size={17} strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Copy */}
                      <div>
                        <h3 className="max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl md:text-[38px]">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                          {service.description}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#EE6C1A]" />
                          <span className="text-[8px] font-black uppercase tracking-[0.24em] text-white/25 transition-colors group-hover:text-white/50">
                            Carshalton service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#EE6C1A] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Service philosophy */}
        <div className="mt-28 md:mt-36">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                How We Approach It
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.04em] md:text-4xl">
                Different property.
                <span className="text-white/30"> Different situation.</span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/30">
              Pest activity does not always look the same from one property
              to another. The service starts with understanding what is
              happening before suitable control measures are considered.
            </p>
          </div>

          {/* Property blocks */}
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {propertyTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative min-h-[250px] overflow-hidden border border-white/10 bg-[#151414] p-7 transition-all duration-500 hover:border-[#EE6C1A]/50"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-black tracking-[-0.05em] text-white/10 transition-colors duration-500 group-hover:text-[#EE6C1A]/30">
                      {item.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="text-white/25 transition-colors duration-500 group-hover:text-[#EE6C1A]"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-8 translate-y-8 rounded-full border border-[#EE6C1A]/10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />

                  <div className="relative mt-12">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                      {item.label}
                    </span>

                    <h4 className="mt-3 text-xl font-black tracking-tight text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/35">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact footer */}
        <div className="mt-20 border-t border-white/10 pt-8 md:mt-28">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25">
                Local Pest Control
              </p>

              <p className="mt-2 text-lg font-black tracking-tight">
                {companyName}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[#EE6C1A]"
              />

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
                  Address
                </p>

                <p className="mt-1 max-w-xs text-xs leading-5 text-white/45">
                  {address}
                </p>
              </div>
            </div>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 text-sm font-black text-white transition-colors hover:text-[#EE6C1A]"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-white/10 transition-colors group-hover:border-[#EE6C1A]">
                <Phone size={15} />
              </span>

              {phone}
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] text-white/20">
              Serving {serviceArea}.
            </p>

            <button
              onClick={() => navigate("/services")}
              className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-[#EE6C1A]"
            >
              View All Services
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}