import React from "react";

export default function DownloadCard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center m-6">
        Put us in your pocket
      </h2>
      <div className="flex flex-col lg:flex-row items-center bg-pink-600 p-6 lg:p-12 rounded-3xl shadow-lg max-w-7xl mx-auto">
        {/* Left Section */}
        <div className=" text-white p-6 lg:p-10 rounded-2xl flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Download the food and groceries you love
          </h2>
          <div className="flex items-center gap-4">
            {/* QR Code Placeholder */}
            <div className=" bg-black rounded-lg flex items-center justify-center">
              <img
                src="https://images.deliveryhero.io/image/foodpanda/homepage/khhomepageqrcode.png"
                alt="QR Code"
                className="w-40 h-40rounded-md"
              />
            </div>
            <p className="text-sm">
              It's all at your fingertips – the restaurants and shops you love.
              Find the right food and groceries to suit your mood, and make the
              first bite last. Go ahead, download us.
            </p>
          </div>
          {/* Download Buttons */}
          <div className="flex gap-3 mt-4">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Symbol.png"
              alt="App Store"
              className="h-14 object-contain"
            />
            <img
              src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-play-app-icon-vector-png-image_9183316.png"
              alt="Google Play"
              className="h-14 object-contain"
            />
            <img
              src="https://www.44cats.tv/themes/custom/bs_gatti/images/store/huawei/appgallery-badge-RU.png"
              alt="AppGallery"
              className="h-14 object-contain"
            />
          </div>
        </div>
        {/* Right Section - Mobile Screens */}
        <div className="relative flex-1 ">
          <img
            src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=2000&height=1590"
            alt="App Screen 1"
            className="w-[520px]  left-10 top-0 "
          />
        </div>
      </div>
    </div>
  );
}
