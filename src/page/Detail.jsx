import React from "react";

const locations = [
  { name: "Phnom Penh", image: "src/assets/phnom penh.jpg" },
  { name: "Takeo", image: "src/assets/takeo.jpg" },
  { name: "Siem Reap", image: "src/assets/siem reap.jpg" },
  { name: "Banteay Meanchey", image: "src/assets/Banteay Meanchey .jpg" },
  { name: "Battambong", image: "src/assets/battambong.jpg" },
  { name: "Kampong Cham", image: "src/assets/kampong cham.jpg" },
  { name: "Kampong Chhnang", image: "src/assets/Kampong Chhnag.jpg" },
  { name: "Kampong Speu", image: "src/assets/Kampong Speu.jpg" },
  { name: "Kampong Thom", image: "src/assets/Kampong Thom.jpg" },
  { name: "Kampot", image: "src/assets/Kampot.jpg" },
  { name: "Poi Pet", image: "src/assets/Poi Pet.jpg" },
  { name: "Pursat", image: "src/assets/Pursat.jpg" },
  { name: "Sihanoukville", image: "src/assets/Sihanoukvile.jpg" },
  { name: "Svay Rieng", image: "src/assets/Svay Rieng.jpg" },
  { name: "Ta Khmau", image: "src/assets/Ta Khmau.jpg" },
];

export default function Detail() {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Find us in these cities and many more!
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-lg shadow">
              <span className="text-black font-semibold">{location.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
