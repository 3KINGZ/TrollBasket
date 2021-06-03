import React from "react";
import { View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import { COLORS } from "../styles";
import { Button } from "./Button";

interface IActionButtons {
  add: any;
  remove: any;
}

export const ActionButtons = ({ add, remove }: IActionButtons) => {
  return (
    <View style={styles.container}>
      <Button
        title="Add to cart"
        onPress={add}
        style={{
          containerStyle: {
            flex: 1,
          },
        }}
      />
      <Button
        title="Wishlist"
        size="md"
        onPress={remove}
        style={{
          containerStyle: {
            backgroundColor: COLORS.primary,
            borderColor: COLORS.greyTextColor,
            borderWidth: 1,
            flex: 1,
          },
          textStyle: { color: "#2E4457" },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.primary,
    marginTop: scale(7),
  },
});
