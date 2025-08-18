export const siteData = {
    companyName: "FSM YAPI",
    companyFullName: "FSM YAPI MİMARLIK MÜHENDİSLİK İNŞAAT TAAHHÜT SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
    logoText: "FSM YAPI",
    logoUrl: "/assets/logo.png",
    phones: {
        general1: "0362 505 51 51",
        general2: "0543 590 94 95",
    },
    emails: {
        info: "info@fsmyapi.com",
    },
    address: {
        line1: "KIRAN MAHALLESİ BARIŞ BULVARI NO:20/A",
        line2: "İLKADIM - SAMSUN",
        mapsQuery: "41.2835852,36.3072461",
        // YENİ EKLENEN HARİTA GÖMME URL'Sİ
        embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.161696640798!2d36.3072461!3d41.2835852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877e0d33370ff%3A0x894ff18afe3e06c8!2sFsm%20Yap%C4%B1%20Do%C4%9Falgaz%20-%20Kombi%20-%20Petek%20Tesisat!5e0!3m2!1str!2str!4v1753905979346!5m2!1str!2str"
    },
    workingHours: [
        { day: 'Pazartesi', hours: '08:30 - 19:00' },
        { day: 'Salı', hours: '08:30 - 19:00' },
        { day: 'Çarşamba', hours: '08:30 - 19:00' },
        { day: 'Perşembe', hours: '08:30 - 19:00' },
        { day: 'Cuma', hours: '08:30 - 19:00' },
        { day: 'Cumartesi', hours: '08:30 - 19:00' },
        { day: 'Pazar', hours: 'Kapalı' }
    ],
    googleReviewsUrl: "https://www.google.com/maps/place/Fsm+Yap%C4%B1+Do%C4%9Falgaz+-+Kombi+-+Petek+Tesisat/@41.2835852,36.3072461,17z/data=!4m8!3m7!1s0x408877e0d33370ff:0x894ff18afe3e06c8!8m2!3d41.2835852!4d36.3072461!9m1!1b1!16s%2Fg%2F11cjqb95x_?hl=tr&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D",
    socials: {
        whatsapp: "905435909495",
        whatsappMessage: "Merhaba FSM YAPI, ısıtma ve soğutma hizmetleriniz hakkında bilgi almak istiyorum.",
    },
    copyright: `© ${new Date().getFullYear()} FSM Yapı Mim. Müh. İnş. Taah. San. Tic. Lim. Şti. Tüm hakları saklıdır.`,
};

// navLinks ve quickActionsData aynı kalıyor...
export const navLinks = [
    { text: "Ana Sayfa", to: "/#anasayfa" },
    { text: "Hakkımızda", to: "/#hakkimizda" },
    {
        text: "Hizmetlerimiz",
        to: "/#hizmetler",
        // Dropdown artık bir obje dizisi, her obje bir grubu temsil ediyor
        dropdown: [
            {
                title: "Genel Bakış", // Veya başlığı boş bırakabilirsiniz
                links: [
                    { text: "Hizmet Detayları", to: "/hizmetler" }
                ]
            },
            {
                // Grup 1: Bölgeler
                title: "Hizmet Bölgelerimiz",
                links: [
                    { text: "Atakum", to: "/hizmet-bolgesi/atakum" },
                    { text: "İlkadım", to: "/hizmet-bolgesi/ilkadim" },
                    { text: "Canik", to: "/hizmet-bolgesi/canik" },
                    { text: "Tekkeköy", to: "/hizmet-bolgesi/tekkekoy" },
                ]
            },
            {
                // Grup 2: Hizmetler
                title: "Hizmet Alanlarımız",
                links: [
                    { text: "Proje & Taahhüt", to: "/hizmet-alanlari/proje-taahhut" },
                    { text: "Kombi ve Şofben", to: "/hizmet-alanlari/kombi-sofben" },
                    { text: "Isı Pompası Sistemleri", to: "/hizmet-alanlari/isi-pompasi" },
                    { text: "Klima Sistemleri", to: "/hizmet-alanlari/klima-sistemleri" },
                    { text: "Radyant Isıtma", to: "/hizmet-alanlari/radyant-isitma" },
                    { text: "Merkezi Sistemler", to: "/hizmet-alanlari/merkezi-sistemler" },
                    { text: "VRF Ticari Klimalar", to: "/hizmet-alanlari/vrf-sistemleri" },
                    { text: "Yerden Isıtma", to: "/hizmet-alanlari/yerden-isitma" },
                    { text: "Sıcak Hava Üreticileri", to: "/hizmet-alanlari/sicak-hava-ureticileri" },
                ]
            }
        ]
    },
    { text: "Markalar", to: "/#markalar" },
    { text: "Galeri", to: "/#galeri" },
    { text: "İletişim", to: "/#iletisim" },
    { text: "Yorumlar", to: "/#yorumlar" },
];

export const quickActionsData = [
    {
        type: 'tel',
        target: siteData.phones.general1,
        icon: 'fa-solid fa-phone', // GÜNCELLENDİ
        title: 'TELEFON 1',
        description: 'Bilgi ve Randevu Hattı',
        label: siteData.phones.general1,
    },
    {
        type: 'tel',
        target: siteData.phones.general2,
        icon: 'fa-solid fa-headset', // GÜNCELLENDİ (Daha uygun bir ikon)
        title: 'TELEFON 2',
        description: 'Proje ve Destek Hattı',
        label: siteData.phones.general2,
    },
    {
        type: 'whatsapp',
        icon: 'fa-brands fa-whatsapp', // GÜNCELLENDİ (Marka ikonu)
        title: 'WHATSAPP DESTEK',
        description: 'Hızlı Mesajlaşma',
        label: 'Mesaj Gönder',
    },
    {
        type: 'maps',
        icon: 'fa-solid fa-map-location-dot', // GÜNCELLENDİ
        title: 'ADRESİMİZ',
        description: 'Ofisimizi Ziyaret Edin',
        label: 'Yol Tarifi Al',
    },
];

// YENİ: Footer'da kullanılacak linkler için veri yapısı
export const footerLinks = {
    // İlk sütun
    kurumsal: {
        title: 'Kurumsal',
        links: [
            { text: 'Ana Sayfa', to: '/', type: 'link' },
            { text: 'Galeri', to: '/galeri', type: 'link' },
            { text: 'Yorumlar', to: '/yorumlar', type: 'link' },
            { text: 'İletişim', to: '/iletisim', type: 'hash' }
        ]
    },
    // İkinci sütun (yeni eklenen)
    hizmetBolgeleri: {
        title: 'Hizmet Bölgelerimiz',
        links: [
            { text: 'Atakum', to: '/hizmet-bolgesi/atakum', type: 'link' },
            { text: 'İlkadım', to: '/hizmet-bolgesi/ilkadim', type: 'link' },
            { text: 'Canik', to: '/hizmet-bolgesi/canik', type: 'link' },
            { text: 'Tekkeköy', to: '/hizmet-bolgesi/tekkekoy', type: 'link' }
        ]
    },
    // İkinci sütun (yeni eklenen)
    hizmetAlanlari: {
        title: 'Hizmet Alanlarımız',
        links: [
            { text: "Proje & Taahhüt", to: "/hizmet-alanlari/proje-taahhut" },
            { text: "Kombi ve Şofben", to: "/hizmet-alanlari/kombi-sofben" },
            { text: "Isı Pompası Sistemleri", to: "/hizmet-alanlari/isi-pompasi" },
            { text: "Klima Sistemleri", to: "/hizmet-alanlari/klima-sistemleri" },
            { text: "Radyant Isıtma", to: "/hizmet-alanlari/radyant-isitma" },
            { text: "Merkezi Sistemler", to: "/hizmet-alanlari/merkezi-sistemler" },
            { text: "VRF Ticari Klimalar", to: "/hizmet-alanlari/vrf-sistemleri" },
            { text: "Yerden Isıtma", to: "/hizmet-alanlari/yerden-isitma" },
            { text: "Sıcak Hava Üreticileri", to: "/hizmet-alanlari/sicak-hava-ureticileri" },
        ]
    }
};