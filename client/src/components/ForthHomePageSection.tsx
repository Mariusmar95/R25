function ForthHomePageSection() {
  return (
    <section className="justify-items-center items-center gap-20 grid lg:grid-cols-2 mx-auto mt-20 lg:mt-0 mb-20 md:p-8 max-w-100rem min-h-[720px]">
      {/* Image Section */}
      <div className="hidden content-center md:grid grid-cols-12 md:w-3/4 lg:w-full">
        <img
          className="z-10 col-span-8 col-start-1 row-start-1 pt-[20%]"
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
      <div className="space-y-5 m-5 md:pt-4 w-full">
        <h2 className="font-bold text-black text-3xl uppercase">ORIGINS</h2>
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
          curiosity, we've prepared a special section where you can learn the
          Lemon story.
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 text-xl underline"
        >
          Discover the entire story
        </a>
      </div>
    </section>
  );
}

export default ForthHomePageSection;
