import React from "react";

export default function HomePage() {
  return (
    <header className="bg-gray-100 ">
      {/* Wrapper */}
      <div className="px-4">
        {/* Flex container for title and image */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Title */}
          <div className="text-center lg:text-left lg:w-1/2 mx-20">
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight cursor-pointer hover:text-pink-500 transition"
              onClick={() => alert("Title clicked!")}
            >
              It’s the food and groceries you love, delivered
            </h1>

            {/* Search Bar */}
            <div className="mt-5 flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Your street and street number"
                className="w-full md:w-2/3 lg:w-1/2 p-4 border border-gray-300 rounded-lg"
              />
              <button className="bg-pink-500 text-white px-6 py-4 rounded-lg w-full md:w-auto">
                Find food
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="mt-6 lg:w-1/2 ">
            <img
              src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-kh.png"
              alt="Panda mascot"
              className="mx-40 lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
