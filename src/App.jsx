import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  


  const slides = [
    {
      title: "GET START",
      subtitle: "YOUR FAVRIOT SHOPPING",
      buttonText: "BUY NOW",
      bgColor: "from-yellow-400 to-orange-500",
    },
    {
      title: "BEST DEALS",
      subtitle: "FOR YOUR LIFESTYLE",
      buttonText: "BUY NOW",
      bgColor: "from-blue-400 to-purple-500",
    },
    {
      title: "NEW ARRIVALS",
      subtitle: "TRENDING COLLECTION",
      buttonText: "BUY NOW",
      bgColor: "from-green-400 to-teal-500",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Man T-shirt",
      price: 30,
      image:
        "images/tshirt-img.png",
    },
    {
      id: 2,
      name: "Man-shirt",
      price: 30,
      image:
        "images/dress-shirt-img.png",
    },
    {
      id: 3,
      name: "Woman Scart",
      price: 30,
      image:
        "images/women-clothes-img.png",
    },
  ];


  const items = [
    {
      id: 1,
      name: "Laptop",
      price: 100,
      image:
        "images/laptop-img.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 100,
      image:
        "images/mobile-img.png",
    },
    {
      id: 3,
      name: "Computers",
      price: 100,
      image:
        "images/computer-img.png",
    },
  ];



const item = [
    {
      id: 1,
      name: "Jhumka",
      price: 100,
      image:
        "images/jhumka-img.png",
    },
    {
      id: 2,
      name: "Necklaces",
      price: 100,
      image:
        "images/neklesh-img.png",
    },
    {
      id: 3,
      name: "Kangans",
      price: 100,
      image:
        "images/kangan-img.png",
    },
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    
    <div className="overflow-x-hidden min-h-screen bg-white relative">
      <div className="bg-gray-700 text-white flex items-center px-4 py-3 gap-x-6 text-sm">
        <span className="font-bold text-xl ml-5">Eflyer</span>

        <div className="  flex items-center gap-3 text-gray-300 whitespace-nowrap ml-3">
          <div className="  ">
            
            <img src="images/devices.png " className="w-30 h-5 "/>
          </div>
        </div>

        <div className="h-25 w-55  ml-55 mt-4">
          <img src="images/234x60.gif" className=""/>
        </div>

        <button className="ml-4  hover:bg-gray-600 px-5 py-3  text-sm">
          Ad Space
        </button>

        <button className="ml-2 bg-gray-700  px-5 py-3 rounded flex items-center gap-1 hover:bg-gray-600 text-sm">
          <div className="w-7 h-4 ">
            <img src="images/purchase.png"/>
          </div>
          Go Back to Download
        </button>

        <button className="ml-2 bg-gray-700 px-5 py-3 rounded flex items-center gap-1 hover:bg-gray-600 text-sm">
          <div className="w-7 h-4 ">
            <img src="images/cross.png"/>
          </div>
          Remove iframe
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-black py-4 px-6">
        <ul className="flex gap-15 text-white text-base font-medium justify-center">
          <li>
            <a href="#" className="hover:text-orange-500">
              Best Sellers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Gift Ideas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              New Releases
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Today's Deals
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Customer Services
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(images/banner-bg.png)",
          }}
        >
          <div className="absolute inset-0  bg-opacity-40"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
            <h1 className="text-white text-3xl font-bold">Eflyer</h1>
          </div>
          <div className="absolute top-20 left-15 right-0 flex items-center justify-between px-6 z-20">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-4  bg-opacity-30 "
              >
                <div className="w-15 h-15">
                  <img src="images/toggle-icon.png"/>
                </div>
              </button>
            )}

            <div className="flex items-center gap-6 mr-40">
              <div className="relative ">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="bg-black text-white px-6 py-3 rounded hover:bg-gray-700 left-15 gap-10"
                >
                  All Category ▼
                </button>
                {categoryOpen && (
                  <ul className="absolute bg-white shadow rounded w-48 mt-2 text-black z-30">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Action
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Another action
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Something else here
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex bg-white rounded overflow-hidden">
                <input
                  type="text"
                  className="px-6 py-3 w-72 outline-none"
                  placeholder="Search this blog"
                />
                <button className="bg-orange-500 text-white px-4 hover:bg-orange-400">
                  🔍
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="bg-white text-black px-4 py-3 rounded flex items-center gap-2"
                >
                   English ▼
                </button>
                {languageOpen && (
                  <ul className="absolute bg-white shadow rounded w-40 mt-2 text-black z-30">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Urdu
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex gap-2">
                <button className=" text-white px-4 py-3 rounded flex items-center gap-2 hover:text-orange-500">
                  🛒 CART
                </button>
                <button className=" text-white px-4 py-3 rounded flex items-center gap-2 hover:text-orange-500">
                  👤 CART
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 transition-all duration-500">
            <div>
              <h2 className="text-6xl font-bold mb-4   transform transition-transform duration-500">
                {slides[currentSlide].title}
              </h2>
              <h3 className="text-4xl font-bold mb-8 transform transition-transform duration-500">
                {slides[currentSlide].subtitle}
              </h3>
              <button className="bg-black text-white px-8 py-3 rounded-lg text-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105">
                {slides[currentSlide].buttonText}
              </button>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-30 top-1/2 transform -translate-y-1/2 bg-[#F2DEACCC] bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-70 z-20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-[#F2DEACCC] bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-70 z-20 "
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Man & Woman Fashion
          </h2>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg min-h-[300px] overflow-hidden"
              >
                <div className="p-6 text-center mt-[3rem]">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold mb-4">
                    Price $ {product.price}
                  </p>
                  </div>
                <div className="h-[420px] bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-50 auto object-cover"
                  />
                </div>
                <div className="p-6 text-center mt-[3rem]">
                  
                  <div className="flex justify-between">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Buy Now
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-gray-700">
              <ChevronRight />
            </button>
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-orange-600">
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>


 <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Electronics
          </h2>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {items.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg min-h-[300px] overflow-hidden"
              >
                <div className="p-6 text-center mt-[3rem]">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold mb-4">
                    Start Price $ {product.price}
                  </p>
                  </div>
                <div className="h-[400px] bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-50 h-auto object-cover"
                  />
                </div>
                <div className="p-6 text-center mt-[3rem]">
                  
                  <div className="flex justify-between">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Buy Now
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-gray-700">
              <ChevronRight />
            </button>
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-orange-600">
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>



      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Jewellery Accessories
          </h2>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {item.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg min-h-[300px] overflow-hidden"
              >
                <div className="p-6 text-center mt-[3rem]">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-orange-500 font-bold mb-4">
                    Start Price $ {product.price}
                  </p>
                  </div>
                <div className="h-[420px] bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-50 h-auto object-cover"
                  />
                </div>
                <div className="p-6 text-center mt-[3rem]">
                  
                  <div className="flex justify-between">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Buy Now
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-gray-700">
              <ChevronRight />
            </button>
            <button className="bg-[#30302e] text-white p-3 rounded hover:bg-orange-600">
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>

  
      <div className="flex justify-center items-center py-10">
        <div className="w-20 h-20 border-4 border-orange-500 border-t-gray-800 rounded-full animate-spin"></div>
      </div>


<footer className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center space-y-6">
    <h1 className="text-7xl font-bold">Eflyer</h1>

    {/* Email input with subscribe */}
    <div className="flex flex-col sm:flex-row justify-center  gap-8 max-w-md mx-auto border-b border-gray-500 pb-4 ">
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3  rounded bg-transparent  w-full  text-white placeholder-gray-400 focus:outline-none"
      />
      <button className="text-orange-500 tetx-3xl hover:text-orange-400 px-4 py-3">
        SUBSCRIBE
      </button>
    </div>

    {/* Footer Links */}
    <ul className="flex flex-wrap justify-center gap-6 text-white text-xl ">
      <li><a href="#" className="hover:text-orange-500">Best Sellers</a></li>
      <li><a href="#" className="hover:text-orange-500">Gift Ideas</a></li>
      <li><a href="#" className="hover:text-orange-500">New Releases</a></li>
      <li><a href="#" className="hover:text-orange-500">Today's Deals</a></li>
      <li><a href="#" className="hover:text-orange-500">Customer Service</a></li>
    </ul>

    {/* Help Line */}
    <p className="text-xl text-white">Help Line Number : +1 1800 1200 1200</p>

    {/* Copyright */}
    <p className="text-xl text-white mt-15">
      © 2020 All Rights Reserved. Design by Free HTML Templates
    </p>
  </div>
</footer>

<div>
  <img src="images/234x60.gif"/>
</div>



      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full  bg-black text-white p-6 shadow-lg z-50">
          <button
            onClick={() => setSidebarOpen(false)}
            className="hover:text-orange-500 text-2xl mb-6 float-right"
          >
            ✖
          </button>
          <div className="clear-both w-50 h-50">
            <h2 className="text-xl mb-6">Menu</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-orange-500 block py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block py-2">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block py-2">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 block py-2">
                  Jewellery
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {sidebarOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
