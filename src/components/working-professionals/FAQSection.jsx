'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Will companies actually hire a 35 year old career switcher into an AIML role?",
    answer: "Yes, and at higher compensation than freshers. The fear that age counts against you is real, but the data doesn't support it for AI/ML specifically. Companies building AI products need people who can bridge the algorithm and the business problem. That requires years of domain experience. 91% of our professionals who complete this programme transition within 6 months, with an average salary increase of ₹18 LPA over their previous package."
  },
  {
    question: "I've tried online courses before and they haven't led anywhere. Why is this different?",
    answer: "The difference is accountability and outcome infrastructure, not content quality. Self-paced courses give you knowledge. This programme gives you a portfolio, 5 mock interviews with real feedback, direct referrals to hiring companies, and a placement team tracking your progress. The curriculum is also built around your existing experience, which means you're not starting from zero and the learning is immediately applicable. The 91% transition rate is the honest answer to \"why is this different.\""
  },
  {
    question: 'How do I know this will work around my job schedule and commitments?',
    answer: "Live sessions are weekends only, Saturday 3 hours, Sunday 2.5 hours. All recordings are available within 24 hours. Weekday work is 3–4 hours maximum, flexible around your schedule. Project deadlines can flex by up to 2 weeks per module for professionals with demanding roles. 91% of our enrolled professionals complete this without taking leave from their current employer. The remaining 9% typically take a 1–2 week pause during intense work periods and resume, we don't count this as failure."
  },
  {
    question: "What if I don't have a strong Python or coding background?",
    answer: "The programme accepts professionals with a technical background, systems thinking, data intuition, engineering logic even if Python is not your current primary language. The first 3 weeks cover Python for ML at an accelerated pace for engineers. If your background is more analytical or managerial (like product management or finance), the capstone and role preparation is adjusted accordingly. We review your profile in the application process specifically to confirm this fit before you enroll."
  },
  {
    question: "My employer might not be comfortable with me upskilling for a different role. Is this discreet?",
    answer: "Completely. All sessions are private, no public cohort announcements, no LinkedIn tagging unless you specifically request it. The program is designed to be completed independently of your employer's visibility. Many of our enrolled professionals haven't informed their employers, which is entirely standard and respected. You control what you share and when."
  }
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            What <span className="text-[#CF2030]">professionals</span> always ask. Answered without the spin.{' '}
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-start justify-between text-left"
              >
                <span className="text-[#1a1a1a] font-semibold text-base md:text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-[#9CA3AF] text-2xl font-light flex-shrink-0 mt-0.5">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
