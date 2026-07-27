
"use client";
import Image from "next/image";

export default function HeaderWithBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[999] bg-white">
      

      {/* Frame 2: Header/Navbar */}
      <header className="bg-white border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto h-24 px-4 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/icons/logo.png"
            alt="Dandes Academy"
            width={180}
            height={60}
            className="object-contain"
          />

          {/* Apply Now Button */}
          <>
  <button
  onClick={() => {
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="hidden md:block bg-[#C41E3A] hover:bg-[#A01830] text-white font-semibold px-6 py-2 rounded transition-colors"
>
  Apply Now
</button>

  <button className="md:hidden flex flex-col gap-1.5">
  <span className="block w-8 h-1 bg-black rounded"></span>
  <span className="block w-8 h-1 bg-black rounded"></span>
  <span className="block w-8 h-1 bg-black rounded"></span>
</button>
</>
        </div>
      </header>
    </div>
  );
}
