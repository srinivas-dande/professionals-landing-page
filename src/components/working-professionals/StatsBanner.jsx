'use client';

export default function StatsBanner() {
  const stats = [
    {
      value: '25,000+',
     
      description:
        'STUDENTS TRAINED',
    },
    {
      value: '6',
      
      description:
        'AI/ML PROJECTS',
    },
    {
      value: '3',
      
      description:
        'MOCK INTERVIEWS',
    },
  ];

  return (
    <section className="bg-[#CF2030] md:h-[150px] rounded-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-full">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center px-4 py-6 md:px-8 ${
              index !== stats.length - 1
                ? 'border-b md:border-b-0 md:border-r border-white/30'
                : ''
            }`}
          >
            <h2 className="text-white font-bold leading-none">
              <span className="text-4xl md:text-6xl">
                {stat.value}
              </span>
              
            </h2>

            <p className="mt-3 max-w-[320px] text-white text-sm md:text-sm leading-snug font-normal">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}