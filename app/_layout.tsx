import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { Platform, StatusBar, View } from "react-native";

const RootLayout = () => {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("black");
    }
  }, []);
  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

export default RootLayout;
