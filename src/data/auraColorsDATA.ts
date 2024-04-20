
const auraColorsDATA = [
  {
    colorId: 1,
    auraColor: "Kırmızı",
    colorPotantial: "Liderlik",
    colorDescription: "Bu güçlü bir renktir. İnsana güçlü bir ego ve başarılı olmak için güçlü bir arzu verir. Bu renk çocuklukta çok bastırılmıştır, özellikle de çocuk, ailenin arzularını yerine getirmeye zorlanıyorsa. Sonuç olarak aura bazen ezik, sıkıcı görünür. Bu kişi yetişkinliğe erince ve kendi ayaklarının üzerinde durmaya başlayınca aurası genişler ve insanın yapmak zorunda olduklarını yapmaya muktedir olduğunu gösterir. Taban rengi kırmızı olan kişiler başkalarına esin verecek enerji, karizma ve dürtülere sahip oldukları için genellikle sorumluluk isteyen, liderlik konumlarına otururlar. Sevgi dolu ve sıcak kalpli olurlar, ayrıca fiziksel anlamda da cesurdurlar. Kırmızının negatif çizgileri sinirlilik hali ve bencilliktir.",
  },
  {
    colorId: 2,
    auraColor: "Turuncu",
    colorPotantial: "Uyum ve işbirliği",
    colorDescription: "Turuncu sıcak, şefkatli bir renktir ve genellikle sezgisel, dokunmayı seven, anlaşması kolay insanların taban rengidir. Bu kişiler başkalarının kendilerini rahat hissetmesini sağlar ve sık sık kendilerini 'bulanık sıları arıtma' görevinde bulurlar. Düşünceli, ayakları yere basan, yetkin ve pratik insanlardır. Sağlam bir duruşları vardır. Turuncunun olumsuz çizgileriyse tembellik ve 'hiç de umurumda değil' tavrıdır.",
  },
  {
    colorId: 3,
    auraColor: "Sarı",
    colorPotantial: "Yaratıcılık, zihinsel parlaklık",
    colorDescription: "Taban rengi sarı olan kişiler heyecanlı, değişken ve heveslidirler. Hızlı düşünürler, başkalarını eğlendirmeyi ve eğlenmeyi severler. Sosyaldirler, uzun sohbetleri severler, her türlü konuda konuşurlar. Öğrenmeye meraklıdırlar ama bir konuyu derinlemesine incelemektense pek çok konunun yüzeyinde kalmayı yeğlerler. Negatif çizgileri utangaçlık ve yalan söylemeye eğilimlidir.",
  },
  {
    colorId: 4,
    auraColor: "Yeşil",
    colorPotantial: "Şifa",
    colorDescription: "Yeşil barışçıl bir renktir ve taban rengi yeşil olan insanlar barışsever ve doğal şşifacılardır. Katılımcı, güven veren ve cömerttirler. Sakin ve anlaşılması kolay insanlardır ama gerekli olduğu zaman son derece inatçı olabilirler. Taban rengi yeşil olan kimselerin fikrini değiştirmenin tek yolu, o fikrin onların kendi fikri olduğuna inanmalarını sağlamaktır. Yeşillerin negatif çizgileri katılık ve olaylara bakışlarında esneklik olmamasıdır."
  },
  {
    colorId: 5,
    auraColor: "Mavi",
    colorPotantial: "Değişkenlik",
    colorDescription: "Bu kişiler genellikle pozitif ve hevesli oldukları için mavi, taban rengi için harika bir renktir. Sonuç olarak da bu kimselerin auraları geniş ve parlaktır. Herkes gibi iniş ve çıkışları çoktur ama nasılsa zorlukları daha bir kolay aşarlar. Mavi taban rengine sahip kişilerin yürekleri her zaman genç kalır. Samimi, dürüst insanlar olup, genellikle akıllarındakileri söylerler. Mavinin negatif çizgisi işleri bitirmede güçlük çekmesidir. İşlere başlamak konusunda çok iyidirler, büyük bir hevesle başlarlar ama bitirmek konusunda aynı azmi göstermezler.",
  },
  {
    colorId: 6,
    auraColor: "Indigo",
    colorPotantial: "Başkalarına karşı sorumluluk",
    colorDescription: "Bu rengi taban rengi olarak belirlemek güç olabilir çünkü kimi zaman neredeyse mora kaçar. Sıcak, şifa veren ve doyurucu bir renktir. Taban rengi indigo olan kişiler genellikle insani yardım konularıyla ilgilenirler. Başkalarına yardım etmekten hoşlanırlar, sevdikleri insanlar çevrelerindeyken çok büyük mutluluk yaşarlar. Indigonun negatif çigisi 'Hayır' demeyi becerememeleridir. Bu tür insanlar başkaları tarafından çok rahatça kullanılır.",
  },
  {
    colorId: 7,
    auraColor: "Mor",
    colorPotantial: "Tinsel ve entelektüel gelişme",
    colorDescription: "Taban rengi mor olan insanlar yaşamları boyunca tinselliklerini geliştirirler. Ne kadar geliştikleriyse auralarındaki bu rengin kalitesiyle ortaya çıkar. Taban rengi mor olan kişiler doğalarının bu yönünü genellikle reddetmeye çalışırlar. Bu onlara mutluluk getirmez ve sonunda yaşamlarıyla ne yapmaları gerektiğini keşfederler. Öğrenmeye ve bilgelikleri artmaya başlayınca, auraları da genişler ve parlaklaşır. Bu rengin negatif çizgisi başkalarına itici gelen bir üstünlük taslama olabilir.",
  },
  {
    colorId: 11,
    auraColor: "Gümüş",
    colorPotantial: "İdealizm",
    colorDescription: "Gümüş, aurada sık rastlanan bir renk olmasına karşın taban rengi olarak pek sık rastlanmaz. Taban rengi gümüş olan insanlar büyük fikirlerle doludurlar ama ne yazık ki bu fikirlerin pek çoğu pratik değildir. Bu insanların genellikle yeterince motivasyonu yoktur, hayalperesttirler, düşlerini gerçeğe dönüştüremezler. Ancak bir kez motive olup da takip etmeye değer bir fikir yakaladıklarında, bu kişilerdeki gelişmeler izlemesi sevinç veren bir başarı haline dönüşür."
  },
  {
    colorId: 22,
    auraColor: "Altın",
    colorPotantial: "Sınırsızlık",
    colorDescription: "Bu, taban rengi açısından en güçlü renktir. İnsanlara geniş boyutlu projeleri ve kafalarına koydukları her şeyi gerçekleştirme becerisi verir. Karizmatik, çok çalışkan, sabırlı ve kendilerine amaç belirleyen kimselerdir. Yaşamda en büyük başarılarını geç kazanırlar. Azizlerin ve öbür tinsel kişilerin başlarının çevresindeki halenin genelde altın rengi olması boşuna değildir, bu onların sonsuz potansiyelini gösterir.",
  },
  {
    colorId: 8,
    auraColor: "Pembe",
    colorPotantial: "Finansal ve maddi başarı",
    colorDescription: "Bu narin görünümlü renk inatçı, kararlı insanların auralarının taban rengidir. Bu kişlerin çıtaları yüksektir ve sarsılmaz bir kararlılıkla amaçlarının peşinden giderler. Güç ve sorumluluk gerektiren konumlara gelmeleri rastlantı değildir ama derinlerinde alçakgönüllü, sakin bir yaşamdan hoşlanan kişilerdir. Sevgi dolu, ince ve kibar, nazik insanlardır ve çevrelerinde sevdikleri kişiler olduğu zaman çok mutludurlar.",
  },
  {
    colorId: 9,
    auraColor: "Bronz",
    colorPotantial: "İnsancıllık",
    colorDescription: "Bu, genellikle bir sonbahar tonudur ve neredeyse paslı olan görünümü son derece çekicidir. Taban rengi bronz olanlar sevgi dolu, başkalarına özen gösteren, insancıl ve yardımsever insanlardır. Yumuşak kalpli ve cömerttirler. Sonuç olarak da sık sık başkalarının baskısı altında kaldıklarından 'hayır' demeyi öğrenmeleri gerekir.",
  },
  {
    colorId: 19,
    auraColor: "Beyaz",
    colorPotantial: "Aydınlanma ve esinleme",
    colorDescription: "Beyaz, saflığın rengidir ve nadir taban rengi olarak rastlanılır. Tüm renkler beyazdan elde edildiğine göre beyaz, ışığın öteki adıdır. Taban rengi beyaz olan kişiler kendilerini silen, alçakgönüllü, azizler kadar insancıldırlar. Bu insanlar son derece sezgisel ve yaşlarının öresinde bilgedirler.",
  }
];

export default auraColorsDATA;
