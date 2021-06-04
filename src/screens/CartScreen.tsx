import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import formatNaira from "format-to-naira";

import { Button, Carts, Products } from "../components";
import { routes } from "../navigation/routes";
import { COLORS } from "../styles";
import { getTotalPrice } from "../utils";

export const CartScreen = ({ navigation }: any) => {
  const { cart } = useSelector((state: State) => state.cart);
  const { history } = useSelector((state: State) => state.history);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log("hist", history);

  // if (!cart.length) {
  //   return (
  //     <View style={styles.noItemsContainer}>
  //       <Text style={styles.noItemsText}>No items in cart</Text>
  //     </View>
  //   );
  // }

  useEffect(() => {
    if (!cart.length) {
      return;
    }
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <>
      {!cart.length ? (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items in cart</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Carts />
          <View style={styles.mainAmountContainer}>
            <View style={styles.amountContainer}>
              <Text style={styles.amountTag}>Subtotal</Text>
              <Text>{formatNaira(totalPrice)}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountTag}>Total</Text>
              <Text style={styles.totalAmount}>{formatNaira(totalPrice)}</Text>
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                position: "absolute",
                bottom: 0,
                alignSelf: "center",
              }}>
              <Button
                title="Checkout"
                size="md"
                onPress={() =>
                  navigation.navigate(routes.DETAIL, {
                    screen: routes.CHECKOUT,
                  })
                }
              />
            </View>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.historyHeaderContainer}>
              <Text style={styles.historyHeader}>Recently Viewed</Text>
              <Text style={styles.historyLink}>View all</Text>
            </View>
            <Products data={history} />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  mainAmountContainer: {
    backgroundColor: COLORS.primary,
    padding: 20,
    height: 150,
    marginVertical: scale(5),
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountTag: {
    color: COLORS.textColor2,
    fontSize: scale(16),
  },
  totalAmount: {
    fontWeight: "bold",
    color: COLORS.textColor2,
  },
  historyContainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  historyHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  historyHeader: {
    fontSize: scale(17),
    color: COLORS.textColor2,
  },
  historyLink: {
    color: COLORS.secondary,
    fontSize: scale(15),
  },
  noItemsContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  noItemsText: {
    textAlign: "center",
    fontSize: scale(30),
  },
});
