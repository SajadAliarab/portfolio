// @flow strict

import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
          I am a full-stack web developer with 5+ years of experience building scalable, user-focused websites and web apps. I have ve worked on enterprise tools used by 2,000+ agents at Butane Group -- Iran largest gas appliance manufacturer--, and helped launch high-traffic platforms for Leicester City Football Club in the UK.I enjoy working with modern tools like React, Next.js, Laravel, and PostgreSQL — with a strong focus on clean code, performance, and SEO
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src='/profile.png'
            width={280}
            height={280}
            alt="Sajad's Profile Picture"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
