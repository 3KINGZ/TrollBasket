import React from "react";
import {
  View,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { COLORS } from "../styles";

interface IButton {
  title: string;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  size?: "xl" | "md" | "s";
  style?: { containerStyle?: object; textStyle?: object };
}

export const Button = ({
  title,
  onPress,
  size,
  style = { containerStyle: {}, textStyle: {} },
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[size || "s"], style.containerStyle]}>
      <Text style={[styles.text, style.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 16,
    // flex: 1,
    margin: 10,
    width: "100%",
  },
  text: {
    color: COLORS.primary,
    textAlign: "center",
  },
  xl: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  md: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  s: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
