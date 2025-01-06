import Navbar from "../ui/Navbar";

function Works() {
  return (
    <section className="bg-white __section-inner w-full">
      <Navbar isInverted />

      <div className="text-black px-[7rem] mt-5 flex justify-between items-baseline">
        <h1 className="font-medium text-[3.5rem]">My Works</h1>
        <nav>
          <ul className="flex gap-3 items-center bg-[#C5DEFE] rounded-lg px-2 py-1">
            {["Product Design", "Low - Codes", "Branding", "Illustrations"].map(
              (sec) => (
                <li className="p-1 text-black font-medium text-sm" key={sec}>
                  {sec}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Works;
