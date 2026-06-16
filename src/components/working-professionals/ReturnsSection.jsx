'use client';

const returnItems = [
  '12-Month Structured AI & Machine Learning Career Program',
  '6 Industry-Ready AI/ML Projects',
  'Domain-Specific Capstone Project Aligned to Your Experience',
  '3 Structured Mock Interviews with Detailed Feedback',
  'AI/ML Interview Preparation & ML System Design',
  'Resume, LinkedIn & GitHub Portfolio Review',
  'Career Guidance & Transition Roadmap',
  '1:1 Mentor Support Throughout the Program',
  'Exclusive Job & Opportunity Updates',
];

export default function ReturnsSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#2563EB] text-base font-bold">The Returns</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mt-4 leading-tight">
            The Investment. The <span className="text-[#DC2626]">Skills</span>. The{' '}
            <span className="text-[#DC2626]">Outcome.</span>
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            You've spent years building your career. Before making any investment,
            <br className="hidden md:block" />
            it's important to understand exactly what you're getting in return.
          </p>
        </div>

        {/* Returns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {returnItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-xl p-4 min-h-[140px] md:min-h-0 flex flex-col"
            >
              <div className="w-7 h-7 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-3">
                <svg
                  className="w-3.5 h-3.5 text-[#16A34A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-[#1F2937] text-sm md:text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
