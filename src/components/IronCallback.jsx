










import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const brandColors = {
  navyDark: "#020b14",
  panelBlue: "#031E39",
  tealAccent: "#4FA3A5",
  mintLight: "#76C7C0",
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post("https://primesheild-backend.vercel.app/api/callback", formData),
      {
        loading: "Securing connection grid...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request queued! A technician will call shortly. 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Transmission failed. Try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "16px",
          padding: "12px 20px",
        },
        success: {
          style: {
            background: "#031E39",
            color: "#FFFFFF",
            border: `1px solid ${brandColors.mintLight}`,
          },
        },
        error: {
          style: {
            background: "#4c0519",
            color: "#fecdd3",
            border: "1px solid #f43f5e",
          },
        },
      }
    );
  };

  return (
    <section className="bg-[#020b14] py-20 md:py-28 relative overflow-hidden z-30 border-t border-white/5">
      <div className="absolute top-[50%] left-[-20%] w-[360px] h-[360px] rounded-full bg-[#4FA3A5]/5 blur-3xl pointer-events-none" />

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
            background: "#031E39",
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
          loading: {
            style: {
              background: "#031E39",
              color: "#FFFFFF",
              border: `1px solid ${brandColors.tealAccent}`,
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-left animate-[fadeUp_0.7s_ease-out_both]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] block"></span>
                <span className="text-[#76C7C0] text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] block">
                  Corporate Overview
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
                Defending Sidcup Properties <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0]">
                  With Scientific Precision
                </span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Pesrid Services Sidcup delivers advanced, high-tier bio-security
              and pest eradication models engineered for both industrial
              compounds and residential sectors. Our local emergency strike teams
              operate with absolute anonymity and unmatched speed.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed hidden sm:block border-l-2 border-[#4FA3A5]/30 pl-4 py-1">
              From severe rodent extractions to complex insect structural
              treatment cycles, we guarantee absolute environmental safety under
              strict regulatory compliance frameworks across London.
            </p>
          </div>

          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto bg-gradient-to-b from-[#031E39]/70 to-[#031E39]/20 rounded-3xl border border-white/10 p-8 sm:p-12 shadow-xl animate-[fadeUp_0.7s_ease-out_0.15s_both]">
            <div className="text-left mb-6 border-b border-white/5 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Request Field Deployment
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Submit parameters for an immediate diagnostic call
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                  Client Identity Name <span className="text-[#76C7C0]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-colors duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                    Sidcup Postcode <span className="text-[#76C7C0]">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. DA14, DA15"
                    required
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:border-[#4FA3A5] focus:bg-white/[0.05] focus:ring-1 focus:ring-[#4FA3A5]/20 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-300">
                    Secure Contact Line <span className="text-[#76C7C0]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Best phone number"
                    required
                    className={`w-full bg-white/[0.02] border rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 font-medium outline-none focus:bg-white/[0.05] focus:ring-1 transition-colors duration-200 ${
                      phoneError
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-white/10 focus:border-[#4FA3A5] focus:ring-[#4FA3A5]/20"
                    }`}
                  />
                </div>
              </div>

              {phoneError && (
                <p className="text-red-400 text-xs font-semibold mt-1 flex items-center gap-1.5">
                  <span>⚠️</span> {phoneError}
                </p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-[#020b14] py-4 text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-transform duration-200 cursor-pointer disabled:opacity-50 font-sans shadow-lg shadow-[#4FA3A5]/20 active:scale-[0.98] hover:-translate-y-0.5"
                >
                  {loading ? "TRANSMITTING DATA..." : "AUTHORISE CALL BACK"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}