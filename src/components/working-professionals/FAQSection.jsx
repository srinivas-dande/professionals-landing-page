'use client';

import { useState } from 'react';

const faqs = [
  {
    question: " Will companies actually hire a 35+ year old professional into AI/ML roles?",
    answer: `Yes. AI/ML teams need professionals who understand products, systems, customers, and business problems—not just algorithms.

Your experience can become a competitive advantage when combined with practical AI/ML skills. The goal is not to start over, but to build on the career foundation you already have.`
  },
  {
    question: "I've tried online courses before and they haven't led anywhere. Why is this different?",
    answer: `Most professionals don't struggle because information is unavailable. They struggle because they don't know what to learn, what to build, and how to connect everything into practical skills.

    This program combines a structured roadmap, hands-on projects, mentor support, mock interviews, and career guidance. 

    That's the difference between consuming content and building capability.`
  },
  {
    question: 'How do I know this will work around my job schedule and commitments?',
    answer: `The program is designed specifically for working professionals. Live classes run from Monday to Thursday, 8:00 PM to 10:00 PM, with recordings available for revision. Most students spend around 12–16 hours per week, including classes, practice, and projects.

    The goal is consistent progress alongside your job, not putting your career on hold.`
  },
  {
    question: "What if I don't have a strong Python or coding background?",
    answer: `That's perfectly fine. The program starts with Python and programming fundamentals before moving into Machine Learning and AI concepts.

    We also review every application to ensure the program is a good fit for your background and career goals.`
  },
  {
    question: "My employer might not be comfortable with me upskilling for a different role. Is this discreet?",
    answer: `Yes. Your participation in the program is completely private. We do not make public announcements, tag participants on social media, or share any information without your permission.

    Many professionals choose to upskill independently while evaluating future opportunities. What you share with your employer, colleagues, or network is entirely your decision.`
  },
  {
    question: "Do I need a background in Data Science or AI to join?",
    answer: "No. The program is designed for working professionals from software engineering, testing, data, analytics, architecture, DevOps, and related technical backgrounds. We start with the fundamentals and gradually progress to advanced AI/ML concepts."
  },
  {
    question: "Is this focused on theory or hands-on implementation?",
    answer: "The program combines concepts with extensive practical work. You'll build projects, work with real datasets, deploy applications, and apply AI/ML techniques to real-world business problems."
  },
  {
    question: "What kind of projects will I build?",
    answer: "You'll work on industry-relevant projects covering Machine Learning, Generative AI, Agentic AI, and MLOps. The goal is to build a portfolio that demonstrates practical AI/ML skills rather than just theoretical knowledge."
  },
  {
    question: "Will I receive placement assistance?",
    answer: "Yes. The program includes mock interviews, resume and LinkedIn reviews, portfolio guidance, career mentoring, and job opportunity updates. Our goal is to help you become interview-ready and support your AI/ML transition journey."
  },
 
  
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
