import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Slider />

      <div className="mt-20 mb-20 font-custom">
        {/* First Section */}
        <section className=" grid lg:grid-cols-2 justify-items-center  items-center  gap-20  mx-auto max-w-100rem md:p-8   mb-20  min-h-[40rem]">
          {/* Image Section */}
          <div className="hidden md:grid md:w-3/4 lg:w-full grid-cols-12 content-center   ">
            <img
              className="col-start-1 col-span-8 row-start-1 pt-[20%]  z-10"
              src="/src/assets/section1.jpg"
              alt="section1"
            />
            <img
              className="col-start-4 col-end-[-1] row-start-1"
              src="/src/assets/section11.jpg"
              alt="banner"
            />
          </div>
          {/* TextSection */}
          <div className=" w-full  m-5   space-y-5 md:pt-4  ">
            <h2 className="text-black font-bold text-3xl uppercase ">
              ORIGINS
            </h2>
            <p className="text-black text-xl">
              Welcome to the place where the geometry of taste meets good will!
            </p>
            <p className="text-black text-xl">
              We'll assume you didn't end up here by pure chance. Maybe you're
              looking for something #good that manifests itself through a unique
              culinary adventure. Or maybe you're just curious.
            </p>
            <p className="text-black text-xl">
              We won't talk about how tasty our dishes are here. Nor about the
              concept behind them or the team. But, in case we've piqued your
              curiosity, we've prepared a special section where you can learn
              the Lemon story.
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Discover the entire story
            </a>
          </div>
        </section>

        {/* Second Section*/}
        <section className="w-full  grid grid-cols-1 md:grid-cols-2 bg-shade  justify-items-center  items-center  gap-20   mb-20  ">
          {/* Text Section */}
          <div className="grid grid-cols-12 gap-4 p-8  lg:p-12 w-full space-y-5">
            <div className="col-span-12 ">
              <h2 className="text-white font-bold text-3xl uppercase ">
                Geometry of the Menu
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-white text-xl">
                The unique culinary formulas reflect our personality, being
                conceived with pathos by Chef . At their base lies both his
                unceasing passion for gastronomy and culinary experiences.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-white text-xl">
                Various, gathered over 10 years from countries such as Norway,
                France and Romania. Together with the team he has formed, he
                ensures that the balance, taste and quality of the products
                create an unforgettable gastronomic landscape.
              </p>
            </div>
            <div className="col-span-12">
              <a
                href="/"
                className="text-blue-500 hover:text-blue-700 underline text-base md:text-lg lg:text-xl inline-block transition-colors duration-300"
              >
                See everything
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="h-[400px] md:h-[720px] lg:h-[720px] w-full">
            <img
              className="w-full h-full object-cover"
              src="/src/assets/section1.jpg"
              alt="section1"
            />
          </div>
        </section>

        {/* Third Section */}
        <section className=" grid lg:grid-cols-2 justify-items-center  items-center  gap-20  mx-auto max-w-100rem md:p-8   mb-20  min-h-[720px]">
          {/* Image Section */}
          <div className="hidden md:grid md:w-3/4 lg:w-full grid-cols-12 content-center   ">
            <img
              className="col-start-1 col-span-8 row-start-1 pt-[20%]  z-10"
              src="/src/assets/section1.jpg"
              alt="section1"
            />
            <img
              className="col-start-4 col-end-[-1] row-start-1"
              src="/src/assets/section11.jpg"
              alt="banner"
            />
          </div>
          {/* TextSection */}
          <div className=" w-full  m-5   space-y-5 md:pt-4  ">
            <h2 className="text-black font-bold text-3xl uppercase ">
              ORIGINS
            </h2>
            <p className="text-black text-xl">
              Welcome to the place where the geometry of taste meets good will!
            </p>
            <p className="text-black text-xl">
              We'll assume you didn't end up here by pure chance. Maybe you're
              looking for something #good that manifests itself through a unique
              culinary adventure. Or maybe you're just curious.
            </p>
            <p className="text-black text-xl">
              We won't talk about how tasty our dishes are here. Nor about the
              concept behind them or the team. But, in case we've piqued your
              curiosity, we've prepared a special section where you can learn
              the Lemon story.
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Discover the entire story
            </a>
          </div>
        </section>
        {/* Image fixed  */}
        <div className="h-screen bg-[url('/src/assets/section11.jpg')] bg-cover bg-center bg-fixed"></div>

        {/* Forth Section */}
        <section className=" grid lg:grid-cols-2 justify-items-center  items-center  gap-20  mx-auto max-w-100rem md:p-8   mb-20 mt-20 lg:mt-0  min-h-[720px]">
          {/* Image Section */}
          <div className="hidden md:grid md:w-3/4 lg:w-full grid-cols-12 content-center   ">
            <img
              className="col-start-1 col-span-8 row-start-1 pt-[20%]  z-10"
              src="/src/assets/section1.jpg"
              alt="section1"
            />
            <img
              className="col-start-4 col-end-[-1] row-start-1"
              src="/src/assets/section11.jpg"
              alt="banner"
            />
          </div>
          {/* TextSection */}
          <div className=" w-full  m-5   space-y-5 md:pt-4  ">
            <h2 className="text-black font-bold text-3xl uppercase ">
              ORIGINS
            </h2>
            <p className="text-black text-xl">
              Welcome to the place where the geometry of taste meets good will!
            </p>
            <p className="text-black text-xl">
              We'll assume you didn't end up here by pure chance. Maybe you're
              looking for something #good that manifests itself through a unique
              culinary adventure. Or maybe you're just curious.
            </p>
            <p className="text-black text-xl">
              We won't talk about how tasty our dishes are here. Nor about the
              concept behind them or the team. But, in case we've piqued your
              curiosity, we've prepared a special section where you can learn
              the Lemon story.
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Discover the entire story
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
