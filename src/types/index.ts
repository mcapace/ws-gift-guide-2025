export interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  region: string;
  description: string;
  url: string;
  social?: {
    instagram?: string;
    facebook?: string;
  };
  promo: {
    hasPromo: boolean;
    code: string | null;
    text: string | null;
  };
  price?: string;
  includedPerks?: string[];
  wineTypes: string[];
  images: {
    hero: string;
    alt?: string;
    logo: string;
  };
}
