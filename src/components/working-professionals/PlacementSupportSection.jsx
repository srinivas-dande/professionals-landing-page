export default function PlacementSupportSection() {
  const checklistItems = [
    'Domain knowledge that fresh graduates simply dont have',
    'Strong technical and engineering foundations that accelerate learning',
    'Real-world problem-solving experience that AI teams value',
    'Better understanding of products, customers, systems, and business requirements',
    'The ability to apply AI/ML to real business problems, not just build models',
    'Professional maturity, communication skills, and stakeholder management experience',
    
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-stretch">

          {/* Left Content */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 px-6 md:px-12 lg:px-20 flex flex-col justify-center">
            <span className="text-[#4F46E5] text-sm font-semibold">
              The Experience Advantage  
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-[28px] font-bold text-[#111827] mt-4 leading-tight">
              Why Your Experience Can Be Your Biggest AI/ML Asset
            </h2>

            <p className="text-[#6B7280] text-base md:text-sm mt-6 leading-relaxed">
              Many professionals assume they are starting late. In reality, years of experience can become a powerful advantage when combined with practical AI/ML skills.
            </p>

            {/* Checklist */}
            <div className="mt-3 bg-white rounded-md border border-[#E5E7EB] overflow-hidden">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-3 py-2 ${
                    index !== checklistItems.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-[#4F46E5] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#111827] text-sm md:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Apply Now Button */}
            <a
  href="#apply-form"
  className="mt-8 w-fit bg-[#CF2030] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-[#B91C2C] transition-colors"
>
  Apply Now
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
</a>
          </div>

          {/* Right Image — edge to edge, no padding, no rounded corners */}
          <div className="order-1 lg:order-2 lg:w-[55%] flex justify-center lg:justify-end mb-10 lg:mb-0">
            <div className="w-full px-2 sm:px-4 lg:px-2 h-[400px] md:h-[450px] lg:h-[520px]">
              <img
                src="/images/Experience Advantage.png"
                alt="Students working together on placement preparation"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}