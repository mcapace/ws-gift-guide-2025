export interface Sponsor {
  id: string;
  name: string;
  tagline: string;
  region: string;
  description: string;
  url: string;
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
    logo: string;
  };
}
