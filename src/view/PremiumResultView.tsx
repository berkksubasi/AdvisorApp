import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Star from "../components/animatebackground/Star";
import { calculateSideLane } from "../functions/yanKulvar";
import sideLaneDATA from "../data/sideLaneDATA";
import { calculate as calculateAnaKulvar } from "../functions/anaKulvar";
import { calculateFonKulvar } from "../functions/fonKulvar";
import fonLaneDATA from "../data/fonLaneDATA";
import calculateAuraColor from "../functions/calculateAuraColor";
import auraColorsDATA from "../data/auraColorsDATA";
import { ButtonGoBack } from "../components/button";
import mainLaneDATA from "../data/mainLaneDATA";
import peakDATA from "../data/peakDATA";
import struggleDATA from "../data/struggleDATA";
import purposeOfLifeDATA from "../data/purposeOfLifeDATA";
import InfoBox from "../components/infoBox/InfoBox";
import { useTheme } from "../providers/ThemeContext";
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
  const { darkMode, toggleTheme } = useTheme();
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

  const [auraColor, setAuraColor] = useState<string>("");
  const [colorDescription, setColorDescription] = useState<string>("");
  const [colorPotantial, setColorPotantial] = useState<string>("");
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
    findPurposeOfLife();
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
    if (data) setSideLaneData(data);
  };

  const calculateAndSetAnaKulvar = () => {
    const anaKulvar = calculateAnaKulvar(
      route.params.name,
      route.params.lastname,
      route.params.maidenName || ""
    );
    const data = mainLaneDATA[anaKulvar];
    if (data) setMainLaneData(data);
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
    if (foundFonKulvar) setFonLaneData(foundFonKulvar);
  };

  const calculateAndSetAuraColor = () => {
    const aura = calculateAuraColor(new Date(route.params.birthdate));
    setAuraColor(aura);
    const foundAuraColor = auraColorsDATA.find(
      (item) => item.auraColor === aura
    );
    if (foundAuraColor) {
      setColorDescription(foundAuraColor.colorDescription);
      setColorPotantial(foundAuraColor.colorPotantial);
    }
  };

  const findPurposeOfLife = () => {
    const purposeNumber = route.params.purposes;
    const foundPurpose = purposeOfLifeDATA.find(
      (item) => item.purposeSum === purposeNumber
    );
    if (foundPurpose) {
      setPurposeTitle(foundPurpose.purposeTitle);
      setPurposeDescription(foundPurpose.purposeDescription);
      setPurposeID(foundPurpose.purposeID);
    }
  };

  const matchPeakData = (peaks: number[]) => {
    return peaks.map((peakNumber) =>
      peakDATA.find((peak) => peak.peakID === peakNumber)
    );
  };

  const matchStruggleData = (struggles: number[]) => {
    return struggles.map((struggleNumber) =>
      struggleDATA.find((struggle) => struggle.struggleID === struggleNumber)
    );
  };

  const matchedPeaks = matchPeakData(route.params.peaks);
  const matchedStruggles = matchStruggleData(route.params.struggles);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Animated.View style={styles.background}>
        {[...Array(numberOfStars)].map((_, index) => (
          <Star
            key={index}
            size={Math.random() * 1 + 0.5}
            color={starColors[Math.floor(Math.random() * starColors.length)]}
            style={{
              left: Math.random() * windowWidth,
              top: Math.random() * windowWidth,
            }}
            animatedValue={animatedValue}
          />
        ))}
      </Animated.View>

      <Image source={require("../images/result.png")} style={styles.image} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.descriptionContainer}>
          <View style={styles.nameContainer}>
            <Text
              style={[styles.nameText, { color: darkMode ? "white" : "black" }]}
            >
              Sevgili{" "}
            </Text>
            <Text
              style={[styles.nameText, { color: darkMode ? "white" : "black" }]}
            >
              {route.params.name} {route.params.lastname},
            </Text>
          </View>
          <Text
            style={[
              styles.birthdateText,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            {route.params.birthdate}
          </Text>
          <InfoBox
            auraColor={auraColor}
            chakraCounts={route.params.chakraCounts}
            colorDescription={colorDescription}
            esmaulHusnaResult={route.params.esmaulHusnaResult}
            mainLaneData={mainLaneData}
            sideLaneData={sideLaneData}
            fonLaneData={fonLaneData}
            purposeID={purposeID}
            purposeTitle={purposeTitle}
            purposeDescription={purposeDescription}
            matchedPeaks={matchedPeaks}
            matchedStruggles={matchedStruggles}
            colorPotantial={colorPotantial}
          />
        </View>
      </ScrollView>

      <ButtonGoBack onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    marginTop: -20,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    marginBottom: -50,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  descriptionContainer: {
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "justify",
  },
  birthdateText: {
    fontSize: 10,
    marginBottom: 10,
  },
});

export default PremiumResultView;
