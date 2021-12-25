import Map from "../components/Map";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Services from "../components/Services";
import MainSlider from "../components/MainSlider";
import FormEstimate from "../components/FormEstimate";
import Secction from "../components/Secction";
import Aboust from "../components/Abouts";
const Home = () => {
 
   return (
    <>
      <MainSlider >
      <FormEstimate />
      </MainSlider>
      <Aboust/>
      <Banner />
      <Services />
      <Secction/>
      <Contact />
      <Map />
    </>
  );
};

export default Home;
