import React from "react";

export const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-screen before:hue-rotate-[236deg] before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* Announcement Banner */}

          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-10 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              IEEE{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-emerald-700 to-emerald-300 text-transparent">
                PES
              </span>{" "}
              INSAT Student Branch Chapter
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Step into the world of IEEE PES INSAT Student Branch-a place where
              diversity fuels growth! We invite all to join us on a journey of
              learning, achievement, and transformation. Together, let's shape a
              future where limitless opportunities abound.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-emerald-700 to-teal-300 hover:brightness-95 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://ieee-pes.org/about-pes/"
            >
              What is IEEE PES?
              <svg
                className="flex-shrink-0 w-4 h-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};
export default Hero;
