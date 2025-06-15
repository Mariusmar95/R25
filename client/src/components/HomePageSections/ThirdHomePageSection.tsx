import { Link } from "react-router-dom";
import { ThirdHomePageSectionProps } from "../../types/types";

function ThirdHomePageSection({
  imageSrc1,
  altText1,
  imageSrc2,
  altText2,
}: ThirdHomePageSectionProps) {
  return (
    <section className="relative mt-10 md:mt-5 mb-10 md:mb-5 lg:py-32">
      <div className="relative justify-items-center items-center gap-16 lg:gap-24 grid lg:grid-cols-2 mx-auto px-6 md:px-8 max-w-7xl">
        {/*Text*/}
        <div className="space-y-8 w-full max-w-2xl animate-fadeIn">
          <div className="relative">
            <div className="top-0 -left-2 absolute bg-gradient-to-b from-cyan-400 to-yellow-400 rounded-full w-1 h-16"></div>
            <span className="block mb-2 pl-6 font-medium text-cyan-600 text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="pl-6 font-bold text-slate-900 text-4xl lg:text-5xl uppercase tracking-tight">
              <span className="bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-600 text-transparent">
                Origins
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="font-light text-slate-800 text-xl lg:text-2xl leading-relaxed">
              Welcome to the place where the{" "}
              <span className="font-medium text-cyan-600">
                geometry of taste
              </span>{" "}
              meets good will!
            </p>

            <div className="space-y-4 text-lg">
              <p className="hover:text-slate-900 transition-colors duration-300">
                We'll assume you didn't end up here by pure chance. Maybe you're
                looking for something
                <span className="font-semibold text-yellow-600">
                  #good
                </span>{" "}
                that manifests itself through a unique culinary adventure. Or
                maybe you're just curious.
              </p>

              <p className="hover:text-slate-900 transition-colors duration-300">
                We won't talk about how tasty our dishes are here. Nor about the
                concept behind them or the team. But, in case we've piqued your
                curiosity, we've prepared a special section where you can learn
                the Lemon story.
              </p>
            </div>
          </div>

          {/*Button*/}
          <div className="pt-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl px-8 py-4 border hover:border-white/20 border-transparent rounded-2xl font-semibold text-white transition-all hover:-translate-y-1 duration-300 transform"
            >
              <button className="text-lg">Discover the entire story</button>
            </Link>
          </div>
        </div>
        {/*Images*/}
        <div className="hidden md:block relative w-full max-w-2xl">
          <div className="relative content-center grid grid-cols-12">
            <div className="z-20 relative col-span-8 col-start-1 row-start-1 hover:scale-105 transition-transform duration-700 transform">
              <div className="relative shadow-2xl rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={imageSrc1}
                  alt={altText1}
                />
              </div>
            </div>

            <div className="z-10 relative col-start-4 col-end-[-1] row-start-1 hover:scale-105 transition-transform duration-700 delay-100 transform">
              <div className="relative shadow-xl mt-16 rounded-2xl overflow-hidden">
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
