import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { ListItem, Icon, Switch, Text, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../providers/ThemeContext";

const SettingsView: React.FC = () => {
  const navigation = useNavigation();
  const goToEditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const { darkMode, toggleTheme } = useTheme();

  // Kullanıcı DummyData
  const user = {
    name: "Berk Subaşı",
    age: 30,
    avatarUrl: "https://via.placeholder.com/150",
  };

  const settingsList = [
    {
      title: "Bildirimler",
      icon: "notifications",
      switch: true,
      switchState: false,
      onSwitchChange: () => {},
    },
    {
      title: "Açılış Sesi",
      icon: "volume-up",
      switch: true,
      switchState: false,
      onSwitchChange: () => {},
    },

    {
      title: "Dil Seçeneği",
      icon: "language",
      onPress: () => {},
    },
    {
      title: "Karanlık Mod",
      icon: "brightness-4",
      switch: true,
      switchState: darkMode,
      onSwitchChange: toggleTheme,
    },
    {
      title: "Yardım",
      icon: "help",
      onPress: () => {},
    },

    {
      title: "Çıkış Yap",
      icon: "exit-to-app",
    },
    {
      title: "Hesabımı Sil",
      icon: "delete",
      onPress: () => {},
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
      <View style={styles.userContainer}>
        <Avatar
          size="large"
          rounded
          source={{ uri: user.avatarUrl }}
          containerStyle={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text
            style={[styles.userName, { color: darkMode ? "white" : "black" }]}
          >
            {user.name}
          </Text>
          <Text style={styles.userAge}>{user.age} yaşında</Text>
        </View>
        <Icon
          name="edit"
          type="material"
          color={darkMode ? "#8576FF" : "#8576FF"}
          onPress={goToEditProfile}
        />
      </View>
      {settingsList.map((item, index) => (
        <ListItem
          containerStyle={styles.listItem}
          key={index}
          bottomDivider
          onPress={item.onPress}
        >
          <Icon
            name={item.icon}
            color={darkMode ? "#8576FF" : "#8576FF"}
            style={styles.icon}
          />

          <ListItem.Content style={styles.content}>
            <ListItem.Title
              style={[styles.title, { color: darkMode ? "white" : "black" }]}
            >
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          {item.switch && (
            <Switch
              value={item.switchState}
              onValueChange={item.onSwitchChange}
              color="#8576FF"
            />
          )}
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 80,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatar: {
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
    marginRight: "auto",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  userAge: {
    fontSize: 16,
    color: "gray",
  },
  listItem: {
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsView;
