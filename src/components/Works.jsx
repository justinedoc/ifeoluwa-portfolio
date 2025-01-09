/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import { dataForProducts } from "../data/dataForProducts";
import useScreenSize from "../hooks/useScreenSize";
import { IoArrowUpOutline } from "react-icons/io5";
import { MdOutlineSearchOff } from "react-icons/md";

const navItems = [
  ["All", "Product Design", "Low - Codes"],
  ["Branding", "Illustrations", "Motion Design"],
];

function Works() {
  const [activeNav, setActiveNav] = useState(navItems[0][0]);
  const { isSmallScreened } = useScreenSize();
  const [products, setProducts] = useState(dataForProducts);

  useEffect(() => {
    const filteredProducts =
      activeNav === "All"
        ? dataForProducts
        : dataForProducts.filter((product) =>
            product?.type
              .toLocaleLowerCase()
              .includes(activeNav.toLocaleLowerCase())
          );

    setProducts((prod) => [...new Set([...filteredProducts, ...prod])]);
  }, [activeNav]);

  return (
    <section className="md:px-10 __section-inner w-full">
      {!isSmallScreened && <Navbar isInverted activeNav={"Works"} />}

      {/* Header and Navigation */}
      <div className="text-black md:my-5 flex flex-col md:flex-row md:justify-between md:items-baseline">
        <h1 className="font-bold tracking-tight text-[3.5rem] text-center __anim-left __delay-400">
          My Works
        </h1>

        <nav>
          <ul
            className={`${isSmallScreened ? "hidden" : ""} flex justify-between md:gap-1 items-center bg-[#C5DEFE] rounded-lg px-2 py-1 my-3 md:my-0`}
          >
            {!isSmallScreened &&
              navItems.flat().map((sec) => (
                <li
                  key={sec}
                  onClick={() => setActiveNav(sec)}
                  role="button"
                  className={`px-[0.3rem] min-w-20 text-center py-2 md:px-3 md:py-[0.3rem] text-black text-[0.6rem] font-bold md:text-sm cursor-pointer transition-all duration-300 ease md:border-2 border border-transparent
                }
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

          {isSmallScreened &&
            navItems.map((nav) => (
              <ul
                key={nav}
                className="flex justify-between items-center bg-[#C5DEFE] rounded-lg px-2 py-1 my-3"
              >
                {nav.map((sec) => (
                  <li
                    onClick={() => setActiveNav(sec)}
                    role="button"
                    key={sec}
                    className={`min-w-20 text-center px-[0.3rem] py-1 text-black text-[0.71rem] font-bold cursor-pointer transition-all duration-300 ease md:border-2 border border-transparent
                        }
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
            ))}
        </nav>
      </div>

      {/* FIXME: h-[30rem] overflow-auto */}
      <section className="my-5 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
        {products.length <= 0 ? (
          <NotFound />
        ) : (
          products.map((product, i) => (
            <ProductCard key={i} product={product} index={1 + i} />
          ))
        )}
      </section>
    </section>
  );
}

function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col text-center text-black text-xl col-span-2 mt-3">
      <MdOutlineSearchOff size={96} />
      <span className="font-medium">
        No Projects found for this filter. Please check back later.
      </span>
    </div>
  );
}

function ProductCard({ product, index }) {
  const { isSmallScreened } = useScreenSize();
  const isEven = index % 2 === 0 && !isSmallScreened;
  return (
    <main className={`${!isEven ? "md:translate-y-5" : ""}`}>
      {isEven && (
        <Image isEven={isEven} productImg={product?.img} project={product} />
      )}

      <div className="flex items-center justify-between">
        <p className="__anim-top __delay-500">
          {product.name}{" "}
          <span className="font-bold text-[#C9C9C9]">{product?.category}</span>
        </p>

        <a
          href={product.link}
          className="font-light text-sm min-w-fit text-[#2F80ED] __anim-top __delay-600"
        >
          View Project
        </a>
      </div>

      {!isEven && (
        <Image isEven={isEven} productImg={product?.img} project={product} />
      )}
    </main>
  );
}

function Image({ productImg, project, isEven }) {
  const Animationdelay = !isEven ? " __delay-450" : " __delay-600";
  return (
    <div
      className={`w-full min-h-[15rem] md:min-h-[20rem] my-3 __anim-bottom ${Animationdelay} bg-[#131212] rounded-2xl px-5 pt-5 pb-2`}
    >
      <div className="">
        <img
          className="w-full object-cover"
          src={productImg}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-x-5 space-y-1 items-center py-3 text-[#4F4F4F] font-medium text-sm md:text-base">
        {!project?.expandable ? (
          <>
            <span>
              Project Year:{" "}
              <span className="text-white font-semibold">{project?.year}</span>{" "}
            </span>
            <span>
              Technology:{" "}
              <span className="text-white font-semibold">{project?.tech}</span>{" "}
            </span>
            <span>
              Role:{" "}
              <span className="text-white font-semibold">{project?.role}</span>{" "}
            </span>
          </>
        ) : (
          <div className="w-full flex gap-1 justify-end items-center cursor-pointer">
            <span className="text-base font-semibold">View Image</span>
            <IoArrowUpOutline size={24} className="rotate-45 text-white" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Works;
