import React from "react";

const LightCompanyLogos: string[] = [];
const DarkCompanyLogos: string[] = [];
const neutralCompanyLogos = [
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587909/t%C3%A9l%C3%A9chargement%20%281%29%20%281%29.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587910/Logo_STB%20%281%29.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587910/logo-agil%20%281%29.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587910/Logo_Amen_Bank%20%281%29.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587911/t%C3%A9l%C3%A9chargement.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587911/logoslogan.png",
  "https://res.cloudinary.com/dzgxf5tsm/image/upload/v1702587913/logo-tunur%20%281%29.png",
];

const COMMON_LOGO_STYLES =
  "max-w-[8rem] max-h-[4rem] object-contain  saturate-0 transition-all hover:filter-none overflow-hidden";
const CompanyPartners = () => {
  return (
    <>
      {/* Clients */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h2 className="text-gray-600 dark:text-gray-400">
            Trusted by Public, Private, and Nonprofit Organizations
          </h2>
        </div>
        {/* End Title */}
        <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24 flex-wrap gap-y-10 ">
          {[
            LightCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={index}
                className={`${COMMON_LOGO_STYLES} invert dark:invert-0`}
              />
            )),
            DarkCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={index}
                // className="max-w-[10rem] max-h-24 dark:invert object-contain  saturate-0 rounded-xl overflow-hidden "
                className={`${COMMON_LOGO_STYLES} dark:invert`}
              />
            )),
            neutralCompanyLogos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                onError={(e) => e.currentTarget.remove()}
                key={logo}
                // className="max-w-[10rem] max-h-24 object-contain  saturate-0 rounded-xl overflow-hidden"
                className={`${COMMON_LOGO_STYLES}`}
              />
            )),
          ]
            .flat()
            .sort(() => Math.random() - 0.5)}
        </div>
      </div>
      {/* End Clients */}
    </>
  );
};

export default CompanyPartners;
