import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import formatNaira from "format-to-naira";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";

import { COLORS, FONTS } from "../styles";
import { Reviews, ActionButtons } from "../components";
import { addToCart } from "../actions/cart";
import { products } from "../assets/data/products";

export const ProductDetail = ({ route }: any) => {
  const dispatch = useDispatch();
  const { id } = route.params;

  const product: Product = products.find(product => product.id === id);

  const { image, name = "", description, price, reviews } = product;

  const add = () => {
    const item = { ...product, quantity: 1 };
    dispatch(addToCart(item));
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.price}>
          {formatNaira(price)}
          <Text style={styles.description}>/ Piece</Text>
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Product Description</Text>
        <Icon name="keyboard-arrow-right" size={20} color={COLORS.textColor2} />
      </View>
      <Reviews reviews={reviews} />
      <ActionButtons add={add} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  image: {
    height: scale(230),
    marginVertical: scale(10),
    width: "90%",
    alignSelf: "center",
  },
  detailContainer: {
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  title: {
    fontSize: scale(18),
    fontFamily: FONTS.regular,
    color: COLORS.textColor2,
  },
  description: {
    fontSize: scale(15),
    fontFamily: FONTS.regular,
    color: "#627483",
    marginVertical: scale(3),
    fontWeight: "100",
  },
  price: {
    fontSize: scale(20),
    fontFamily: FONTS.regular,
    color: COLORS.textColor2,
    marginVertical: scale(7),
    fontWeight: "bold",
  },
  descriptionContainer: {
    backgroundColor: COLORS.primary,
    marginVertical: scale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  descriptionHeader: {
    fontSize: scale(18),
    fontFamily: FONTS.regular,
    color: COLORS.textColor2,
  },
});
