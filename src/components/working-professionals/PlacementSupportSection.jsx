export default function PlacementSupportSection() {
  const checklistItems = [
    'Domain knowledge is the moat fresh graduates dont have',
    'AI/ML hiring managers actively seek career switchers at senior level',
    'Your technical foundation means you go faster, not slower',
    'Experience commands better AI/ML compensation than a fresher',
    
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
              Why 10 years of experience makes you a better AI/ML candidate not a worse one
            </h2>

            <p className="text-[#6B7280] text-base md:text-sm mt-6 leading-relaxed">
              The market narrative says young is better in tech. The actual hiring data for AI/ML roles says something different.
            </p>

            {/* Checklist */}
            <div className="mt-8 bg-white rounded-lg border border-[#E5E7EB] overflow-hidden">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-4 ${
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
            <button className="mt-8 w-fit bg-[#CF2030] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-[#B91C2C] transition-colors">
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
            </button>
          </div>

          {/* Right Image — edge to edge, no padding, no rounded corners */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="w-full h-[400px] md:h-[500px] lg:h-full min-h-[600px]">
              <img
                src="/images/Experience Advantage.png"
                alt="Students working together on placement preparation"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}