interface MainLaneData {
  title: string;
  content: string;
  yapiciPotansiyeller: string[];
  olumsuzPotansiyeller: string[];
  yikiciPotansiyeller: string[];
}

interface MainLaneDataCollection {
  [key: number]: MainLaneData;
}

const mainLaneDATA: MainLaneDataCollection = {
  1: {
    title: "Tipoloji 1",
    content: `Yönetmek ve liderlik etmek isterler tek başına çalışmayı ekip ile çalışmaya yeğler. Yeteneklerinin farkındadır. Bu yüzden egosu yüksektir. Sürekli övgü ve taktir bekler. Gücünü ve yönetimsel yetenekleri göstereceği fırsatları kollar. Yaratmak ve ilk olarak yapan olmak ister. Detaylar onu pek ilgilendirmez. O daha çok konunun kaynağı ile ilgilidir. Oldukça kontrolcüdür. Aşk onun için mutlaka olması gereken bir motivasyon kaynağı değildir. İş hayatında net bir şekilde adil ve güvenilirdir.
    Ihtiyacı olan şey ise bireyselliği aşmak için hayatında takım çalışmakarına daha fazla yer vermektir. Yetenekleriyle gurur duyar, 'Benim eşim, benim çocuklarım, benim evim' onun için önemli tanımlamalardır.`,
    yapiciPotansiyeller: [
      "Yaratıcı",
      "Cesur",
      "Öncü",
      "Kudretli",
      "İradeli",
      "Bağımsız",
      "Kudret",
    ],
    olumsuzPotansiyeller: [
      "Zalim",
      "Egoist",
      "Kural tanımaz",
      "Etik değerlere saygı duymayan",
      "Yok olma korkusu",
      "Kendini beğenmişlik",
      "Zıtlık",
      "Sabit fikirlilik",
      "Her ne olursa olsun önce ben diyen karakter",
    ],
    yikiciPotansiyeller: ["Kavgacılık", "Aşırı bencillik"],
  },
  2: {
    title: "Tipoloji 2: AŞIK",
    content: `Yönetmek ve liderlik etmek isterler tek başına çalışmayı ekip ile çalışmaya yeğler. Yeteneklerinin farkındadır. Bu yüzden egosu yüksektir. Sürekli övgü ve taktir bekler. Gücünü ve yönetimsel yetenekleri göstereceği fırsatları kollar. Yaratmak ve ilk olarak yapan olmak ister. Detaylar onu pek ilgilendirmez. O daha çok konunun kaynağı ile ilgilidir. Oldukça kontrolcüdür. Aşk onun için mutlaka olması gereken bir motivasyon kaynağı değildir. İş hayatında net bir şekilde adil ve güvenilirdir.
    Ihtiyacı olan şey ise bireyselliği aşmak için hayatında takım çalışmakarına daha fazla yer vermektir. Yetenekleriyle gurur duyar, 'Benim eşim, benim çocuklarım, benim evim' onun için önemli tanımlamalardır.`,
    yapiciPotansiyeller: [
      "Yaratıcı",
      "Cesur",
      "Öncü",
      "Kudretli",
      "İradeli",
      "Bağımsız",
      "Kudret",
    ],
    olumsuzPotansiyeller: [
      "Zalim",
      "Egoist",
      "Kural tanımaz",
      "Etik değerlere saygı duymayan",
      "Yok olma korkusu",
      "Kendini beğenmişlik",
      "Zıtlık",
      "Sabit fikirlilik",
      "Her ne olursa olsun önce ben diyen karakter",
    ],
    yikiciPotansiyeller: ["Kavgacılık", "Aşırı bencillik"],
  },
  3: {
    title: "Tipoloji 3: OYUNCU",
    content: `Anahtar sözcükler: neşe, coşku, yaratıcılık, kişisellik ve sanat. 'Eğlence ve neşe nerede?' işte 3'ün yaşam sloganı. 3 sayısı jüpiter tarafından yönetilir. 3 sayısı insanı; sürekli mutluluk duygusuna, güçlü bir hayal gücüne, içten dostluk yeteneğine, iyimserliğe sürekli köpüren bir coşku ve neşelenme gücüne, kıymet birliğine, yüksek sanat aşkına ve sosyal uyumluluğa sahiptir. Özgürlüğüne düşkündür. Hayatı olduğu gibi kabul eder ve cesaret kırıcı olaylara ya da hatalara güler geçer. Evlilik,  aşk ya da iş hayatındaki üzüntüleri kafasına takmaz. Çocuklara ve hayvanlara düşkündür. Konsantrasyon ve sabra ihtiyacı vardır. Organizatördür. 3 insanı yaşam yoluna doğal yetenekle başlar, onda mükemmel bir sezgi ve kehanet yeteneği vardır. Eğer bu gücü tam anlamıyıyla bilebilir ve ortaya atmaktan çekinmezse geleceği algılayabilir ve çevreisni yönlendirebilir. Sanat ile biraz ilgiliyse 3 sayısının titreşimleri 3 insanına konuşma ve yazma alanında büyük etki verecek ve kolaylık sağlayacaktır. Flört etmeyi sever fakat çoğunlukla bağlanmaz.`,
    yapiciPotansiyeller: [
      "Organizatör",
      "Öğretmen",
      "Karmaşıklığı toplar",
      "Ciddi",
      "Tutkulu",
      "Ateş elementi",
      "Güçlü hayal gücü",
      "Müzisyen",
      "Oyuncu",
      "Yazar",
      "Sunucu",
      "Yetenek",
      "El becerisi",
      "Coşku",
    ],
    olumsuzPotansiyeller: [
      "Artistik ifade",
      "Ayran gönüllü",
      "İlgisiz",
      "Küstah",
      "Sürekli şakacı olmak",
      "Ani sert davranış",
      "Pireyi deve yapmak",
      "Kibir",
    ],
    yikiciPotansiyeller: [
      "İki yüzlülük",
      "Züppelik",
      "Aşırı inat",
      "Emir komutu ile işi halletme",
      "Savurgan",
    ],
  },
  4: {
    title: "Tipoloji 4: ÇALIŞMAK - MUHAFIZ",
    content: `Anahtar sözcükleri: çalışmak, disiplin, sınırlamak ve düzene koymak. Pratik olmak ve de otoriterdir. "Şimdi sırası mı? görüyorsun ki meşgulüm..." 4'ün yaşam sloganıdır.
    4 sayısı Güneş tarafından yönetilir boğa ve oğlak burçlarının etkisi altında tutar. Kararlı, yapıcı, metotlu, ekonomik, sebep ve sonucu iyi görebilen, ciddi, güven verici, etkileyici, asil, ağırbaşlıdır. Zekidir, sabit fikirlidir, pratik ve sabırlı organizasyon yapar. Uyumludur, devrimcidir, hizmet etmeyi sever, evini, ailesini, ülkesini sever, üstlerine vicdanına, geleneklerine uyar. Sahte davranışlardan ve samimiyetsizlikten hoşlanmaz, geniş fikirliliğe geçerek modası geçmişlikten kurtulmaya ihtiyacı vardır.`,
    yapiciPotansiyeller: ["Pratik hizmet, ekonomik, açık sözlü, vatanseverlik, sadakat, kendini adama, uyum sağlama, tutarlılık."],
    olumsuzPotansiyeller: ["Dikkatsiz, tembellik, ölçüsüzlük, detaylara fazla boğulma, eli sıkılık, yetersizlik, kısıtlama."],
    yikiciPotansiyeller: ["Aşırı sertleşmek, kabalık, nefret, terbiyesizlik, vicdansızlık. Dört insanı,  inşaatçı, mekanik uzmanı, muhasebeci, iş adamı, mühendis, mimar, yönetici ve laboratuvar araştırmacısı olabilir."],
  },
  5: {
    title: "Tipoloji 5: YENİLİKÇİ",
    content: `Anahtar sözcükler: Özgürlük, aktif olmak, geliştiricilik, devrimcilik, çok yönlü ve değişimleri kabullenmek. " Senin için her şeyi daha iyi yapabilirim" yaşam sloganıdır. Merkür tarafından yönetilir. İkizler ve aslan burçlarını etkiler. 5 insanı bağımsızlık meraklısı, duygusal, önsezileri yüksek, fırsatçı ve yaratıcı, keyifli, neşeli, esnek, yumuşak başlı, gayretli, gelenek ve kurallara aykırı ve de yorulmak bilmez biridir. Bazen ilginç etkileri vardır ani değişim korkuları, ruhsuzluk ve eskiye meraklılık, aşırı tereddüt, şüphecilik, durgunluk gibi bütün sayıların arasında en meraklı olanlardır. Yüksek enerjisiyle çevresindeki herkese canlılık, hareket ve eylem getirir. Sık sık sevgili değiştirir ama bununla kalmayıp sık sık yaşamını ve kişiliğini de değiştirerek çevresindekileri şaşkınlığa uğratır. Çok çeşitli fikirlere, güneş ışığına ve kalabalıklara ihtiyaç duyar Sadakat, sabır ve sebata ihtiyaç duyar, araştırmayı sever olağanüstü gözlem gücü ile çevresindekileri aydınlatır ve başarırda. Maddi manevi yaralar alsa bile dışarıya belli etmez, her sabah yaşama yeni doğmuş gibi başlar. Dün dünde kalmıştır. 5 insanına dün kötülük eden kişi bugün yeniden şansını deneyebilir.`,
    yapiciPotansiyeller: ["Özgürlük, zihinsel merak, önsezileri yüksek, yumuşak başlılık, gayretli, seyahat, macera, hayat tecrübesi, adrenalin."],
    olumsuzPotansiyeller: ["Düşüncesizlik, çılgınlık, mantıksızlık, dikkatsizlik, zevksizlik, maymun iştahlılık, sorumsuzluk, eleştiriye tahammülsüzlük."],
    yikiciPotansiyeller: ["Aşırı tereddüt, huzursuzluk duygusu, alkol ve esrar, alkol düşkünlüğü, şehvet. Turizmci, yayıncı, araştırmacı, yazar, gazeteci, politikacı, dedektif, film yönetmeni, satıcılık gibi meslekler yaparlar."],
  },
  6: {
    title: "Tipoloji 6: EBEVEYN",
    content: `Anahtar sözcükler: sorumluluk, yargı ve uyumludur. 6 insanları için en önemli olay, başkalarının yardımına koşmak ve sevdiklerini korumaktır. Venüs tarafından yönetilir. Balık ile Yengeç burçlarını etkisi altına alır. İnsancıl, ruhen mutlu, uyumlu, kıymet bilen, güvenilir, şefkatli, saygılıdır. Karizmatik, yüksek enerjili, sevecendir. Şifacıdır, parayı çeker, romantiktir, değişmeyen bir sevgi yuva ister. Huzur ve sığınak bir yer arayanlar için en iyi sığınak ve koruyucudur. Geniş fikirli ve sempatiktir, kibar ve anlayışlıdır. Herkesin diksiyonuna el atmadan duramaz, çok iyi bir psikologdur. İnsan sarrafıdır, övgü ve teşekkürden hoşlanır.`,
    yapiciPotansiyeller: ["Düzen, müzikten keyif alan, anlayış, evcilik, çözüm sunma, vicdan, adalet, yuva."],
    olumsuzPotansiyeller: ["Duyarsızlık, kindarlık, içe kapanıklık, kusur arayıcılık, vurdumduymazlık, saldırganlık, aile içinde dediğim dedik, üzerine vazife olmayan işlere karışma."],
    yikiciPotansiyeller: ["Egoistlik, kölelik, idrak eksikliği, hor görme."],
  },
  7: {
    title: "Tipoloji 7: RUHSAL",
    content: `Anahtar sözcükler: Bu sayının insanı duygusal, yaratıcı, hayalperest, entellektüel, teknisyen, derin, çalışkan vakur onurlu ve titiz biridir. " Ben seni incelerim, araştırırım. " işte 7'nin yaşam sloganı. Tüm yaşamı boyunca, sizin düşünce tarzınız ve dünya görüşünüz bu doğrultuda oldu ve olacak. 7 sayısı evrenin Gizem ve kudret sayısıdır. Sayılar, evrenin güç kaynağıdır. Neptün gezegeni tarafından yönetilir, akrep ve kova burçlarının yönettiğine İnanılır. Aslında 7 sayısının Gizemi tam olarak çözülememiştir. 7 sayısının anahtar sözcükleri, bilgi, anlayış, gerçeği aramak, ruhsallık, orijinallik, ve analiz etmektir. Bugüne kadar yaşanan ve yaşanacak yaşam yolunda bu güçlü etkiler sizi yönlendirecektir. Dakiklerdir, kendi iç dünyasında, sessiz ve huzurlu bir hayat sürmek isterler. İçine dönüp yalnız kalmak istediği için yanlış anlaşılma riski taşır, antika mobilyaları, resimleri ve tarihi sever. Analiz yapmayı, olayı her yönüyle ele almayı sever, erdemleri için aranan birisidir. Ancak toplum içinde göze batmayı sevmez, çekingendir. Çok iyi sır saklar, tek başına ama yalnız olmamayı öğrenmelidir.`,
    yapiciPotansiyeller: ["Huzur, inanç, insan acıyla olgunlaşır inancı, saflık-i maneviyata düşkünlük, kökenleri sorgulama."],
    olumsuzPotansiyeller: ["Yeterli, kültürlü olduğuna inanmama, üstünkörülük, sert eleştiri, şüphecilik, suçluluk kompleksi, sabırsızlık, bağnazlık, bilgiçlik ve ukalalık, bir olayla baş edemediğinde hastalanmak, utangaç."],
    yikiciPotansiyeller: ["İnançsızlık, hilekarlık, hırsızlık, kurnazlık, alkolizm, arabesk ruh halleri. 7 insanı olarak, bilimin her alanında, kimyacı, matematikçi,kanun adamı, tıp mensubu, sihirbaz,  ulaştırmacı, yazar, cerrah, kameraman, sosyolog ve psikolog olabilirsiniz."],
  },
  8: {
    title: "Tipoloji 8: DÜNYEVİ",
    content: `Anahtar sözcükler: 8 sayısının anahtar sözcükleri organizasyon, yargı, denge, maddi başarı, otorite, güç ve kudret arayışıdır. " Kuralları ben koyarım " , 8'in yaşam sloganıdır. 8 sayısı Satürn tarafından yönetilir. Aynı zamanda da Oğlak burcuna etkisi altındadır. 8 sayısının getirdiği etkiler güçlülük, disiplin, bağımsızlık, kendine güvenen sorumluluk, başarılı olmak, araştırmak, başarmak, her konuda kesinlikle ve kararlılık, işbirliği yeteneği, cüretkarlık ve ataklıktır. Büyük işler isterler, her türlü maddi konuda başarı isterler. Organizasyon ve mali konularda başarılıdırlar. İdare etmek ve yönetmekten hoşlanırlar, rakipleri ile mücadeleden hoşlanırlar, zaferinden emindirler. Dayanıklı, cesur, dengeli ve kararlı olmalıdırlar. Hayal gücüne sahiptirler, zayıf insanlar için adaletli ve hoşgörülü davranmaya ihtiyaçları vardır.`,
    yapiciPotansiyeller: ["güvenilirlik, çalışkanlık, idarecilik yeteneği, liderlik, başarı, güç, kendine güven, pratiklik, güç."],
    olumsuzPotansiyeller: ["Aşırı soğukluk, çekingenlik, ilişkisizlik, dikkatsizlik, kurallara karşı gelmek, toyluk ve incinebilirlik, organizasyon eksikliği, sabit fikirlilik, para hırsı, boşa harcanan enerji, korkutucu düşman, şöhret arzusu."],
    yikiciPotansiyeller: ["Sömürü, intikam, adaletsizlik, zulüm, zorbalık, terbiyesizlik, vicdansızlık. 8 insan olarak yayıncılık, yazarlık, bankacılık, politikacılık, finansörlük, toprak ve gayrimenkul alım satımı, avukatlık, arkeologluk, antikacılık ve belediyecilik gibi meslekleri seçebilir."],
  },
  9: {
    title: "Tipoloji 9: SANATÇI",
    content: `Anahtar kavramlarımız: Hümanizm, kardeşlik, bağışlama, kucaklama ve yardımseverlik. "9", evrenin son halkası ve zirvesidir. Bu güç, Mars tarafından yönetilir ve Kova ile Balık burçlarını etkiler. Idealizm, yaratıcılık, sevecenlik, anlayış ve alçak gönüllülük gibi etkileri vardır. Kendinize güvenli görünseniz bile duygularınızı genellikle gizlersiniz. İş konularında kolayca aldanabilrisiniz. Elementiniz yoktur ve bütün insanlığa hizmet etmek istersiniz. Varoluşunuza aşıksınız ve elinizde hiçbir şey kalmamış olsa bile vermeye ve paylaşmaya isteklisinizdir. Gerçeklik ve erdem konularında derin bir anlayışa sahipsiniz ve insanları kültürlerine veya ırklarına göre değil, içsel niteliklerine göre değerlendirirsiniz. İlişkilerden ve karşı cinsle olan etkileşimlerden büyük öğrenme fırsatları bulursunuz. Sanatsal yaratıcılığınızı geliştirmek için doğru eğitimle büyük bir potansiyele sahip olabilirsiniz. Denge ve duygusal kontrol, beden farkındalığıyla birlikte geliştirilmelidir çünkü zihniniz çok hareketlidir.`,
    yapiciPotansiyeller: [
      "Sevgi, adalet, dünya halklarının kardeşliği, saflık, çocukluk, cesaretli, konuşkan, merhametli, hayırlı işler, affetme, çekicilik, romantizm, geniş görüşlülük, sanatsal ilham, hislilik, şifacı.",
    ],
    olumsuzPotansiyeller: ["Unutkanlık, kibirlilik, herkesten uzak kalma güdüsü, kesin kararlı olmamak, kayıtsızlık, duyarsızlık, içe dönüklük, soğukluk, toplumu sevmemek, acı ve kırıcı olmak, cimrilik ve sıkıcılık, yaranma çabası, amaçsız hayal kurma, benmerkezci olma."],
    yikiciPotansiyeller: ["Zihin dağınıklığı, ahlaksızlık, kaba sabalık, küskünlük, duvar örmek .Meslek olarak tiyatro veya sinema oyunculuğu, ressamlık, gazetecilik, restorancılık, eğlence organizatörlüğü, turizmci, doktorluk ve konuşmacı olmayı seçebilir."],
  },
  11: {
    title: "Tipoloji 11: İDEALİST",
    content: `Hayalcidir ve önsezindir. 1 ile 9 arasındaki kulvarların deneyimine sahiptir. Deneyimlerinin çoğunun başka gezegenlerde olgunlaştırdığından dolayı insanlığı ve dünyayı tanımaya ve anlamaya ihtiyacı vardır. Soyut kavramlarla düşünür, kişilerle uğraşmaz. Elektriksel bir beyni vardır ve önemli icatlar yapabilir.`,
    yapiciPotansiyeller: [
      "Mucitlik, şiirsellik, sanat, gayret, yücelik, şehitlik, maddiyatçı olmamak.",
    ],
    olumsuzPotansiyeller: [
      "Cimrilik, uyuşukluk, anlayış yoksunu, kendini üstün görme."
    ],
    yikiciPotansiyeller: [
      "Aşırı cimrilik, rezalet çıkarmaya meyilli, şeytanilik, kaba saba davranışlar."
    ]
  },
  19: {
    title: "TİPOLOJİ 19: İNİSİYE",
    content: `Tarikat ehli kişiliktir, önceki hayatında üstadı talip olmuş, yola girmiştir. İbadet merasimlerinden geçerek yaşam tarzını bunlara göre düzenlemiştir. İlahi aşk ilkelerinin peşindedir. 1 ile 11 arasındaki kulvarların deneyimine sahiptir.`,
    yapiciPotansiyeller: [
      "Özü sözü bir, incinse de incitmeme, huzur, denge, bütün canlılara merhamet ve şevkat, şifa, teslimiyet, ilahi aşk."
    ],
    olumsuzPotansiyeller: [
      "Hayattan elini eteğini çekme,aşırı vericilik, bu dünyaya ait hissetmeme duygusu, üstünlük taslama"
    ],
    yikiciPotansiyeller: [
      "Maneviyata kendini tamamen kapatmak, ahlaksız."
    ]
  },
  22: {
    title: "TİPOLOJİ 22: ÜSTAD",
    content: `Pratiktir, sınırsız bir güce sahiptir ve her durumun ustasıdır. Güven sarsıcı karakteri yoktur, sonsuzluğun efendileridir. Gözleri yıldızlar kadar ayakları ise yerdedir. Derin liderliğine 2'nin kibarlığına, üçünün hayal gücüne, 4'ün sabrına, 5'in bağımsızlığına ve gelişmesine, 6'nın dengesine, 7'nin ruhsallığına, 8'in idareci gücüne, 9'un insanlık sevgisine, 11'in önsezilerine ve 19'un hizmet aşkına sahiptir.`,
    yapiciPotansiyeller: [
      "Evrensel yücelme, maddenin efendisi, vizyonunu geliştirme, her türlü konuda güç."
    ],
    olumsuzPotansiyeller: [
      "Çabuk yoldan otorite sahibi olma, isteksiz hizmet, yabancılaşma."
    ],
    yikiciPotansiyeller: [
      "Kara büyü, kötü fikirlilik."
    ]
  },
};

export default mainLaneDATA;
