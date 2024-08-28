import { brandsLogos } from "../constants";

function BrandsLogos() {
  return (
    <div className="w-full h-fit bg-lime-500">
    <div className="flex justify-around my-container py-2 flex-wrap gap-2">
      {brandsLogos.map((brand, index) => (
        <img
          key={index}
          src={brand.scr}
          alt={brand.alt}
          className="hover:grayscale-[none] grayscale transition-all duration-300 cursor-pointer"
          width={brand.width}
        />
      ))}
    </div>
    </div>

  );
}

export default BrandsLogos;
