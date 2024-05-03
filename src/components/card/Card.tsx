import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../providers/ThemeContext";

interface CardProps {
  title?: string;
  backgroundImage?: any;
  variant?: "small" | "large";
  onPress?: () => void;
  style?: any;
  children?: React.ReactNode;
}

const darkMode = useTheme;
const Card: React.FC<CardProps> = ({
  children,
  title,
  backgroundImage,
  variant = "large",
  onPress,
}) => {
  const cardStyles = variant === "small" ? smallCardStyles : largeCardStyles;

  return (
    <View
      style={[
        cardStyles.card,
        { backgroundColor: darkMode ? "black" : "black" },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={backgroundImage}
          style={cardStyles.backgroundImage}
        >
          {children}
          <Text style={cardStyles.title}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const largeCardStyles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderColor: "#8576FF",
    borderWidth: 1,
    overflow: "hidden",
    elevation: 1,
    width: windowWidth - 30,
    aspectRatio: 16 / 9,
    marginTop: 20,
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    margin: 16,
  },
});

const smallCardStyles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderColor: "#8576FF",
    borderWidth: 1,
    overflow: "hidden",
    elevation: 3,
    width: windowWidth / 2 - 20,
    aspectRatio: 16 / 9,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    objectFit: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    margin: 8,
    width: "100%",
  },
});

export default Card;
