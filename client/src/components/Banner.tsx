import { BannerProps } from "../types/types";

const Banner = ({ imageSrc, altText = "banner" }: BannerProps) => {
  return (
    <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh]">
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/20 to-slate-900/60 pointer-events-none"></div>
      <img
        className="w-full h-full object-cover"
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
};

export default Banner;
