


// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
//   Building2,
// } from "lucide-react";

// const colors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   cream: "#F7F3EF",
//   grey: "#5F5F5F",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "Do you cover pest control across London?",
//       answer:
//         "Yes, PrimeShield Services Limited provides professional pest control support for homes, landlords and businesses across London.",
//     },
//     {
//       question: "Are your treatments suitable for homes and businesses?",
//       answer:
//         "Yes, we support residential and commercial properties with inspection, targeted treatment and prevention advice.",
//     },
//     {
//       question: "Can you help with rats, mice and bed bugs?",
//       answer:
//         "Yes, we deal with common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, moths, wasps and more.",
//     },
//     {
//       question: "Do you provide prevention advice?",
//       answer:
//         "Yes, after inspection and treatment we provide practical guidance to help reduce the risk of future pest activity.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.dark,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.orange}55`,
//       },
//     });

//     try {
//       const res = await axios.post("https://primesheild-backend.vercel.app/api/contact", formData);

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#F7F3EF] text-[#111111] min-h-screen font-sans overflow-x-hidden">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* Hero */}
//       <section className="relative h-[360px] md:h-[430px] lg:h-[500px] overflow-hidden">
//         <img
//           src="/images/contact-hero1.webp"
//           alt="PrimeShield Services Limited contact page for pest control services in London"
//           // className="absolute inset-0 w-full h-full object-cover object-center"
//           className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_10%]"
//           loading="eager"
//           decoding="async"
//         />

//         <div className="absolute inset-0 bg-[#111111]/68" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-[#111111]/75" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
//           <div>
//             <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//               <span className="w-10 h-[2px] bg-[#F36F21]" />
//               Contact PrimeShield
//             </span>

//             <h1 className="text-white text-5xl sm:text-6xl lg:text-[78px] font-black leading-none tracking-tight">
//               Contact
//             </h1>

//             <div className="w-20 h-[3px] bg-[#F36F21] mt-8" />
//           </div>
//         </div>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <div className="absolute -top-28 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//         <div className="absolute -bottom-28 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#111111]/15">
//             {/* <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <Building2 className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Company Reg No 
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">17263881</h3>
//             </div> */}

//             <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Address
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black leading-relaxed">
//                 12 Old Bond Street, London, England, W1S 4PW
//               </h3>
//             </div>

//             <div className="py-8 md:px-8">
//               <PhoneCall className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Service Area
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">London, UK</h3>
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5">
//               <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//                 Get In Touch
//               </span>

//               <h2 className="text-[#111111] text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight">
//                 Request pest control support for your property.
//               </h2>

//               <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

//               <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Tell us about your pest issue and our team will review your
//                 details. We support London homes, landlords and businesses with
//                 clear inspection, treatment and prevention advice.
//               </p>
//             </div>

//             <div className="lg:col-span-7 bg-white border-t-[6px] border-[#F36F21] p-7 sm:p-10 shadow-[0_25px_70px_rgba(17,17,17,0.08)]">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {[
//                     {
//                       label: "Your Full Name",
//                       name: "name",
//                       type: "text",
//                       placeholder: "e.g. John Doe",
//                       icon: <User className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Email Address",
//                       name: "email",
//                       type: "email",
//                       placeholder: "e.g. john@example.com",
//                       icon: <Mail className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Phone Number",
//                       name: "phone",
//                       type: "tel",
//                       placeholder: "Best phone number",
//                       icon: <PhoneCall className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Postcode Location",
//                       name: "postcode",
//                       type: "text",
//                       placeholder: "e.g. W1S 4PW",
//                       icon: <MapPin className="w-4 h-4" />,
//                     },
//                   ].map((field) => (
//                     <div key={field.name}>
//                       <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                         <span className="text-[#F36F21]">{field.icon}</span>
//                         {field.label}
//                         <span className="text-[#F36F21]">*</span>
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         required
//                         className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Required Pest Service
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-white border border-[#D7D7D7] px-5 py-4 pr-12 text-sm text-[#111111] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors appearance-none cursor-pointer"
//                     >
//                       <option value="">Select pest service...</option>
//                       {services.map((srv, idx) => (
//                         <option key={idx} value={srv}>
//                           {srv}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F36F21] pointer-events-none" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Message
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about the pest issue..."
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors resize-none"
//                   />
//                 </div>

//                 <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
//                     <Lock className="w-4 h-4 text-[#F36F21]" />
//                     <span>Your details are submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                   >
//                     {loading ? (
//                       "Processing Request..."
//                     ) : (
//                       <>
//                         Send Request
//                         <Send className="w-4 h-4" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Only */}
//       <section className="bg-white py-16 md:py-20 border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="mb-8">
//             <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-4">
//               Find Us
//             </span>
//             <h2 className="text-[#111111] text-3xl md:text-5xl font-black">
//              12 Old Bond Street, London, England, W1S 4PW
//             </h2>
//           </div>

//           <div className="w-full h-[380px] md:h-[460px] overflow-hidden shadow-2xl border-t-[6px] border-[#F36F21]">
//             <iframe
//               title="PrimeShield Services Limited 12 Old Bond Street London Map"
//               // src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW&output=embed"
//               src="https://www.google.com/maps?q=12%20Old%20Bond%20Street%2C%20London%2C%20England%2C%20W1S%204PW%2C%20UK&z=18&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-[#F7F3EF] py-20 md:py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.3em]">
//               FAQ
//             </span>

//             <h2 className="mt-4 text-[#111111] text-3xl md:text-5xl font-black">
//               Common Questions
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`bg-white border transition-colors ${
//                     isOpen ? "border-[#F36F21]" : "border-[#111111]/10"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
//                   >
//                     <span className="font-black text-[#111111] flex items-center gap-3">
//                       <HelpCircle className="w-5 h-5 text-[#F36F21] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-[#F36F21] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-[#5F5F5F] text-sm leading-relaxed border-t border-[#111111]/10 pt-4">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;









// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
// } from "lucide-react";

// const colors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   cream: "#F7F3EF",
//   grey: "#5F5F5F",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const phoneNumber = "07404 736153";
//   const address = "40 Harrington Rd, South Kensington, London SW7 3ND";

//   const services = [
//     "Ants Control Kensington",
//     "Bed Bugs Control Kensington",
//     "Carpet Moth Control Treatment Kensington",
//     "Carpet Beetle Treatment Kensington",
//     "Cockroach Control Service Kensington",
//     "Rats & Mice Control Kensington",
//     "Flea Control Kensington",
//     "Wasps Nest Control Kensington",
//     "Bumble Bee Control Kensington",
//     "Squirrel Control Kensington",
//     "Hygiene and Proofing Services Kensington",
//     "Birds Control Services Kensington",
//     "Pigeons Control Services Kensington",
//   ];

//   const faqs = [
//     {
//       question: "Do you provide pest control throughout Kensington?",
//       answer:
//         "Yes, PrimeShield Kensington provides professional pest control support for homes, landlords and businesses across Kensington and South Kensington.",
//     },
//     {
//       question: "Are your treatments suitable for homes and businesses in Kensington?",
//       answer:
//         "Yes, we support houses, flats, rented properties, offices, shops, restaurants and commercial premises with inspection, targeted treatment and prevention advice.",
//     },
//     {
//       question: "Which pests do you treat in Kensington?",
//       answer:
//         "We help with rats, mice, bed bugs, cockroaches, ants, fleas, carpet moths, carpet beetles, wasps, birds, squirrels and other common pest problems.",
//     },
//     {
//       question: "Do you provide prevention advice after treatment?",
//       answer:
//         "Yes, our technicians explain the cause of the pest issue and provide practical recommendations to help reduce future pest activity around your property.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your Kensington request securely...", {
//       style: {
//         background: colors.dark,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.orange}55`,
//       },
//     });

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Kensington",
//           business: "PrimeShield Kensington",
//           address,
//           phoneNumber,
//         }
//       );

//       toast.success(
//         res.data.message || "PrimeShield Kensington request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#F7F3EF] text-[#111111] min-h-screen font-sans overflow-x-hidden">
//       <Toaster position="top-right" reverseOrder={false} />

//       <section className="relative h-[360px] md:h-[430px] lg:h-[500px] overflow-hidden">
//         <img
//           src="/images/contact-hero1.webp"
//           alt="PrimeShield Kensington contact page for pest control services in Kensington and South Kensington"
//           className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_10%]"
//           loading="eager"
//           decoding="async"
//         />

//         <div className="absolute inset-0 bg-[#111111]/68" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/45 to-[#111111]/75" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 h-full flex items-center">
//           <div>
//             <span className="inline-flex items-center gap-3 text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//               <span className="w-10 h-[2px] bg-[#F36F21]" />
//               Contact PrimeShield Kensington
//             </span>

//             <h1 className="text-white text-5xl sm:text-6xl lg:text-[78px] font-black leading-none tracking-tight">
//               Contact
//             </h1>

//             <div className="w-20 h-[3px] bg-[#F36F21] mt-8" />
//           </div>
//         </div>
//       </section>

//       <section className="py-20 md:py-28 relative overflow-hidden">
//         <div className="absolute -top-28 right-0 w-96 h-96 rounded-full bg-[#F36F21]/10 blur-3xl" />
//         <div className="absolute -bottom-28 left-0 w-96 h-96 rounded-full bg-[#111111]/8 blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#111111]/15">
//             <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Address
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black leading-relaxed">
//                 {address}
//               </h3>
//             </div>

//             <a
//               href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//               className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-[#111111]/15 block"
//             >
//               <PhoneCall className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Phone
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">{phoneNumber}</h3>
//             </a>

//             <div className="py-8 md:px-8">
//               <MapPin className="w-5 h-5 text-[#F36F21] mb-5" />
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5F5F5F]">
//                 Service Area
//               </p>
//               <h3 className="mt-2 text-[#111111] font-black">
//                 Kensington & South Kensington
//               </h3>
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5">
//               <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-6">
//                 Get In Touch
//               </span>

//               <h2 className="text-[#111111] text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight">
//                 Need professional pest control in Kensington?
//               </h2>

//               <div className="w-20 h-[3px] bg-[#F36F21] my-8" />

//               <p className="text-[#5F5F5F] text-base md:text-lg leading-relaxed">
//                 Tell PrimeShield Kensington about your pest issue and our team
//                 will review your details. We support Kensington and South
//                 Kensington homes, landlords and businesses with clear
//                 inspection, targeted treatment and practical prevention advice.
//               </p>
//             </div>

//             <div className="lg:col-span-7 bg-white border-t-[6px] border-[#F36F21] p-7 sm:p-10 shadow-[0_25px_70px_rgba(17,17,17,0.08)]">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {[
//                     {
//                       label: "Your Full Name",
//                       name: "name",
//                       type: "text",
//                       placeholder: "e.g. John Doe",
//                       icon: <User className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Email Address",
//                       name: "email",
//                       type: "email",
//                       placeholder: "e.g. john@example.com",
//                       icon: <Mail className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Phone Number",
//                       name: "phone",
//                       type: "tel",
//                       placeholder: "Best phone number",
//                       icon: <PhoneCall className="w-4 h-4" />,
//                     },
//                     {
//                       label: "Postcode Location",
//                       name: "postcode",
//                       type: "text",
//                       placeholder: "e.g. SW7 3ND",
//                       icon: <MapPin className="w-4 h-4" />,
//                     },
//                   ].map((field) => (
//                     <div key={field.name}>
//                       <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                         <span className="text-[#F36F21]">{field.icon}</span>
//                         {field.label}
//                         <span className="text-[#F36F21]">*</span>
//                       </label>

//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         required
//                         className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Required Pest Service
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-white border border-[#D7D7D7] px-5 py-4 pr-12 text-sm text-[#111111] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors appearance-none cursor-pointer"
//                     >
//                       <option value="">Select Kensington pest service...</option>
//                       {services.map((srv, idx) => (
//                         <option key={idx} value={srv}>
//                           {srv}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F36F21] pointer-events-none" />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] mb-2">
//                     <FileText className="w-4 h-4 text-[#F36F21]" />
//                     Message
//                     <span className="text-[#F36F21]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about the pest issue in your Kensington property..."
//                     required
//                     className="w-full bg-white border border-[#D7D7D7] px-5 py-4 text-sm text-[#111111] placeholder:text-[#8A8A8A] outline-none focus:border-[#F36F21] focus:ring-1 focus:ring-[#F36F21]/25 transition-colors resize-none"
//                   />
//                 </div>

//                 <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div className="flex items-center gap-2 text-xs text-[#5F5F5F]">
//                     <Lock className="w-4 h-4 text-[#F36F21]" />
//                     <span>Your details are submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#F36F21] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#D95A13] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
//                   >
//                     {loading ? (
//                       "Processing Request..."
//                     ) : (
//                       <>
//                         Send Request
//                         <Send className="w-4 h-4" />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-20 border-y border-[#111111]/10">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//           <div className="mb-8">
//             <span className="block text-[#F36F21] text-xs font-black uppercase tracking-[0.3em] mb-4">
//               Find PrimeShield Kensington
//             </span>
//             <h2 className="text-[#111111] text-3xl md:text-5xl font-black">
//               {address}
//             </h2>
//           </div>

//           <div className="w-full h-[380px] md:h-[460px] overflow-hidden shadow-2xl border-t-[6px] border-[#F36F21]">
//             <iframe
//               title="PrimeShield Kensington 40 Harrington Rd South Kensington London SW7 3ND Map"
//               src="https://www.google.com/maps?q=40%20Harrington%20Rd%2C%20South%20Kensington%2C%20London%20SW7%203ND%2C%20UK&z=18&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#F7F3EF] py-20 md:py-28">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <span className="text-[#F36F21] text-xs font-black uppercase tracking-[0.3em]">
//               FAQ
//             </span>

//             <h2 className="mt-4 text-[#111111] text-3xl md:text-5xl font-black">
//               Kensington Pest Control Questions
//             </h2>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`bg-white border transition-colors ${
//                     isOpen ? "border-[#F36F21]" : "border-[#111111]/10"
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
//                   >
//                     <span className="font-black text-[#111111] flex items-center gap-3">
//                       <HelpCircle className="w-5 h-5 text-[#F36F21] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-[#F36F21] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-[#5F5F5F] text-sm leading-relaxed border-t border-[#111111]/10 pt-4">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;





















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   ArrowRight,
//   User,
//   FileText,
//   Lock,
//   HelpCircle,
//   ShieldCheck,
//   Building2,
//   Home,
//   Send,
// } from "lucide-react";

// const colors = {
//   dark: "#292929",
//   orange: "#F47B2B",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const phoneNumber = "07356 271145";
//   const address = "65 Powster Rd, Bromley BR1 5HE";
//   const email = "info@primeshieldbromley.uk";

//   const services = [
//     "Rat & Mice Control Bromley",
//     "Bed Bug Treatment Bromley",
//     "Cockroach Control Bromley",
//     "Ant Control Bromley",
//     "Flea Control Bromley",
//     "Carpet Beetle Treatment Bromley",
//     "Carpet Moth Treatment Bromley",
//     "Wasp Nest Removal Bromley",
//     "Squirrel Control Bromley",
//     "Bird & Pigeon Control Bromley",
//     "Hygiene & Proofing Services Bromley",
//     "Other Pest Control Enquiry",
//   ];

//   const faqs = [
//     {
//       question: "How can I contact PrimeShield Services Bromley?",
//       answer:
//         "You can call PrimeShield Services Bromley on 07356 271145, email info@primeshieldbromley.uk, or use the enquiry form on this page to send us details about your pest problem.",
//     },
//     {
//       question: "What pest problems can I contact you about?",
//       answer:
//         "We can help with a range of common pest problems including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest you are dealing with, you can describe the signs in your enquiry.",
//     },
//     {
//       question: "Do you provide pest control for homes and businesses?",
//       answer:
//         "Yes. PrimeShield Services Bromley provides pest control support for residential and commercial properties. The approach can be considered according to the type of property, location of activity and pest problem involved.",
//     },
//     {
//       question: "What information should I include in my enquiry?",
//       answer:
//         "It is useful to tell us which area of the property is affected, what signs you have noticed, when the problem started and which pest you believe may be involved. Your postcode also helps us understand the service location.",
//     },
//     {
//       question: "Can I contact you if I am not sure what the pest is?",
//       answer:
//         "Yes. You do not need to identify the pest with certainty before contacting us. Describe what you have seen or heard and where you have noticed the activity, and the information can help establish what type of pest issue may be involved.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your Bromley pest control enquiry...",
//       {
//         style: {
//           background: colors.dark,
//           color: "#FFFFFF",
//           borderRadius: "4px",
//           border: `1px solid ${colors.orange}`,
//         },
//       }
//     );

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Bromley",
//           business: "PrimeShield Services Bromley",
//           address,
//           phoneNumber,
//           email,
//         }
//       );

//       toast.success(
//         res.data.message ||
//           "Your PrimeShield Services Bromley enquiry has been submitted successfully.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "4px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "4px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[#292929]">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* =========================================================
//           HERO
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#292929]">
//         <div className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#F47B2B] lg:block" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid min-h-[520px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.55fr] lg:py-24">
//             <div className="max-w-3xl">
//               <div className="mb-7 flex items-center gap-4">
//                 <span className="h-[3px] w-12 bg-[#F47B2B]" />

//                 <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                   PrimeShield Services Bromley
//                 </span>
//               </div>

//               <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
//                 Let's talk about
//                 <span className="block text-[#F47B2B]">
//                   your pest problem.
//                 </span>
//               </h1>

//               <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
//                 Whether you have noticed signs of rodents, insects or another
//                 unwanted pest, PrimeShield Services Bromley is here to discuss
//                 the situation and help you understand the next step.
//               </p>

//               <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//                 <a
//                   href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                   className="inline-flex items-center justify-center gap-3 bg-[#F47B2B] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//                 >
//                   <PhoneCall size={19} />
//                   Call {phoneNumber}
//                 </a>

//                 <a
//                   href={`mailto:${email}`}
//                   className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 font-bold text-white transition hover:border-[#F47B2B] hover:text-[#F47B2B]"
//                 >
//                   <Mail size={18} />
//                   Email Us
//                 </a>
//               </div>
//             </div>

//             <div className="relative hidden lg:block">
//               <div className="ml-auto max-w-sm border-l-[8px] border-[#292929] bg-white p-9 shadow-2xl">
//                 <ShieldCheck size={36} className="text-[#F47B2B]" />

//                 <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45">
//                   Local Service
//                 </p>

//                 <h2 className="mt-3 text-3xl font-black leading-tight">
//                   Pest control support across Bromley.
//                 </h2>

//                 <div className="mt-7 flex gap-3 border-t border-[#292929]/10 pt-6">
//                   <MapPin
//                     className="mt-1 shrink-0 text-[#F47B2B]"
//                     size={19}
//                   />

//                   <p className="text-sm font-semibold leading-6">
//                     {address}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 h-2 w-full bg-[#F47B2B]" />
//       </section>

//       {/* =========================================================
//           CONTACT INFORMATION
//       ========================================================== */}
//       <section className="bg-[#F5F5F2]">
//         <div className="mx-auto grid max-w-7xl md:grid-cols-3">
//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
//           >
//             <div className="flex items-center justify-between">
//               <PhoneCall
//                 size={25}
//                 className="text-[#F47B2B] transition group-hover:text-white"
//               />

//               <ArrowRight
//                 size={18}
//                 className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
//               />
//             </div>

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Call PrimeShield
//             </p>

//             <p className="mt-2 text-xl font-black group-hover:text-white">
//               {phoneNumber}
//             </p>
//           </a>

//           <a
//             href={`mailto:${email}`}
//             className="group border-b border-[#292929]/10 p-8 transition hover:bg-[#292929] md:border-b-0 md:border-r"
//           >
//             <div className="flex items-center justify-between">
//               <Mail
//                 size={25}
//                 className="text-[#F47B2B] transition group-hover:text-white"
//               />

//               <ArrowRight
//                 size={18}
//                 className="text-[#292929]/30 transition group-hover:translate-x-1 group-hover:text-[#F47B2B]"
//               />
//             </div>

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Email
//             </p>

//             <p className="mt-2 break-all text-lg font-black group-hover:text-white">
//               {email}
//             </p>
//           </a>

//           <div className="group p-8 transition hover:bg-[#292929]">
//             <MapPin
//               size={25}
//               className="text-[#F47B2B] transition group-hover:text-white"
//             />

//             <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#292929]/45 group-hover:text-white/45">
//               Location
//             </p>

//             <p className="mt-2 text-lg font-black leading-7 group-hover:text-white">
//               {address}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FORM + SIDE CONTENT
//       ========================================================== */}
//       <section className="py-20 md:py-28">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
//             {/* LEFT */}
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 Send An Enquiry
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//                 Tell us what's happening at your property.
//               </h2>

//               <p className="mt-7 text-lg leading-8 text-[#292929]/65">
//                 A few details can help us understand your enquiry before we
//                 speak with you. Tell us what you have noticed, where the
//                 activity is occurring and which service you are looking for.
//               </p>

//               <div className="mt-10 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-6">
//                 <div className="flex gap-4">
//                   <ShieldCheck
//                     className="mt-1 shrink-0 text-[#F47B2B]"
//                     size={22}
//                   />

//                   <div>
//                     <h3 className="font-black">
//                       Straightforward communication
//                     </h3>

//                     <p className="mt-2 text-sm leading-6 text-[#292929]/60">
//                       The more information you provide, the easier it is to
//                       understand what you are experiencing and discuss the
//                       appropriate next steps.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 space-y-6">
//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <Home size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Residential enquiries</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Houses, flats, rental properties and other residential
//                       spaces.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <Building2 size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Commercial enquiries</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Offices, shops, workplaces and other commercial
//                       premises.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#292929] text-[#F47B2B]">
//                     <MapPin size={19} />
//                   </div>

//                   <div>
//                     <h3 className="font-black">Bromley service area</h3>

//                     <p className="mt-1 text-sm leading-6 text-[#292929]/60">
//                       Local pest control support for properties across Bromley.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* FORM */}
//             <div className="border border-[#292929]/10 bg-[#F5F5F2] p-6 sm:p-8 md:p-10">
//               <div className="mb-8 border-b border-[#292929]/10 pb-7">
//                 <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47B2B]">
//                   Contact Form
//                 </p>

//                 <h3 className="mt-3 text-2xl font-black md:text-3xl">
//                   Request pest control information
//                 </h3>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <User size={15} className="text-[#F47B2B]" />
//                       Full Name
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <Mail size={15} className="text-[#F47B2B]" />
//                       Email
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <PhoneCall size={15} className="text-[#F47B2B]" />
//                       Phone
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                       <MapPin size={15} className="text-[#F47B2B]" />
//                       Postcode
//                       <span className="text-[#F47B2B]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. BR1 5HE"
//                       required
//                       className="w-full border border-[#292929]/15 bg-white px-4 py-4 text-sm uppercase outline-none transition focus:border-[#F47B2B]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                     <FileText size={15} className="text-[#F47B2B]" />
//                     Pest Service
//                     <span className="text-[#F47B2B]">*</span>
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full appearance-none border border-[#292929]/15 bg-white px-4 py-4 pr-12 text-sm outline-none transition focus:border-[#F47B2B]"
//                     >
//                       <option value="">
//                         Select the pest service you need...
//                       </option>

//                       {services.map((service, index) => (
//                         <option key={index} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>

//                     <ChevronDown
//                       size={19}
//                       className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F47B2B]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
//                     <FileText size={15} className="text-[#F47B2B]" />
//                     Tell Us About The Problem
//                     <span className="text-[#F47B2B]">*</span>
//                   </label>

//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="6"
//                     required
//                     placeholder="Describe what you have noticed, where the activity is happening and when you first noticed it..."
//                     className="w-full resize-none border border-[#292929]/15 bg-white px-4 py-4 text-sm leading-6 outline-none transition focus:border-[#F47B2B]"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-5 border-t border-[#292929]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
//                   <div className="flex items-center gap-2 text-xs text-[#292929]/55">
//                     <Lock size={15} className="text-[#F47B2B]" />
//                     <span>Your enquiry is submitted securely.</span>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#292929] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#F47B2B] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         Send Enquiry
//                         <Send size={16} />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           WHAT HAPPENS NEXT
//       ========================================================== */}
//       <section className="bg-[#292929] py-20 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 What Happens Next
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
//                 A simple way to start dealing with the problem.
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-white/60">
//                 You do not need to have all the answers before contacting us.
//                 Start by explaining what you have noticed and where.
//               </p>
//             </div>

//             <div className="grid gap-px bg-white/10 sm:grid-cols-3">
//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   01
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Send Details
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   Tell us about the pest activity and your property.
//                 </p>
//               </div>

//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   02
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Discuss The Issue
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   The information can help establish what support may be
//                   appropriate.
//                 </p>
//               </div>

//               <div className="bg-[#292929] p-7">
//                 <span className="text-4xl font-black text-[#F47B2B]">
//                   03
//                 </span>

//                 <h3 className="mt-6 text-xl font-black text-white">
//                   Plan The Next Step
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-white/55">
//                   Move forward with a clear approach to the pest problem.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCATION
//       ========================================================== */}
//       <section className="bg-white py-20 md:py-24">
//         <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//                 Local To Bromley
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//                 PrimeShield Services Bromley
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-[#292929]/65">
//                 Our Bromley service is focused on helping residential and
//                 commercial customers with unwanted pest activity across the
//                 local area.
//               </p>

//               <div className="mt-8 flex gap-4 border-l-4 border-[#F47B2B] bg-[#F5F5F2] p-5">
//                 <MapPin
//                   className="mt-1 shrink-0 text-[#F47B2B]"
//                   size={21}
//                 />

//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-wider text-[#292929]/45">
//                     Address
//                   </p>

//                   <p className="mt-2 font-black leading-7">{address}</p>
//                 </div>
//               </div>

//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="mt-7 inline-flex items-center gap-3 font-black text-[#292929] transition hover:text-[#F47B2B]"
//               >
//                 <PhoneCall size={18} className="text-[#F47B2B]" />
//                 {phoneNumber}
//                 <ArrowRight size={17} />
//               </a>
//             </div>

//             <div className="min-h-[360px] overflow-hidden border-t-4 border-[#F47B2B] bg-[#F5F5F2]">
//               <iframe
//                 title="PrimeShield Services Bromley location map"
//                 src="https://www.google.com/maps?q=65%20Powster%20Rd%2C%20Bromley%20BR1%205HE%2C%20UK&z=17&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: "360px" }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ
//       ========================================================== */}
//       <section className="bg-[#F5F5F2] py-20 md:py-28">
//         <div className="mx-auto max-w-4xl px-6 md:px-10">
//           <div className="text-center">
//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F47B2B]">
//               Frequently Asked Questions
//             </span>

//             <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
//               Before you get in touch
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#292929]/60">
//               A few common questions about contacting PrimeShield Services
//               Bromley and arranging pest control support.
//             </p>
//           </div>

//           <div className="mt-12 space-y-3">
//             {faqs.map((faq, index) => {
//               const isOpen = activeFaq === index;

//               return (
//                 <div
//                   key={index}
//                   className={`border bg-white transition ${
//                     isOpen
//                       ? "border-[#F47B2B]"
//                       : "border-[#292929]/10"
//                   }`}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => toggleFaq(index)}
//                     className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
//                   >
//                     <span className="flex items-start gap-4 font-black">
//                       <HelpCircle
//                         size={19}
//                         className="mt-0.5 shrink-0 text-[#F47B2B]"
//                       />

//                       {faq.question}
//                     </span>

//                     <ChevronDown
//                       size={19}
//                       className={`shrink-0 text-[#F47B2B] transition-transform ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {isOpen && (
//                     <div className="border-t border-[#292929]/10 px-6 pb-6 pt-5">
//                       <p className="pl-9 text-sm leading-7 text-[#292929]/65">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CTA
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#F47B2B]">
//         <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border-[55px] border-white/10" />

//         <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
//           <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
//             <div className="max-w-3xl">
//               <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
//                 PrimeShield Services Bromley
//               </span>

//               <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
//                 Have a pest problem? Start with a conversation.
//               </h2>

//               <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
//                 Contact our Bromley team with the details of the issue at your
//                 property and take the first step towards getting it properly
//                 addressed.
//               </p>
//             </div>

//             <div className="flex shrink-0 flex-col gap-3">
//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-[#292929] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <PhoneCall size={19} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#292929]"
//               >
//                 <Mail size={18} />
//                 {email}
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;

















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   ArrowUpRight,
//   User,
//   FileText,
//   Lock,
//   ShieldCheck,
//   Building2,
//   Home,
//   Send,
//   Clock3,
//   CircleDot,
// } from "lucide-react";

// const colors = {
//   dark: "#151414",
//   orange: "#EE6C1A",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const phoneNumber = "07438 756809";
//   const email = "info@primeshieldcarshalton.uk";
//   const address =
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom";
//   const serviceArea = "Carshalton and nearby areas";

//   const mapQuery = encodeURIComponent(
//     "36 Glebe Rd, Carshalton SM5 3EX, United Kingdom"
//   );

//   const services = [
//     "Rat & Mice Control Carshalton",
//     "Bed Bug Treatment Carshalton",
//     "Cockroach Control Carshalton",
//     "Ant Control Carshalton",
//     "Flea Control Carshalton",
//     "Carpet Beetle Treatment Carshalton",
//     "Carpet Moth Treatment Carshalton",
//     "Wasp Nest Removal Carshalton",
//     "Squirrel Control Carshalton",
//     "Bird & Pigeon Control Carshalton",
//     "Hygiene & Proofing Services Carshalton",
//     "Other Pest Control Enquiry",
//   ];

//   const faqs = [
//     {
//       question: "How do I contact PrimeShield Services Carshalton?",
//       answer:
//         "You can call us on 07438 756809, email info@primeshieldcarshalton.uk, or complete the enquiry form on this page. Include a few details about the pest activity and your property so we can understand what you need.",
//     },
//     {
//       question: "What pest problems can I enquire about?",
//       answer:
//         "We deal with a range of common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. You can also contact us if you are unsure which pest is causing the problem.",
//     },
//     {
//       question: "Do you work with residential and commercial properties?",
//       answer:
//         "Yes. Pest control enquiries can be made for homes, flats, rental properties, offices, shops, workplaces and other commercial premises across Carshalton and nearby areas.",
//     },
//     {
//       question: "What should I tell you about my pest problem?",
//       answer:
//         "Useful information includes where you have noticed activity, what signs you have seen or heard, when the issue started and which pest you suspect. Your postcode also helps identify the service location.",
//     },
//     {
//       question: "What if I cannot identify the pest?",
//       answer:
//         "That is not a problem. You can describe the signs you have noticed instead of identifying the pest yourself. Information about the location, appearance, sounds or damage can help establish the type of issue.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your Carshalton pest control enquiry...",
//       {
//         style: {
//           background: colors.dark,
//           color: "#FFFFFF",
//           borderRadius: "3px",
//           border: `1px solid ${colors.orange}`,
//         },
//       }
//     );

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Carshalton",
//           business: "PrimeShield Services Carshalton",
//           address,
//           phoneNumber,
//           email,
//         }
//       );

//       toast.success(
//         res.data.message ||
//           "Your PrimeShield Services Carshalton enquiry has been submitted successfully.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: colors.dark,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* =========================================================
//           OPENING / CONTACT HERO
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-black">
//         <div className="absolute inset-y-0 right-0 hidden w-[32%] bg-[#151414] lg:block" />

//         <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/5 lg:block" />
//         <div className="absolute left-[18%] top-0 hidden h-full w-px bg-white/5 lg:block" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="grid min-h-[650px] items-end gap-16 pb-16 pt-28 lg:grid-cols-[1.3fr_0.7fr] lg:pb-20 lg:pt-36">

//             {/* MAIN INTRO */}
//             <div className="relative z-10">
//               <div className="mb-10 flex items-center gap-4">
//                 <div className="flex h-8 w-8 items-center justify-center border border-[#EE6C1A]">
//                   <CircleDot
//                     size={13}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
//                   Contact / Carshalton
//                 </span>
//               </div>

//               <h1 className="max-w-6xl text-6xl font-black leading-[0.84] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[105px]">
//                 Start with
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   the details.
//                 </span>
//               </h1>

//               <div className="mt-12 grid max-w-3xl gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1fr_0.7fr]">
//                 <p className="text-sm leading-7 text-white/45 sm:text-base">
//                   Tell PrimeShield Services Carshalton what you have noticed
//                   at your property. A clear description of the situation can
//                   help establish what type of pest control support you may
//                   require.
//                 </p>

//                 <div className="border-l border-[#EE6C1A] pl-5">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     Local Coverage
//                   </p>

//                   <p className="mt-3 text-lg font-black leading-6 text-white">
//                     Carshalton
//                     <br />
//                     & nearby areas
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTACT MODULE */}
//             <div className="relative z-10">
//               <div className="border border-white/10 bg-[#151414] p-7 sm:p-9">
//                 <div className="flex items-center justify-between border-b border-white/10 pb-6">
//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                       Direct Contact
//                     </p>

//                     <p className="mt-2 text-xs text-white/30">
//                       PrimeShield Services Carshalton
//                     </p>
//                   </div>

//                   <ShieldCheck
//                     size={25}
//                     strokeWidth={1.5}
//                     className="text-[#EE6C1A]"
//                   />
//                 </div>

//                 <div className="mt-7 space-y-6">

//                   <a
//                     href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                     className="group flex items-center justify-between gap-4"
//                   >
//                     <div className="flex items-center gap-4">
//                       <PhoneCall
//                         size={17}
//                         className="text-[#EE6C1A]"
//                       />

//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                           Phone
//                         </p>

//                         <p className="mt-1 text-sm font-black text-white/80 transition group-hover:text-[#EE6C1A]">
//                           {phoneNumber}
//                         </p>
//                       </div>
//                     </div>

//                     <ArrowUpRight
//                       size={16}
//                       className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
//                     />
//                   </a>

//                   <a
//                     href={`mailto:${email}`}
//                     className="group flex items-center justify-between gap-4"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Mail
//                         size={17}
//                         className="text-[#EE6C1A]"
//                       />

//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                           Email
//                         </p>

//                         <p className="mt-1 break-all text-xs font-bold text-white/70 transition group-hover:text-[#EE6C1A]">
//                           {email}
//                         </p>
//                       </div>
//                     </div>

//                     <ArrowUpRight
//                       size={16}
//                       className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EE6C1A]"
//                     />
//                   </a>

//                   <div className="flex items-start gap-4">
//                     <MapPin
//                       size={17}
//                       className="mt-0.5 text-[#EE6C1A]"
//                     />

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
//                         Base
//                       </p>

//                       <p className="mt-1 text-xs font-bold leading-5 text-white/65">
//                         {address}
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </div>

//               <div className="mt-3 h-1 w-full bg-[#EE6C1A]" />
//             </div>
//           </div>
//         </div>

//         <div className="pointer-events-none absolute bottom-[-45px] right-[-10px] hidden select-none text-[260px] font-black leading-none tracking-[-0.12em] text-white/[0.025] lg:block">
//           01
//         </div>
//       </section>

//       {/* =========================================================
//           CONTACT ROUTES
//       ========================================================== */}
//       <section className="border-y border-white/10 bg-[#151414]">
//         <div className="mx-auto grid max-w-[1500px] sm:grid-cols-2 lg:grid-cols-4">

//           <a
//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//             className="group relative border-b border-white/10 p-7 transition hover:bg-[#EE6C1A] hover:text-black sm:border-r lg:border-b-0"
//           >
//             <div className="flex items-start justify-between">
//               <PhoneCall
//                 size={20}
//                 className="text-[#EE6C1A] transition group-hover:text-black"
//               />

//               <ArrowUpRight
//                 size={17}
//                 className="text-white/20 transition group-hover:text-black"
//               />
//             </div>

//             <p className="mt-12 text-[8px] font-black uppercase tracking-[0.28em] text-white/25 transition group-hover:text-black/50">
//               Speak directly
//             </p>

//             <p className="mt-2 text-base font-black text-white transition group-hover:text-black">
//               {phoneNumber}
//             </p>
//           </a>

//           <a
//             href={`mailto:${email}`}
//             className="group relative border-b border-white/10 p-7 transition hover:bg-white hover:text-black lg:border-b-0 lg:border-r"
//           >
//             <div className="flex items-start justify-between">
//               <Mail
//                 size={20}
//                 className="text-[#EE6C1A]"
//               />

//               <ArrowUpRight
//                 size={17}
//                 className="text-white/20 transition group-hover:text-black"
//               />
//             </div>

//             <p className="mt-12 text-[8px] font-black uppercase tracking-[0.28em] text-white/25 transition group-hover:text-black/50">
//               Send an email
//             </p>

//             <p className="mt-2 break-all text-xs font-black text-white/75 transition group-hover:text-black">
//               {email}
//             </p>
//           </a>

//           <div className="group border-b border-white/10 p-7 transition hover:bg-black lg:border-b-0 lg:border-r">
//             <div className="flex items-start justify-between">
//               <MapPin
//                 size={20}
//                 className="text-[#EE6C1A]"
//               />

//               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
//                 SM5
//               </span>
//             </div>

//             <p className="mt-12 text-[8px] font-black uppercase tracking-[0.28em] text-white/25">
//               Local base
//             </p>

//             <p className="mt-2 text-sm font-black leading-6 text-white/70">
//               Carshalton
//             </p>
//           </div>

//           <div className="group p-7 transition hover:bg-[#EE6C1A] hover:text-black">
//             <div className="flex items-start justify-between">
//               <Clock3
//                 size={20}
//                 className="text-[#EE6C1A] transition group-hover:text-black"
//               />

//               <ShieldCheck
//                 size={17}
//                 className="text-white/20 transition"
//               />
//             </div>

//             <p className="mt-12 text-[8px] font-black uppercase tracking-[0.28em] text-white/25 transition group-hover:text-black/50">
//               Service area
//             </p>

//             <p className="mt-2 text-sm font-black leading-6 text-white/70 transition group-hover:text-black">
//               {serviceArea}
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* =========================================================
//           ENQUIRY WORKSPACE
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-black py-28 sm:py-36">
//         <div className="absolute left-0 top-0 h-px w-[35%] bg-[#EE6C1A]" />

//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">

//             {/* LEFT SIDE */}
//             <div className="lg:sticky lg:top-10 lg:self-start">
//               <div className="flex items-center gap-3">
//                 <span className="text-[9px] font-black tracking-[0.3em] text-[#EE6C1A]">
//                   02
//                 </span>

//                 <span className="h-px w-10 bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
//                   Enquiry
//                 </span>
//               </div>

//               <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl">
//                 Give us
//                 <br />
//                 the picture.
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
//                 You do not need to diagnose the problem before contacting us.
//                 Tell us what you have seen, where it is happening and how long
//                 it has been going on.
//               </p>

//               <div className="mt-12 space-y-7 border-t border-white/10 pt-8">

//                 <div className="flex gap-4">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#EE6C1A]">
//                     <Home
//                       size={16}
//                       className="text-[#EE6C1A]"
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-xs font-black uppercase tracking-[0.1em]">
//                       Residential
//                     </h3>

//                     <p className="mt-2 text-xs leading-5 text-white/30">
//                       Houses, flats, rentals and other homes.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#EE6C1A]">
//                     <Building2
//                       size={16}
//                       className="text-[#EE6C1A]"
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-xs font-black uppercase tracking-[0.1em]">
//                       Commercial
//                     </h3>

//                     <p className="mt-2 text-xs leading-5 text-white/30">
//                       Offices, shops, workplaces and business premises.
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* FORM */}
//             <div className="relative">
//               <div className="absolute -right-3 -top-3 hidden h-20 w-20 border-r border-t border-[#EE6C1A] sm:block" />

//               <div className="relative border border-white/10 bg-[#151414]">

//                 <div className="flex flex-col justify-between gap-5 border-b border-white/10 p-7 sm:flex-row sm:items-end sm:p-10">
//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                       Contact File
//                     </p>

//                     <h3 className="mt-3 text-2xl font-black tracking-[-0.02em] sm:text-3xl">
//                       Tell us what is happening
//                     </h3>
//                   </div>

//                   <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
//                     <Lock
//                       size={13}
//                       className="text-[#EE6C1A]"
//                     />
//                     Secure enquiry
//                   </div>
//                 </div>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="p-7 sm:p-10"
//                 >
//                   <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">

//                     {/* NAME */}
//                     <div>
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <User
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Full Name
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#EE6C1A]"
//                       />
//                     </div>

//                     {/* EMAIL */}
//                     <div>
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <Mail
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Email Address
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="you@example.com"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#EE6C1A]"
//                       />
//                     </div>

//                     {/* PHONE */}
//                     <div>
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <PhoneCall
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Phone Number
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Your phone number"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#EE6C1A]"
//                       />
//                     </div>

//                     {/* POSTCODE */}
//                     <div>
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <MapPin
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Postcode
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <input
//                         type="text"
//                         name="postcode"
//                         value={formData.postcode}
//                         onChange={handleChange}
//                         placeholder="e.g. SM5 3EX"
//                         required
//                         className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm uppercase text-white outline-none transition placeholder:text-white/20 focus:border-[#EE6C1A]"
//                       />
//                     </div>

//                     {/* SERVICE */}
//                     <div className="sm:col-span-2">
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <FileText
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Service Required
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <div className="relative">
//                         <select
//                           name="service"
//                           value={formData.service}
//                           onChange={handleChange}
//                           required
//                           className="w-full appearance-none border-b border-white/15 bg-transparent px-0 py-4 pr-10 text-sm text-white outline-none transition focus:border-[#EE6C1A]"
//                         >
//                           <option
//                             value=""
//                             className="bg-[#151414]"
//                           >
//                             Select the pest service you need...
//                           </option>

//                           {services.map((service, index) => (
//                             <option
//                               key={index}
//                               value={service}
//                               className="bg-[#151414]"
//                             >
//                               {service}
//                             </option>
//                           ))}
//                         </select>

//                         <ChevronDown
//                           size={17}
//                           className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#EE6C1A]"
//                         />
//                       </div>
//                     </div>

//                     {/* MESSAGE */}
//                     <div className="sm:col-span-2">
//                       <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/45">
//                         <FileText
//                           size={14}
//                           className="text-[#EE6C1A]"
//                         />
//                         Describe The Problem
//                         <span className="text-[#EE6C1A]">*</span>
//                       </label>

//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows="6"
//                         required
//                         placeholder="What have you noticed? Where is the activity happening? When did you first notice it?"
//                         className="w-full resize-none border border-white/10 bg-black/30 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#EE6C1A]"
//                       />
//                     </div>

//                   </div>

//                   {/* FORM FOOTER */}
//                   <div className="mt-9 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

//                     <p className="max-w-xs text-[10px] leading-5 text-white/25">
//                       Please provide as much useful information as you can.
//                       This helps give context to your enquiry.
//                     </p>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="inline-flex items-center justify-center gap-3 bg-[#EE6C1A] px-7 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
//                     >
//                       {loading ? (
//                         "Sending..."
//                       ) : (
//                         <>
//                           Submit Enquiry
//                           <Send size={15} />
//                         </>
//                       )}
//                     </button>

//                   </div>
//                 </form>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           HOW THE ENQUIRY MOVES
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#151414] py-28 sm:py-36">
//         <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="text-[9px] font-black tracking-[0.3em] text-[#EE6C1A]">
//                   03
//                 </span>

//                 <span className="h-px w-10 bg-[#EE6C1A]" />

//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
//                   After You Contact Us
//                 </span>
//               </div>

//               <h2 className="mt-8 max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl">
//                 One enquiry.
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   Clearer next steps.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-lg text-sm leading-7 text-white/35">
//                 Starting a pest control enquiry does not require you to know
//                 exactly what is happening. Begin with the information you have.
//               </p>
//             </div>

//             <div className="grid border-l border-white/10">

//               <div className="group grid gap-6 border-b border-white/10 p-7 transition hover:bg-black sm:grid-cols-[90px_1fr] sm:p-9">
//                 <div>
//                   <span className="text-5xl font-black tracking-[-0.05em] text-[#EE6C1A]">
//                     01
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-black">
//                     Share the signs
//                   </h3>

//                   <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
//                     Explain what you have noticed, where it is happening and
//                     any signs of activity, damage or movement.
//                   </p>
//                 </div>
//               </div>

//               <div className="group grid gap-6 border-b border-white/10 p-7 transition hover:bg-black sm:grid-cols-[90px_1fr] sm:p-9">
//                 <div>
//                   <span className="text-5xl font-black tracking-[-0.05em] text-[#EE6C1A]">
//                     02
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-black">
//                     Establish the situation
//                   </h3>

//                   <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
//                     Your enquiry provides useful context about the property,
//                     location and type of pest issue involved.
//                   </p>
//                 </div>
//               </div>

//               <div className="group grid gap-6 p-7 transition hover:bg-[#EE6C1A] hover:text-black sm:grid-cols-[90px_1fr] sm:p-9">
//                 <div>
//                   <span className="text-5xl font-black tracking-[-0.05em] text-[#EE6C1A] transition group-hover:text-black">
//                     03
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-black">
//                     Discuss what comes next
//                   </h3>

//                   <p className="mt-3 max-w-xl text-sm leading-6 text-white/35 transition group-hover:text-black/55">
//                     Move forward with a clearer understanding of the pest
//                     problem and the support that may be appropriate.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           LOCAL BASE + GOOGLE MAP
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-black py-28 sm:py-36">
//         <div className="absolute right-0 top-0 h-full w-[28%] bg-[#151414]" />

//         <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20">

//           <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

//             {/* LEFT INFORMATION */}
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 04 / Local Base
//               </p>

//               <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
//                 Carshalton
//                 <br />
//                 <span className="text-white/20">
//                   is where we start.
//                 </span>
//               </h2>

//               <p className="mt-9 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
//                 PrimeShield Services Carshalton provides pest control support
//                 for properties in Carshalton and nearby areas. If you are
//                 dealing with unwanted pest activity, get in touch with the
//                 details of your location and the problem.
//               </p>

//               {/* ADDRESS INFORMATION */}
//               <div className="relative mt-12 border-l border-[#EE6C1A] pl-7 sm:pl-10">

//                 <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#EE6C1A]" />

//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
//                   Registered Service Address
//                 </p>

//                 <div className="mt-5 flex gap-4">
//                   <MapPin
//                     size={20}
//                     className="mt-1 shrink-0 text-[#EE6C1A]"
//                   />

//                   <p className="text-lg font-black leading-7 text-white/80">
//                     {address}
//                   </p>
//                 </div>

//                 <div className="mt-10 border-t border-white/10 pt-7">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">
//                     Service Coverage
//                   </p>

//                   <p className="mt-3 text-sm font-bold text-white/60">
//                     {serviceArea}
//                   </p>
//                 </div>

//                 <a
//                   href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                   className="mt-9 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.17em] text-[#EE6C1A] transition hover:text-white"
//                 >
//                   <PhoneCall size={16} />
//                   {phoneNumber}
//                   <ArrowUpRight size={15} />
//                 </a>

//               </div>
//             </div>

//             {/* GOOGLE MAP */}
//             <div className="relative z-10">

//               <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#EE6C1A]" />

//               <div className="relative border border-white/10 bg-[#151414] p-3">

//                 <div className="relative overflow-hidden border border-white/10">

//                   <iframe
//                     title="PrimeShield Services Carshalton map"
//                     src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
//                     width="100%"
//                     height="500"
//                     style={{
//                       border: 0,
//                       display: "block",
//                       filter: "grayscale(100%) contrast(1.05)",
//                     }}
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     allowFullScreen
//                   />

//                   {/* MAP OVERLAY */}
//                   <div className="absolute bottom-5 left-5 right-5 border border-white/10 bg-black/90 p-5 backdrop-blur-sm">

//                     <div className="flex items-start gap-3">

//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                         <MapPin size={18} />
//                       </div>

//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                           PrimeShield Services
//                         </p>

//                         <p className="mt-1 text-xs font-bold leading-5 text-white/75">
//                           36 Glebe Rd, Carshalton
//                           <br />
//                           SM5 3EX, United Kingdom
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                 </div>
//               </div>

//               <div className="mt-3 h-1 w-full bg-[#EE6C1A]" />

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FAQ
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#151414] py-28 sm:py-36">
//         <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">

//           <div className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 05 / Questions
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl">
//                 Before you
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   send.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-6 text-white/30">
//               A few answers to common questions about contacting PrimeShield
//               Services Carshalton.
//             </p>

//           </div>

//           <div className="border-t border-white/10">

//             {faqs.map((faq, index) => {
//               const isOpen = activeFaq === index;

//               return (
//                 <div
//                   key={index}
//                   className="border-b border-white/10"
//                 >

//                   <button
//                     type="button"
//                     onClick={() => toggleFaq(index)}
//                     className="group flex w-full items-center gap-5 py-7 text-left sm:py-8"
//                   >

//                     <span
//                       className={`flex h-9 w-9 shrink-0 items-center justify-center border text-[9px] font-black transition ${
//                         isOpen
//                           ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                           : "border-white/10 text-[#EE6C1A]"
//                       }`}
//                     >
//                       0{index + 1}
//                     </span>

//                     <span className="flex-1 text-sm font-black text-white/75 transition group-hover:text-white sm:text-base">
//                       {faq.question}
//                     </span>

//                     <ChevronDown
//                       size={18}
//                       className={`shrink-0 text-[#EE6C1A] transition-transform duration-300 ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />

//                   </button>

//                   <div
//                     className={`grid transition-all duration-300 ${
//                       isOpen
//                         ? "grid-rows-[1fr] opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >

//                     <div className="overflow-hidden">
//                       <div className="pb-8 pl-14 pr-8 sm:pl-14">
//                         <p className="max-w-3xl text-sm leading-7 text-white/35">
//                           {faq.answer}
//                         </p>
//                       </div>
//                     </div>

//                   </div>

//                 </div>
//               );
//             })}

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           FINAL CONTACT TERMINAL
//       ========================================================== */}
//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

//         <div className="pointer-events-none absolute right-[-80px] top-[-80px] text-[280px] font-black leading-none tracking-[-0.12em] text-black/[0.07]">
//           PS
//         </div>

//         <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 xl:px-20">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/55">
//                 06 / Get In Touch
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
//                 Tell us what
//                 <br />
//                 needs attention.
//               </h2>

//               <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 Contact PrimeShield Services Carshalton about your pest
//                 problem and provide the details you already have.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">

//               <a
//                 href={`tel:${phoneNumber.replace(/\s/g, "")}`}
//                 className="inline-flex items-center justify-center gap-3 bg-black px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-white transition hover:bg-white hover:text-black"
//               >
//                 <PhoneCall size={17} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-black transition hover:bg-black hover:text-white"
//               >
//                 <Mail size={17} />
//                 Email Us
//               </a>

//             </div>

//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">

//             <div className="flex items-center gap-3">
//               <ShieldCheck size={18} />

//               <span className="text-[9px] font-black uppercase tracking-[0.22em]">
//                 PrimeShield Services Carshalton
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
//               <MapPin size={13} />
//               Carshalton & nearby areas
//             </div>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default Contact;















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   ArrowUpRight,
//   User,
//   FileText,
//   Lock,
//   ShieldCheck,
//   Building2,
//   Home,
//   Send,
//   Clock3,
//   CircleDot,
//   ArrowRight,
//   Check,
// } from "lucide-react";

// const colors = {
//   dark: "#151414",
//   orange: "#EE6C1A",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   // =========================================================
//   // SIDCUP BUSINESS DETAILS
//   // =========================================================

//   const phoneNumber = "07356 295780";
//   const email = "info@primeshieldsidcup.uk";
//   const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
//   const serviceArea = "Sidcup and nearby areas";

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   const mapQuery = encodeURIComponent(
//     "29 Station Rd, Sidcup DA15 7DZ, United Kingdom"
//   );

//   const services = [
//     "Rat & Mice Control Sidcup",
//     "Bed Bug Treatment Sidcup",
//     "Cockroach Control Sidcup",
//     "Ant Control Sidcup",
//     "Flea Control Sidcup",
//     "Carpet Beetle Treatment Sidcup",
//     "Carpet Moth Treatment Sidcup",
//     "Wasp Nest Removal Sidcup",
//     "Squirrel Control Sidcup",
//     "Bird & Pigeon Control Sidcup",
//     "Hygiene & Proofing Services Sidcup",
//     "Other Pest Control Enquiry",
//   ];

//   const faqs = [
//     {
//       question: "How do I contact PrimeShield Services Sidcup?",
//       answer:
//         "You can call us on 07356 295780, email us, or complete the enquiry form on this page. Tell us what you have noticed, where the activity is happening and the type of property involved.",
//     },
//     {
//       question: "What pest problems can I enquire about?",
//       answer:
//         "You can contact us about common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest is involved, simply describe the signs you have noticed.",
//     },
//     {
//       question: "Do you work with homes and businesses?",
//       answer:
//         "Yes. Enquiries can be made for houses, flats, rental properties, offices, shops, workplaces and other commercial premises across Sidcup and nearby areas.",
//     },
//     {
//       question: "What information should I include?",
//       answer:
//         "Useful details include where you have noticed activity, what signs you have seen, when the problem started and the type of property. Your postcode also helps us understand the service location.",
//     },
//     {
//       question: "What if I do not know which pest I have?",
//       answer:
//         "You do not need to identify the pest before getting in touch. Describe what you have seen, heard or found and where it is happening. Those details can help establish the nature of the enquiry.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =========================================================
//   // API CALLING — SAME STRUCTURE / SAME ENDPOINT
//   // =========================================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your Sidcup pest control enquiry...",
//       {
//         style: {
//           background: colors.dark,
//           color: "#E8E3DE",
//           borderRadius: "3px",
//           border: `1px solid ${colors.orange}`,
//         },
//       }
//     );

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Sidcup",
//           business: "PrimeShield Services Sidcup",
//           address,
//           phoneNumber,
//           email,
//         }
//       );

//       toast.success(
//         res.data.message ||
//           "Your PrimeShield Services Sidcup enquiry has been submitted successfully.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: "#E8E3DE",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: colors.dark,
//             color: "#E8E3DE",
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className="min-h-screen overflow-x-hidden bg-[#050505] text-[#E8E3DE]"
//       style={{
//         fontFamily: "Arial, Helvetica, sans-serif",
//       }}
//     >
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* =========================================================
//           01 — NEW HERO
//           IMAGE + LARGE TYPOGRAPHIC PANEL
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#050505] pt-24 lg:pt-28">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="grid min-h-[720px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">

//             {/* LEFT — IMAGE */}
//             <div className="relative min-h-[460px] overflow-hidden lg:min-h-[720px]">
//               <img
//                 src="/images/contact-hero1.webp"
//                 alt="PrimeShield Services Sidcup contact"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

//               <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#EE6C1A] text-black">
//                   <CircleDot size={17} />
//                 </div>

//                 <div className="bg-[#050505]/90 px-4 py-3 backdrop-blur-sm">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     PrimeShield Services
//                   </p>

//                   <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8E3DE]/60">
//                     Sidcup
//                   </p>
//                 </div>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
//                 <div className="max-w-md border-l-2 border-[#EE6C1A] bg-[#050505]/85 p-5 backdrop-blur-md sm:p-7">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     Local Contact
//                   </p>

//                   <p className="mt-3 text-xl font-black leading-tight text-[#E8E3DE] sm:text-2xl">
//                     Tell us what you have noticed.
//                   </p>

//                   <p className="mt-3 text-xs leading-6 text-[#B9B2AA]">
//                     Start with the details you already have. You do not need
//                     to diagnose the pest problem before contacting us.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — TYPOGRAPHIC HERO */}
//             <div className="relative flex flex-col justify-between bg-[#151414] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
//               <div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                     Contact / Sidcup
//                   </span>

//                   <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B]">
//                     01
//                   </span>
//                 </div>

//                 <div className="mt-16 lg:mt-20">
//                   <p className="max-w-md text-[10px] font-black uppercase tracking-[0.3em] text-[#8B8B8B]">
//                     Professional pest control enquiries
//                   </p>

//                   <h1 className="mt-6 max-w-3xl text-[58px] font-black leading-[0.84] tracking-[-0.065em] sm:text-7xl lg:text-[82px] xl:text-[94px]">
//                     Let's
//                     <br />
//                     <span className="text-[#EE6C1A]">talk.</span>
//                   </h1>

//                   <p className="mt-9 max-w-lg text-sm leading-7 text-[#B9B2AA] sm:text-base">
//                     Contact PrimeShield Services Sidcup about unwanted pest
//                     activity at your property. Give us the location, the signs
//                     you have noticed and any useful details about the problem.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-14 border-t border-[#E8E3DE]/10 pt-7">
//                 <div className="grid gap-7 sm:grid-cols-2">
//                   <a
//                     href={phoneHref}
//                     className="group flex items-start gap-4"
//                   >
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                       <PhoneCall size={17} />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                         Call directly
//                       </p>

//                       <p className="mt-2 text-sm font-black text-[#E8E3DE] transition group-hover:text-[#EE6C1A]">
//                         {phoneNumber}
//                       </p>
//                     </div>
//                   </a>

//                   <div className="flex items-start gap-4">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#EE6C1A] text-[#EE6C1A]">
//                       <MapPin size={17} />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                         Based in
//                       </p>

//                       <p className="mt-2 text-sm font-black leading-5 text-[#E8E3DE]">
//                         Sidcup
//                         <br />
//                         & nearby areas
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute bottom-0 right-0 hidden text-[210px] font-black leading-none tracking-[-0.12em] text-[#E8E3DE]/[0.025] xl:block">
//                 01
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           02 — CONTACT OPTIONS
//       ========================================================== */}

//       <section className="bg-[#E8E3DE] text-[#050505]">
//         <div className="mx-auto grid max-w-[1550px] md:grid-cols-3">

//           <a
//             href={phoneHref}
//             className="group border-b border-black/10 p-7 transition hover:bg-[#EE6C1A] md:border-b-0 md:border-r md:p-10"
//           >
//             <div className="flex items-center justify-between">
//               <PhoneCall size={21} />

//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-black/45">
//               Phone
//             </p>

//             <p className="mt-3 text-xl font-black">
//               {phoneNumber}
//             </p>

//             <p className="mt-3 text-xs leading-5 text-black/50">
//               Speak directly about your pest control enquiry.
//             </p>
//           </a>

//           <a
//             href={`mailto:${email}`}
//             className="group border-b border-black/10 p-7 transition hover:bg-[#151414] hover:text-[#E8E3DE] md:border-b-0 md:border-r md:p-10"
//           >
//             <div className="flex items-center justify-between">
//               <Mail
//                 size={21}
//                 className="text-[#EE6C1A]"
//               />

//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] opacity-45">
//               Email
//             </p>

//             <p className="mt-3 break-all text-sm font-black">
//               {email}
//             </p>

//             <p className="mt-3 text-xs leading-5 opacity-45">
//               Send the details of your property and pest problem.
//             </p>
//           </a>

//           <div className="group p-7 transition hover:bg-[#EE6C1A] md:p-10">
//             <div className="flex items-center justify-between">
//               <MapPin size={21} />

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] opacity-40">
//                 DA15
//               </span>
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] opacity-45">
//               Local coverage
//             </p>

//             <p className="mt-3 text-xl font-black">
//               Sidcup
//               <br />
//               and nearby areas
//             </p>

//             <p className="mt-3 text-xs leading-5 opacity-50">
//               Professional pest control enquiries for local residential and
//               commercial properties.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* =========================================================
//           03 — FORM / NEW LAYOUT
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 02 / Your enquiry
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
//                 Give us
//                 <br />
//                 the facts.
//               </h2>
//             </div>

//             <div className="flex justify-between gap-8 border-l border-[#EE6C1A] pl-6 lg:pl-10">
//               <p className="max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
//                 Tell us what is happening at the property. Include the pest
//                 service you think you need, where you have noticed activity
//                 and anything else that could help explain the situation.
//               </p>

//               <span className="hidden text-[10px] font-black tracking-[0.2em] text-[#EE6C1A] sm:block">
//                 SIDCUP
//               </span>
//             </div>

//           </div>

//           <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">

//             {/* FORM SIDEBAR */}
//             <aside className="bg-[#151414] p-7 sm:p-9 lg:p-10">
//               <div className="flex h-14 w-14 items-center justify-center bg-[#EE6C1A] text-black">
//                 <FileText size={21} />
//               </div>

//               <p className="mt-10 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Enquiry checklist
//               </p>

//               <h3 className="mt-4 text-2xl font-black leading-tight">
//                 What should you tell us?
//               </h3>

//               <div className="mt-8 space-y-5">

//                 {[
//                   "Where the pest activity is happening",
//                   "What signs you have noticed",
//                   "When you first noticed the problem",
//                   "Your property postcode",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-5"
//                   >
//                     <Check
//                       size={15}
//                       className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                     />

//                     <p className="text-xs leading-5 text-[#8B8B8B]">
//                       {item}
//                     </p>
//                   </div>
//                 ))}

//               </div>

//               <div className="mt-10 border-t border-[#E8E3DE]/10 pt-7">
//                 <div className="flex items-center gap-3">
//                   <Lock size={15} className="text-[#EE6C1A]" />

//                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Enquiry details
//                   </span>
//                 </div>
//               </div>
//             </aside>

//             {/* FORM */}
//             <div className="bg-[#E8E3DE] p-6 text-[#050505] sm:p-10 lg:p-14">

//               <div className="mb-10 flex flex-col justify-between gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-end">
//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     PrimeShield Services Sidcup
//                   </p>

//                   <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
//                     Contact form
//                   </h3>
//                 </div>

//                 <p className="max-w-xs text-xs leading-5 text-black/45">
//                   Complete the fields below and include the useful details you
//                   already have.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit}>

//                 <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">

//                   {/* NAME */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <User size={14} className="text-[#EE6C1A]" />
//                       Full Name
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm text-black outline-none transition placeholder:text-black/25 focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* EMAIL */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <Mail size={14} className="text-[#EE6C1A]" />
//                       Email Address
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm text-black outline-none transition placeholder:text-black/25 focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* PHONE */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <PhoneCall size={14} className="text-[#EE6C1A]" />
//                       Phone Number
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm text-black outline-none transition placeholder:text-black/25 focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* POSTCODE */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <MapPin size={14} className="text-[#EE6C1A]" />
//                       Postcode
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. DA15 7DZ"
//                       required
//                       className="w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm uppercase text-black outline-none transition placeholder:text-black/25 focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* SERVICE */}
//                   <div className="sm:col-span-2">
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <ShieldCheck size={14} className="text-[#EE6C1A]" />
//                       Service Required
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <div className="relative">
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         required
//                         className="w-full appearance-none border-b border-black/20 bg-transparent px-0 py-4 pr-10 text-sm text-black outline-none transition focus:border-[#EE6C1A]"
//                       >
//                         <option
//                           value=""
//                           className="bg-[#E8E3DE]"
//                         >
//                           Select the pest service you need...
//                         </option>

//                         {services.map((service, index) => (
//                           <option
//                             key={index}
//                             value={service}
//                             className="bg-[#E8E3DE]"
//                           >
//                             {service}
//                           </option>
//                         ))}
//                       </select>

//                       <ChevronDown
//                         size={17}
//                         className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#EE6C1A]"
//                       />
//                     </div>
//                   </div>

//                   {/* MESSAGE */}
//                   <div className="sm:col-span-2">
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-black/55">
//                       <FileText size={14} className="text-[#EE6C1A]" />
//                       Describe The Problem
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="6"
//                       required
//                       placeholder="What have you noticed? Where is the activity happening? When did you first notice it?"
//                       className="w-full resize-none border border-black/15 bg-black/[0.025] px-4 py-4 text-sm leading-7 text-black outline-none transition placeholder:text-black/25 focus:border-[#EE6C1A]"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-9 flex flex-col justify-between gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center">

//                   <p className="max-w-sm text-[10px] leading-5 text-black/40">
//                     Providing clear information helps give useful context to
//                     your pest control enquiry.
//                   </p>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#151414] px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-[#E8E3DE] transition hover:bg-[#EE6C1A] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         Send Enquiry
//                         <Send size={15} />
//                       </>
//                     )}
//                   </button>

//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           04 — WHO CAN CONTACT US
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 03 / Property type
//               </p>

//               <h2 className="mt-6 max-w-md text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl">
//                 Different
//                 <br />
//                 properties.
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   Same starting point.
//                 </span>
//               </h2>
//             </div>

//             <div className="grid gap-px bg-[#E8E3DE]/10 sm:grid-cols-2">

//               <div className="group bg-[#151414] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//                 <div className="flex items-center justify-between">
//                   <Home
//                     size={24}
//                     className="text-[#EE6C1A] transition group-hover:text-black"
//                   />

//                   <span className="text-[9px] font-black tracking-[0.2em] opacity-30">
//                     01
//                   </span>
//                 </div>

//                 <h3 className="mt-20 text-2xl font-black">
//                   Homes & Flats
//                 </h3>

//                 <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/60">
//                   Pest control enquiries for houses, flats, rental properties
//                   and other residential spaces.
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A] transition group-hover:text-black">
//                   Residential
//                   <ArrowRight size={14} />
//                 </div>
//               </div>

//               <div className="group bg-[#151414] p-8 transition hover:bg-[#E8E3DE] hover:text-black sm:p-10">
//                 <div className="flex items-center justify-between">
//                   <Building2
//                     size={24}
//                     className="text-[#EE6C1A]"
//                   />

//                   <span className="text-[9px] font-black tracking-[0.2em] opacity-30">
//                     02
//                   </span>
//                 </div>

//                 <h3 className="mt-20 text-2xl font-black">
//                   Local Businesses
//                 </h3>

//                 <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/55">
//                   Enquiries from offices, shops, workplaces and other
//                   commercial premises.
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A]">
//                   Commercial
//                   <ArrowRight size={14} />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           05 — LOCAL BASE + MAP
//       ========================================================== */}

//       <section className="bg-[#E8E3DE] py-24 text-[#050505] sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

//             {/* ADDRESS */}
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 04 / Find us
//               </p>

//               <h2 className="mt-7 text-5xl font-black leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
//                 Local to
//                 <br />
//                 <span className="text-black/25">
//                   Sidcup.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-black/50">
//                 PrimeShield Services Sidcup is based on Station Road and
//                 provides pest control enquiries for Sidcup and nearby areas.
//               </p>

//               <div className="mt-12 border-t border-black/10 pt-8">

//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-black/40">
//                   Service address
//                 </p>

//                 <div className="mt-5 flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                     <MapPin size={18} />
//                   </div>

//                   <p className="max-w-sm text-lg font-black leading-7">
//                     {address}
//                   </p>
//                 </div>

//                 <div className="mt-8 grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-black/35">
//                       Coverage
//                     </p>

//                     <p className="mt-2 text-sm font-black">
//                       {serviceArea}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-black/35">
//                       Phone
//                     </p>

//                     <a
//                       href={phoneHref}
//                       className="mt-2 inline-block text-sm font-black transition hover:text-[#EE6C1A]"
//                     >
//                       {phoneNumber}
//                     </a>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* MAP */}
//             <div className="relative">

//               <div className="absolute -left-3 -top-3 z-10 h-20 w-20 border-l border-t border-[#EE6C1A]" />

//               <div className="relative bg-[#151414] p-3">

//                 <div className="overflow-hidden border border-[#E8E3DE]/10">

//                   <iframe
//                     title="PrimeShield Services Sidcup map"
//                     src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
//                     width="100%"
//                     height="500"
//                     style={{
//                       border: 0,
//                       display: "block",
//                       filter: "grayscale(100%) contrast(1.05)",
//                     }}
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     allowFullScreen
//                   />

//                   <div className="absolute bottom-7 left-7 right-7 bg-[#050505]/95 p-5 backdrop-blur-md sm:left-9 sm:right-9">

//                     <div className="flex items-start gap-4">
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                         <MapPin size={17} />
//                       </div>

//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                           PrimeShield Services Sidcup
//                         </p>

//                         <p className="mt-2 text-xs font-bold leading-5 text-[#E8E3DE]/70">
//                           29 Station Rd, Sidcup
//                           <br />
//                           DA15 7DZ, United Kingdom
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               <div className="mt-3 h-1 w-full bg-[#EE6C1A]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           06 — HOW TO START
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

//           <div className="mb-14 flex flex-col justify-between gap-7 border-b border-[#E8E3DE]/10 pb-10 lg:flex-row lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 05 / Starting point
//               </p>

//               <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
//                 You bring the
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   information.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-[#8B8B8B]">
//               A pest control enquiry can begin with something as simple as
//               unusual sounds, visible insects, damage or activity in a
//               particular area.
//             </p>
//           </div>

//           <div className="grid gap-px bg-[#E8E3DE]/10 lg:grid-cols-3">

//             <div className="group bg-[#050505] p-8 transition hover:bg-[#151414] sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
//                 01
//               </span>

//               <h3 className="mt-16 text-2xl font-black">
//                 Describe
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
//                 Tell us what you have seen, heard or found at the property.
//               </p>
//             </div>

//             <div className="group bg-[#050505] p-8 transition hover:bg-[#151414] sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
//                 02
//               </span>

//               <h3 className="mt-16 text-2xl font-black">
//                 Locate
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
//                 Explain where the activity is happening and provide the
//                 property postcode.
//               </p>
//             </div>

//             <div className="group bg-[#050505] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A] transition group-hover:text-black">
//                 03
//               </span>

//               <h3 className="mt-16 text-2xl font-black">
//                 Contact
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B] transition group-hover:text-black/55">
//                 Send the enquiry or call PrimeShield Services Sidcup directly.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           07 — FAQ
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 06 / Questions
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl">
//                 Before you
//                 <br />
//                 <span className="text-[#EE6C1A]">
//                   contact us.
//                 </span>
//               </h2>

//               <p className="mt-8 max-w-sm text-sm leading-7 text-[#8B8B8B]">
//                 A few common questions about contacting PrimeShield Services
//                 Sidcup.
//               </p>
//             </div>

//             <div className="border-t border-[#E8E3DE]/10">

//               {faqs.map((faq, index) => {
//                 const isOpen = activeFaq === index;

//                 return (
//                   <div
//                     key={index}
//                     className="border-b border-[#E8E3DE]/10"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => toggleFaq(index)}
//                       className="flex w-full items-center gap-5 py-7 text-left sm:py-8"
//                     >
//                       <span className="text-[9px] font-black tracking-[0.2em] text-[#EE6C1A]">
//                         0{index + 1}
//                       </span>

//                       <span className="flex-1 text-sm font-black text-[#E8E3DE]/75 sm:text-base">
//                         {faq.question}
//                       </span>

//                       <span
//                         className={`flex h-9 w-9 shrink-0 items-center justify-center border transition ${
//                           isOpen
//                             ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                             : "border-[#E8E3DE]/10 text-[#EE6C1A]"
//                         }`}
//                       >
//                         <ChevronDown
//                           size={16}
//                           className={`transition-transform duration-300 ${
//                             isOpen ? "rotate-180" : ""
//                           }`}
//                         />
//                       </span>
//                     </button>

//                     <div
//                       className={`grid transition-all duration-300 ${
//                         isOpen
//                           ? "grid-rows-[1fr] opacity-100"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >
//                       <div className="overflow-hidden">
//                         <div className="pb-8 pl-9 pr-8 sm:pl-12">
//                           <p className="max-w-2xl text-sm leading-7 text-[#8B8B8B]">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           08 — FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

//         <div className="pointer-events-none absolute right-[-50px] top-[-45px] text-[220px] font-black leading-none tracking-[-0.13em] opacity-[0.08] sm:text-[300px]">
//           PS
//         </div>

//         <div className="relative mx-auto max-w-[1550px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16">

//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/50">
//                 07 / PrimeShield Services Sidcup
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.84] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
//                 Have a pest
//                 <br />
//                 problem?
//               </h2>

//               <p className="mt-8 max-w-xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 Tell us what you have noticed and where it is happening. You
//                 can also call PrimeShield Services Sidcup directly.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">

//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center justify-center gap-3 bg-[#050505] px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-[#E8E3DE] transition hover:bg-[#E8E3DE] hover:text-black"
//               >
//                 <PhoneCall size={17} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-black transition hover:bg-black hover:text-[#E8E3DE]"
//               >
//                 <Mail size={17} />
//                 Email Us
//               </a>

//             </div>
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">

//             <div className="flex items-center gap-3">
//               <ShieldCheck size={18} />

//               <span className="text-[9px] font-black uppercase tracking-[0.22em]">
//                 PrimeShield Services Sidcup
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
//               <MapPin size={13} />
//               Sidcup & nearby areas
//             </div>

//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;

















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   ChevronDown,
//   ArrowUpRight,
//   User,
//   FileText,
//   Lock,
//   ShieldCheck,
//   Building2,
//   Home,
//   Send,
//   CircleDot,
//   ArrowRight,
//   Check,
// } from "lucide-react";

// const colors = {
//   dark: "#151414",
//   black: "#050505",
//   orange: "#EE6C1A",
//   text: "#E8E3DE",
//   muted: "#B9B2AA",
//   grey: "#8B8B8B",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   // =========================================================
//   // SIDCUP BUSINESS DETAILS
//   // =========================================================

//   const phoneNumber = "07356 295780";
//   const email = "info@primeshieldsidcup.uk";
//   const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
//   const serviceArea = "Sidcup and nearby areas";

//   const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

//   const mapQuery = encodeURIComponent(
//     "29 Station Rd, Sidcup DA15 7DZ, United Kingdom"
//   );

//   const services = [
//     "Rat & Mice Control Sidcup",
//     "Bed Bug Treatment Sidcup",
//     "Cockroach Control Sidcup",
//     "Ant Control Sidcup",
//     "Flea Control Sidcup",
//     "Carpet Beetle Treatment Sidcup",
//     "Carpet Moth Treatment Sidcup",
//     "Wasp Nest Removal Sidcup",
//     "Squirrel Control Sidcup",
//     "Bird & Pigeon Control Sidcup",
//     "Hygiene & Proofing Services Sidcup",
//     "Other Pest Control Enquiry",
//   ];

//   const faqs = [
//     {
//       question: "How do I contact PrimeShield Services Sidcup?",
//       answer:
//         "You can call us on 07356 295780, email us at info@primeshield.uk, or complete the enquiry form on this page. Tell us what you have noticed, where the activity is happening and the type of property involved.",
//     },
//     {
//       question: "What pest problems can I enquire about?",
//       answer:
//         "You can contact us about common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest is involved, simply describe the signs you have noticed.",
//     },
//     {
//       question: "Do you work with homes and businesses?",
//       answer:
//         "Yes. Enquiries can be made for houses, flats, rental properties, offices, shops, workplaces and other commercial premises across Sidcup and nearby areas.",
//     },
//     {
//       question: "What information should I include?",
//       answer:
//         "Useful details include where you have noticed activity, what signs you have seen, when the problem started and the type of property. Your postcode also helps us understand the service location.",
//     },
//     {
//       question: "What if I do not know which pest I have?",
//       answer:
//         "You do not need to identify the pest before getting in touch. Describe what you have seen, heard or found and where it is happening. Those details can help establish the nature of the enquiry.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =========================================================
//   // API CALLING — SAME ENDPOINT / SAME STRUCTURE
//   // =========================================================

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading(
//       "Sending your Sidcup pest control enquiry...",
//       {
//         style: {
//           background: colors.dark,
//           color: colors.text,
//           borderRadius: "3px",
//           border: `1px solid ${colors.orange}`,
//         },
//       }
//     );

//     try {
//       const res = await axios.post(
//         "https://primesheild-backend.vercel.app/api/contact",
//         {
//           ...formData,
//           area: "Sidcup",
//           business: "PrimeShield Services Sidcup",
//           address,
//           phoneNumber,
//           email,
//         }
//       );

//       toast.success(
//         res.data.message ||
//           "Your PrimeShield Services Sidcup enquiry has been submitted successfully.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.dark,
//             color: colors.text,
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: colors.dark,
//             color: colors.text,
//             border: `1px solid ${colors.orange}`,
//             borderRadius: "3px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main
//       className="min-h-screen overflow-x-hidden bg-[#050505] text-[#E8E3DE]"
//       style={{
//         fontFamily: "Arial, Helvetica, sans-serif",
//       }}
//     >
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* =========================================================
//           01 — HERO
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#050505] pt-24 lg:pt-28">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="grid min-h-[720px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">
//             {/* IMAGE */}
//             <div className="relative min-h-[460px] overflow-hidden lg:min-h-[720px]">
//               <img
//                 src="/images/contact-hero1.webp"
//                 alt="PrimeShield Services Sidcup contact"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/15 to-transparent" />

//               <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
//                 <div className="flex h-10 w-10 items-center justify-center bg-[#EE6C1A] text-black">
//                   <CircleDot size={17} />
//                 </div>

//                 <div className="bg-[#050505]/90 px-4 py-3 backdrop-blur-sm">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     PrimeShield Services
//                   </p>

//                   <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9B2AA]">
//                     Sidcup
//                   </p>
//                 </div>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
//                 <div className="max-w-md border-l-2 border-[#EE6C1A] bg-[#050505]/90 p-5 backdrop-blur-md sm:p-7">
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     Local Contact
//                   </p>

//                   <p className="mt-3 text-xl font-black leading-tight text-[#E8E3DE] sm:text-2xl">
//                     Tell us what you have noticed.
//                   </p>

//                   <p className="mt-3 text-xs leading-6 text-[#B9B2AA]">
//                     Start with the details you already have. You do not need
//                     to diagnose the pest problem before contacting us.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* HERO CONTENT */}
//             <div className="relative flex flex-col justify-between bg-[#151414] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
//               <div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                     Contact / Sidcup
//                   </span>

//                   <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B]">
//                     01
//                   </span>
//                 </div>

//                 <div className="mt-16 lg:mt-20">
//                   <p className="max-w-md text-[10px] font-black uppercase tracking-[0.3em] text-[#8B8B8B]">
//                     Professional pest control enquiries
//                   </p>

//                   <h1 className="mt-6 max-w-3xl text-[58px] font-black leading-[0.84] tracking-[-0.065em] sm:text-7xl lg:text-[82px] xl:text-[94px]">
//                     Let's
//                     <br />
//                     <span className="text-[#EE6C1A]">talk.</span>
//                   </h1>

//                   <p className="mt-9 max-w-lg text-sm leading-7 text-[#B9B2AA] sm:text-base">
//                     Contact PrimeShield Services Sidcup about unwanted pest
//                     activity at your property. Give us the location, the signs
//                     you have noticed and any useful details about the problem.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-14 border-t border-[#E8E3DE]/10 pt-7">
//                 <div className="grid gap-7 sm:grid-cols-2">
//                   <a
//                     href={phoneHref}
//                     className="group flex items-start gap-4"
//                   >
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                       <PhoneCall size={17} />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                         Call directly
//                       </p>

//                       <p className="mt-2 text-sm font-black text-[#E8E3DE] transition group-hover:text-[#EE6C1A]">
//                         {phoneNumber}
//                       </p>
//                     </div>
//                   </a>

//                   <div className="flex items-start gap-4">
//                     <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#EE6C1A] text-[#EE6C1A]">
//                       <MapPin size={17} />
//                     </div>

//                     <div>
//                       <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                         Based in
//                       </p>

//                       <p className="mt-2 text-sm font-black leading-5 text-[#E8E3DE]">
//                         Sidcup
//                         <br />
//                         & nearby areas
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute bottom-0 right-0 hidden text-[210px] font-black leading-none tracking-[-0.12em] text-[#E8E3DE]/[0.025] xl:block">
//                 01
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           02 — CONTACT OPTIONS
//           NO WHITE BACKGROUND
//       ========================================================== */}

//       <section className="bg-[#151414]">
//         <div className="mx-auto grid max-w-[1550px] border-t border-[#E8E3DE]/10 md:grid-cols-3">
//           <a
//             href={phoneHref}
//             className="group border-b border-[#E8E3DE]/10 bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:border-b-0 md:border-r md:p-10"
//           >
//             <div className="flex items-center justify-between">
//               <PhoneCall
//                 size={21}
//                 className="text-[#EE6C1A] transition group-hover:text-black"
//               />

//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
//               Phone
//             </p>

//             <p className="mt-3 text-xl font-black">{phoneNumber}</p>

//             <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
//               Speak directly about your pest control enquiry.
//             </p>
//           </a>

//           <a
//             href={`mailto:${email}`}
//             className="group border-b border-[#E8E3DE]/10 bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:border-b-0 md:border-r md:p-10"
//           >
//             <div className="flex items-center justify-between">
//               <Mail
//                 size={21}
//                 className="text-[#EE6C1A] transition group-hover:text-black"
//               />

//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
//               Email
//             </p>

//             <p className="mt-3 break-all text-sm font-black">{email}</p>

//             <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
//               Send the details of your property and pest problem.
//             </p>
//           </a>

//           <div className="group bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:p-10">
//             <div className="flex items-center justify-between">
//               <MapPin
//                 size={21}
//                 className="text-[#EE6C1A] transition group-hover:text-black"
//               />

//               <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B] transition group-hover:text-black/45">
//                 DA15
//               </span>
//             </div>

//             <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
//               Local coverage
//             </p>

//             <p className="mt-3 text-xl font-black">
//               Sidcup
//               <br />
//               and nearby areas
//             </p>

//             <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
//               Professional pest control enquiries for local residential and
//               commercial properties.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           03 — FORM
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 02 / Your enquiry
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
//                 Give us
//                 <br />
//                 the facts.
//               </h2>
//             </div>

//             <div className="flex justify-between gap-8 border-l border-[#EE6C1A] pl-6 lg:pl-10">
//               <p className="max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
//                 Tell us what is happening at the property. Include the pest
//                 service you think you need, where you have noticed activity
//                 and anything else that could help explain the situation.
//               </p>

//               <span className="hidden text-[10px] font-black tracking-[0.2em] text-[#EE6C1A] sm:block">
//                 SIDCUP
//               </span>
//             </div>
//           </div>

//           <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
//             {/* SIDEBAR */}
//             <aside className="bg-[#151414] p-7 sm:p-9 lg:p-10">
//               <div className="flex h-14 w-14 items-center justify-center bg-[#EE6C1A] text-black">
//                 <FileText size={21} />
//               </div>

//               <p className="mt-10 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                 Enquiry checklist
//               </p>

//               <h3 className="mt-4 text-2xl font-black leading-tight">
//                 What should you tell us?
//               </h3>

//               <div className="mt-8 space-y-5">
//                 {[
//                   "Where the pest activity is happening",
//                   "What signs you have noticed",
//                   "When you first noticed the problem",
//                   "Your property postcode",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-5"
//                   >
//                     <Check
//                       size={15}
//                       className="mt-0.5 shrink-0 text-[#EE6C1A]"
//                     />

//                     <p className="text-xs leading-5 text-[#8B8B8B]">
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 border-t border-[#E8E3DE]/10 pt-7">
//                 <div className="flex items-center gap-3">
//                   <Lock size={15} className="text-[#EE6C1A]" />

//                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                     Enquiry details
//                   </span>
//                 </div>
//               </div>
//             </aside>

//             {/* FORM — DARK, NO WHITE */}
//             <div className="bg-[#151414] p-6 text-[#E8E3DE] sm:p-10 lg:p-14">
//               <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#E8E3DE]/10 pb-7 sm:flex-row sm:items-end">
//                 <div>
//                   <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
//                     PrimeShield Services Sidcup
//                   </p>

//                   <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
//                     Contact form
//                   </h3>
//                 </div>

//                 <p className="max-w-xs text-xs leading-5 text-[#8B8B8B]">
//                   Complete the fields below and include the useful details you
//                   already have.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit}>
//                 <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
//                   {/* NAME */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <User size={14} className="text-[#EE6C1A]" />
//                       Full Name
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       required
//                       className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* EMAIL */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <Mail size={14} className="text-[#EE6C1A]" />
//                       Email Address
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       required
//                       className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* PHONE */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <PhoneCall size={14} className="text-[#EE6C1A]" />
//                       Phone Number
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Your phone number"
//                       required
//                       className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* POSTCODE */}
//                   <div>
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <MapPin size={14} className="text-[#EE6C1A]" />
//                       Postcode
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder="e.g. DA15 7DZ"
//                       required
//                       className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm uppercase text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
//                     />
//                   </div>

//                   {/* SERVICE */}
//                   <div className="sm:col-span-2">
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <ShieldCheck size={14} className="text-[#EE6C1A]" />
//                       Service Required
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <div className="relative">
//                       <select
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         required
//                         className="w-full appearance-none border-b border-[#E8E3DE]/15 bg-[#151414] px-0 py-4 pr-10 text-sm text-[#E8E3DE] outline-none transition focus:border-[#EE6C1A]"
//                       >
//                         <option
//                           value=""
//                           className="bg-[#151414] text-[#8B8B8B]"
//                         >
//                           Select the pest service you need...
//                         </option>

//                         {services.map((service, index) => (
//                           <option
//                             key={index}
//                             value={service}
//                             className="bg-[#151414] text-[#E8E3DE]"
//                           >
//                             {service}
//                           </option>
//                         ))}
//                       </select>

//                       <ChevronDown
//                         size={17}
//                         className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#EE6C1A]"
//                       />
//                     </div>
//                   </div>

//                   {/* MESSAGE */}
//                   <div className="sm:col-span-2">
//                     <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
//                       <FileText size={14} className="text-[#EE6C1A]" />
//                       Describe The Problem
//                       <span className="text-[#EE6C1A]">*</span>
//                     </label>

//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows="6"
//                       required
//                       placeholder="What have you noticed? Where is the activity happening? When did you first notice it?"
//                       className="w-full resize-none border border-[#E8E3DE]/10 bg-[#050505] px-4 py-4 text-sm leading-7 text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-9 flex flex-col justify-between gap-6 border-t border-[#E8E3DE]/10 pt-7 sm:flex-row sm:items-center">
//                   <p className="max-w-sm text-[10px] leading-5 text-[#8B8B8B]">
//                     Providing clear information helps give useful context to
//                     your pest control enquiry.
//                   </p>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="inline-flex items-center justify-center gap-3 bg-[#EE6C1A] px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#E8E3DE] disabled:cursor-not-allowed disabled:opacity-60"
//                   >
//                     {loading ? (
//                       "Sending..."
//                     ) : (
//                       <>
//                         Send Enquiry
//                         <Send size={15} />
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           04 — PROPERTY TYPES
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 03 / Property type
//               </p>

//               <h2 className="mt-6 max-w-md text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl">
//                 Different
//                 <br />
//                 properties.
//                 <br />
//                 <span className="text-[#EE6C1A]">Same starting point.</span>
//               </h2>
//             </div>

//             <div className="grid gap-px bg-[#E8E3DE]/10 sm:grid-cols-2">
//               <div className="group bg-[#151414] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//                 <div className="flex items-center justify-between">
//                   <Home
//                     size={24}
//                     className="text-[#EE6C1A] transition group-hover:text-black"
//                   />

//                   <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B] transition group-hover:text-black/40">
//                     01
//                   </span>
//                 </div>

//                 <h3 className="mt-20 text-2xl font-black">Homes & Flats</h3>

//                 <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/60">
//                   Pest control enquiries for houses, flats, rental properties
//                   and other residential spaces.
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A] transition group-hover:text-black">
//                   Residential
//                   <ArrowRight size={14} />
//                 </div>
//               </div>

//               <div className="group bg-[#151414] p-8 transition hover:bg-[#E8E3DE] hover:text-black sm:p-10">
//                 <div className="flex items-center justify-between">
//                   <Building2
//                     size={24}
//                     className="text-[#EE6C1A] transition group-hover:text-black"
//                   />

//                   <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B] transition group-hover:text-black/40">
//                     02
//                   </span>
//                 </div>

//                 <h3 className="mt-20 text-2xl font-black">
//                   Local Businesses
//                 </h3>

//                 <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/55">
//                   Enquiries from offices, shops, workplaces and other
//                   commercial premises.
//                 </p>

//                 <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A] transition group-hover:text-black">
//                   Commercial
//                   <ArrowRight size={14} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           05 — MAP
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 text-[#E8E3DE] sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
//             {/* ADDRESS */}
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 04 / Find us
//               </p>

//               <h2 className="mt-7 text-5xl font-black leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
//                 Local to
//                 <br />
//                 <span className="text-[#8B8B8B]">Sidcup.</span>
//               </h2>

//               <p className="mt-8 max-w-md text-sm leading-7 text-[#8B8B8B]">
//                 PrimeShield Services Sidcup is based on Station Road and
//                 provides pest control enquiries for Sidcup and nearby areas.
//               </p>

//               <div className="mt-12 border-t border-[#E8E3DE]/10 pt-8">
//                 <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B]">
//                   Service address
//                 </p>

//                 <div className="mt-5 flex gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                     <MapPin size={18} />
//                   </div>

//                   <p className="max-w-sm text-lg font-black leading-7 text-[#E8E3DE]">
//                     {address}
//                   </p>
//                 </div>

//                 <div className="mt-8 grid gap-5 sm:grid-cols-2">
//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                       Coverage
//                     </p>

//                     <p className="mt-2 text-sm font-black text-[#E8E3DE]">
//                       {serviceArea}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
//                       Phone
//                     </p>

//                     <a
//                       href={phoneHref}
//                       className="mt-2 inline-block text-sm font-black text-[#E8E3DE] transition hover:text-[#EE6C1A]"
//                     >
//                       {phoneNumber}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="relative">
//               <div className="absolute -left-3 -top-3 z-10 h-20 w-20 border-l border-t border-[#EE6C1A]" />

//               <div className="relative bg-[#151414] p-3">
//                 <div className="overflow-hidden border border-[#E8E3DE]/10">
//                   <iframe
//                     title="PrimeShield Services Sidcup map"
//                     src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
//                     width="100%"
//                     height="500"
//                     style={{
//                       border: 0,
//                       display: "block",
//                       filter: "grayscale(100%) contrast(1.05)",
//                     }}
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     allowFullScreen
//                   />

//                   <div className="absolute bottom-7 left-7 right-7 bg-[#050505]/95 p-5 backdrop-blur-md sm:left-9 sm:right-9">
//                     <div className="flex items-start gap-4">
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
//                         <MapPin size={17} />
//                       </div>

//                       <div>
//                         <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
//                           PrimeShield Services Sidcup
//                         </p>

//                         <p className="mt-2 text-xs font-bold leading-5 text-[#B9B2AA]">
//                           29 Station Rd, Sidcup
//                           <br />
//                           DA15 7DZ, United Kingdom
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-3 h-1 w-full bg-[#EE6C1A]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           06 — HOW TO START
//       ========================================================== */}

//       <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
//           <div className="mb-14 flex flex-col justify-between gap-7 border-b border-[#E8E3DE]/10 pb-10 lg:flex-row lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 05 / Starting point
//               </p>

//               <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
//                 You bring the
//                 <br />
//                 <span className="text-[#EE6C1A]">information.</span>
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-[#8B8B8B]">
//               A pest control enquiry can begin with something as simple as
//               unusual sounds, visible insects, damage or activity in a
//               particular area.
//             </p>
//           </div>

//           <div className="grid gap-px bg-[#E8E3DE]/10 lg:grid-cols-3">
//             <div className="group bg-[#151414] p-8 transition hover:bg-[#050505] sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
//                 01
//               </span>

//               <h3 className="mt-16 text-2xl font-black">Describe</h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
//                 Tell us what you have seen, heard or found at the property.
//               </p>
//             </div>

//             <div className="group bg-[#151414] p-8 transition hover:bg-[#050505] sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
//                 02
//               </span>

//               <h3 className="mt-16 text-2xl font-black">Locate</h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
//                 Explain where the activity is happening and provide the
//                 property postcode.
//               </p>
//             </div>

//             <div className="group bg-[#151414] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
//               <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A] transition group-hover:text-black">
//                 03
//               </span>

//               <h3 className="mt-16 text-2xl font-black">Contact</h3>

//               <p className="mt-4 text-sm leading-7 text-[#8B8B8B] transition group-hover:text-black/55">
//                 Send the enquiry or call PrimeShield Services Sidcup directly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           07 — FAQ
//       ========================================================== */}

//       <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
//         <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
//           <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
//                 06 / Questions
//               </p>

//               <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl">
//                 Before you
//                 <br />
//                 <span className="text-[#EE6C1A]">contact us.</span>
//               </h2>

//               <p className="mt-8 max-w-sm text-sm leading-7 text-[#8B8B8B]">
//                 A few common questions about contacting PrimeShield Services
//                 Sidcup.
//               </p>
//             </div>

//             <div className="border-t border-[#E8E3DE]/10">
//               {faqs.map((faq, index) => {
//                 const isOpen = activeFaq === index;

//                 return (
//                   <div
//                     key={index}
//                     className="border-b border-[#E8E3DE]/10"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => toggleFaq(index)}
//                       className="flex w-full items-center gap-5 py-7 text-left sm:py-8"
//                     >
//                       <span className="text-[9px] font-black tracking-[0.2em] text-[#EE6C1A]">
//                         0{index + 1}
//                       </span>

//                       <span className="flex-1 text-sm font-black text-[#E8E3DE] sm:text-base">
//                         {faq.question}
//                       </span>

//                       <span
//                         className={`flex h-9 w-9 shrink-0 items-center justify-center border transition ${
//                           isOpen
//                             ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
//                             : "border-[#E8E3DE]/10 text-[#EE6C1A]"
//                         }`}
//                       >
//                         <ChevronDown
//                           size={16}
//                           className={`transition-transform duration-300 ${
//                             isOpen ? "rotate-180" : ""
//                           }`}
//                         />
//                       </span>
//                     </button>

//                     <div
//                       className={`grid transition-all duration-300 ${
//                         isOpen
//                           ? "grid-rows-[1fr] opacity-100"
//                           : "grid-rows-[0fr] opacity-0"
//                       }`}
//                     >
//                       <div className="overflow-hidden">
//                         <div className="pb-8 pl-9 pr-8 sm:pl-12">
//                           <p className="max-w-2xl text-sm leading-7 text-[#8B8B8B]">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           08 — FINAL CTA
//       ========================================================== */}

//       <section className="relative overflow-hidden bg-[#EE6C1A] text-black">
//         <div className="pointer-events-none absolute right-[-50px] top-[-45px] text-[220px] font-black leading-none tracking-[-0.13em] opacity-[0.08] sm:text-[300px]">
//           PS
//         </div>

//         <div className="relative mx-auto max-w-[1550px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16">
//           <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
//             <div>
//               <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/50">
//                 07 / PrimeShield Services Sidcup
//               </p>

//               <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.84] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
//                 Have a pest
//                 <br />
//                 problem?
//               </h2>

//               <p className="mt-8 max-w-xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
//                 Tell us what you have noticed and where it is happening. You
//                 can also call PrimeShield Services Sidcup directly.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3">
//               <a
//                 href={phoneHref}
//                 className="inline-flex items-center justify-center gap-3 bg-[#050505] px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-[#E8E3DE] transition hover:bg-[#E8E3DE] hover:text-black"
//               >
//                 <PhoneCall size={17} />
//                 Call {phoneNumber}
//               </a>

//               <a
//                 href={`mailto:${email}`}
//                 className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-black transition hover:bg-black hover:text-[#E8E3DE]"
//               >
//                 <Mail size={17} />
//                 Email Us
//               </a>
//             </div>
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <ShieldCheck size={18} />

//               <span className="text-[9px] font-black uppercase tracking-[0.22em]">
//                 PrimeShield Services Sidcup
//               </span>
//             </div>

//             <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
//               <MapPin size={13} />
//               Sidcup & nearby areas
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;


























import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  PhoneCall,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  User,
  FileText,
  Lock,
  ShieldCheck,
  Building2,
  Home,
  Send,
  CircleDot,
  ArrowRight,
  Check,
} from "lucide-react";

const colors = {
  dark: "#151414",
  black: "#050505",
  orange: "#EE6C1A",
  text: "#E8E3DE",
  muted: "#B9B2AA",
  grey: "#8B8B8B",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // =========================================================
  // SIDCUP BUSINESS DETAILS
  // =========================================================

  const phoneNumber = "07356 295780";
  const businessEmail = "info@primeshieldsidcup.uk";
  const address = "29 Station Rd, Sidcup DA15 7DZ, United Kingdom";
  const serviceArea = "Sidcup and nearby areas";

  const phoneHref = `tel:${phoneNumber.replace(/\s/g, "")}`;

  const mapQuery = encodeURIComponent(
    "29 Station Rd, Sidcup DA15 7DZ, United Kingdom"
  );

  const services = [
    "Rat & Mice Control Sidcup",
    "Bed Bug Treatment Sidcup",
    "Cockroach Control Sidcup",
    "Ant Control Sidcup",
    "Flea Control Sidcup",
    "Carpet Beetle Treatment Sidcup",
    "Carpet Moth Treatment Sidcup",
    "Wasp Nest Removal Sidcup",
    "Squirrel Control Sidcup",
    "Bird & Pigeon Control Sidcup",
    "Hygiene & Proofing Services Sidcup",
    "Other Pest Control Enquiry",
  ];

  const faqs = [
    {
      question: "How do I contact PrimeShield Services Sidcup?",
      answer:
        "You can call us on 07356 295780, email us at info@primeshieldsidcup.uk, or complete the enquiry form on this page. Tell us what you have noticed, where the activity is happening and the type of property involved.",
    },
    {
      question: "What pest problems can I enquire about?",
      answer:
        "You can contact us about common pest issues including rats, mice, bed bugs, cockroaches, ants, fleas, carpet beetles, carpet moths, wasps, squirrels and birds. If you are unsure which pest is involved, simply describe the signs you have noticed.",
    },
    {
      question: "Do you work with homes and businesses?",
      answer:
        "Yes. Enquiries can be made for houses, flats, rental properties, offices, shops, workplaces and other commercial premises across Sidcup and nearby areas.",
    },
    {
      question: "What information should I include?",
      answer:
        "Useful details include where you have noticed activity, what signs you have seen, when the problem started and the type of property. Your postcode also helps us understand the service location.",
    },
    {
      question: "What if I do not know which pest I have?",
      answer:
        "You do not need to identify the pest before getting in touch. Describe what you have seen, heard or found and where it is happening. Those details can help establish the nature of the enquiry.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // API CALLING — SAME ENDPOINT / SAME STRUCTURE
  // CLIENT EMAIL IS KEPT AS "email"
  // BUSINESS EMAIL IS SENT AS "businessEmail"
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading(
      "Sending your Sidcup pest control enquiry...",
      {
        style: {
          background: colors.dark,
          color: colors.text,
          borderRadius: "3px",
          border: `1px solid ${colors.orange}`,
        },
      }
    );

    try {
      const res = await axios.post(
        "https://primeshield-sidcup-backend.vercel.app/api/contact",
        {
          ...formData,

          // Business information
          area: "Sidcup",
          business: "PrimeShield Services Sidcup",
          address,
          phoneNumber,

          // IMPORTANT:
          // Do NOT use "email" here.
          // formData.email must remain the client's email.
          businessEmail,
        }
      );

      toast.success(
        res.data.message ||
          "Your PrimeShield Services Sidcup enquiry has been submitted successfully.",
        {
          id: loaderToast,
          duration: 4000,
          icon: "🛡️",
          style: {
            background: colors.dark,
            color: colors.text,
            border: `1px solid ${colors.orange}`,
            borderRadius: "3px",
          },
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: colors.dark,
            color: colors.text,
            border: `1px solid ${colors.orange}`,
            borderRadius: "3px",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#050505] text-[#E8E3DE]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* =========================================================
          01 — HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#050505] pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid min-h-[720px] gap-0 lg:grid-cols-[1.05fr_0.95fr]">

            {/* IMAGE */}
            <div className="relative min-h-[460px] overflow-hidden lg:min-h-[720px]">
              <img
                src="/images/contact-hero1.webp"
                alt="PrimeShield Services Sidcup contact"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/15 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
                <div className="flex h-10 w-10 items-center justify-center bg-[#EE6C1A] text-black">
                  <CircleDot size={17} />
                </div>

                <div className="bg-[#050505]/90 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                    PrimeShield Services
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B9B2AA]">
                    Sidcup
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
                <div className="max-w-md border-l-2 border-[#EE6C1A] bg-[#050505]/90 p-5 backdrop-blur-md sm:p-7">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                    Local Contact
                  </p>

                  <p className="mt-3 text-xl font-black leading-tight text-[#E8E3DE] sm:text-2xl">
                    Tell us what you have noticed.
                  </p>

                  <p className="mt-3 text-xs leading-6 text-[#B9B2AA]">
                    Start with the details you already have. You do not need
                    to diagnose the pest problem before contacting us.
                  </p>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="relative flex flex-col justify-between bg-[#151414] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                    Contact / Sidcup
                  </span>

                  <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B]">
                    01
                  </span>
                </div>

                <div className="mt-16 lg:mt-20">
                  <p className="max-w-md text-[10px] font-black uppercase tracking-[0.3em] text-[#8B8B8B]">
                    Professional pest control enquiries
                  </p>

                  <h1 className="mt-6 max-w-3xl text-[58px] font-black leading-[0.84] tracking-[-0.065em] sm:text-7xl lg:text-[82px] xl:text-[94px]">
                    Let's
                    <br />
                    <span className="text-[#EE6C1A]">talk.</span>
                  </h1>

                  <p className="mt-9 max-w-lg text-sm leading-7 text-[#B9B2AA] sm:text-base">
                    Contact PrimeShield Services Sidcup about unwanted pest
                    activity at your property. Give us the location, the signs
                    you have noticed and any useful details about the problem.
                  </p>
                </div>
              </div>

              <div className="mt-14 border-t border-[#E8E3DE]/10 pt-7">
                <div className="grid gap-7 sm:grid-cols-2">

                  <a
                    href={phoneHref}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
                      <PhoneCall size={17} />
                    </div>

                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
                        Call directly
                      </p>

                      <p className="mt-2 text-sm font-black text-[#E8E3DE] transition group-hover:text-[#EE6C1A]">
                        {phoneNumber}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#EE6C1A] text-[#EE6C1A]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
                        Based in
                      </p>

                      <p className="mt-2 text-sm font-black leading-5 text-[#E8E3DE]">
                        Sidcup
                        <br />
                        & nearby areas
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 hidden text-[210px] font-black leading-none tracking-[-0.12em] text-[#E8E3DE]/[0.025] xl:block">
                01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — CONTACT OPTIONS
      ========================================================== */}

      <section className="bg-[#151414]">
        <div className="mx-auto grid max-w-[1550px] border-t border-[#E8E3DE]/10 md:grid-cols-3">

          {/* PHONE */}
          <a
            href={phoneHref}
            className="group border-b border-[#E8E3DE]/10 bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:border-b-0 md:border-r md:p-10"
          >
            <div className="flex items-center justify-between">
              <PhoneCall
                size={21}
                className="text-[#EE6C1A] transition group-hover:text-black"
              />

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
              Phone
            </p>

            <p className="mt-3 text-xl font-black">{phoneNumber}</p>

            <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
              Speak directly about your pest control enquiry.
            </p>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${businessEmail}`}
            className="group border-b border-[#E8E3DE]/10 bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:border-b-0 md:border-r md:p-10"
          >
            <div className="flex items-center justify-between">
              <Mail
                size={21}
                className="text-[#EE6C1A] transition group-hover:text-black"
              />

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
              Email
            </p>

            <p className="mt-3 break-all text-sm font-black">
              {businessEmail}
            </p>

            <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
              Send the details of your property and pest problem.
            </p>
          </a>

          {/* LOCATION */}
          <div className="group bg-[#151414] p-7 transition hover:bg-[#EE6C1A] hover:text-black md:p-10">
            <div className="flex items-center justify-between">
              <MapPin
                size={21}
                className="text-[#EE6C1A] transition group-hover:text-black"
              />

              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B] transition group-hover:text-black/45">
                DA15
              </span>
            </div>

            <p className="mt-14 text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B] transition group-hover:text-black/50">
              Local coverage
            </p>

            <p className="mt-3 text-xl font-black">
              Sidcup
              <br />
              and nearby areas
            </p>

            <p className="mt-3 text-xs leading-5 text-[#8B8B8B] transition group-hover:text-black/55">
              Professional pest control enquiries for local residential and
              commercial properties.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          03 — FORM
      ========================================================== */}

      <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                02 / Your enquiry
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Give us
                <br />
                the facts.
              </h2>
            </div>

            <div className="flex justify-between gap-8 border-l border-[#EE6C1A] pl-6 lg:pl-10">
              <p className="max-w-xl text-sm leading-7 text-[#8B8B8B] sm:text-base">
                Tell us what is happening at the property. Include the pest
                service you think you need, where you have noticed activity
                and anything else that could help explain the situation.
              </p>

              <span className="hidden text-[10px] font-black tracking-[0.2em] text-[#EE6C1A] sm:block">
                SIDCUP
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">

            {/* SIDEBAR */}
            <aside className="bg-[#151414] p-7 sm:p-9 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center bg-[#EE6C1A] text-black">
                <FileText size={21} />
              </div>

              <p className="mt-10 text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                Enquiry checklist
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight">
                What should you tell us?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Where the pest activity is happening",
                  "What signs you have noticed",
                  "When you first noticed the problem",
                  "Your property postcode",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-t border-[#E8E3DE]/10 pt-5"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-[#EE6C1A]"
                    />

                    <p className="text-xs leading-5 text-[#8B8B8B]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-[#E8E3DE]/10 pt-7">
                <div className="flex items-center gap-3">
                  <Lock size={15} className="text-[#EE6C1A]" />

                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                    Enquiry details
                  </span>
                </div>
              </div>
            </aside>

            {/* FORM */}
            <div className="bg-[#151414] p-6 text-[#E8E3DE] sm:p-10 lg:p-14">

              <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#E8E3DE]/10 pb-7 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#EE6C1A]">
                    PrimeShield Services Sidcup
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                    Contact form
                  </h3>
                </div>

                <p className="max-w-xs text-xs leading-5 text-[#8B8B8B]">
                  Complete the fields below and include the useful details you
                  already have.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">

                  {/* NAME */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <User size={14} className="text-[#EE6C1A]" />
                      Full Name
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <Mail size={14} className="text-[#EE6C1A]" />
                      Email Address
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <PhoneCall size={14} className="text-[#EE6C1A]" />
                      Phone Number
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
                    />
                  </div>

                  {/* POSTCODE */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <MapPin size={14} className="text-[#EE6C1A]" />
                      Postcode
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. DA15 7DZ"
                      required
                      className="w-full border-b border-[#E8E3DE]/15 bg-transparent px-0 py-4 text-sm uppercase text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="sm:col-span-2">
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <ShieldCheck size={14} className="text-[#EE6C1A]" />
                      Service Required
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none border-b border-[#E8E3DE]/15 bg-[#151414] px-0 py-4 pr-10 text-sm text-[#E8E3DE] outline-none transition focus:border-[#EE6C1A]"
                      >
                        <option
                          value=""
                          className="bg-[#151414] text-[#8B8B8B]"
                        >
                          Select the pest service you need...
                        </option>

                        {services.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            className="bg-[#151414] text-[#E8E3DE]"
                          >
                            {service}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#EE6C1A]"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="sm:col-span-2">
                    <label className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8B8B8B]">
                      <FileText size={14} className="text-[#EE6C1A]" />
                      Describe The Problem
                      <span className="text-[#EE6C1A]">*</span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      required
                      placeholder="What have you noticed? Where is the activity happening? When did you first notice it?"
                      className="w-full resize-none border border-[#E8E3DE]/10 bg-[#050505] px-4 py-4 text-sm leading-7 text-[#E8E3DE] outline-none transition placeholder:text-[#8B8B8B] focus:border-[#EE6C1A]"
                    />
                  </div>
                </div>

                <div className="mt-9 flex flex-col justify-between gap-6 border-t border-[#E8E3DE]/10 pt-7 sm:flex-row sm:items-center">
                  <p className="max-w-sm text-[10px] leading-5 text-[#8B8B8B]">
                    Providing clear information helps give useful context to
                    your pest control enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-3 bg-[#EE6C1A] px-8 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#E8E3DE] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — PROPERTY TYPES
      ========================================================== */}

      <section className="bg-[#151414] py-24 sm:py-32">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                03 / Property type
              </p>

              <h2 className="mt-6 max-w-md text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl">
                Different
                <br />
                properties.
                <br />
                <span className="text-[#EE6C1A]">
                  Same starting point.
                </span>
              </h2>
            </div>

            <div className="grid gap-px bg-[#E8E3DE]/10 sm:grid-cols-2">

              <div className="group bg-[#151414] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
                <div className="flex items-center justify-between">
                  <Home
                    size={24}
                    className="text-[#EE6C1A] transition group-hover:text-black"
                  />

                  <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B] transition group-hover:text-black/40">
                    01
                  </span>
                </div>

                <h3 className="mt-20 text-2xl font-black">
                  Homes & Flats
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/60">
                  Pest control enquiries for houses, flats, rental properties
                  and other residential spaces.
                </p>

                <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A] transition group-hover:text-black">
                  Residential
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className="group bg-[#151414] p-8 transition hover:bg-[#E8E3DE] hover:text-black sm:p-10">
                <div className="flex items-center justify-between">
                  <Building2
                    size={24}
                    className="text-[#EE6C1A] transition group-hover:text-black"
                  />

                  <span className="text-[9px] font-black tracking-[0.2em] text-[#8B8B8B] transition group-hover:text-black/40">
                    02
                  </span>
                </div>

                <h3 className="mt-20 text-2xl font-black">
                  Local Businesses
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8B8B8B] transition group-hover:text-black/55">
                  Enquiries from offices, shops, workplaces and other
                  commercial premises.
                </p>

                <div className="mt-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#EE6C1A] transition group-hover:text-black">
                  Commercial
                  <ArrowRight size={14} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — MAP
      ========================================================== */}

      <section className="bg-[#050505] py-24 text-[#E8E3DE] sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* ADDRESS */}
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                04 / Find us
              </p>

              <h2 className="mt-7 text-5xl font-black leading-[0.86] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Local to
                <br />
                <span className="text-[#8B8B8B]">Sidcup.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-[#8B8B8B]">
                PrimeShield Services Sidcup is based on Station Road and
                provides pest control enquiries for Sidcup and nearby areas.
              </p>

              <div className="mt-12 border-t border-[#E8E3DE]/10 pt-8">
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#8B8B8B]">
                  Service address
                </p>

                <div className="mt-5 flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
                    <MapPin size={18} />
                  </div>

                  <p className="max-w-sm text-lg font-black leading-7 text-[#E8E3DE]">
                    {address}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
                      Coverage
                    </p>

                    <p className="mt-2 text-sm font-black text-[#E8E3DE]">
                      {serviceArea}
                    </p>
                  </div>

                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#8B8B8B]">
                      Phone
                    </p>

                    <a
                      href={phoneHref}
                      className="mt-2 inline-block text-sm font-black text-[#E8E3DE] transition hover:text-[#EE6C1A]"
                    >
                      {phoneNumber}
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="relative">
              <div className="absolute -left-3 -top-3 z-10 h-20 w-20 border-l border-t border-[#EE6C1A]" />

              <div className="relative bg-[#151414] p-3">
                <div className="overflow-hidden border border-[#E8E3DE]/10">

                  <iframe
                    title="PrimeShield Services Sidcup map"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    width="100%"
                    height="500"
                    style={{
                      border: 0,
                      display: "block",
                      filter: "grayscale(100%) contrast(1.05)",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                  <div className="absolute bottom-7 left-7 right-7 bg-[#050505]/95 p-5 backdrop-blur-md sm:left-9 sm:right-9">
                    <div className="flex items-start gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#EE6C1A] text-black">
                        <MapPin size={17} />
                      </div>

                      <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#EE6C1A]">
                          PrimeShield Services Sidcup
                        </p>

                        <p className="mt-2 text-xs font-bold leading-5 text-[#B9B2AA]">
                          29 Station Rd, Sidcup
                          <br />
                          DA15 7DZ, United Kingdom
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-3 h-1 w-full bg-[#EE6C1A]" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          06 — HOW TO START
      ========================================================== */}

      <section className="bg-[#151414] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1550px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="mb-14 flex flex-col justify-between gap-7 border-b border-[#E8E3DE]/10 pb-10 lg:flex-row lg:items-end">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                05 / Starting point
              </p>

              <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                You bring the
                <br />
                <span className="text-[#EE6C1A]">
                  information.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8B8B8B]">
              A pest control enquiry can begin with something as simple as
              unusual sounds, visible insects, damage or activity in a
              particular area.
            </p>

          </div>

          <div className="grid gap-px bg-[#E8E3DE]/10 lg:grid-cols-3">

            <div className="group bg-[#151414] p-8 transition hover:bg-[#050505] sm:p-10">
              <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
                01
              </span>

              <h3 className="mt-16 text-2xl font-black">
                Describe
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
                Tell us what you have seen, heard or found at the property.
              </p>
            </div>

            <div className="group bg-[#151414] p-8 transition hover:bg-[#050505] sm:p-10">
              <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A]">
                02
              </span>

              <h3 className="mt-16 text-2xl font-black">
                Locate
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8B8B8B]">
                Explain where the activity is happening and provide the
                property postcode.
              </p>
            </div>

            <div className="group bg-[#151414] p-8 transition hover:bg-[#EE6C1A] hover:text-black sm:p-10">
              <span className="text-6xl font-black tracking-[-0.07em] text-[#EE6C1A] transition group-hover:text-black">
                03
              </span>

              <h3 className="mt-16 text-2xl font-black">
                Contact
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#8B8B8B] transition group-hover:text-black/55">
                Send the enquiry or call PrimeShield Services Sidcup directly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          07 — FAQ
      ========================================================== */}

      <section className="bg-[#050505] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EE6C1A]">
                06 / Questions
              </p>

              <h2 className="mt-6 text-5xl font-black leading-[0.87] tracking-[-0.06em] sm:text-6xl">
                Before you
                <br />
                <span className="text-[#EE6C1A]">
                  contact us.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-[#8B8B8B]">
                A few common questions about contacting PrimeShield Services
                Sidcup.
              </p>
            </div>

            <div className="border-t border-[#E8E3DE]/10">

              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={index}
                    className="border-b border-[#E8E3DE]/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center gap-5 py-7 text-left sm:py-8"
                    >
                      <span className="text-[9px] font-black tracking-[0.2em] text-[#EE6C1A]">
                        0{index + 1}
                      </span>

                      <span className="flex-1 text-sm font-black text-[#E8E3DE] sm:text-base">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border transition ${
                          isOpen
                            ? "border-[#EE6C1A] bg-[#EE6C1A] text-black"
                            : "border-[#E8E3DE]/10 text-[#EE6C1A]"
                        }`}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pl-9 pr-8 sm:pl-12">
                          <p className="max-w-2xl text-sm leading-7 text-[#8B8B8B]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#EE6C1A] text-black">

        <div className="pointer-events-none absolute right-[-50px] top-[-45px] text-[220px] font-black leading-none tracking-[-0.13em] opacity-[0.08] sm:text-[300px]">
          PS
        </div>

        <div className="relative mx-auto max-w-[1550px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 xl:px-16">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-black/50">
                07 / PrimeShield Services Sidcup
              </p>

              <h2 className="mt-7 max-w-5xl text-5xl font-black leading-[0.84] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
                Have a pest
                <br />
                problem?
              </h2>

              <p className="mt-8 max-w-xl text-sm font-semibold leading-7 text-black/55 sm:text-base">
                Tell us what you have noticed and where it is happening. You
                can also call PrimeShield Services Sidcup directly.
              </p>
            </div>

            <div className="flex flex-col gap-3">

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-[#050505] px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-[#E8E3DE] transition hover:bg-[#E8E3DE] hover:text-black"
              >
                <PhoneCall size={17} />
                Call {phoneNumber}
              </a>

              <a
                href={`mailto:${businessEmail}`}
                className="inline-flex items-center justify-center gap-3 border-2 border-black px-8 py-5 text-xs font-black uppercase tracking-[0.17em] text-black transition hover:bg-black hover:text-[#E8E3DE]"
              >
                <Mail size={17} />
                Email Us
              </a>

            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 sm:flex-row sm:items-center">

            <div className="flex items-center gap-3">
              <ShieldCheck size={18} />

              <span className="text-[9px] font-black uppercase tracking-[0.22em]">
                PrimeShield Services Sidcup
              </span>
            </div>

            <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.18em] text-black/50">
              <MapPin size={13} />
              Sidcup & nearby areas
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;