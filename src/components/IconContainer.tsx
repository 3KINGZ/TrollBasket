import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../styles";

export const IconContainer = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
