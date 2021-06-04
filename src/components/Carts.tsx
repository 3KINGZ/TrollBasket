import React from "react";
import { View, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

import { Cart } from "./Cart";

export const Carts = () => {
  const { cart } = useSelector((state: State) => state.cart);

  return (
    <View style={{ height: scale(250) }}>
      <FlatList
        data={cart}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => <Cart product={item} />}
      />
    </View>
  );
};
