import { headerLogoWh } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSearch,
  faSignIn,
  faSignOut,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollYFlag, setScrollYFlag] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  // Handle Burger/X Menu Icon Button To Open And Close NavMenu
  const handleMenuNav = () => {
    setScrollYFlag(true);
    setOpenMenu(!openMenu);
  };
  // Handle Resize To Hide Side NavMenu
  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    windowInnerWidth > 991 ? setOpenMenu(false) : null;
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowInnerWidth]);
  // Handle Disallow Scrolling When NavMenu is Open
  useEffect(() => {
    openMenu
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [openMenu]);
  // Handle Change Background Of Header When Scrolling
  useEffect(() => {
    const handleScroll: EventListenerOrEventListenerObject = () => {
      if (window.scrollY > 0) {
        setScrollYFlag(true);
      } else {
        setScrollYFlag(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYFlag]);

  return (
    <header
      className={`w-full h-fit z-50 fixed transition-all  ${
        scrollYFlag ? "bg-lime-500 my-shadow" : "bg-transparent"
      } `}>
      <nav className="my-container flex justify-between items-center relative">
        <a href="/">
          <img
            src={headerLogoWh}
            alt="logo"
            className="h-[80px] w-[160px]"
          />
        </a>
        <ul className="flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white font-medium">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between items-center text-white">
          <button className="p-2">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="p-2">
            <FontAwesomeIcon icon={faSignIn} />
          </button>
          <button className="p-2">
            <FontAwesomeIcon icon={faSignOut} />
          </button>
          <button className="p-2">
            <FontAwesomeIcon icon={faMoon} />
          </button>
          <button
            className="p-2 hidden max-lg:block cursor-pointer"
            onClick={handleMenuNav}>
            {openMenu ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </nav>
      <div
        className={`flex justify-center items-start max-m:w-full w-1/3 h-screen z-40 absolute ${
          openMenu ? "right-0" : "-right-[100%]"
        } top-[80px] bg-white py-10 transition-all duration-500 `}>
        <ul className="flex-1 flex justify-center items-center gap-10  flex-col">
          {navLinks.map((item) => {
            return (
              <li
                key={item.label}
                className="hover:bg-lime-200 w-full 
              p-2 text-center transition-colors">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray font-medium"
                  onClick={() => setOpenMenu(false)}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Nav;
