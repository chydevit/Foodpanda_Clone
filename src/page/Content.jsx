import React from "react";

export default function Content() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-left py-20 mx-4 md:mx-20">
        <h2 className="text-4xl font-bold mb-8">
          You prepare the food, we handle the rest
        </h2>
      </section>

      {/* Image with Overlay Card */}
      <div className="w-full h-96 flex justify-center items-center relative mb-12">
        {/* Background Image */}
        <img
          src="https://images.deliveryhero.io/image/foodpanda/home-vendor-kh.jpg?width=1264&height=808.96"
          alt="Kitchen"
          className="w-full h-full object-cover"
        />

        {/* Overlay Card */}
        <div className="absolute top-10 md:top-20 left-4 md:left-10 bg-gray-100 text-black text-left p-6 rounded-lg shadow-lg max-w-xl m-5 ">
          <h2 className="text-2xl font-bold mb-2">
            List your restaurant or shop on foodpanda
          </h2>
          <p className="text-gray-700 mb-2">
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we! <br />
            <br />
            It's simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas – in
            a heartbeat!
            <br />
            <br /> Interested? Let's start our partnership today!
          </p>
          <button className="mt-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
