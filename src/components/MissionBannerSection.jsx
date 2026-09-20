// import React from "react";

// export default function MissionBannerSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[450px] md:h-[520px]">
//         <img
//           src="/images/pest-banner.webp"
//           alt="PrimeShield Services Limited pest control inspection in London"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="lazy"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#111111]/65" />

//         {/* Orange Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#F36F21]/10" />

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             {/* Small Orange Line */}
//             <div className="w-16 h-[3px] bg-[#F36F21] mx-auto mb-8"></div>

//             <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
//               Protecting Homes & Businesses
//               <br />
//               Across London With Trusted
//               <br />
//               Pest Control Solutions
//             </h2>

//             <p className="mt-8 text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
//               PrimeShield Services Limited delivers professional pest control,
//               prevention and proofing services designed to keep residential and
//               commercial properties safe, compliant and pest-free throughout
//               London.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React from "react";

// export default function MissionBannerSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[450px] md:h-[520px]">
//         <img
//           src="/images/pest-banner.webp"
//           alt="PrimeShield Kensington providing professional pest control in South Kensington"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="lazy"
//           decoding="async"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#111111]/65" />

//         {/* Orange Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#F36F21]/10" />

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center">
//             <div className="w-16 h-[3px] bg-[#F36F21] mx-auto mb-8"></div>

//             <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight">
//               Professional Pest Control
//               <br />
//               For Homes & Businesses
//               <br />
//               Across Kensington
//             </h2>

//             <p className="mt-8 text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
//               PrimeShield Kensington delivers professional pest control,
//               proofing and prevention services for residential and commercial
//               properties throughout Kensington and South Kensington. Operating
//               from <strong>40 Harrington Rd, South Kensington, London SW7 3ND</strong>,
//               our experienced team provides reliable pest management with safe,
//               effective treatments designed to protect your property all year
//               round.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import React from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  Home,
  Building2,
  Bug,
} from "lucide-react";

export default function MissionBannerSection() {
  const phoneNumber = "07438 756809";

  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* =========================================================
          HERO VISUAL FIELD
      ========================================================== */}
      <div className="relative min-h-[720px] md:min-h-[820px] lg:min-h-[900px]">

        {/* Background Image */}
        <img
          src="/images/pest-banner.webp"
          alt="PrimeShield Services Carshalton professional pest control"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {/* Deep Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/45" />

        {/* =====================================================
            TOP BAR
        ====================================================== */}
        <div className="absolute left-0 right-0 top-0 z-20">

          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12 xl:px-16">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-[#EE6C1A]">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white">
                  PrimeShield
                </p>

                <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Services Carshalton
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">
                Residential
              </span>

              <span className="h-3 w-px bg-white/20" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">
                Commercial
              </span>

              <span className="h-3 w-px bg-white/20" />

              <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">
                <MapPin className="h-3 w-3 text-[#EE6C1A]" />
                Carshalton
              </span>
            </div>

          </div>

          <div className="h-px bg-white/10" />
        </div>

        {/* =====================================================
            CENTRAL MESSAGE
        ====================================================== */}
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] items-center px-5 pt-24 sm:px-8 md:min-h-[820px] lg:min-h-[900px] lg:px-12 xl:px-16">

          <div className="max-w-5xl">

            {/* Small Intro */}
            <div className="mb-8 flex items-center gap-4">

              <span className="h-[2px] w-14 bg-[#EE6C1A]" />

              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/70">
                Local Pest Control Specialists
              </span>

            </div>

            {/* Main Heading */}
            <h2 className="max-w-5xl text-[54px] font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-[76px] md:text-[100px] lg:text-[124px] xl:text-[138px]">

              Protect

              <span className="block text-white/25">
                what
              </span>

              <span className="block text-[#EE6C1A]">
                matters.
              </span>

            </h2>

            {/* Supporting Copy */}
            <div className="mt-9 max-w-xl border-l-2 border-[#EE6C1A] pl-5 md:mt-12 md:pl-7">

              <p className="text-sm leading-7 text-white/65 md:text-base md:leading-8">
                PrimeShield Services Carshalton provides practical pest
                control for homes, businesses and properties dealing with
                unwanted pest activity.
              </p>

              <p className="mt-3 text-xs leading-6 text-white/35 md:text-sm">
                We focus on understanding the problem, carrying out the
                appropriate treatment and helping reduce the chance of the
                issue returning.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="group inline-flex w-fit items-center gap-5 bg-[#EE6C1A] px-7 py-4 text-[10px] font-black uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <Phone className="h-4 w-4" />

                Call {phoneNumber}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-3 px-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                <MapPin className="h-4 w-4 text-[#EE6C1A]" />
                Carshalton & nearby areas
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            LARGE SIDE MARKER
        ====================================================== */}
        <div className="absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 lg:block">

          <div className="flex flex-col items-center gap-5">

            <span className="h-20 w-px bg-[#EE6C1A]" />

            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/35 [writing-mode:vertical-rl]">
              Professional Pest Protection
            </span>

            <span className="h-20 w-px bg-white/10" />

          </div>

        </div>

        {/* =====================================================
            BOTTOM SERVICE STRIP
        ====================================================== */}
        <div className="absolute bottom-0 left-0 right-0 z-20">

          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

            <div className="grid border-t border-white/15 md:grid-cols-3">

              {/* Residential */}
              <div className="group flex items-center gap-5 border-b border-white/10 py-6 md:border-b-0 md:border-r md:pr-8">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-black/40 transition-colors duration-300 group-hover:border-[#EE6C1A]">
                  <Home className="h-4 w-4 text-[#EE6C1A]" />
                </div>

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                    01
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Residential Pest Control
                  </p>
                </div>

              </div>

              {/* Commercial */}
              <div className="group flex items-center gap-5 border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-8">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-black/40 transition-colors duration-300 group-hover:border-[#EE6C1A]">
                  <Building2 className="h-4 w-4 text-[#EE6C1A]" />
                </div>

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                    02
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Commercial Pest Control
                  </p>
                </div>

              </div>

              {/* Local */}
              <div className="group flex items-center gap-5 py-6 md:pl-8">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-black/40 transition-colors duration-300 group-hover:border-[#EE6C1A]">
                  <Bug className="h-4 w-4 text-[#EE6C1A]" />
                </div>

                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                    03
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Local Pest Solutions
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* =========================================================
          ADDRESS / BRAND FOOTER
      ========================================================== */}
      <div className="relative bg-[#151414]">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 px-5 py-7 sm:px-8 md:flex-row md:items-center lg:px-12 xl:px-16">

          <div className="flex items-start gap-3">

            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EE6C1A]" />

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
                Local Address
              </p>

              <p className="mt-1 text-xs font-semibold text-white/55">
                36 Glebe Rd, Carshalton SM5 3EX, United Kingdom
              </p>
            </div>

          </div>

          <div className="text-left md:text-right">

            <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
              Serving
            </p>

            <p className="mt-1 text-xs font-semibold text-white/55">
              Carshalton and nearby areas
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}