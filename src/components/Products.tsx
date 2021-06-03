import React from "react";
import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";

import { Product } from "./Product";

export const Products = ({ data }: { data: Product[] }) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      keyExtractor={item => item.id}
      style={{ marginVertical: scale(10) }}
      renderItem={({ item }) => <Product product={item} />}
    />
  );
};
