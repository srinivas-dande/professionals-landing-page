'use client';

import { useState } from 'react';
import Image from "next/image";

const testimonials = [
  {
    image: "/testimonials/Rajkeshwar Prasad.jpg",
    
    name: 'Rajkeshwar Prasad',
    details: 'Tech Lead ',
    subDetails: 'HCL Tech, Germany',
    quote: '"Dande Sir has a unique way of simplifying complex topics. Concepts that initially seemed difficult, especially in Machine Learning and Deep Learning, became much easier to understand through the structured explanations and practical examples. The program helped me connect AI concepts with real-world engineering problems and gave me confidence to explore AI/ML in my career."',
    
  },
  {
    image: "/testimonials/Anek Kumar Singh.jpg",
    name: 'Anek Kumar Singh',
    details: 'Software Development Engineer III',
    subDetails: 'JPMorgan Chase, Bangalore',
    quote: '"This course gave me a clear and structured roadmap for transitioning into AI/ML. Dande Sir explains every concept with exceptional clarity and patience, making even complex topics easy to understand. The combination of practical projects, real-world examples, and mentorship gave me the confidence to seriously pursue opportunities in AI and Machine Learning."',
    
  },
  {
    image: "/testimonials/Sasi Kumar.jpg",
    name: 'Sasi Kumar',
    details: 'Principal Engineer',
    subDetails: 'Akshaya Inc, USA',
    quote: '"The biggest value for me was the clarity and structure of the program. Instead of jumping between random tutorials and resources, I had a clear roadmap to follow along with continuous mentor support. The curriculum helped me understand not just the concepts, but also how AI/ML is applied in real-world scenarios. It saved me months of confusion and self-study."',
    
  },
  {
    image: "/testimonials/Rupesh Kumar Singh.jpg",
    name: 'Rupesh Kumar',
    details: 'Solution Architect',
    subDetails: 'Worldline Global Services, Bangalore',
    quote: '"What I liked most was the practical approach of the program. The assignments, mini projects, and capstone project helped me move beyond theory and apply AI/ML concepts to real-world problems. By the end of the program, I had gained the confidence to evaluate, build, and discuss AI solutions from an architectural perspective."',
    
  },
  {
    image: "/testimonials/Navneeth Ranjan.jpg",
    name: 'Navneeth Ranjan',
    details: 'Assistant Vice President',
    subDetails: 'Citi Corp, Bangalore',
    quote: '"Before joining the program, AI/ML felt overwhelming because there was so much information scattered across different platforms. What helped me most was the structured learning path, hands-on projects, and continuous mentor support. The program gave me clarity on what to learn, confidence in applying AI/ML concepts, and a practical understanding of how these technologies are used in real-world business environments."',
    
  },
  {
    image: "/testimonials/Ravi Ranjan Singh.jpg",
    name: 'Ravi Ranjan Singh',
    details: 'Technical Manager',
    subDetails: 'WeSure Global Tech',
    quote: '"This course gave me a complete roadmap for transitioning into AI/ML. What stood out most was the way complex concepts were explained with clarity and connected to practical, real-world use cases. The structured curriculum, hands-on projects, and implementation-focused approach helped me build a strong foundation and gave me the confidence to move forward in my AI/ML journey."',
    
  },
  {
    image: "/testimonials/Uma Mahesh.jpg",
    name: 'Uma Mahesh',
    details: 'Lead Engineer',
    subDetails: 'Societe Generale',
    quote: '"Dande Sir’s teaching gave me a level of clarity that I had not found elsewhere. The program strengthened my fundamentals, filled important knowledge gaps, and helped me understand how AI/ML concepts are applied in real-world scenarios. The hands-on projects and structured roadmap gave me a clear direction and the confidence to actively pursue my transition into AI/ML."',
    
  },
  {
    image: "/testimonials/Yashwant Kumar.jpg",
    name: 'Yashwant Kumar',
    details: 'Associate Architect',
    subDetails: 'Virtusa, Bangalore',
    quote: '"One of the things I appreciated most about the program was the way complex concepts were broken down into simple, practical lessons. Topics such as Statistics, EDA, and Machine Learning were explained step-by-step with real-world examples and case studies. The structured approach made it easier to understand not just the theory, but also how to apply these concepts in real business scenarios."',
    
  },
  {
    image: "/testimonials/Sowjanya.jpg",
    name: 'Sowjanya VR',
    details: 'Technical Lead',
    subDetails: 'Wipro, Bangalore',
    quote: '"Before joining the program, AI/ML seemed like a complex and overwhelming field. What made the difference was the way concepts were explained through practical examples, hands-on coding sessions, and real-time problem-solving. The structured approach helped me build confidence step by step, and today I feel much more prepared to begin my transition into AI/ML."',
    
  },
  {
    image: "/testimonials/Deepak.jpg",
    name: 'Deepak Kumar Singh',
    details: 'Engineering Manager',
    subDetails: 'Vodafone (VOIS)',
    quote: '"Thanks to Dande Sir, I finally understand how AI/ML works in real applications, not just in theory. The practical project-based approach, clear explanations, and structured learning path helped me connect AI concepts with real-world business and engineering problems. It gave me a much clearer understanding of the complete AI/ML workflow."',
    
  },
  {
    image: "/testimonials/Rupesh Bima.jpg",
    name: 'Rupesh Bhima',
    details: 'Project Lead',
    subDetails: 'TCS, USA',
    quote: '"Dande Sir has a unique ability to connect theory with real-world application. The program strengthened my understanding of Statistics, Machine Learning, and the practical aspects of building AI solutions. The hands-on projects and clear teaching methodology helped me move beyond concepts and gain confidence in applying them to real business problems."',
    
  },
  {
    image: "/testimonials/Lakshmi kanth.jpg",
    name: 'Lakshmi Kanth',
    details: 'Solution Architect',
    subDetails: 'Deloitte, Bangalore',
    quote: '"After many years in the industry, I was looking for a program that focused on true understanding rather than just covering tools and concepts. What stood out to me was the depth of explanation, the industry-focused curriculum, and the continuous mentorship throughout the journey. The program gave me a much clearer perspective on how AI can be applied to solve real business and technology problems."',
    
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
              Experienced Professionals.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#DC2626] mb-6">
              Real AI/ML Transitions.
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-12">
              Every professional featured here started from the same place — years of experience in software, engineering, architecture, or management, but little or no practical AI/ML experience.

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
