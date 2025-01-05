function Dots({ placements }) {
  return Array.from({ length: 4 }, (_, i) => (
    <div
      key={i}
      className="bg-[#F3FFFE] h-10 w-10 rounded-full absolute"
      style={placements[i]}
    ></div>
  ));
}

export default Dots;
