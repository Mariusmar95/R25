import Slider from "../components/Slider";
import FirstHomePageSection from "../components/HomePageSections/FirstHomePageSection";
import SecondHomePageSection from "../components/HomePageSections/SecondHomePageSection";
import ThirdHomePageSection from "../components/HomePageSections/ThirdHomePageSection";

import Map from "../components/Map";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Slider />
      <div className="font-custom">
        {/* First Section */}
        <FirstHomePageSection
          imageSrc1="/section3.jpg "
          altText1="Section1"
          imageSrc2="/section33.jpg"
          altText2="Section2"
        />
        {/* Second Section*/}
        <SecondHomePageSection />
        {/* Third Section */}
        <ThirdHomePageSection
          imageSrc1="/section2.jpg "
          altText1="Section1"
          imageSrc2="/section22.jpg"
          altText2="Section2"
        />
        {/* Image fixed  */}
        <div className="bg-[url('/section11.jpg')] bg-cover bg-center bg-fixed h-screen"></div>
        {/* Forth Section */}

        <Testimonials />
        <Map />
      </div>
    </>
  );
}

export default Home;
