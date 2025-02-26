import { Circle, Dna, Globe2, Languages } from "lucide-react";

const Aboutfooter = () => {
  const items = [
    { name: "Nationality", answer: ["Uzbekistan"], icon: <Globe2 className="h-8 w-8" /> },
    { name: "Language", answer: ["Uzbek - Native", "English - B1", "Russian - B1"], icon: <Languages className="h-11 w-11" /> },
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((val, indx) => (
        <div className="p-1 w-fit relative" key={indx}>
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
            {val.icon} {val.name}
          </h1>
          <div className="flex gap-2 justify-start items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
            {val.answer.map((ans, index) => (
              <div key={index} className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
                <Circle className="h-3 w-3" /> {ans}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;
