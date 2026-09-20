// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, ShieldCheck } from "lucide-react";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   grey: "#5F5F5F",
//   light: "#F7F3EF",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://primesheild-backend.vercel.app/api/callback", formData),
//       {
//         loading: "Securing connection grid...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request queued! A technician will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Transmission failed. Try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
//         },
//         success: {
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative overflow-hidden min-h-[720px] bg-[#111111] font-sans">
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: "1px solid rgba(243,111,33,0.35)",
//             borderRadius: "16px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#111111",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.orange}`,
//             },
//           },
//         }}
//       />

//       <img
//         src="/images/callback-pest-control-bg.webp"
//         alt="PrimeShield Services Limited pest control callback consultation for London properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/62" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-[#F36F21]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 text-left">
//             <div className="w-16 h-[3px] bg-[#F36F21] mb-8" />

//             <h2 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-black leading-[1.08] tracking-tight">
//               Need pest control support in London?
//             </h2>

//             <p className="mt-7 text-white/82 text-base md:text-lg leading-relaxed max-w-xl">
//               Send your details and PrimeShield Services Limited will contact you
//               to discuss the issue, your postcode and the right treatment option
//               for your property.
//             </p>

//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//               {[
//                 {
//                   icon: PhoneCall,
//                   title: "Quick Callback",
//                 },
//                 {
//                   icon: MapPin,
//                   title: "London Service",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Safe Treatment",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="bg-white/10 border border-white/15 backdrop-blur-sm p-4"
//                   >
//                     <Icon className="w-5 h-5 text-[#F36F21] mb-3" />
//                     <p className="text-white text-sm font-black">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
//             <div className="bg-white p-7 sm:p-10 lg:p-12 shadow-2xl border-t-[6px] border-[#F36F21]">
//               <div className="mb-8">
//                 <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.28em]">
//                   Free Consultation
//                 </span>
//                 <h3 className="mt-3 text-[#111111] text-2xl sm:text-3xl font-black tracking-tight">
//                   Request a Callback
//                 </h3>
//                 <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                   Fill in your details and our team will call you back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5 text-left">
//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Full Name <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="e.g. John Doe"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Postcode <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. W1S 4PW"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Phone Number <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white border px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/25"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/25"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] text-white py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D95A13]"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "SEND"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { PhoneCall, MapPin, ShieldCheck } from "lucide-react";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   grey: "#5F5F5F",
//   light: "#F7F3EF",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";
//   const businessName = "PrimeShield Kensington";

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://primesheild-backend.vercel.app/api/callback", {
//         ...formData,
//         area: "Kensington",
//         business: businessName,
//         address,
//       }),
//       {
//         loading: "Sending your Kensington callback request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Callback request received! PrimeShield Kensington will call shortly. 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Request failed. Try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "16px",
//           padding: "12px 20px",
//         },
//         success: {
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: `1px solid ${brandColors.orange}`,
//           },
//         },
//         error: {
//           style: {
//             background: "#4c0519",
//             color: "#fecdd3",
//             border: "1px solid #f43f5e",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative overflow-hidden min-h-[720px] bg-[#111111] font-sans">
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,
//           style: {
//             background: "#111111",
//             color: "#FFFFFF",
//             border: "1px solid rgba(243,111,33,0.35)",
//             borderRadius: "16px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
//           },
//           loading: {
//             style: {
//               background: "#111111",
//               color: "#FFFFFF",
//               border: `1px solid ${brandColors.orange}`,
//             },
//           },
//         }}
//       />

//       <img
//         src="/images/callback-pest-control-bg.webp"
//         alt="PrimeShield Kensington pest control callback consultation for Kensington and South Kensington properties"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//         decoding="async"
//       />

//       <div className="absolute inset-0 bg-[#111111]/62" />
//       <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/55 to-[#F36F21]/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//           <div className="lg:col-span-6 text-left">
//             <div className="w-16 h-[3px] bg-[#F36F21] mb-8" />

//             <h2 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-black leading-[1.08] tracking-tight">
//               Need pest control support in Kensington?
//             </h2>

//             <p className="mt-7 text-white/82 text-base md:text-lg leading-relaxed max-w-xl">
//               Send your details and PrimeShield Kensington will contact you to
//               discuss the pest issue, your postcode and the right treatment
//               option for your property. Our local service supports Kensington
//               and South Kensington from {address}.
//             </p>

//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
//               {[
//                 {
//                   icon: PhoneCall,
//                   title: "Quick Callback",
//                 },
//                 {
//                   icon: MapPin,
//                   title: "Kensington Service",
//                 },
//                 {
//                   icon: ShieldCheck,
//                   title: "Safe Treatment",
//                 },
//               ].map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="bg-white/10 border border-white/15 backdrop-blur-sm p-4"
//                   >
//                     <Icon className="w-5 h-5 text-[#F36F21] mb-3" />
//                     <p className="text-white text-sm font-black">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto">
//             <div className="bg-white p-7 sm:p-10 lg:p-12 shadow-2xl border-t-[6px] border-[#F36F21]">
//               <div className="mb-8">
//                 <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.28em]">
//                   Kensington Consultation
//                 </span>
//                 <h3 className="mt-3 text-[#111111] text-2xl sm:text-3xl font-black tracking-tight">
//                   Request a Callback
//                 </h3>
//                 <p className="mt-2 text-[#5F5F5F] text-sm leading-relaxed">
//                   Fill in your details and PrimeShield Kensington will call you
//                   back shortly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-5 text-left">
//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Full Name <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="e.g. John Doe"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Postcode <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="e.g. SW7 3ND"
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     Phone Number <span className="text-[#F36F21]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Best phone number"
//                     required
//                     className={`w-full bg-white border px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] font-medium outline-none focus:ring-1 transition-colors duration-200 ${
//                       phoneError
//                         ? "border-red-500 focus:ring-red-500/25"
//                         : "border-[#D7D7D7] focus:border-[#F36F21] focus:ring-[#F36F21]/25"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">
//                     <span>⚠️</span> {phoneError}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] text-white py-4 text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#D95A13]"
//                 >
//                   {loading ? "TRANSMITTING DATA..." : "SEND"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   PhoneCall,
//   MapPin,
//   ArrowUpRight,
//   ArrowRight,
//   ShieldCheck,
//   Clock3,
// } from "lucide-react";

// const brandColors = {
//   dark: "#292929",
//   orange: "#F47B2B",
//   light: "#F7F3EF",
// };

// export default function AboutCallbackSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const businessName = "PrimeShield Services Bromley";

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post(
//         "https://primesheild-backend.vercel.app/api/callback",
//         {
//           ...formData,
//           area: "Bromley",
//           business: businessName,
//           address,
//         }
//       ),
//       {
//         loading: "Sending your Bromley callback request...",

//         success: () => {
//           setFormData({
//             name: "",
//             postcode: "",
//             phone: "",
//           });

//           setLoading(false);

//           return "Callback request received! PrimeShield Services Bromley will contact you shortly. 📞";
//         },

//         error: (error) => {
//           setLoading(false);

//           return (
//             error.response?.data?.message ||
//             "Request failed. Please try again."
//           );
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "12px",
//           padding: "12px 20px",
//         },

//         success: {
//           style: {
//             background: "#292929",
//             color: "#FFFFFF",
//             border: "1px solid #F47B2B",
//           },
//         },

//         error: {
//           style: {
//             background: "#292929",
//             color: "#FFFFFF",
//             border: "1px solid #F47B2B",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <section className="relative overflow-hidden font-sans">

//       {/* =========================================================
//           TOASTER
//       ========================================================= */}
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={12}
//         containerStyle={{
//           top: "110px",
//           zIndex: 999999,
//         }}
//         toastOptions={{
//           duration: 4500,

//           style: {
//             background: "#292929",
//             color: "#FFFFFF",
//             border: "1px solid rgba(244,123,43,0.35)",
//             borderRadius: "12px",
//             fontSize: "14px",
//             fontWeight: "500",
//             boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
//           },

//           loading: {
//             style: {
//               background: "#292929",
//               color: "#FFFFFF",
//               border: "1px solid #F47B2B",
//             },
//           },
//         }}
//       />

//       {/* =========================================================
//           FULL BACKGROUND IMAGE
//       ========================================================= */}
//       <img
//         src="/images/callback-pest-control-bg.webp"
//         alt="PrimeShield Services Bromley professional pest control consultation"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//         decoding="async"
//       />

//       {/* =========================================================
//           IMAGE OVERLAY
//           Keeps text readable while allowing the image to remain
//           clearly visible behind the section.
//       ========================================================= */}
//       <div className="absolute inset-0 bg-[#292929]/55" />

//       <div className="absolute inset-0 bg-gradient-to-r from-[#292929]/70 via-[#292929]/45 to-[#292929]/25" />

//       <div className="absolute inset-0 bg-gradient-to-b from-[#292929]/45 via-transparent to-[#292929]/65" />

//       {/* =========================================================
//           TOP ORANGE LINE
//       ========================================================= */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-[#F47B2B]" />

//       {/* =========================================================
//           DECORATIVE CIRCLES
//       ========================================================= */}
//       <div className="absolute right-[-120px] top-[-120px] w-[360px] h-[360px] rounded-full border border-[#F47B2B]/25" />

//       <div className="absolute right-[-60px] top-[-60px] w-[240px] h-[240px] rounded-full border border-[#F47B2B]/15" />

//       {/* =========================================================
//           MAIN WRAPPER
//       ========================================================= */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">

//         {/* =======================================================
//             TOP INTRO
//         ======================================================= */}
//         <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">

//           {/* LABEL */}
//           <div className="lg:col-span-3">

//             <div className="flex items-center gap-3">

//               <span className="w-9 h-[2px] bg-[#F47B2B]" />

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.28em]">
//                 Bromley Pest Control
//               </span>

//             </div>

//           </div>

//           {/* MAIN HEADING */}
//           <div className="lg:col-span-9">

//             <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black uppercase leading-[0.92] tracking-[-0.045em] max-w-5xl">

//               A pest problem

//               <span className="text-[#F47B2B]">
//                 {" "}starts with a call.
//               </span>

//             </h2>

//           </div>

//         </div>

//         {/* =======================================================
//             MAIN PANEL
//         ======================================================= */}
//         <div className="grid lg:grid-cols-12 border border-white/10">

//           {/* =====================================================
//               LEFT ORANGE PANEL
//           ===================================================== */}
//           <div className="lg:col-span-3 bg-[#F47B2B] p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[520px]">

//             <div>

//               <div className="w-12 h-12 bg-[#292929] text-white flex items-center justify-center mb-8">

//                 <PhoneCall size={21} />

//               </div>

//               <span className="block text-[#292929] text-[10px] font-black uppercase tracking-[0.22em] mb-4">
//                 Request a Callback
//               </span>

//               <h3 className="text-[#292929] text-3xl sm:text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em]">

//                 Tell us what&apos;s happening.

//               </h3>

//               <p className="mt-6 text-[#292929]/75 text-sm leading-6">

//                 A few simple details are enough to start the conversation
//                 about pest activity at your property.

//               </p>

//             </div>

//             <div className="mt-12">

//               <div className="w-full h-px bg-[#292929]/20 mb-5" />

//               <div className="flex items-center justify-between gap-4">

//                 <span className="text-[#292929] text-[9px] font-black uppercase tracking-[0.18em]">
//                   Local Service
//                 </span>

//                 <ArrowUpRight
//                   size={19}
//                   className="text-[#292929]"
//                 />

//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               CENTRE FORM
//           ===================================================== */}
//           <div className="lg:col-span-5 bg-white p-7 sm:p-10 lg:p-12">

//             <div className="mb-8">

//               <div className="flex items-center justify-between gap-5">

//                 <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                   Bromley Enquiry
//                 </span>

//                 <span className="text-[#292929]/25 text-[9px] font-black uppercase tracking-[0.16em]">
//                   01 / 03
//                 </span>

//               </div>

//               <h3 className="mt-4 text-[#292929] text-2xl sm:text-3xl font-black uppercase leading-none tracking-tight">
//                 Let&apos;s get the details.
//               </h3>

//               <p className="mt-4 text-[#292929]/55 text-sm leading-6">
//                 Complete the short form and PrimeShield Services Bromley can
//                 contact you about the issue you have noticed.
//               </p>

//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-5"
//             >

//               {/* NAME */}
//               <div>

//                 <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

//                   Your Name

//                   <span className="text-[#F47B2B] ml-1">
//                     *
//                   </span>

//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full name"
//                   required
//                   className="w-full bg-[#F7F3EF] border border-[#292929]/10 px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:border-[#F47B2B] focus:ring-1 focus:ring-[#F47B2B]/20 transition-all duration-200"
//                 />

//               </div>

//               {/* POSTCODE */}
//               <div>

//                 <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

//                   Property Postcode

//                   <span className="text-[#F47B2B] ml-1">
//                     *
//                   </span>

//                 </label>

//                 <input
//                   type="text"
//                   name="postcode"
//                   value={formData.postcode}
//                   onChange={handleChange}
//                   placeholder="e.g. BR1 5HE"
//                   required
//                   className="w-full bg-[#F7F3EF] border border-[#292929]/10 px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:border-[#F47B2B] focus:ring-1 focus:ring-[#F47B2B]/20 transition-all duration-200"
//                 />

//               </div>

//               {/* PHONE */}
//               <div>

//                 <label className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#292929] mb-2">

//                   Phone Number

//                   <span className="text-[#F47B2B] ml-1">
//                     *
//                   </span>

//                 </label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Best number to reach you"
//                   required
//                   className={`w-full bg-[#F7F3EF] border px-5 py-4 text-sm text-[#292929] placeholder:text-[#292929]/35 font-medium outline-none focus:ring-1 transition-all duration-200 ${
//                     phoneError
//                       ? "border-red-500 focus:ring-red-500/20"
//                       : "border-[#292929]/10 focus:border-[#F47B2B] focus:ring-[#F47B2B]/20"
//                   }`}
//                 />

//               </div>

//               {/* ERROR */}
//               {phoneError && (
//                 <p className="text-red-600 text-xs font-semibold flex items-center gap-1.5">

//                   <span>⚠️</span>

//                   {phoneError}

//                 </p>
//               )}

//               {/* SUBMIT */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="group w-full bg-[#292929] text-white px-6 py-4.5 flex items-center justify-between gap-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-200 hover:bg-[#F47B2B] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
//               >

//                 <span>
//                   {loading
//                     ? "Sending Request..."
//                     : "Request A Callback"}
//                 </span>

//                 {!loading && (
//                   <ArrowRight
//                     size={17}
//                     className="group-hover:translate-x-1 transition-transform duration-200"
//                   />
//                 )}

//               </button>

//             </form>

//             {/* FORM NOTE */}
//             <div className="mt-6 flex items-center gap-2">

//               <ShieldCheck
//                 size={14}
//                 className="text-[#F47B2B]"
//               />

//               <span className="text-[#292929]/40 text-[9px] font-black uppercase tracking-[0.14em]">
//                 Your enquiry goes directly to our Bromley service
//               </span>

//             </div>

//           </div>

//           {/* =====================================================
//               RIGHT INFORMATION PANEL
//           ===================================================== */}
//           <div className="lg:col-span-4 bg-[#292929] p-7 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between min-h-[520px]">

//             <div>

//               <span className="text-[#F47B2B] text-[10px] font-black uppercase tracking-[0.25em]">
//                 Where We Work
//               </span>

//               <h3 className="mt-5 text-white text-3xl sm:text-4xl font-black uppercase leading-[0.98] tracking-[-0.025em]">

//                 Bromley

//                 <span className="block text-white/35">
//                   & nearby areas.
//                 </span>

//               </h3>

//               <p className="mt-6 text-white/50 text-sm leading-6">

//                 PrimeShield Services Bromley provides focused pest control
//                 support for residential and commercial properties across the
//                 local area.

//               </p>

//             </div>

//             <div className="mt-12">

//               {/* ADDRESS */}
//               <div className="py-6 border-t border-white/10">

//                 <div className="flex gap-4">

//                   <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

//                     <MapPin size={17} />

//                   </div>

//                   <div>

//                     <span className="block text-white/35 text-[9px] font-black uppercase tracking-[0.18em] mb-2">
//                       Local Base
//                     </span>

//                     <p className="text-white text-sm leading-6">
//                       {address}
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               {/* PHONE */}
//               <div className="py-6 border-t border-white/10">

//                 <div className="flex gap-4">

//                   <div className="w-10 h-10 bg-[#F47B2B] text-white flex items-center justify-center shrink-0">

//                     <PhoneCall size={17} />

//                   </div>

//                   <div>

//                     <span className="block text-white/35 text-[9px] font-black uppercase tracking-[0.18em] mb-2">
//                       Speak To Us
//                     </span>

//                     <a
//                       href="tel:07356271145"
//                       className="text-white text-lg font-black hover:text-[#F47B2B] transition-colors"
//                     >
//                       07356 271145
//                     </a>

//                   </div>

//                 </div>

//               </div>

//               {/* CALLBACK */}
//               <div className="py-6 border-t border-white/10">

//                 <div className="flex items-center gap-3">

//                   <Clock3
//                     size={16}
//                     className="text-[#F47B2B]"
//                   />

//                   <span className="text-white/55 text-[9px] font-black uppercase tracking-[0.17em]">
//                     Callback Enquiry
//                   </span>

//                 </div>

//               </div>

//             </div>

//             {/* BOTTOM BRAND */}
//             <div className="mt-8 pt-6 border-t border-white/10">

//               <div className="flex items-center justify-between gap-4">

//                 <span className="text-white text-[9px] font-black uppercase tracking-[0.18em]">
//                   PrimeShield Services Bromley
//                 </span>

//                 <span className="w-2 h-2 bg-[#F47B2B] rounded-full" />

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* =======================================================
//             BOTTOM MESSAGE
//         ======================================================= */}
//         <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//           <p className="text-white/35 text-[10px] uppercase font-black tracking-[0.18em]">
//             Pest control support for Bromley properties
//           </p>

//           <div className="flex items-center gap-3">

//             <span className="w-8 h-px bg-[#F47B2B]" />

//             <span className="text-white/45 text-[9px] uppercase font-black tracking-[0.16em]">
//               Local • Professional • Practical
//             </span>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }
















import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  PhoneCall,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const brandColors = {
  dark: "#151414",
  orange: "#EE6C1A",
  black: "#000000",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  /* =========================================================
     PRIME SHIELD CARSHALTON DETAILS
  ========================================================== */

  const address =
    "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";

  const businessName = "PrimeShield Services Carshalton";

  const phone = "07438 756809";

  const serviceArea = "Carshalton and nearby areas";

  /* =========================================================
     HANDLE INPUT
  ========================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") {
      setPhoneError("");
    }
  };

  /* =========================================================
     CALLBACK SUBMISSION
     API / PAYLOAD KEPT FUNCTIONALLY SAME
  ========================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post(
        "https://primesheild-backend.vercel.app/api/callback",
        {
          ...formData,
          area: "Carshalton",
          business: businessName,
          address,
        }
      ),
      {
        loading: "Sending your Carshalton callback request...",

        success: () => {
          setFormData({
            name: "",
            postcode: "",
            phone: "",
          });

          setLoading(false);

          return "Callback request received! PrimeShield Services Carshalton will contact you shortly. 📞";
        },

        error: (error) => {
          setLoading(false);

          return (
            error.response?.data?.message ||
            "Request failed. Please try again."
          );
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "12px",
          padding: "12px 20px",
        },

        success: {
          style: {
            background: "#151414",
            color: "#FFFFFF",
            border: "1px solid #EE6C1A",
          },
        },

        error: {
          style: {
            background: "#151414",
            color: "#FFFFFF",
            border: "1px solid #EE6C1A",
          },
        },
      }
    );
  };

  return (
    <section className="relative overflow-hidden bg-black font-sans text-white">

      {/* =========================================================
          TOASTER
      ========================================================= */}

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: "110px",
          zIndex: 999999,
        }}
        toastOptions={{
          duration: 4500,

          style: {
            background: "#151414",
            color: "#FFFFFF",
            border: "1px solid rgba(238,108,26,0.35)",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
          },

          loading: {
            style: {
              background: "#151414",
              color: "#FFFFFF",
              border: "1px solid #EE6C1A",
            },
          },
        }}
      />

      {/* =========================================================
          SUBTLE BACKGROUND STRUCTURE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute left-[24%] top-0 h-full w-px bg-white/[0.02]" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-white/[0.06]" />

      </div>

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40 xl:px-20">

        {/* =======================================================
            HEADER / INTRO
        ======================================================= */}

        <div className="mb-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

          {/* SMALL IDENTIFIER */}

          <div>

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center border border-[#EE6C1A]/50">
                <PhoneCall
                  size={14}
                  className="text-[#EE6C1A]"
                />
              </span>

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/35">
                PrimeShield Services Carshalton
              </span>

            </div>

            <div className="mt-8 flex items-center gap-4">

              <span className="text-[10px] font-black text-[#EE6C1A]">
                07
              </span>

              <div className="h-px w-20 bg-[#EE6C1A]/40" />

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                Callback Desk
              </span>

            </div>

          </div>

          {/* MAIN HEADING */}

          <div>

            <h2 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl lg:text-8xl">

              Tell us what
              <br />

              <span className="text-white/20">
                needs attention.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
              Not sure what type of pest you are dealing with? That is fine.
              Share a few details about what you have noticed and where it is
              happening, and our Carshalton team can discuss the next step
              with you.
            </p>

          </div>

        </div>

        {/* =======================================================
            MAIN CONTACT WORKSPACE
        ======================================================= */}

        <div className="grid border border-white/10 lg:grid-cols-[0.72fr_1.28fr]">

          {/* =====================================================
              LEFT CONTACT IDENTITY
          ===================================================== */}

          <div className="relative flex min-h-[620px] flex-col justify-between overflow-hidden bg-[#151414] p-8 sm:p-12 lg:p-14">

            {/* GIANT BACKGROUND NUMBER */}

            <div className="pointer-events-none absolute bottom-[-45px] left-[-20px] select-none text-[240px] font-black leading-none tracking-[-0.15em] text-white/[0.025]">
              07
            </div>

            {/* TOP */}

            <div className="relative">

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#EE6C1A]">
                  Local Contact
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/20">
                  SM5
                </span>

              </div>

              <div className="mt-12">

                <div className="flex h-16 w-16 items-center justify-center bg-[#EE6C1A] text-black">

                  <PhoneCall size={25} />

                </div>

                <h3 className="mt-9 max-w-md text-4xl font-black leading-[0.9] tracking-[-0.045em] sm:text-5xl">

                  Start with
                  <br />

                  the details.

                </h3>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/30">
                  A short callback request gives us a starting point. Tell us
                  where the issue has appeared and the best number to reach
                  you on.
                </p>

              </div>

            </div>

            {/* BOTTOM CONTACT INFORMATION */}

            <div className="relative mt-14">

              <div className="border-t border-white/10 pt-7">

                <div className="flex items-start gap-4">

                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-[#EE6C1A]"
                  />

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                      Local Address
                    </p>

                    <p className="mt-3 max-w-xs text-sm font-semibold leading-6 text-white/65">
                      {address}
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-7 border-t border-white/10 pt-7">

                <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/20">
                  Direct Line
                </p>

                <a
                  href="tel:07438756809"
                  className="mt-3 inline-flex items-center gap-3 text-2xl font-black text-[#EE6C1A] transition-colors hover:text-white"
                >
                  {phone}
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT FORM WORKSPACE
          ===================================================== */}

          <div className="bg-black p-7 sm:p-10 lg:p-14">

            {/* FORM HEADER */}

            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                  Callback Request
                </p>

                <h3 className="mt-4 text-3xl font-black leading-none tracking-[-0.035em] sm:text-4xl">
                  We&apos;ll call you back.
                </h3>

              </div>

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#EE6C1A]" />

                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
                  Carshalton
                </span>

              </div>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-10"
            >

              {/* NAME */}

              <div className="border-b border-white/10 py-7 first:pt-0">

                <label className="mb-4 flex items-center justify-between gap-4">

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
                    01 / Your Name
                  </span>

                  <span className="text-[9px] font-black text-[#EE6C1A]">
                    Required
                  </span>

                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-transparent px-0 py-2 text-lg font-semibold text-white outline-none placeholder:text-white/15 focus:placeholder:text-white/25"
                />

              </div>

              {/* POSTCODE */}

              <div className="border-b border-white/10 py-7">

                <label className="mb-4 flex items-center justify-between gap-4">

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
                    02 / Property Postcode
                  </span>

                  <MapPin
                    size={14}
                    className="text-white/20"
                  />

                </label>

                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. SM5 3EX"
                  required
                  className="w-full bg-transparent px-0 py-2 text-lg font-semibold uppercase text-white outline-none placeholder:text-white/15 focus:placeholder:text-white/25"
                />

              </div>

              {/* PHONE */}

              <div className="border-b border-white/10 py-7">

                <label className="mb-4 flex items-center justify-between gap-4">

                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
                    03 / Phone Number
                  </span>

                  <PhoneCall
                    size={14}
                    className="text-[#EE6C1A]"
                  />

                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Best number to reach you"
                  required
                  className={`w-full bg-transparent px-0 py-2 text-lg font-semibold text-white outline-none placeholder:text-white/15 focus:placeholder:text-white/25 ${
                    phoneError ? "text-red-400" : ""
                  }`}
                />

              </div>

              {/* PHONE ERROR */}

              {phoneError && (

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-red-400">

                  <span>⚠️</span>

                  {phoneError}

                </div>

              )}

              {/* SUBMIT AREA */}

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={17}
                    className="shrink-0 text-[#EE6C1A]"
                  />

                  <p className="max-w-xs text-[9px] font-black uppercase leading-5 tracking-[0.13em] text-white/25">
                    Your details are sent directly to our local service team.
                  </p>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex min-h-[58px] items-center justify-between gap-8 bg-[#EE6C1A] px-7 text-[9px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                >

                  <span>
                    {loading
                      ? "Sending Request..."
                      : "Request A Callback"}
                  </span>

                  {!loading && (
                    <span className="flex h-8 w-8 items-center justify-center bg-black text-white transition-transform duration-300 group-hover:translate-x-1">

                      <ArrowRight size={15} />

                    </span>
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>

        {/* =======================================================
            SERVICE INFORMATION STRIP
        ======================================================= */}

        <div className="mt-6 grid border border-white/10 sm:grid-cols-3">

          {/* LOCAL */}

          <div className="flex items-center gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#EE6C1A]/30">

              <MapPin
                size={16}
                className="text-[#EE6C1A]"
              />

            </div>

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.22em] text-white/20">
                Service Area
              </p>

              <p className="mt-2 text-xs font-bold text-white/55">
                {serviceArea}
              </p>

            </div>

          </div>

          {/* PROPERTY TYPES */}

          <div className="flex items-center gap-4 border-b border-white/10 p-6 sm:border-b-0 sm:border-r">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#EE6C1A]/30">

              <CheckCircle2
                size={16}
                className="text-[#EE6C1A]"
              />

            </div>

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.22em] text-white/20">
                Coverage
              </p>

              <p className="mt-2 text-xs font-bold text-white/55">
                Residential & Commercial
              </p>

            </div>

          </div>

          {/* CALLBACK */}

          <div className="flex items-center gap-4 p-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#EE6C1A]/30">

              <Clock3
                size={16}
                className="text-[#EE6C1A]"
              />

            </div>

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.22em] text-white/20">
                Contact
              </p>

              <a
                href="tel:07438756809"
                className="mt-2 block text-xs font-bold text-white/55 transition-colors hover:text-[#EE6C1A]"
              >
                {phone}
              </a>

            </div>

          </div>

        </div>

        {/* =======================================================
            BOTTOM MICRO CTA
        ======================================================= */}

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/20">
            Pest control enquiries for Carshalton properties
          </p>

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-[#EE6C1A]" />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
              PrimeShield Services Carshalton
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}