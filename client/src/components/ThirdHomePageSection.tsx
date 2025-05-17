import { ThirdHomePageSectionProps } from "../types/types";

function ThirdHomePageSection({
  imageSrc1,
  altText1,
  imageSrc2,
  altText2,
}: ThirdHomePageSectionProps) {
  return (
    <section className=" grid lg:grid-cols-2 justify-items-center  items-center  gap-20  mx-auto max-w-100rem md:p-8   mb-20  min-h-[720px]">
      {/* Image Section */}
      <div className="hidden md:grid md:w-3/4 lg:w-full grid-cols-12 content-center   ">
        <img
          className="col-start-1 col-span-8 row-start-1 pt-[20%]  z-10"
          src={imageSrc1}
          alt={altText1}
        />
        <img
          className="col-start-4 col-end-[-1] row-start-1"
          src={imageSrc2}
          alt={altText2}
        />
      </div>
      {/* TextSection */}
      <div className=" w-full  m-5   space-y-5 md:pt-4  ">
        <h2 className="text-black font-bold text-3xl uppercase ">ORIGINS</h2>
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
          className="text-blue-500 hover:text-blue-700 underline text-xl"
        >
          Discover the entire story
        </a>
      </div>
    </section>
  );
}

export default ThirdHomePageSection;
