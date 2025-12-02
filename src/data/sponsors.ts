import type { Sponsor } from "@/types";

export const SPONSORS: Sponsor[] = [
  {
    id: "silver-oak",
    name: "Silver Oak",
    tagline: "Why Wait?",
    region: "Alexander Valley & Napa Valley",
    description: "Give a gift that's already worth celebrating. The Two-Bottle Holiday Gift from Silver Oak pairs their 2021 Alexander Valley and 2020 Napa Valley Cabernets—aged at least four years before release so both are beautifully drinkable the moment the gift is opened.",
    url: "https://silveroak.com/products/two-bottle-holiday-gift?variant=51444891943221&utm_campaign=Wine+Spectator+Holiday+Gift+Guide&utm_source=Wine+Spectator&utm_medium=Digital+Article",
    social: {
      instagram: "https://instagram.com/silveroakcellars",
      facebook: "https://facebook.com/SilverOakCellars"
    },
    promo: {
      hasPromo: false,
      code: null,
      text: "Ready to drink now"
    },
    wineTypes: ["Cabernet Sauvignon"],
    images: {
      hero: "silver-oak-hero.jpg",
      alt: "silver-oak-alt.jpg",
      logo: "silver-oak-logo.png"
    }
  },
  {
    id: "domaine-serene",
    name: "Domaine Serene",
    tagline: "Three Decades of Excellence",
    region: "Willamette Valley, Oregon",
    description: "For over three decades, Domaine Serene has crafted iconic Pinot Noir and Chardonnay. This holiday season, explore rare, limited-edition collections and award-winning wines perfect for personal or corporate gifting.",
    url: "https://www.domaineserene.com/shop/holiday-gifting-3?utm_source=wine_spectator&utm_medium=referral&utm_campaign=ws_gift_guide_2025",
    social: {
      instagram: "https://instagram.com/domaineserene",
      facebook: "https://facebook.com/SereneWine"
    },
    promo: {
      hasPromo: false,
      code: null,
      text: null
    },
    wineTypes: ["Sparkling", "Pinot Noir", "Chardonnay"],
    images: {
      hero: "domaine-serene-alt.jpg",
      alt: "domaine-serene-hero.jpg",
      logo: "domaine-serene-logo.png"
    }
  },
  {
    id: "jcb-collection",
    name: "JCB Collection",
    tagline: "Inspire Desire",
    region: "Napa Valley & Burgundy",
    description: "Inspire Desire this season with wines that turn every moment into a celebration of style. Explore the JCB Collection Holiday Gift Guide and discover remarkable wines that surprise and delight.",
    url: "https://jcbcollection.com/shop/holiday-gift-guide?utm_source=winespectator&utm_medium=digital&utm_campaign=ws_holiday_gift_guide_2025",
    social: {
      instagram: "https://instagram.com/jcb_collection",
      facebook: "https://facebook.com/JCBbyJeanCharlesBoisset"
    },
    promo: {
      hasPromo: false,
      code: null,
      text: null
    },
    wineTypes: ["Sparkling", "Pinot Noir", "Chardonnay"],
    images: {
      hero: "jcb-alt.png",
      alt: "jcb-hero.jpg",
      logo: "jcb-logo.png"
    }
  },
  {
    id: "john-anthony",
    name: "John Anthony Vineyards",
    tagline: "Two Decades of 90+ Point Wines",
    region: "Napa Valley",
    description: "Next-generation Napa Valley Vintner John Anthony Truchard celebrates two decades of 90Pt plus wines with this spectacular Holiday presentation trio of signature Sparkling, Reserve Chardonnay, and Cabernet Sauvignon.",
    url: "https://www.johnanthonyvineyards.com/product/SpectacularTRIO2025?utm_source=giftguide&utm_medium=referral&utm_campaign=_&utm_content=",
    social: {
      instagram: "https://instagram.com/johnanthonyvineyards",
      facebook: "https://facebook.com/JohnAnthonyVineyards"
    },
    promo: {
      hasPromo: true,
      code: "WSGIFT",
      text: "Free shipping + complimentary tasting for two"
    },
    includedPerks: ["Ground shipping included", "Complimentary tasting for two in Carneros"],
    wineTypes: ["Sparkling", "Chardonnay", "Cabernet Sauvignon"],
    images: {
      hero: "john-anthony-hero.jpg",
      alt: "JAV Logo Lockup 2025 3k sq v3.png",
      logo: "john-anthony-logo.png"
    }
  },
  {
    id: "ellman",
    name: "ELLMAN Wine",
    tagline: "Welcome to the Estate",
    region: "Napa Valley",
    description: "Welcoming new collectors begins with three wines that speak to the character of our estate. The 2023 Caryn Renae Sauvignon Blanc, 2022 Brothers Blend, and 2021 Jemma arrive together in our custom gift box, accompanied by a complimentary tasting for two.",
    url: "https://ellmanwine.com/pages/digital-orderform-2025",
    social: {
      instagram: "https://instagram.com/ellmanwine"
    },
    promo: {
      hasPromo: true,
      code: null,
      text: "Complimentary tasting for two included"
    },
    includedPerks: ["Custom gift box", "Tasting for two at ELLMAN Estate", "Added to mailing list"],
    wineTypes: ["Sauvignon Blanc", "Red Blend"],
    images: {
      hero: "ellman-alt.jpg",
      alt: "ellman-hero.png",
      logo: "ellman-logo.jpg"
    }
  },
  {
    id: "copain",
    name: "Copain Wines",
    tagline: "Wines Made for Sharing",
    region: "Sonoma Coast",
    description: "Copain means friend, and our wines are made for sharing. Enjoy elegant, French-inspired wines from cool-climate vineyards this holiday season. Let's raise a glass and celebrate together.",
    url: "http://www.copainwines.com/?src=winespectatorholiday&utm_medium=referral&utm_campaign=ws-holiday-gift-guide&utm_term=webtraffic",
    social: {
      instagram: "https://instagram.com/copainwines",
      facebook: "https://facebook.com/CopainWines"
    },
    promo: {
      hasPromo: true,
      code: "WSCP15",
      text: "15% off + free shipping on $200+"
    },
    wineTypes: ["Pinot Noir", "Chardonnay", "Syrah"],
    images: {
      hero: "copain-alt.jpg",
      alt: "copain-hero.jpg",
      logo: "copain-logo.png"
    }
  },
  {
    id: "calcareous",
    name: "Calcareous Vineyard",
    tagline: "Give with Elegance",
    region: "Paso Robles",
    description: "Give with elegance and ease this holiday season by shopping our thoughtfully curated signature wine sets. Each one is beautifully packaged with an optional personalized note to your loved one.",
    url: "https://www.calcareous.com/shop-wine/holiday-gifts/",
    social: {
      instagram: "https://instagram.com/calcareouswine"
    },
    promo: {
      hasPromo: true,
      code: null,
      text: "$15 flat rate shipping"
    },
    wineTypes: ["Cabernet Sauvignon", "Syrah", "White Blend"],
    images: {
      hero: "calcareous-alt.png",
      alt: "calcareous-hero.png",
      logo: "calcareous-logo.png"
    }
  },
  {
    id: "sullivan-rutherford",
    name: "Sullivan Rutherford Estate",
    tagline: "Celebrate the Season with a Top 100 Cabernet",
    region: "Rutherford, Napa Valley",
    description: "Discover the 2021 Coeur de Vigne from Sullivan Rutherford Estate, an elegant, Old-World–inspired wine with savory depth, minerality, and refined structure. A versatile Napa Valley classic to enjoy now or cellar for years to come. Order by 12/19 for delivery by Christmas with shipping included.",
    url: "https://sullivanwine.com/product/2021-coeur-de-vigne?utm_source=wine-spectator&utm_medium=referral&utm_campaign=holiday-co-op",
    social: {
      instagram: "https://www.instagram.com/sullivan.rutherford.estate?igsh=NTc4MTIwNjQ2YQ=="
    },
    promo: {
      hasPromo: true,
      code: "SULLIVAN",
      text: "Free shipping included"
    },
    wineTypes: ["Cabernet Sauvignon"],
    images: {
      hero: "sullivan-hero.jpg",
      alt: "sullivan-rutherford-estate-coeur-de-vigne.png",
      logo: "SRE Logo.png"
    }
  },
  {
    id: "loco-tequila",
    name: "Loco Tequila",
    tagline: "What every host wants: Loco Ámbar",
    region: "Mexico",
    description: "Complex, sophisticated and agave forward, Loco Ámbar is a masterful blend of four rare casks aged 6-13 months. Enjoy as a sipping spirit, alone or paired with a wide range of grilled foods and with chocolate or caramel desserts. Use code \"LOCOWS\" for complimentary 2-day shipping, exp 12/31/25.",
    url: "https://store.loco-tequila.com/products/loco-ambar-reposado?utm_source=wine-spectator&utm_medium=referral&utm_campaign=holiday-co-op",
    social: {
      instagram: "https://www.instagram.com/locotequilausa",
      facebook: "https://facebook.com/LocoTequila"
    },
    promo: {
      hasPromo: true,
      code: "LOCOWS",
      text: "Complimentary 2-day shipping, exp 12/31/25"
    },
    wineTypes: ["Tequila"],
    images: {
      hero: "DSC00806.jpg",
      alt: "LOCO ÁMBAR 1.jpg",
      logo: "LocoTequila_Logo.png"
    }
  }
];

export const PAGE_CONFIG = {
  title: "2025 Holiday Gift Guide | Wine Spectator",
  description: "Exclusive holiday offers from Wine Spectator advertising partners.",
  hero: {
    headline: "Holiday Gift Guide",
    subhead: "Exclusive offers from our advertising partners",
    year: "2025",
    cta: "Explore Partner Offers",
    disclaimer: "Sponsored Content"
  },
  colors: {
    primary: "#722F37",
    secondary: "C9A962",
    accent: "#1C1C1C",
    background: "#FDFBF7"
  }
};
