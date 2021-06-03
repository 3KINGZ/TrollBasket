import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import Cart from "../assets/icons/cart.svg";
import { COLORS } from "../styles";
import { routes } from "../navigation/routes";

export const CartIcon = () => {
  const navigation = useNavigation();

  const { cart } = useSelector((state: State) => state.cart);

  console.log(cart);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(routes.DETAIL, {
          screen: routes.CART,
        })
      }>
      <View style={{ flexDirection: "row" }}>
        <Cart height={scale(18)} width={scale(18)} />
        {cart.length > 0 && (
          <View style={styles.cartTextContainer}>
            <Text style={{ color: COLORS.primary }}>{cart.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 14,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});
