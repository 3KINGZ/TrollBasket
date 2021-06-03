import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

import { productImages } from "../assets/images";
import { Button, Carts, Products } from "../components";
import { routes } from "../navigation/routes";
import { COLORS } from "../styles";

const carts = [
  {
    id: "1",
    name: "Curology Cream",
    description:
      "Tempor duis esse ad dolor reprehenderit amet. Velit esse deserunt in aliquip ullamco esse cupidatat voluptate laborum proident est et. Culpa enim reprehenderit eiusmod non. Quis nulla do anim enim excepteur eiusmod reprehenderit enim. Aliqua cillum reprehenderit reprehenderit excepteur culpa pariatur laboris incididunt fugiat aute aute exercitation labore. Ipsum aliqua dolore dolore id non aute in enim id nulla eiusmod reprehenderit in.",
    image: productImages.perfume,
    price: 5000,
    location: "Lagos",
    stock: 5,
    reviews: [
      {
        id: "1",
        review:
          "This is the best products have used in a while and the size fits perfectly and i love the colors!!!",
        rating: 5,
        user: "Segun Arinze",
        userImage: productImages.avatar,
      },
    ],
    quantity: 1,
  },
  {
    id: "2",
    name: "Curology Cream",
    description:
      "Tempor duis esse ad dolor reprehenderit amet. Velit esse deserunt in aliquip ullamco esse cupidatat voluptate laborum proident est et. Culpa enim reprehenderit eiusmod non. Quis nulla do anim enim excepteur eiusmod reprehenderit enim. Aliqua cillum reprehenderit reprehenderit excepteur culpa pariatur laboris incididunt fugiat aute aute exercitation labore. Ipsum aliqua dolore dolore id non aute in enim id nulla eiusmod reprehenderit in.",
    image: productImages.perfume,
    price: 5000,
    location: "Lagos",
    stock: 5,
    reviews: [
      {
        id: "1",
        review:
          "This is the best products have used in a while and the size fits perfectly and i love the colors!!!",
        rating: 5,
        user: "Segun Arinze",
        userImage: productImages.avatar,
      },
    ],
    quantity: 1,
  },
];

export const CartScreen = ({ navigation }) => {
  const { cart } = useSelector((state: State) => state.cart);
  const { history } = useSelector((state: State) => state.history);

  if (cart.length) {
    return (
      <View style={styles.noItemsContainer}>
        <Text style={styles.noItemsText}>No items in cart</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Carts />
      <View style={styles.mainAmountContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.amountTag}>Subtotal</Text>
          <Text>3000</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountTag}>Total</Text>
          <Text style={styles.totalAmount}>3000</Text>
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
