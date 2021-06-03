import React from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../styles";

import { ProductTag } from "./ProductTag";

const tags = [
  {
    id: "1",
    icon: "note-text",
    label: "Product categories",
    color: COLORS.secondary,
  },
  {
    id: "2",
    icon: "fire",
    label: "Popular products",
    color: COLORS.orange,
  },
  {
    id: "3",
    icon: "thumb-up",
    label: "Recommended Products",
    color: COLORS.purple,
  },
  {
    id: "4",
    icon: "storefront",
    label: "Shops",
    color: COLORS.green,
  },
];

export const ProductTags = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: scale(10),
        height: scale(90),
      }}>
      {tags.map(tag => (
        <ProductTag key={tag.id} tag={tag} />
      ))}
    </View>
  );
};
