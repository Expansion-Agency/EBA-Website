import React from "react";

export const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web Design",
      desc: "",
    },
    {
      id: 2,
      name: "Graphic Design",
      desc: "",
    },
    {
      id: 3,
      name: "Web Development",
      desc: "",
    },
    {
      id: 4,
      name: "Digital Marketing",
      desc: "",
    },
  ];
  return (
    <div className="flex items-center justify-between my-10 md:mx-4">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col justify-center md:p-4 bg-white/90 text-blue-950 rounded-2xl md:w-90 md:h-60
            ${
              index === 0
                ? "rounded-ss-full rounded-se-2xl rounded-ee-2xl rounded-es-2xl"
                : ""
            } 
            ${
              index === services.length - 1
                ? "rounded-se-full rounded-ss-2xl rounded-ee-2xl rounded-es-2xl"
                : ""
            }`}
        >
          <h2 className="md:text-3xl font-bold">{service.name}</h2>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
};
