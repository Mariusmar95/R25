import { BannerProps } from "../types/types";

const Banner = ({ imageSrc, altText = "banner" }: BannerProps) => {
  return (
    <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh]">
      <img
        className="w-full h-full object-cover"
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
};

export default Banner;
