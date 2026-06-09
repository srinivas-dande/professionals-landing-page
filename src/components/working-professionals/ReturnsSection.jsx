'use client';

const returnItems = [
  'Complete 24-week AI/ML specialist curriculum, professional track',
  'Domain-specific capstone project with 1:1 senior mentor guidance',
  '5 mock technical interviews with written feedback from active ML engineers',
  'Weekend live sessions - all recordings with lifetime access',
  '4 × 1:1 mentor sessions (working AI/ML practitioners, not just instructors)',
  'Salary negotiation coaching specific to AI/ML career switchers',
  'Resume, LinkedIn, and GitHub portfolio overhaul',
  'ML system design interview prep, the round that filters senior hires',
  '6-month post-completion access to placement job channel',
];

export default function ReturnsSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#2563EB] text-base font-bold">The Returns</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mt-4 leading-tight">
            What this <span className="text-[#DC2626]">costs</span>, what it{' '}
            <span className="text-[#DC2626]">returns</span>, and how fast.
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            You&apos;ve been in business long enough to evaluate an
            <br className="hidden md:block" />
            investment properly. Here is the ROI case made plainly.
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
