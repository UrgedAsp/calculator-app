import { globalStyles } from "@/styles/global-styles";
import { Slot } from "expo-router";
import React from "react";
import { StatusBar, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

export default RootLayout;
