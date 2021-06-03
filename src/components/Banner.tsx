import React from "react";
import { View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { Button } from "./Button";

interface IBanner {
  color: string;
  text: Element;
  buttonTitle: string;
}

export const Banner = ({ color, text, buttonTitle }: IBanner) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: verticalScale(139),
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
        width: scale(300),
        borderRadius: 10,
        marginHorizontal: scale(5),
      }}>
      <View style={{ width: "70%" }}>{text}</View>
      <Button
        title={buttonTitle}
        size="s"
        style={{ containerStyle: { width: scale(80) } }}
      />
    </View>
  );
};
