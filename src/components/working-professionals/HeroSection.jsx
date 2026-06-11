"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {

  const [formData, setFormData] = useState({
    full_name: "",
    email_id: "",
    whatsapp_number: "",
    year_of_experience: "",
    current_role: "",

    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",

    landing_page: "",
    page_url: "",
    form_type: "Professionals Landing Page",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFormData((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      gclid: params.get("gclid") || "",

      page_url: window.location.href,
      landing_page: window.location.pathname,
      form_type: "Professionals Landing Page",
    }));
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    if (!formData.email_id.trim()) {
      newErrors.email_id = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_id)
    ) {
      newErrors.email_id = "Enter a valid email";
    }

    if (!formData.whatsapp_number.trim()) {
      newErrors.whatsapp_number = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsapp_number)) {
      newErrors.whatsapp_number = "Enter a valid 10 digit number";
    }

    if (!formData.year_of_experience) {
      newErrors.year_of_experience = "Please select your experience";
    }

    if (!formData.current_role) {
      newErrors.current_role = "Please select role";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/professional-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setFormData((prev) => ({
          ...prev,

          full_name: "",
          email_id: "",
          whatsapp_number: "",
          year_of_experience: "",
          current_role: "",
          
        }));

        setErrors({});
        setSuccessMessage(
          "Thank you!"
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }

      setLoading(false);

      console.log(result);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[700px] lg:pl-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D8EAE2] rounded-full px-3 py-2 mb-6 w-full md:w-auto">
            <span className="w-2 h-2 bg-[#08A85B] rounded-full"></span>
            <span className="text-[#08A85B] text-[11px] md:text-sm font-bold">
              AI/ML Career Transition · For Working Professionals
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[900px] text-[30px] md:text-[58px] lg:text-[62px] font-medium leading-[1.05] tracking-[-0.02em] mb-5">
            <span className="text-[#CF2030] font-semibold">Upskill With AI</span>
            <span className="text-[#0B132B]">
              {" "}While You Work. Unlock Higher-Paying Opportunities.
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#475467] text-[15px] md:text-[15px] leading-7 md:leading-relaxed mb-8 max-w-[600px]">
            This isn't another AI course. It's an artificial intelligence course for working professionals which helps you build on your existing experience, develop in-demand AI skills, and transition into high-growth AI/ML roles with significantly higher earning potential.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl px-3 py-3 flex flex-col items-center justify-center text-center min-h-[88px] gap-1 md:flex-row md:rounded-full md:px-5 md:py-3 md:min-h-0 md:text-left md:gap-2">
              <span className="text-[#4F46E5] font-bold text-sm md:text-base">650+</span>
              <span className="text-[#1a1a1a] font-bold">Students Placed</span>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl px-3 py-3 flex flex-col items-center justify-center text-center min-h-[88px] gap-1 md:flex-row md:rounded-full md:px-5 md:py-3 md:min-h-0 md:text-left md:gap-2">
              <span className="text-[#4F46E5] font-bold text-sm md:text-base">₹18L</span>
              <span className="text-[#1a1a1a] font-bold">Avg Salary Jump</span>
            </div>
            
            <div className="bg-white border border-[#E5E7EB] rounded-2xl px-3 py-3 flex flex-col items-center justify-center text-center min-h-[88px] gap-1 md:flex-row md:rounded-full md:px-5 md:py-3 md:min-h-0 md:text-left md:gap-2">
              <span className="text-[#4F46E5] font-bold text-sm md:text-base">87%</span>
              <span className="text-[#1a1a1a] font-bold">Placed in 3 Months</span>
            </div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl px-3 py-3 flex flex-col items-center justify-center text-center min-h-[88px] gap-1 md:flex-row md:rounded-full md:px-5 md:py-3 md:min-h-0 md:text-left md:gap-2">
              <span className="text-[#4F46E5] font-bold text-sm md:text-base">4.9★</span>
              <span className="text-[#1a1a1a] font-bold">Student Rating</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[420px] bg-white rounded-2xl shadow-lg p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2">
            Get Your Free Seat, June Cohort
          </h2>
          <p className="text-[#475467] text-sm mb-6">
            Fill in your details and we&apos;ll reach out within 1 hour with the full course guide, fees, and payment options.
          </p>

          {/* Alert Box */}
          <div className="bg-[#F5F1E6] border border-[#E9D2A8] rounded-md px-3 py-1 mb-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#F28C28] rounded-full"></span>
            <span className="text-[#F28C28] text-[13px] font-semibold">
              This course is for professionals with 10+ years of experience. We review every application to confirm the program is right for you before you commit.
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_name: e.target.value,
                  })
                }
                placeholder="Aditya Rao"
                className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
              />
              {errors.full_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.full_name}
                </p>
              )}
            </div>

            {/* WhatsApp and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Email ID
                </label>
                <input
                  type="email"
                  value={formData.email_id}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email_id: e.target.value,
                    })
                  }
                  placeholder="you@college.edu"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
                {errors.email_id && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email_id}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp_number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsapp_number: e.target.value,
                    })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
                {errors.whatsapp_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.whatsapp_number}
                  </p>
                )}
              </div>
            </div>

            {/* Year and Branch Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Years of Experience
                </label>
                <div className="relative">
                  <select 
                    value={formData.year_of_experience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        year_of_experience: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-2 Years">0-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="6-10 Years">6-10 Years</option>
                    <option value="10-15 Years">10-15 Years</option>
                    <option value="15+ Years">15+ Years</option>
                  </select>
                  {errors.year_of_experience && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.year_of_experience}
                    </p>
                  )}
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
                  Current Role
                </label>
                <div className="relative">
                  <select
                    value={formData.current_role}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        current_role: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#98A2B3] text-sm bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent cursor-pointer pr-10"
                  > 
                    <option value="">Select Role</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                    <option value="Tech Lead">Tech Lead</option>
                    <option value="Engineering Manager">Engineering Manager</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.current_role && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.current_role}
                    </p>
                  )}
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#CF2030] hover:bg-[#b01c2a] text-white font-semibold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Reserve My Seat in the June Batch"}

              {!loading && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-center text-[#98A2B3] text-xs">
              *Your details are safe. No spam. A counsellor will reach out within 1 hour.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
