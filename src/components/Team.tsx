import { PropsWithChildren } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";

interface TeamMember {
  Name: string;
  Photo: string;
  lkd?: string;
  fb?: string;
  Position: string;
}

const team: TeamMember[] = [
  {
    Name: "Nour Tebbi",
    Position: "Chairwoman",
    fb: "https://www.facebook.com/profile.php?id=100049247820238",
    Photo: "Nour Tebbi",
  },
  {
    Name: "Hamza Rezgui",
    Position: "Vice Chair Technical Activities",
    lkd: "https://www.linkedin.com/in/hamza-rezgui-8a759221b/",
    fb: "https://www.facebook.com/profile.php?id=100090069939699",
    Photo: "Hamza Rezgui",
  },
  {
    Name: "Emna Drihem",
    Position: "Vice Chair Membership Activities",
    lkd: "https://www.linkedin.com/in/emna-drihem-1b8537290/",
    fb: "https://www.facebook.com/profile.php?id=100090069939699",
    Photo: "Emna Drihem",
  },
  {
    Name: "Nermine Ben Said",
    Position: "General Secretary",
    lkd: "https://www.linkedin.com/in/nermine-ben-said-805944265",
    fb: "https://www.linkedin.com/in/nermine-ben-said-805944265",
    Photo: "Nermine Ben Said",
  },
  {
    Name: "Yasmine Jebali",
    Position: "Treasurer",
    fb: "https://www.facebook.com/yasmine.jebali.3?mibextid=ZbWKwL",
    Photo: "Yasmine Jebali",
  },
  {
    Name: "Hazem Mensi",
    Position: "Media Manager",
    lkd: "https://www.linkedin.com/in/hazemensi",
    fb: "https://www.linkedin.com/in/hazemensi",
    Photo: "Hazem Mensi",
  },
];

function TeamMemberComponent(props: TeamMember) {
  return (
    <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
      {/*<img*/}
      {/*  className="rounded-lg w-20 h-20"*/}
      {/*  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"*/}
      {/*  alt="Image Description"*/}
      {/*/>*/}
      <AdvancedImage
        cldImg={cld.image(props.Photo).resize(fit().width(200).height(200))}
        plugins={[]}
        className={"rounded-lg w-20 h-20 object-cover"}
      />

      <div className="sm:flex sm:flex-col sm:h-full">
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            {props.Name}
          </h3>
          <p className="mt-1 text-xs uppercase text-gray-500">
            {props.Position}
          </p>
        </div>
        {/* Social Brands */}
        <div className="mt-2 sm:mt-auto space-x-2.5">
          {props.lkd && (
            <a
              className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-gray-800 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href={props.lkd}
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 object-contain "
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {props.fb && (
            <a
              className="inline-flex justify-center items-center text-gray-500 rounded-full hover:text-gray-800 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href={props.fb}
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 object-contain "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
              </svg>
            </a>
          )}
        </div>
        {/* End Social Brands */}
      </div>
    </div>
  );
}

function TeamLayout(props: PropsWithChildren) {
  return (
    <>
      {/* Team */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Meet the crew
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {props.children}
        </div>
      </div>
    </>
  );
}

export default function Team() {
  return (
    <TeamLayout>
      {team.map((member) => (
        <TeamMemberComponent {...member} />
      ))}
    </TeamLayout>
  );
}
