import Arrival from "../components/home/arrival";
import Discount from "../components/home/discount";
import Sale from "../components/home/sale";
import Services from "../components/home/services";
import SliderShow from "../components/home/sliderShow";

const Home = () => {
  return (
    <>
      <SliderShow />
      <Services />
      <Discount />
      <Arrival />
      <Sale />
    </>
  );
};
export default Home;
