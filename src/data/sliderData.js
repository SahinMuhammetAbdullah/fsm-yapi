const brands = [
    "Demirdöküm", "ECA", "Vaillant", "Viessmann", "Bosch", "Buderus",
    "Ferroli", "Baymak", "Daikin", "Airfel", "Warmhaus", "Protherm", "Copa"
  ];
  
  export const sliderData = brands.map((brand, index) => ({
    id: index + 1,
    // ARTIK SADECE ARKA PLAN RESMİ VAR
    // ÖNEMLİ: Bu resimlerin içinde markanın logosu da olmalı
    backgroundImageUrl: `/assets/images/slider/desktop/${brand.toLowerCase()}-bg.png`,
    backgroundImageUrlMobile: `/assets/images/slider/mobile/${brand.toLowerCase()}-bg-mobile.png`,
    title: `${brand} Yetkili Satıcı`,
    description: `Yüksek verimli ${brand} kombi, klima ve ısıtma çözümleriyle tanışın. Ücretsiz keşif ve montaj hizmetleri için bize ulaşın.`,
    link: "/#iletisim",
    linkText: "Teklif Al",
  }));