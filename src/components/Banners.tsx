/* eslint-disable react/display-name */
import React from "react";
import { View, Text, FlatList } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { COLORS } from "../styles";
import { Banner } from "./Banner";

const banners = [
  {
    id: "1",
    color: COLORS.secondary,
    text: (
      <Text style={{ color: COLORS.primary, fontSize: 16 }}>
        Having any <Text>issues</Text> with your order?
      </Text>
    ),
    buttonTitle: "Contact Us",
  },
  {
    id: "2",
    color: COLORS.dark1,
    text: (
      <Text style={{ color: COLORS.primary, fontSize: 16 }}>
        Having any <Text>issues</Text> with your order?
      </Text>
    ),
    buttonTitle: "Contact Us",
  },
  {
    id: "3",
    color: COLORS.orange,
    text: (
      <Text style={{ color: COLORS.primary, fontSize: 16 }}>
        Having any <Text>issues</Text> with your order?
      </Text>
    ),
    buttonTitle: "Contact Us",
  },
];

export const Banners = () => {
  return (
    <View>
      <FlatList
        data={banners}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Banner
            color={item.color}
            text={item.text}
            buttonTitle={item.buttonTitle}
          />
        )}
      />
    </View>
  );
};
