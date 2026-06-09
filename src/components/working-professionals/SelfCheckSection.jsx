'use client';

export default function SelfCheckSection() {
  const rightPlaceItems = [
    { bold: "You have 10+ years in engineering, IT, software, or tech-adjacent roles", text: "and feel you've hit a ceiling, in salary, growth, or the quality of problems you're solving" },
    { bold: "You've watched colleagues move into AI/ML roles", text: "and come back with better packages, more interesting work, and designations that carry more weight and you want that" },
    { bold: "You're strategic, not desperate,", text: "you're not switching because you're in trouble; you're switching because you can see where the industry is going and you want to move with it" },
    { bold: "You have technical foundations", text: "coding, systems thinking, data intuition but haven't yet applied them to AI/ML specifically" },
    { bold: "Time is your scarcest resource", text: "you have a job, possibly a family, real commitments. You need this to fit efficiently around your life, not replace it" },
    { bold: "You've already graduated", text: "and are skeptical which is exactly why you're still reading this. You want evidence before you commit, not a sales pitch" },
    { bold: "You've been burned by shallow online courses", text: "and are skeptical which is exactly why you're still reading this. You want evidence before you commit, not a sales pitch" },
  ];

  const notForYouItems = [
    { bold: "You have fewer than 5 years of professional experience", text: "we have a separate programme built for students and early-career professionals. This one is built differently" },
    { bold: "You're looking for a guaranteed job", text: "we don't promise one, and no credible programme does. We give you the best possible shot; the outcome requires your effort too" },
    { bold: "You can't commit 10–12 hours per week", text: "if the next 6 months are genuinely maxed out, wait for the right time. Starting and dropping is worse than starting later" },
    { bold: "You're looking for a passive learning experience", text: "this involves live sessions, real projects, peer reviews, and mentor accountability. Passive viewers don't get placed" },
    { bold: "You're looking for a passive learning experience", text: "this involves live sessions, real projects, peer reviews, and mentor accountability. Passive viewers don't get placed" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#4F46E5] text-sm font-semibold">Honest Self-Assessment</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mt-3">
            Is this <span className="text-[#DC2626]">programme</span> right for you?
          </h2>
          <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
            "This isn't for everyone"  and saying so helps the 
               <br/>right people find us faster.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card - Right Place */}
          <div className="bg-[#EEF8F3] rounded-xl p-6 md:p-8 border border-[#B7E4CC]">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">This was built for you if...</h3>
                <p className="text-[#9CA3AF] text-sm mt-1">You'll recognise yourself in at least 4 of these</p>
              </div>
            </div>

            <ul className="space-y-4">
              {rightPlaceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] mt-2 flex-shrink-0"></span>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <button className="w-full mt-8 bg-[#CF2030] hover:bg-[#B91C2C] text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Yes, this is me Reserve my seat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Card - Not For You */}
          <div className="bg-[#F9FAFB] rounded-xl p-6 md:p-8 border border-[#E5E7EB]">
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
              <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827]">This is probably not for you if...</h3>
                <p className="text-[#9CA3AF] text-sm mt-1">And that's okay, better to know now</p>
              </div>
            </div>

            <ul className="space-y-4">
              {notForYouItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 flex-shrink-0"></span>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* Info Box */}
            <div className="mt-8 bg-[#F3F4F6] rounded-lg p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-[#6B7280] text-sm">
                Still not sure? Our counsellors will tell you honestly whether this course fits your situation, no sales pressure. <a href="#" className="text-[#CF2030] font-semibold hover:underline">WhatsApp us</a> and ask directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
