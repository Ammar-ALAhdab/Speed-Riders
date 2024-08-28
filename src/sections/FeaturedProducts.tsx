import { useState } from "react";
import Title from "../components/Title";
import { featuredProducts } from "../assets/products";

const theInitialImg = { img: featuredProducts[0].src, title: featuredProducts[0].title };

function FeaturedProducts() {
  const [bigImg, setBigImg] = useState(theInitialImg);
  return (
    <section className="flex flex-col justify-start gap-10 w-full mb-[100px]">
      <div className="my-container">
        <Title
          title="Featured"
          coloredWorld="Products:"
        />
      </div>
      <div className="flex items-center w-full bg-forest-green-light bg-FeaturedBg bg-cover min-h-[450px]">
        <div className="flex justify-between items-center max-m:flex-col gap-5 my-container py-10">
          <div className="flex justify-center items-start flex-col h-full capitalize">
            <h1 className="text-4xl max-m:text-2xl font-bold font-montserrat">
              The New Arrival
              <br />
              <span className="text-lime-300 font-extrabold my-text-shadow-black ">
                Super Sport
              </span>{" "}
              Bike.
            </h1>
            <p className="font-palanquin text-xl text-slate-300 italic mt-4">
              The best Deals for your all sport activity! <br /> Let's Discover it
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center gap-5 max-lg:flex-col-reverse">
            <div className="flex flex-col max-lg:flex-row max-lg:flex-wrap items-center">
              {featuredProducts.map((product) => (
                <div
                  key={product.title}
                  onClick={() => setBigImg({ img: product.src, title: product.title })}
                  className="cursor-pointer rounded-lg border-[1px] border-black p-2 mb-2 max-lg:mr-2 bg-forest-green-light ">
                  <img
                    src={product.src}
                    alt={product.title}
                    width={125}
                    height={75}
                    className="max-w-[125px] max-h-[75px]"
                  />
                </div>
              ))}
            </div>
            <div className="w-[400px] max-m:w-[300px] min-h-[300px] text-center">
              <img
                src={bigImg.img}
                alt={bigImg.title}
                className="object-contain"
              />
              <h2 className="text-2xl my-text-shadow-black font-montserrat text-green-200 font-extrabold my-text-shadow-black ">
                {bigImg.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
