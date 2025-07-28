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
         I&apos;m a PHP/Laravel developer who loves writing clean, efficient, and testable code. I mostly live on the backend—building APIs, working with databases, and keeping things fast and secure.<br></br>
         I&apos;ve also played with Vue 3 and Nuxt.js enough to collaborate smoothly with frontend teams (and jump in when needed). I&apos;m into writing code that makes sense, scales well, and doesn&apos;t fall apart under pressure.<br></br><b>Always learning, always building.</b>
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
