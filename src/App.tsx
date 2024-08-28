import BrandsLogos from "./components/BrandsLogos";
import Nav from "./components/Nav";
import Landing from "./sections/Landing";
import OurProducts from "./sections/OurProducts";
import FeaturedProducts from "./sections/FeaturedProducts";
import SellBike from "./sections/SellBike";
import AboutUs from "./sections/AboutUs";

const App = () => (
  <main className="relative">
    <Nav />
    <Landing />
    <BrandsLogos />
    <OurProducts />
    <FeaturedProducts/>
    <SellBike/>
    <AboutUs/>
  </main>
);

export default App;
