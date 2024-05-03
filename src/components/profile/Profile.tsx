import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Icon } from "react-native-elements";
import { useTheme } from "../../providers/ThemeContext";
import LogoText from "../../svg/LogoText";

const Profile = () => {
  const navigation = useNavigation();
  const { darkMode } = useTheme();

  return (
    <View style={styles.profile}>
      <View style={styles.currencyContainer}>
        <Icon
          name="dollar-sign"
          type="feather"
          color={darkMode ? "#fff" : "#000"}
          size={24}
          style={styles.currencyIcon}
        />
        <Text style={styles.currencyText}>0.1</Text>
      </View>

      <LogoText width={300} height={75} color={darkMode ? "#fff" : "#8576FF"} />

      <Avatar
        rounded
        source={{ uri: "https://i.pravatar.cc/300" }}
        iconStyle={styles.avatarIcon}
        onPress={() => navigation.navigate("EditProfile" as never)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 12,
    marginBottom: 20,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8576FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  currencyIcon: {
    marginRight: 5,
  },
  currencyText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  avatarIcon: {
    borderColor: "white",
    borderWidth: 1,
  },
});

export default Profile;
