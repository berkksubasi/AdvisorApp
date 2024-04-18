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
import { CustomButton } from "../components/button";
import { calculateSideLane } from "../functions/yanKulvar";
import sideLaneDATA from "../data/sideLaneDATA";
import mainLaneDATA from "../data/mainLaneDATA";
import { calculate } from "../functions/anaKulvar";
import { calculateFonKulvar } from "../functions/fonKulvar";
import fonLaneDATA from "../data/fonLaneDATA";

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
      mainLaneDATA: MainLaneDataCollection;
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

  useEffect(() => {
    startAnimation();
    calculateAndSetYanKulvar();
    calculateAndSetAnaKulvar();
    calculateAndSetFonKulvar();
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
          <Text style={styles.content}>{route.params.birthdate}</Text>
          <Text style={styles.title}>Ruh Güdüsü: {mainLaneData?.title}</Text>
          <Text style={styles.content}>
            Ruh güdüsü, sizin dünyayı nasıl gördüğünğz ve kendinizi dünyaya
            nasıl gösterdiğinizdir.
          </Text>
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
          {/* calculateFonKulvar sonucu */}
          <Text style={styles.title}>Kader Sayısı: {fonLaneData?.title}</Text>
          <Text style={styles.content}>
            Kader sayısı, bu hayatta neyi gerçekleştireceğinizi ve kime
            dönüşeceğinizi gösterebilen bir sayıdır. Adınızın verdiği
            özellikleri öğrenmenizi sağlar, Dünya'ya, atalara ve mekana bağlı
            özellikler şeklinde düşünebilirsiniz.
          </Text>
          <Text style={styles.descriptionItem}>{fonLaneData?.description}</Text>
          <Text style={styles.title}>Çakra Sütunu</Text>
          {route.params.chakraCounts.map((count, index) => (
            <Text key={index} style={styles.chakraItem}>
              {`${index + 1}. Çakra = ${count} Birim`}
            </Text>
          ))}
          <Text style={styles.title}>Esma'ül Hüsna </Text>
          <Text style={styles.descriptionItem}>
            {route.params.esmaulHusnaResult}. Esma
          </Text>
        </View>
      </ScrollView>

      <View style={{ width: "100%", marginBottom: -50 }}>
        <CustomButton title="Geri Dön" onPress={handleGoBack} />
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
    lineHeight: 30,
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
