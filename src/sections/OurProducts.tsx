import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import ProductsCard from "../components/ProductsCard";
import Title from "../components/Title";
import { FormEvent, useState } from "react";

function OurProducts() {
  const [brand, setBrand] = useState("all");
  const [type, setType] = useState("all");
  const handleSelectBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
  };
  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section
      id="products"
      className="py-[100px]">
      <div className="flex flex-col justify-start gap-10 my-container">
        <Title
          title="Our"
          coloredWorld="Products:"
        />
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-[10px] flex-wrap w-2/3 max-m:w-full  mx-auto bg-forest-green-dark p-4 rounded-lg">
          <div className="flex items-center gap-[10px]">
            <select
              value={brand}
              onChange={handleSelectBrand}
              name="brand"
              id="brand"
              className="h-10 outline-none p-2 cursor-pointer rounded-lg">
              <optgroup label="Brands:">
                <option
                  value="all"
                  defaultValue={"true"}>
                  All Brands
                </option>
                <option value="BMW">BMW</option>
                <option value="Harley Davidson">Harley</option>
                <option value="Honda">Honda</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="Suzuki">Suzuki</option>
              </optgroup>
            </select>
            <select
              name="type"
              id="type"
              value={type}
              onChange={handleSelectType}
              className="h-10 outline-none p-2 cursor-pointer rounded-lg">
              <optgroup label="Type:">
                <option
                  value="all"
                  onChange={() => setType("all")}
                  defaultValue={"true"}>
                  All Types
                </option>
                <option
                  value="sport"
                  onChange={() => setType("sport")}>
                  Sport
                </option>
                <option
                  value="cruiser"
                  onChange={() => setType("cruiser")}>
                  Cruiser
                </option>
                <option
                  value="touring"
                  onChange={() => setType("touring")}>
                  Touring
                </option>
              </optgroup>
            </select>
          </div>
          <div className="flex items-center gap-[10px] max-xsm:flex-col">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search "
              className="h-10 outline-none p-2 cursor-pointer rounded-lg"
            />
            <Button
              label="Search"
              hoverBtn = {true}
              borderColor="border-lime-500"
              bgColorHover="bg-lime-500"
              txtColor="text-lime-500"
              txtColorHover="text-white"
              type="submit"
              icon={faSearch}
            />
          </div>
        </form>
        <ProductsCard
          brand={brand}
          type={type}
        />
      </div>
    </section>
  );
}

export default OurProducts;
