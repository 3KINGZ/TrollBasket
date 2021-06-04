import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import {
  ActionBar,
  Banners,
  ProductTags,
  SearchInput,
  Products,
} from "../components";
import { COLORS, FONTS } from "../styles";
import { products } from "../assets/data/products";

export const BuyScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (searchTerm: string) => {
    setFilteredProducts(
      searchTerm === ""
        ? products
        : products.filter((product: any) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trollbasket</Text>
      <ActionBar />
      <SearchInput onChange={text => filterProducts(text)} />
      <Banners />
      <ProductTags />
      <Products data={filteredProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 10,
  },
  header: {
    color: COLORS.grey1,
    fontFamily: FONTS.regular,
    fontWeight: "500",
    fontSize: scale(20),
  },
});
