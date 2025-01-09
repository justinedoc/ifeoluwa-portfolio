export const animations = (sr) => {
  console.log("ScrollReveal initialized:", sr);

  const rightElements = document.querySelectorAll(".__anim-right");
  console.log("Right elements found:", rightElements);

  sr.reveal(".__anim-right", { origin: "right" });
  sr.reveal(".__anim-left", { origin: "left" });
  sr.reveal(".__anim-top", { origin: "top" });
  sr.reveal(".__anim-bottom", { origin: "bottom" });

  sr.reveal(".__fade-in", {
    opacity: 0,
    duration: 900,
    easing: "ease-in-out",
    distance: "0px",
    viewFactor: 0.4,
  });

  for (let i = 1; i < 100; i++) {
    const elements = document.querySelectorAll(`.__delay-${i * 50}`);
    if (elements.length) {
      sr.reveal(`.__delay-${i * 50}`, { delay: i * 50 });
    }
  }
};