import Slider from "../components/Slider";
import FirstHomePageSection from "../components/FirstHomePageSection";
import SecondHomePageSection from "../components/SecondHomePageSection";
import ThirdHomePageSection from "../components/ThirdHomePageSection";
import ForthHomePageSection from "../components/ForthHomePageSection";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Slider />
      <div className="mt-20 font-custom">
        {/* First Section */}
        <FirstHomePageSection
          imageSrc1="/src/assets/section1.jpg "
          altText1="Section1"
          imageSrc2="/src/assets/section11.jpg"
          altText2="Section2"
        />
        {/* Second Section*/}
        <SecondHomePageSection />
        {/* Third Section */}
        <ThirdHomePageSection
          imageSrc1="/src/assets/section1.jpg "
          altText1="Section1"
          imageSrc2="/src/assets/section11.jpg"
          altText2="Section2"
        />
        {/* Image fixed  */}
        <div className="bg-[url('/src/assets/section11.jpg')] bg-cover bg-center bg-fixed h-screen"></div>
        {/* Forth Section */}
        <ForthHomePageSection />
        <Testimonials />
        <Map />
      </div>
    </>
  );
}

export default Home;
