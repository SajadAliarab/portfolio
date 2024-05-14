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
           As a Software Engineer and Web
            Developer, I excel in delivering impactful digital solutions that
            speak volumes through their quality. My proficiency in Vue.js,
            React.js, Laravel, PHP, and MySQL is evident in the robust and
            scalable applications I develop. With a keen eye for detail and a
            commitment to excellence, I specialize in e-commerce design, SEO
            optimization, and agile methodology. Collaborating seamlessly with
            cross-functional teams, I identify and address performance
            bottlenecks to enhance user satisfaction and retention. My passion
            for continuous learning and innovation drives me to leverage
            technology effectively, ensuring that every line of code I write
            contributes to business growth and success.
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
