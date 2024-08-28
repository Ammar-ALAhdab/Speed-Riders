import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, pariatur atque
            delectus in est eius soluta asperiores.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex w-12 h-12 items-center justify-center bg-white rounded-full ">
                <img
                  src={icon.src}
                  alt={icon.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:ga-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 cursor-pointer font-montserrat text-base leading-normal hover:text-slate-gray">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:items-center max-sm:flex-col">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright All Rights Reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
