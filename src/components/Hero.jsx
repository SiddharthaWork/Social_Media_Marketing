import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="pt-12 md:relative bg-[#0F0B1E] py-24 overflow-hidden overflow-x-hidden overflow-y-hidden">
      <div className="absolute  overflow-hidden overflow-x-hidden overflow-y-hidden">
        <img
          className="w-full pt-8 object-cover overflow-hidden opacity-80 mix-blend-overlay"
          src="bg.svg"
          alt="background image"
        />


      </div>
      <div className="md:container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PROFESSIONAL SOCIAL MEDIA MARKETING
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            WebStudio Nepal is the best social media marketing agency in Nepal, offering excellent social media marketing
            services personalised for your company. As a leading social media marketing company, we provide comprehensive
            digital marketing services to elevate your brand&apos;s online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 w-44 h-10 rounded-sm">PPC Services</button>
            <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 w-44 h-10 rounded-sm">SEO Services</button>
            <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 w-44 h-10 rounded-sm">Content Marketing</button>
            <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 w-44 h-10 rounded-sm">Video promotions</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero