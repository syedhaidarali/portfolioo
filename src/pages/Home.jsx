import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col-reverse justify-center w-full min-h-screen bg-black md:gap-5 md:items-center md:flex-row">
      <div className="flex flex-col justify-center w-full gap-2 pb-4 pl-10 md:w-1/2 md:h-full md:mt-0 mt-[-120px]">
        <h1 className="absolute top-40 md:hidden flex font-black text-black whitespace-nowrap custom-shadow  lg:text-[180px] md:text-[120px]  text-[50px] sm:text-[80px] -z-0 lg:translate-y-14 md:translate-y-8">
            Dr.Atif Ali
          </h1>
        <h1 className="md:flex hidden font-black text-black whitespace-nowrap custom-shadow  lg:text-[180px] md:text-[120px]  text-[50px] sm:text-[80px] -z-0 lg:translate-y-14 md:translate-y-8 ">
          Dr.Atif Ali
        </h1>
        <h3 className="text-base text-white">DOMAIN WATRACZ</h3>
        <h2 className="hero-heading-2 text-white custom-shadow shadow-custom-white font-bold text-[50px] md:text-6xl leading-[55px]">
          Website and User <br />
          Interface Designer
        </h2>
        <p className="custom-shadow min-w-[80%] md:w-[500px] w-[300px] text-slate-200 ">
          Over the past 9 years as an art director and designer, I've worked
          with big companies and up-and-coming startups to successfully help
          them reach their full potential and attract new customers.
        </p>

        <div className="hero-link flex gap-4 items-center w-full text-[#d7d5d5]">
          <a className="text-xl font-semibold" href="#projects">
            View Projects
          </a>
          <h4 className="text-slate-400">or</h4>
          <a className="font-semibold text-xl text-[#d7d5d5]" href="#about">
            Read About Me
          </a>
        </div>
      </div>

      <div className="z-10 flex items-center justify-center w-full md:w-2/5 ">
        <img
          src="/bg_home.png"
          alt="Background Image"
          className="object-cover w-5/5"
        />
      </div>
    </div>
  );
};

export default Home;
