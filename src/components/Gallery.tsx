import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../cloudinary";
import { fit } from "@cloudinary/url-gen/actions/resize";

const imgs: string[] = [
  "409503425_657090526620782_6784098963363676561_n",
  "381021064_285855330959668_2882071307611012308_n",
  "403712909_646135524382949_6688508280932401940_n",
  "409634667_657090856620749_6472437291519957001_n",
  "1 (1 of 1)X",
  "1 (11 of 12)",
  "403589896_646135067716328_2780435139343782642_n",
  "IMG (3 of 5)",
  "1 (8 of 10)",
  "DSC_0109",
  "1 (6 of 7)",
  "IMG_4007",
];
export default function Gallery() {
  const fourth = Math.floor(imgs.length / 4);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Gallery
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Creating Memories Since 2017
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {Array.from({ length: 4 }, (_, index) =>
          imgs.slice(
            (index * imgs.length) / 4,
            ((index + 1) * imgs.length) / 4,
          ),
        ).map((imgs) => (
          <div className="space-y-2">
            {imgs.map((img) => (
              <AdvancedImage
                className="w-full h-auto object-cover"
                cldImg={cld.image(img).resize(fit().width(400))}
                key={img}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
