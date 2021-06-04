import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

import { routes } from "../navigation/routes";
import { addToHistory } from "../actions/history";

const WIDTH = Dimensions.get("screen").width / 3;

export const Product = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { id, image, name, price, stock } = product;

  const _addToHistory = () => {
    dispatch(addToHistory(product));
    navigation.navigate(routes.DETAIL, {
      screen: routes.PRODUCT_DETAIL,
      params: { id },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={_addToHistory}>
      <View style={styles.mainContainer}>
        <Image source={image} style={{ width: 80, height: 78 }} />
        <Text style={[styles.text]}>{name}</Text>
        <Text style={[styles.text]}>{price}</Text>
        <Text style={[styles.text]}>MOQ {stock} (pieces)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 20,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: 5,
    height: 100,
  },
  text: {
    textAlign: "center",
  },
});
