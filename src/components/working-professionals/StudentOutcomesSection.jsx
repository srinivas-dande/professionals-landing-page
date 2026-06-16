'use client';

import { useState } from 'react';
import Image from "next/image";

const testimonials = [
  {
    image: "/testimonials/student1.jpg",
    
    name: 'Rupesh Kumar Singh',
    details: 'Solution Architect, Worldline Global Services ',
    subDetails: '20+ Years Experience',
    quote: '"Dande Sir’s guidance gave me a clear path, strong confidence, and the motivation to move into AI/ML roles."',
    role: '',
    company: '',
    salary: ''
  },
  {
    initials: '',
    name: '',
    details: '',
    subDetails: '',
    quote: '""',
    role: '',
    company: '',
    salary: ''
  },
  {
    initials: '',
    name: '',
    details: '',
    subDetails: '',
    quote: '""',
    role: '',
    company: '',
    salary: ''
  },
  {
    initials: '',
    name: '',
    details: '',
    subDetails: '',
    quote: '""',
    role: '',
    company: '',
    salary: ''
  },
  {
    initials: '',
    name: '',
    details: '',
    subDetails: '',
    quote: '""',
    role: '',
    company: '',
    salary: ''
  }
  
];

export default function StudentOutcomesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <span className="text-[#4F46E5] text-sm font-semibold mb-4 block">
              Student Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
              No prior work experience. No IIT.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#DC2626] mb-6">
              Real Career Outcomes.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-12">
              Every student featured here started with the same challenge — no industry experience, no AI/ML background, and no special advantage.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                 Production Ready
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                   Projects.Built and deployed during the program.

                </p>
              </div>

              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                  GitHub Portfolio
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Showcase real AI/ML projects recruiters can review.
                </p>
              </div>

              {/* Third card */}
              <div className="col-span-2 lg:col-span-1 flex justify-center">
                <div className="bg-white rounded-xl p-4 text-center max-w-[280px]">
                  <div className="text-[#7C3AED] text-2xl md:text-3xl font-bold mb-2">
                    Interview Ready

                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Project discussions, technical rounds, and career guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Profile */}
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={66}
                  height={66}
                  className="rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-[#1a1a1a] font-bold text-lg">{current.name}</h3>
                  <p className="text-[#6B7280] text-sm">{current.details}</p>
                  <p className="text-[#6B7280] text-sm">{current.subDetails}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#4B5563] text-base italic leading-relaxed mb-8">
                {current.quote}
              </p>

              {/* Job Card */}
              <div className="bg-[#F9FAFB] rounded-lg p-4 border-l-4 border-[#10B981] flex justify-between items-center">
                <div>
                  <h4 className="text-[#1a1a1a] font-bold text-sm">{current.role}</h4>
                  <p className="text-[#10B981] text-sm">{current.company}</p>
                </div>
                <div className="text-[#10B981] font-bold text-xl">{current.salary}</div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-[#CF2030] flex items-center justify-center text-[#CF2030] hover:bg-[#CF2030] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#CF2030] flex items-center justify-center text-white hover:bg-[#b81c2c] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
