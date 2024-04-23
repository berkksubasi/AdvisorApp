import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-elements";
import Star from "../components/animatebackground/Star";
import { calculateSideLane } from "../functions/yanKulvar";
import sideLaneDATA from "../data/sideLaneDATA";
import { calculate } from "../functions/anaKulvar";
import { calculateFonKulvar } from "../functions/fonKulvar";
import fonLaneDATA from "../data/fonLaneDATA";
import calculateAuraColor from "../functions/calculateAuraColor";
import auraColorsDATA from "../data/auraColorsDATA";
import { ButtonGoBack } from "../components/button";
import mainLaneDATA from "../data/mainLaneDATA";
import peakDATA from "../data/peakDATA";
import struggleDATA from "../data/struggleDATA";
import purposeOfLifeDATA from "../data/purposeOfLifeDATA";

interface FonLaneResultProps {
  route: {
    params: {
      typologyId?: number;
      description: string;
      chakraCounts: number[];
      name: string;
      lastname: string;
      birthdate: string;
      esmaulHusnaResult: number;
      maidenName?: string;
      mainLaneData: MainLaneDataCollection;
      peaks: number[];
      struggles: number[];
      purposes: number;
    };
  };
}

const PremiumResultView: React.FC<FonLaneResultProps> = ({ route }) => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const [animatedValue] = useState(new Animated.Value(0));
  const starColors = [
    "#FFD700",
    "#FFA500",
    "#FF6347",
    "#00FFFF",
    "#FFFF00",
    "#32CD32",
    "#FF1493",
    "#7B68EE",
  ];
  const numberOfStars = 500;
  const { peaks, struggles } = route.params;
  const [sideLaneData, setSideLaneData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const [mainLaneData, setMainLaneData] = useState<{
    title: string;
    content: string;
    yapiciPotansiyeller: string[];
    olumsuzPotansiyeller: string[];
    yikiciPotansiyeller: string[];
  } | null>(null);

  const [fonLaneData, setFonLaneData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const [auraColor, setAuraColor] = useState<string>(""); // Aura rengi için state
  const [colorDescription, setColorDescription] = useState<string>(""); // Renk açıklaması için state
  const [colorPotantial, setColorPotantial] = useState<string>(""); // Renk potansiyeli için state
  const [purposeTitle, setPurposeTitle] = useState<string | null>(null);
  const [purposeID, setPurposeID] = useState<number | null>(null);
  const [purposeDescription, setPurposeDescription] = useState<string | null>(
    null
  );
  useEffect(() => {
    startAnimation();
    calculateAndSetYanKulvar();
    calculateAndSetAnaKulvar();
    calculateAndSetFonKulvar();
    calculateAndSetAuraColor();
    const purposeNumber = route.params.purposes;

    // Veri kaynağından hayat amacı numarasına göre amaç değerini bul
    const foundPurpose = purposeOfLifeDATA.find(
      (item) => item.purposeSum === purposeNumber
    );

    // Bulunan hayat amacı değerlerini state'lere set et
    if (foundPurpose) {
      setPurposeTitle(foundPurpose.purposeTitle);
      setPurposeDescription(foundPurpose.purposeDescription);
      setPurposeID(foundPurpose.purposeID);
    }
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 0.1,
        duration: 100000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const calculateAndSetYanKulvar = () => {
    const yanKulvar = calculateSideLane(
      route.params.name,
      route.params.lastname,
      route.params.maidenName || ""
    );
    const data = sideLaneDATA.find((item) => item.id === yanKulvar);
    if (data) {
      setSideLaneData(data);
    }
  };

  const calculateAndSetAnaKulvar = () => {
    const anaKulvar = calculate(
      route.params.name,
      route.params.lastname,
      route.params.maidenName || ""
    );
    const data = mainLaneDATA[anaKulvar];
    if (data) {
      setMainLaneData(data);
    }
  };

  const calculateAndSetFonKulvar = () => {
    const fonKulvar = calculateFonKulvar(
      route.params.name,
      route.params.lastname,
      route.params.maidenName || ""
    );

    const foundFonKulvar = fonLaneDATA.find(
      (item) => item.typologyId === fonKulvar
    );
    if (foundFonKulvar) {
      setFonLaneData(foundFonKulvar);
    }
  };

  const calculateAndSetAuraColor = () => {
    const aura = calculateAuraColor(route.params.birthdate); // Doğum tarihinden aura rengini hesapla
    setAuraColor(aura); // Hesaplanan aura rengini state'e ata

    // Hesaplanan aura rengi ile uyumlu veriyi auraColorsDATA'dan al ve state'leri güncelle
    const foundAuraColor = auraColorsDATA.find(
      (item) => item.auraColor === aura
    );
    if (foundAuraColor) {
      setColorDescription(foundAuraColor.colorDescription);
      setColorPotantial(foundAuraColor.colorPotantial);
    }
  };

  // Match Peak Function
  const matchPeakData = (peaks: number[]) => {
    return peaks.map((peakNumber) => {
      return peakDATA.find((peak) => peak.peakID === peakNumber);
    });
  };

  // Match Peak Num
  const matchedPeaks = matchPeakData(route.params.peaks);

  // Match Struggle Function
  const matchStruggleData = (struggles: number[]) => {
    return struggles.map((struggleNumber) => {
      return struggleDATA.find(
        (struggle) => struggle.struggleID === struggleNumber
      );
    });
  };

  // Macth Struggle Num
  const matchedStruggles = matchStruggleData(route.params.struggles);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={styles.background}>
        {[...Array(numberOfStars)].map((_, index) => (
          <Star
            key={index}
            size={Math.random() * 1 + 0.5}
            color={starColors[Math.floor(Math.random() * starColors.length)]}
            style={{
              left: Math.random() * Dimensions.get("window").width,
              top: Math.random() * Dimensions.get("window").height,
            }}
            animatedValue={animatedValue}
          />
        ))}
      </Animated.View>
      <Image
        source={require("../images/result.png")}
        style={{
          width: windowWidth - 40,
          height: (windowWidth - 40) * 0.3,
          resizeMode: "contain",
        }}
      />

      <ScrollView>
        <View style={styles.descriptionContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.title, fontWeight: "300" }}>Sevgili </Text>
            <Text style={styles.title}>
              {route.params.name} {route.params.lastname},
            </Text>
          </View>
          {/* Ruh Güdüsü */}
          <Text style={styles.content}>{route.params.birthdate}</Text>
          <Text style={styles.title}>Ruh Güdüsü: {mainLaneData?.title}</Text>
          <Text style={styles.descriptionItem}>{mainLaneData?.content}</Text>
          <Text style={styles.title}>Yapıcı Potansiyeller</Text>
          {mainLaneData?.yapiciPotansiyeller &&
            mainLaneData.yapiciPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}
          <Text style={styles.title}>Olumsuz Potansiyeller</Text>
          {mainLaneData?.olumsuzPotansiyeller &&
            mainLaneData.olumsuzPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}
          <Text style={styles.title}>Yıkıcı Potansiyeller</Text>
          {mainLaneData?.yikiciPotansiyeller &&
            mainLaneData.yikiciPotansiyeller.map((item, index) => (
              <Text key={index} style={styles.descriptionItem}>
                {item}
              </Text>
            ))}
          {/* Hareketsiz Benlik */}
          <Text style={styles.descriptionItem}>{route.params.description}</Text>
          {sideLaneData && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>
                Hareketsiz Benlik:{sideLaneData.title}
              </Text>
              <Text style={styles.content}>
                Hareketsiz Benlik, daha çok olgunluk yaşlarınızda dış dünyaya
                nasıl göründüğünü umursamaz olduğunuzda, toplumdan uzak olup
                yalnız anlarınızda belirginleştiğini görürürsünüz.
                Bilinçaltınızın işleyiş biçimidir, ödül gibidir.İsmin hakkı
                verilirse ödülünüzü alırsınız.
              </Text>
              <Text style={styles.descriptionItem}>
                {sideLaneData.description}
              </Text>
            </View>
          )}
          {/* Kader Sayısı */}
          <Text style={styles.title}>Kader Sayısı: {fonLaneData?.title}</Text>
          <Text style={styles.content}>
            Kader sayısı, bu hayatta neyi gerçekleştireceğinizi ve kime
            dönüşeceğinizi gösterebilen bir sayıdır. Adınızın verdiği
            özellikleri öğrenmenizi sağlar, Dünya'ya, atalara ve mekana bağlı
            özellikler şeklinde düşünebilirsiniz.
          </Text>
          <Text style={styles.descriptionItem}>{fonLaneData?.description}</Text>
          <Text style={styles.title}>Çakra Sütunu:</Text>
          <Text style={styles.content}>
            Çakralar bedene enerji aktaran merkezlerdir. Bu giriş kapıları
            blokajlandığında bedeni besleyen enerji kısıtlanmaktadır. Bu enerji
            kısıtlaması belli organları güçsüz düşürerek hastalıklara
            dönüşmektedir. Her çakra beynin muayyen bölgesini açan ve uyandıran
            bir anahtar veya düğme gibidir. Birçok insanda bu enerji akımı
            artırılabilir, canlandırılabilir ve daha iyi çalışmasına imkan
            sağlanabilir. Çakralar enerji kanalları ile bağlantıdadır. İnsanda
            72.000 enerji kanalı mevcuttur.
          </Text>
          {route.params.chakraCounts.map((count, index) => (
            <Text key={index} style={styles.chakraItem}>
              {`${index + 1}. Çakra = ${count} Birim`}
            </Text>
          ))}
          <Text style={styles.title}>Esma'ül Hüsna: </Text>
          <Text style={styles.descriptionItem}>
            {route.params.esmaulHusnaResult}. Esma
          </Text>
          {/* Aura rengi */}
          <Text style={styles.title}>Aura Rengi: </Text>
          <Text style={styles.descriptionItem}>{auraColor}</Text>
          <Text style={styles.title}>Aura Rengi Potansiyeli:</Text>
          <Text style={styles.descriptionItem}>{colorPotantial}</Text>
          <Text style={styles.title}>Aura Rengi Açıklaması:</Text>
          <Text style={styles.descriptionItem}>{colorDescription}</Text>

          {/* Hayat Amacı */}
          <Text style={styles.title}>Hayat Amacı Sayısı: {purposeID}</Text>
          <Text style={styles.title}>{purposeTitle}</Text>
          <Text style={styles.descriptionItem}>{purposeDescription}</Text>

          {/* Zirve Numaraları */}
          <Text style={styles.title}>Zirve Numaraları:</Text>
          {matchedPeaks.map((peak, index) => (
            <View key={index}>
              <Text style={styles.title}>{`${index + 1}. Zirve: ${
                peak ? peak.peakTitle : "Bilinmeyen"
              }`}</Text>
              {peak && (
                <Text style={styles.descriptionItem}>
                  {peak.peakDescription}
                </Text>
              )}
            </View>
          ))}

          {/* Mücadele Numaraları */}
          <Text style={styles.title}>Mücadele Numaraları:</Text>
          {matchedStruggles.map((struggle, index) => (
            <View key={index}>
              <Text style={styles.title}>{`${index + 1}. Mücadele:${
                struggle ? struggle.struggleTitle : "Bilinmeyen"
              }`}</Text>
              {struggle && (
                <Text style={styles.descriptionItem}>
                  {struggle.struggleDescription}
                </Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ width: "100%", marginBottom: -50 }}>
        <ButtonGoBack onPress={handleGoBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 100,
    paddingBottom: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  descriptionContainer: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "white",
    textAlign: "justify",
  },
  content: {
    fontSize: 10,
    marginBottom: 10,
    color: "white",
    lineHeight: 12,
  },
  descriptionItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    lineHeight: 20,
  },
  chakraItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    lineHeight: 30,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default PremiumResultView;
