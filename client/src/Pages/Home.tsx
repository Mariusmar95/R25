import Slider from "../components/Slider";
import FirstHomePageSection from "../components/HomePageSections/FirstHomePageSection";
import SecondHomePageSection from "../components/HomePageSections/SecondHomePageSection";
import ThirdHomePageSection from "../components/HomePageSections/ThirdHomePageSection";
import ForthHomePageSection from "../components/HomePageSections/ForthHomePageSection";
import Map from "../components/Map";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Slider />
      <div className="font-custom">
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
          imageSrc1="/src/assets/section2.jpg "
          altText1="Section1"
          imageSrc2="/src/assets/section22.jpg"
          altText2="Section2"
        />
        {/* Image fixed  */}
        <div className="bg-[url('/src/assets/section11.jpg')] bg-cover bg-center bg-fixed h-screen"></div>
        {/* Forth Section */}
        <ForthHomePageSection
          imageSrc1="/src/assets/section3.jpg "
          altText1="Section3"
          imageSrc2="/src/assets/section33.jpg"
          altText2="Section3"
        />
        <Testimonials />
        <Map />
      </div>
    </>
  );
}

export default Home;
