import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Keyboard } from "swiper/modules";
import { products } from "../assets/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useEffect, useState } from "react";

type ProductsCardTypeProps = {
  brand: string;
  type: string;
};

function ProductsCard({ brand, type }: ProductsCardTypeProps) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    const Productfilter = (brandFilter: string, typeFilter: string) => {
      const filterType = () => {
        switch (typeFilter) {
          case "all":
            setFilteredProducts(products.filter((product) => product.brand === brandFilter));
            break;
          case "sport":
            setFilteredProducts(
              products.filter(
                (product) => product.brand === brandFilter && product.type === typeFilter
              )
            );
            break;
          case "cruiser":
            setFilteredProducts(
              products.filter(
                (product) => product.brand === brandFilter && product.type === typeFilter
              )
            );
            break;
          case "touring":
            setFilteredProducts(
              products.filter(
                (product) => product.brand === brandFilter && product.type === typeFilter
              )
            );
            break;
        }
      };
      if (brandFilter === "all" && typeFilter === "all") {
        setFilteredProducts(Array.from(products));
      } else if (brandFilter === "all" && typeFilter === "sport") {
        setFilteredProducts(Array.from(products).filter((product) => product.type === "sport"));
      } else if (brandFilter === "all" && typeFilter === "cruiser") {
        setFilteredProducts(Array.from(products).filter((product) => product.type === "cruiser"));
      } else if (brandFilter === "all" && typeFilter === "touring") {
        setFilteredProducts(Array.from(products).filter((product) => product.type === "touring"));
      } else if (brandFilter === "BMW") {
        filterType();
      } else if (brandFilter === "Suzuki") {
        filterType();
      } else if (brandFilter === "Kawasaki") {
        filterType();
      } else if (brandFilter === "Honda") {
        filterType();
      } else if (brandFilter === "Harley Davidson") {
        filterType();
      }
    };

    Productfilter(brand, type);
  }, [brand, type]);
  return (
    <div className="h-[440px] my-[25px] select-none">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
        modules={[Pagination, Keyboard]}
        className="mySwiper w-full h-full p-2"
        navigation={false}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}>
        {filteredProducts instanceof Array
          ? filteredProducts.map((product) => (
              <SwiperSlide
                key={product.title}
                className="w-[200px] h-fit my-shadow rounded-xl overflow-hidden bg-lime-500 cursor-pointer transition-colors my-hover">
                <div className="p-4">
                  <img
                    className="w-full h-[150px] hover:scale-110 transition-all duration-200"
                    src={product.src}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="bg-forest-green-dark p-4 child transition-colors">
                  <h3 className="my-2 text-lg font-bold text-white font-montserrat">
                    {product.title}
                  </h3>
                  <div className="w-full flex gap-5 my-2">
                    <span className="italic font-bold text-slate-300 text-lg">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-300 text-sm">
                      ${Math.round(product.price + product.price / 10)}
                    </span>
                  </div>
                  <div className="mb-5">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${product.rate >= 1 ? "text-yellow-600" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${product.rate >= 2 ? "text-yellow-600" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${product.rate >= 3 ? "text-yellow-600" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${product.rate >= 4 ? "text-yellow-600" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`${product.rate >= 5 ? "text-yellow-600" : ""}`}
                    />
                  </div>
                  <Button
                    label="Buy Now!"
                    hoverBtn = {true}
                    borderColor="border-lime-500"
                    bgColorHover="bg-lime-500"
                    txtColor="text-lime-500"
                    txtColorHover="text-white"
                    icon={faCartFlatbed}
                  />
                </div>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </div>
  );
}

export default ProductsCard;
