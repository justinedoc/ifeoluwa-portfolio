function useNavLinks({ activeLinkName, isInverted }) {
  const links = [
    { name: "Home", link: "#home" },
    { name: "Works", link: "#works" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "https://onifadeifeoluwacv.netlify.app" },
  ];

  return links.map((link) => (
    <li
      key={link.name}
      className={`flex-shrink-0 cursor-pointer relative overflow-hidden ${
        isInverted ? "text-white" : "text-black"
      } transition duration-300 ease-in-out group`}
    >
      <a
        className={`${link.name === activeLinkName ? "font-extralight" : "before:w-0"} group-hover:text-gray-600 before:transition-all`}
        href={link.link}
      >
        {link.name}
      </a>
    </li>
  ));
}

export default useNavLinks;
