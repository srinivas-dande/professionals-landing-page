'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TimeCommitmentSection() {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const features = [
  {
    image: '/icons/weekend.png',
    title: 'Month 1–2, Foundations Accelerated',
    description:
      'Python, ML fundamentals, and your first end-to-end project. Fast-tracked for professionals, no repetition of things you already know.'
  },
  {
    image: '/icons/assignment.png',
    title: 'Month 3–4, Deep Learning + NLP',
    description:
      "Neural networks, transformers, and LLMs with a domain-specific project that goes into your portfolio. This is where most of the learning density lives."
  },
  {
    image: '/icons/project.png',
    title: 'Month 5, MLOps + Deployment',
    description:
      "Production AI systems, cloud deployment, and monitoring. For engineering professionals, this module accelerates quickly given your existing infrastructure knowledge."
  },
  {
    image: '/icons/recording.png',
    title: 'Month 6, Capstone + Interview Prep',
    description:
      'Domain capstone build with 1:1 mentorship. 5 mock technical interviews. Salary negotiation coaching. Resume and LinkedIn optimisation for AI/ML JDs.'
  }
];

  const schedule = [
    { day: 'MON', activity: 'Assignment review · 1–1.5 hrs', type: 'assignment' },
    { day: 'TUE', activity: 'Work day — no course', type: 'free' },
    { day: 'WED', activity: 'Project work · 1.5 hrs', type: 'assignment' },
    { day: 'THU', activity: 'Work day — no course', type: 'free' },
    { day: 'FRI', activity: 'Reading + revision · 1 hr', type: 'project' },
    { day: 'SAT', activity: 'Live class · 3 hrs', type: 'live' },
    { day: 'SUN', activity: 'Live class · 2 hrs', type: 'live' }
  ];

  const getActivityStyle = (type) => {
    switch (type) {
      case 'assignment':
        return 'bg-[#D1FAE5] text-[#059669]';
      case 'live':
        return 'bg-[#DBEAFE] text-[#2563EB]';
      case 'project':
        return 'bg-[#D1FAE5] text-[#059669]';
      case 'free':
        return 'bg-[#F3F4F6] text-[#9CA3AF]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280]';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block text-[#4654F5] text-sm font-semibold mb-4">
              Time Investment
            </span>
            <h2 className="text-[28px] md:text-[34px] font-bold text-[#111827] mb-4 leading-tight">
              Exactly what this programme requires. No surprises mid-course.
            </h2>
            <p className="text-[#6B7280] text-base mb-8">
              Professionals hate being misled about time commitment. So here it is, precisely.
            </p>

            {/* Accordion Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-3 flex items-center gap-4 text-left"
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <span className="flex-1 font-semibold text-[#111827]">
                      {feature.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#CF2030] transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-5 pb-4 pl-[76px]">
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Schedule Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E7EB]">
            <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-6">
              Sample Weekly Schedule
            </h3>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-10 text-sm font-medium text-[#6B7280]">
                    {item.day}
                  </span>
                  <div className={`flex-1 px-4 py-2 rounded-lg text-sm font-bold ${getActivityStyle(item.type)}`}>
                    {item.activity}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#6B7280] leading-relaxed">
              <span className="font-bold text-[#111827]">Total: ~10 hrs/week.</span> Every student from our 2024 cohort completed this alongside a full college schedule, including students who were sitting for end-semester exams mid-course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
