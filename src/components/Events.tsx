import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";

const events = [
  {
    title: "Youth For Change",
    description:
      "Youth for Change is a program that revolves around visiting schools across various regions in Tunisia. The primary objective of these visits is to enrich students' understanding and awareness regarding renewable energies.",

    img: "IMG_E6605",
  },
  {
    title: "Rect'it Up",
    description:
      "Rec’it Up is a 24-hour challenge in the field of renewable energies and entrepreneurship. Participants will be grouped into teams of 3 to 4 individuals with the aim of presenting a prototype project as a solution to an environmental issue, while adhering to the guidelines provided by the jury.",
    img: "309537819_394014806261690_3540464334675463694_n",
  },
  {
    title: "Conference",
    description:
      "The club organized an impactful conference, gathering experts and enthusiasts passionate about the club's focal areas. The event showcased insightful talks and interactive panel discussions in technology and sustainable practices",
    img: "1 (6 of 7)",
  },
  {
    title: "Workshops",
    description:
      "The technical workshops hosted by the IEEE PES were more than just sessions; they were immersive journeys into the heart of innovation. These workshops provided a hands-on, experiential approach, offering participants an intimate understanding of cutting-edge technological advancements",
    img: "iqngirapplkueacbpbnh",
  },
  {
    title: "Projects",
    description:
      "We plan our projects with precision, starting with collaborative brainstorming to refine ideas. Clear objectives and task allocation ensured efficiency Flexibility was key, allowing adjustments while staying committed to the goal, a dynamic framework for successful execution.",
    img: "403716493_646135081049660_8206959095086502085_n",
  },
];

export default function Events() {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Activities
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            A thriving community with a wide range of activities
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {events
            .map((event) => ({
              ...event,
              img: cld.image(event.img),
            }))
            .map((event) => (
              <Card {...event} />
            ))}
          {/* Card */}

          <div className="group relative flex hue-rotate-[280deg] flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <div className="flex-auto p-4 md:p-6">
              <h3 className="text-xl text-white/[.9] group-hover:text-white">
                <span className="font-bold">IEEE PES INSAT</span> is committed
                to the development of its members and the community
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6"></div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
}

function Card(props: {
  title: string;
  description: string;
  img: CloudinaryImage;
}) {
  return (
    <div className="group rounded-xl overflow-hidden p-3 outline-2 outline-neutral-300 outline">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        {/*<img*/}
        {/*  className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"*/}
        {/*  src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"*/}
        {/*  alt="Image Description"*/}
        {/*/>*/}
        <AdvancedImage
          cldImg={props.img.resize(fit().width(400))}
          plugins={[]}
          className={
            "w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
          }
        />
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          {props.title}
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
          {props.description}
        </p>
      </div>
    </div>
  );
}
