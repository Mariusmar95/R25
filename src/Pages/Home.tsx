import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <Slider />

      <div className="mt-20 mb-20 font-custom">
        {/* First Section */}
        <section className="  grid content-center lg:grid-cols-2  p-10 rounded-lg mb-20 ">
          {/* Image Section */}
          <div className="grid grid-cols-12 content-center  relative  ">
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
          <div className=" w-full space-y-6 m-5  ">
            <h2 className="text-black font-bold text-2xl uppercase ">
              ORIGINI
            </h2>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              explicabo, tempore incidunt dolorem corrupti quae commodi,
              consectetur qui modi vero eaque, libero ex voluptate ea fugiat vel
              adipisci quasi corporis.
            </p>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias praesentium iusto rem a error vitae quod facilis fuga
              iure saepe assumenda eligendi nemo dolorum vero ratione voluptates
              neque, commodi at.
            </p>
            <p className="text-black text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              facilis totam mollitia ducimus perferendis quas iste corporis
              consequuntur! Quos possimus perferendis pariatur deleniti
              explicabo. Suscipit consequatur praesentium a autem quasi.
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Descopera intreaga poveste
            </a>
          </div>
        </section>

        {/* Second Section*/}
        <section className="w-full  grid grid-cols-1 md:grid-cols-2 bg-shade">
          {/* Text Section */}
          <div className="grid grid-cols-12 gap-4 p-8 md:p-10 lg:p-12">
            <div className="col-span-12 ">
              <h2 className="text-white font-bold text-2xl  uppercase">
                ORIGINI
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-white text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ducimus deleniti aliquam veniam ullam illum delectus
                quam expedita reiciendis ab sunt laboriosam aspernatur corporis
                officia dolores dolor adipisci, iste assumenda?
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt in cupiditate, nisi dicta architecto rem amet laborum
                tenetur dignissimos quae ipsam tempora ea facere repudiandae
                molestias cum quibusdam magnam velit?
              </p>
            </div>
            <div className="col-span-12">
              <a
                href="/"
                className="text-blue-500 hover:text-blue-700 underline text-base md:text-lg lg:text-xl inline-block transition-colors duration-300"
              >
                Descopera intreaga poveste
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
        <section className="font-custom mt-20 grid content-center lg:grid-cols-2  p-10 rounded-lg mb-20 ">
          {/* Image Section */}
          <div className="grid grid-cols-12 content-center  relative  ">
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
          <div className="space-y-6 m-5">
            <h2 className="text-black font-bold text-2xl uppercase">ORIGINI</h2>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ducimus deleniti aliquam veniam ullam illum delectus
              quam expedita reiciendis ab sunt laboriosam aspernatur corporis
              officia dolores dolor adipisci, iste assumenda?
            </p>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              in cupiditate, nisi dicta architecto rem amet laborum tenetur
              dignissimos quae ipsam tempora ea facere repudiandae molestias cum
              quibusdam magnam velit?
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Descopera intreaga poveste
            </a>
          </div>
        </section>
        {/* Image fixed  */}
        <div className="h-screen bg-[url('/src/assets/section11.jpg')] bg-cover bg-center bg-fixed"></div>
        {/* Forth Section */}
        <section className="font-custom mt-20 grid content-center lg:grid-cols-2  p-10 rounded-lg mb-20 ">
          {/* Image Section */}
          <div className="grid grid-cols-12 content-center  relative  ">
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
          <div className="space-y-6 m-5">
            <h2 className="text-black font-bold text-2xl uppercase">ORIGINI</h2>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ducimus deleniti aliquam veniam ullam illum delectus
              quam expedita reiciendis ab sunt laboriosam aspernatur corporis
              officia dolores dolor adipisci, iste assumenda?
            </p>
            <p className="text-black text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              in cupiditate, nisi dicta architecto rem amet laborum tenetur
              dignissimos quae ipsam tempora ea facere repudiandae molestias cum
              quibusdam magnam velit?
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-xl"
            >
              Descopera intreaga poveste
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
