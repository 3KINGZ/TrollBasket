import React from "react";
import { View, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";

import { productImages } from "../assets/images";
import { Cart } from "./Cart";

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
