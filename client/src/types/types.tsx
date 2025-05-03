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
