// src/data/reviewsData.js

export const allReviews = [
    {
        name: "Fahri Bulut",
        text: "Samsun Canik Teknepınar Mahallesindeki müstakil evimiz için, internet yorumlarına göre iletişime geçtiğimiz FSM  Yapı hemen keşfe gelip zaman kaybetmeden makul bir fiyatlamaya süreci başlattı. Müşteri iletişiminden, yapılan işçiliğe ve makul ürün önerilerine kadar her seviyede müşteri memnuniyetini önde tutan bir firma bence. Başta Fuat ve Alper Bey  olmak üzere tüm çalışanların emeğine sağlık👏👏👏",
        stars: 5
    },
    {
        name: "Musa BAYRAK",
        text: "Samsun atakum ilçesinde bulunan evim için doğal gaz yaptırmaya karar verdiğimde fazlası ile araştırma yaptım. Son olarak FSM yapıya kara verdim. Samsun piyasasında en iyi fiyatı verdiler. İşçilik olarakta diğer firmalar ev içerisindeki doğal gaz borusunu işlerine kolay gelecek şekilde geçiriken. FSM boruyu neredeyse tamamen gizledi. Tanış olarak değil internet kullanıcı olarak yorumu yapıyorum.  Yazdıklarım umarım sizlerede fikir sahibi olur. Son olarak dedikleri tarihte gelip dedikleri şekilde işlerini yaptılar tşk.",
        stars: 5
    },
    {
        name: "Fatih Baltacı",
        text: "Yapılan işçilik ten dolayı çok memnun kaldım söyledik leri saate ve zaman da işi mi teslim ettiler ekibe ve Fuat beye teşekkürler",
        stars: 5
    },
    {
        name: "Huseyin Mutioglu",
        text: "Tavsiye edilir.guvenilir kaliteli bir isletme.",
        stars: 5
    },
    {
        name: "Namık Okuyucu",
        text: "İlgili firma",
        stars: 4
    }
    ,
    {
        name: "Anes Alrawi",
        text: "Çok uygun fiyatlar",
        stars: 5
    }
];

/**
 * Bir diziyi yerinde karıştırmak için Fisher-Yates (aka Knuth) Shuffle algoritması.
 * @param {Array} array Karıştırılacak dizi.
 */
function shuffleArray(array) {
    // Orijinal diziyi bozmamak için bir kopyasını oluşturuyoruz
    const newArray = [...array]; 
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Ana sayfada gösterilecek yorumları dinamik olarak oluştur (sayfa her yenilendiğinde farklı 3 yorum gelir)
export const mainPageReviews = shuffleArray(allReviews).slice(0, 3);

// Yorumlar sayfasında tüm yorumları göstermek için (orijinal sıralı hali)
export const allReviewsData = allReviews;