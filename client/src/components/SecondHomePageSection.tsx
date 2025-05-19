function SecondHomePageSection() {
  return (
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
            France and Romania. Together with the team he has formed, he ensures
            that the balance, taste and quality of the products create an
            unforgettable gastronomic landscape.
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
  );
}

export default SecondHomePageSection;
