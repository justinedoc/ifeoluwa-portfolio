import { useEffect, useState } from "react";

function useScreenSize() {
  const [size, setSize] = useState(window.innerWidth);
  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const isSmallScreened = size <= 480;
  return { size, isSmallScreened };
}

export default useScreenSize;