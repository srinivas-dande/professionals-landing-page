"use client";

import { useState, useEffect } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";

const countries = [
  { code: "IN", dial: "+91" },
  { code: "US", dial: "+1" },
  { code: "CA", dial: "+1" },
  { code: "GB", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "AE", dial: "+971" },
  { code: "SG", dial: "+65" },
  { code: "DE", dial: "+49" },
  { code: "FR", dial: "+33" },
  { code: "NL", dial: "+31" },
  { code: "IE", dial: "+353" },
  { code: "NZ", dial: "+64" },
  { code: "SA", dial: "+966" },
  { code: "QA", dial: "+974" },
  { code: "KW", dial: "+965" },
  { code: "OM", dial: "+968" },
  { code: "BH", dial: "+973" },
  { code: "ZA", dial: "+27" },
  { code: "MY", dial: "+60" },
  { code: "JP", dial: "+81" },
];

export default function HeroSection() {

  const checkItems = [
    '25,000+ Students Trained since 2005',
    '20+ Years Training Experience',
    '6 Industry-Ready AI/ML Projects',
    '3 Structured Mock Interviews',
    'Career Guidance & Placement Assistance',
    
  ];

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
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneError, setPhoneError] = useState("");
 
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
      form_type: "WP - Landing Page",

      lead_status: "New Lead",
      lead_source: "Google Ads",
      lead_sub_source: "WP - Landing Page"
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
    } else {
      const fullPhone = `${countryCode}${formData.whatsapp_number}`;

      if (!isValidPhoneNumber(fullPhone)) {
        newErrors.whatsapp_number = "Enter a valid phone number";
      }
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

    const payload = {
      ...formData,
      whatsapp_number: `${countryCode}${formData.whatsapp_number}`,
    };

    try {
      const response = await fetch("/api/professional-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
          <>
            Thank you! We have received your details.
              <br />
            Our team will contact you shortly.
          </>
        );

        setTimeout(() => {
          setSuccessMessage("");
        }, 15000);
      }

      setLoading(false);

      console.log(result);

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <section
      id="apply-form"
      className="scroll-mt-32 bg-[#F5F7FA] pt-0 pb-12 md:pb-16 px-4 md:px-8"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[700px] lg:pl-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D8EAE2] rounded-full px-3 py-2 mb-6 w-full md:w-auto">
            <span className="w-2 h-2 bg-[#08A85B] rounded-full"></span>
            <span className="text-[#08A85B] text-[11px] md:text-sm font-bold">
              AI & Machine Learning Career Program · For Working Professionals
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[900px] text-[20px] md:text-[48px] lg:text-[58px] font-medium leading-[1.05] tracking-[-0.02em] mb-5">
            <span className="text-[#CF2030] font-semibold">Upskill</span>
            <span className="text-[#0B132B]">
              {" "}with AI & Machine Learning While You Work.

              <span className="block text-[24px] md:text-[40px] lg:text-[44px] text-[#0B132B] mt-2">
                Unlock Higher-Paying Opportunities.
              </span>

            </span >
      
          </h1>
          

          {/* Description */}
          <p className="text-[#475467] text-[15px] md:text-[15px] leading-7 md:leading-relaxed mb-8 max-w-[600px]">
            This isn’t just another AI course. It’s a structured Artificial Intelligence and Machine Learning program designed for working professionals who want to build on their existing experience, develop in-demand AI/ML skills, and transition into high-growth roles with greater career opportunities and higher earning potential.

          </p>

          {/* Checklist */}
          <div className="space-y-0">
            {checkItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 py-2 border-b border-[#E5E7EB] w-[85%]"
              >
                <svg className="w-5 h-5 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className=" text-base text-[#1a1a1a]">{item}</span>
              </div>
            ))}
          </div>
          
        </div>
 
        {/* Right Form */}
        <div className="w-full lg:w-[420px] lg:ml-8 bg-white rounded-2xl shadow-lg p-5 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2">
            Get AI & Machine Learning Program Details
          </h2>
          <p className="text-[#475467] text-sm mb-6">
            Fill in your details and our team will contact you shortly to discuss the program, career opportunities, fee structure, and admission process.
          </p>

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm mb-6">
              {successMessage}
            </div>
          )}
          
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
                placeholder="Srinivas Dande"
                className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
              />
              {errors.full_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.full_name}
                </p>
              )}
            </div>

            {/* WhatsApp and Email Row */}
            <div className="space-y-4">
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
                  placeholder="you@gmail.com"
                  className="w-full px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
                />
                {errors.email_id && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email_id}
                  </p>
                )}
              </div>
              <div>
               
                <div>
  <label className="block text-[#344054] text-xs font-semibold mb-2 uppercase tracking-wide">
    WhatsApp Number
  </label>

  <div className="flex gap-2 w-full">
    <select
      value={countryCode}
      onChange={(e) => setCountryCode(e.target.value)}
      className="w-[110px] shrink-0 border border-[#D0D5DD] rounded-lg px-2 py-3 bg-white text-[#1a1a1a]"
    >
      {countries.map((country) => (
        <option key={country.code} value={country.dial}>
          {country.code} {country.dial}
        </option>
      ))}
    </select>

    <input
      type="tel"
      value={formData.whatsapp_number}
      onChange={(e) => {
        setPhoneError("");

        setFormData({
          ...formData,
          whatsapp_number: e.target.value.replace(/\D/g, ""),
        });
      }}
      placeholder="Phone Number"
      className=" min-w-0 flex-1 px-4 py-3 border border-[#D0D5DD] rounded-lg text-[#1a1a1a] placeholder-[#98A2B3] text-sm focus:outline-none focus:ring-2 focus:ring-[#CF2030] focus:border-transparent"
    />
  </div>

  {(errors.whatsapp_number || phoneError) && (
    <p className="text-red-500 text-xs mt-1">
      {errors.whatsapp_number || phoneError}
    </p>
  )}
</div>
                
              </div>
            </div>

            {/* Year and Branch Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                    <option value="3 to 6 Years">3 to 6 Years</option>
                    <option value="6 to 10 Years">6 to 10 Years</option>
                    <option value="10 to 15 years">10 to 15 years</option>
                    <option value="15 to 20 Years">15 to 20 Years</option>
                    <option value="20+ Years">20+ Years</option>
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
                    <option value="Project Manager">Project Manager</option>
                    <option value="Engineering Manager">Engineering Manager</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Architect">Architect</option>
                    <option value="Solution Architect">Solution Architect</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA / Test Engineer">QA / Test Engineer</option>
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

            

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#CF2030] hover:bg-[#b01c2a] text-white font-semibold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Get Program Details"}

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
              *Your details are safe with us. No spam. Our team will contact you shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
