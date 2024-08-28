import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

function Landing() {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center h-screen z-10">
      <div className="w-full h-full bg-cover bg-center bg-landingBg relative">
        <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-60"></div>
        <div className="absolute top-[50%] -translate-y-[50%] z-10 text-white left-10 w-1/2 max-lg:w-full max-lg:left-0 capitalize p-8">
          <h1 className="text-4xl max-m:text-2xl font-bold font-montserrat">
            we will <span className="text-lime-500">sell</span> all motorbike that meet your
            requirements and also <span className="text-red-500">buy</span> your old one.
          </h1>
          <p className="font-palanquin text-xl text-slate-300 italic mb-10">
            because we value your time our service will help you to choose the best deal just
            contact us.
          </p>
          <Button
            label="Learn More"
            hoverBtn = {true}
            borderColor="border-lime-500"
            bgColorHover="bg-lime-500"
            txtColor="text-lime-500"
            txtColorHover="text-white"
            icon={faArrowRight}
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
