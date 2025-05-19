export type Product = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  type: string | string[];
  ingredients: string[];
};

export interface BannerProps {
  imageSrc: string;
  altText?: string;
}

export interface FirstHomePageSectionProps {
  imageSrc1: string;
  imageSrc2: string;
  altText1?: string;
  altText2?: string;
}

export interface ThirdHomePageSectionProps {
  imageSrc1: string;
  imageSrc2: string;
  altText1?: string;
  altText2?: string;
}

export type Testimonial = {
  id: number;
  name: string;
  image: string;
  text: string;
};
