/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../ui/Navbar";
import { dataForProducts } from "../data/dataForProducts";

function Works() {
  const [activeNav, setActiveNav] = useState("Product Design");

  const navItems = [
    "Product Design",
    "Low - Codes",
    "Branding",
    "Illustrations",
  ];

  return (
    <section className="bg-white px-10 __section-inner w-full">
      <Navbar isInverted />

      {/* Header and Navigation */}
      <div className="text-black my-5 flex justify-between items-baseline">
        <h1 className="font-medium text-[3.5rem]">My Works</h1>

        <nav>
          <ul className="flex gap-3 items-center bg-[#C5DEFE] rounded-lg px-2 py-1">
            {navItems.map((sec) => (
              <li
                key={sec}
                onClick={() => setActiveNav(sec)}
                role="button"
                className={`px-3 py-[0.3rem] text-black font-bold text-sm cursor-pointer transition-all duration-300 ease border-2 border-transparent
                  ${
                    activeNav === sec
                      ? "bg-black text-white rounded-md -translate-y-3 border-white"
                      : "bg-transparent hover:bg-gray-50 hover:rounded-sm"
                  }`}
              >
                {sec}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-14 h-[30rem] overflow-auto">
        {dataForProducts.map((product, i) => (
          <ProductCard key={product.name} product={product} index={1 + i} />
        ))}
      </section>
    </section>
  );
}

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;
  return (
    <main className={`${!isEven ? "translate-y-5" : ""}`}>
      <div className="flex items-center justify-between">
        <p>
          {product.name}{" "}
          <span className="font-bold text-[#C9C9C9]">AI, Chat All</span>
        </p>

        <a href={product.link} className="font-light text-sm text-[#2F80ED]">
          View Project
        </a>
      </div>

      <div
        className={` ${isEven ? "bg-[#C5DEFE]" : "bg-black"} rounded-xl w-full h-[15rem] md:h-[20rem] mt-4`}
      >
        <img src={product?.img || "#"} alt="" />
      </div>
    </main>
  );
}

export default Works;
