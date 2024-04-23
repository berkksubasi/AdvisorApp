// SettingsView.tsx
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { ListItem, Icon, Switch } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../providers/ThemeContext";

const SettingsView: React.FC = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const { darkMode, toggleTheme } = useTheme();

  const settingsList = [
    {
      title: "Bildirimler",
      icon: "notifications",
      switch: true,
      switchState: false,
      onSwitchChange: () => {},
    },
    {
      title: "Karanlık Mod",
      icon: "brightness-4",
      switch: true,
      switchState: darkMode,
      onSwitchChange: toggleTheme,
    },
    {
      title: "Çıkış Yap",
      icon: "exit-to-app",
    },
  ];

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}
    >
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
