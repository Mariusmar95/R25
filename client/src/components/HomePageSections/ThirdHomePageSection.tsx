import { ThirdHomePageSectionProps } from "../../types/types";

function ThirdHomePageSection({
  imageSrc1,
  altText1,
  imageSrc2,
  altText2,
}: ThirdHomePageSectionProps) {
  return (
    <section className="relative mt-10 md:mt-6 mb-10 md:mb-6 lg:py-32">
      <div className="relative justify-items-center items-center gap-16 lg:gap-24 grid lg:grid-cols-2 mx-auto px-6 md:px-8 max-w-7xl">
        {/*Text*/}
        <div className="space-y-8 w-full max-w-2xl animate-fadeIn">
          <div className="relative">
            <div className="top-0 -left-2 absolute bg-gradient-to-b from-cyan-400 to-yellow-400 rounded-full w-1 h-16"></div>
            <span className="block mb-2 pl-6 font-medium text-cyan-600 text-sm uppercase tracking-wider">
              Our Specialties
            </span>
            <h2 className="pl-6 font-bold text-slate-900 text-4xl lg:text-5xl uppercase tracking-tight">
              <span className="bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-600 text-transparent">
                Signature
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="font-light text-slate-800 text-xl lg:text-2xl leading-relaxed">
              Discover the dishes that made us{" "}
              <span className="font-medium text-cyan-600">legendary</span> in
              the local culinary scene!
            </p>

            <div className="space-y-4 text-lg">
              <p className="hover:text-slate-900 transition-colors duration-300">
                From our famous lemon-herb grilled specialties to our
                <span className="font-semibold text-yellow-600">
                  #award-winning
                </span>{" "}
                signature sauces, each dish represents years of perfecting
                recipes and techniques.
              </p>

              <p className="hover:text-slate-900 transition-colors duration-300">
                Our chef's selections change with the seasons, but our
                commitment to excellence remains constant. These are the plates
                that keep our guests coming back for more.
              </p>
            </div>
          </div>

          {/*Button*/}
        </div>
        {/*Images*/}
        <div className="hidden md:block relative w-full max-w-2xl">
          <div className="relative content-center grid grid-cols-12">
            <div className="z-20 relative col-span-10 col-start-1 row-start-1 hover:scale-105 transition-transform duration-700 transform">
              <div className="relative shadow-2xl rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imageSrc1}
                  alt={altText1}
                />
              </div>
            </div>

            <div className="z-10 relative col-start-3 col-end-[-1] row-start-1 hover:scale-105 transition-transform duration-700 delay-100 transform">
              <div className="relative shadow-xl mt-16 rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imageSrc2}
                  alt={altText2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdHomePageSection;
