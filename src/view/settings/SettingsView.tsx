import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { ListItem, Icon, Switch } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SettingsView = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const [notificationSwitch, setNotificationSwitch] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [darkMode, setDarkMode] = useState(false);

  // Ayarlar listesi
  const settingsList = [
    {
      title: "Bildirimler",
      icon: "notifications",
      switch: true,
      switchState: notificationSwitch,
      onSwitchChange: () => setNotificationSwitch(!notificationSwitch),
    },
    {
      title: "Karanlık Mod",
      icon: "brightness-4",
      switch: true,
      switchState: false,
      onSwitchChange: () => {
        // Karanlık modu aç/kapat fonksiyonu
      },
    },
    {
      title: "Çıkış Yap",
      icon: "exit-to-app",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {settingsList.map((item, index) => (
          <ListItem style={{ width: windowWidth }} key={index} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            {item.switch && (
              <Switch
                value={item.switchState}
                onValueChange={item.onSwitchChange}
              />
            )}
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 80,
    width: "100%",
    height: "100%",
  },
});

export default SettingsView;
