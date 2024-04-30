import React from "react";
import { View, StyleSheet } from "react-native";
import { Image, Text } from "react-native-elements";
import { CustomButton } from "../components/button";
import { useTheme } from "../providers/ThemeContext";
import LogoText from "../svg/LogoText";

const WelcomeView = ({ navigation }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <Image source={require("../images/page-icon.png")} style={styles.image} />
      <View>
        {darkMode ? (
          <LogoText width={400} height={100} color="#fff" />
        ) : (
          <LogoText width={400} height={100} color="#8576FF" />
        )}
      </View>

      {/* <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: darkMode ? "white" : "black",
          width: "100%",
          paddingTop: 30,
        }}
      >
        Soul Touch ile ruhunuzun derinliklerine{"\n"}dokunacak bir yolculuğa
        {"\n"}
        hazır mısınız?
      </Text> */}
      <View style={styles.containerInner}>
        <CustomButton
          title="Giriş Yap"
          variant="primary"
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{ marginTop: 200, marginBottom: 8 }}
        />
        <CustomButton
          title="Kaydol"
          variant="primary"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
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
  },
  containerInner: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    width: 600,
    height: 180,
    objectFit: "contain",
  },
});

export default WelcomeView;
