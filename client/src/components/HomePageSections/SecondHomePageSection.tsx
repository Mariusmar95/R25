import { Link } from "react-router-dom";

function SecondHomePageSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full overflow-hidden">
      {/*Animation*/}
      <div className="absolute inset-0 opacity-10">
        <div className="top-0 left-0 absolute w-full h-full">
          <div className="top-20 left-20 absolute bg-cyan-400 blur-3xl rounded-full w-64 h-64 animate-pulse"></div>
          <div className="right-20 bottom-32 absolute bg-yellow-400 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000"></div>
          <div className="top-1/2 left-1/2 absolute bg-blue-500 blur-3xl rounded-full w-96 h-96 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 transform"></div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative flex justify-center items-center p-8 lg:p-16 xl:p-20">
          {/*Left border*/}
          <div className="top-1/4 bottom-1/4 left-0 absolute bg-gradient-to-b from-transparent via-cyan-400 to-transparent w-1"></div>

          <div className="space-y-10 max-w-2xl animate-fadeInUp">
            {/*Header*/}
            <div className="relative">
              <span className="flex items-center gap-4 mb-4 font-medium text-cyan-400 text-sm uppercase tracking-wider">
                Culinary Excellence
              </span>
              <h2 className="font-bold text-white text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight tracking-tight">
                <span className="bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent">
                  Geometry
                </span>
                <br />
                <span className="text-white">of the</span>
                <br />
                <span className="bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-white text-transparent">
                  Menu
                </span>
              </h2>

              {/*Line gradient*/}
              <div className="bg-gradient-to-r from-cyan-400 to-yellow-400 mt-6 rounded-full w-20 h-1"></div>
            </div>

            {/*Text*/}
            <div className="gap-8 lg:gap-12 grid">
              <div className="gap-8 grid md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-gray-300 hover:text-white text-lg lg:text-xl leading-relaxed transition-colors duration-300">
                    The unique{" "}
                    <span className="font-semibold text-cyan-400">
                      culinary formulas
                    </span>{" "}
                    reflect our personality, being conceived with pathos by{" "}
                    <span className="font-semibold text-yellow-400">Chef</span>.
                    At their base lies both his unceasing passion for gastronomy
                    and culinary experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-300 hover:text-white text-lg lg:text-xl leading-relaxed transition-colors duration-300">
                    Various, gathered over{" "}
                    <span className="font-semibold text-cyan-400">
                      10 years
                    </span>{" "}
                    from countries such as
                    <span className="font-semibold text-yellow-400">
                      {" "}
                      Norway, France and Romania
                    </span>
                    . Together with the team he has formed, he ensures that the
                    balance, taste and quality create an unforgettable
                    gastronomic landscape.
                  </p>
                </div>
              </div>
              {/*Button*/}
              <div className="pt-6">
                <Link
                  to="/"
                  className="inline-flex items-center gap-4 text-white hover:text-cyan-400 text-lg lg:text-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 hover:from-cyan-500/30 to-blue-500/20 hover:to-blue-500/30 backdrop-blur-sm px-6 py-3 border border-cyan-400/30 hover:border-cyan-400/50 rounded-xl hover:scale-105 transition-all duration-300 transform">
                    <button className="font-semibold">See everything</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Image*/}
        <div className="relative lg:h-screen">
          <div className="z-10 absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900/80"></div>
          <img
            className="w-full h-full object-cover"
            src="/src/assets/section1.jpg"
            alt="Culinary artistry and geometric presentation"
          />
        </div>
      </div>
    </section>
  );
}

export default SecondHomePageSection;
