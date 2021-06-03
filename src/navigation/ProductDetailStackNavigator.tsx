import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProductDetail, CartScreen, CheckoutScreen } from "../screens";
import { routes } from "./routes";
import { COLORS } from "../styles";

const Stack = createStackNavigator();

const ProductDetailStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.PRODUCT_DETAIL}
        component={ProductDetail}
      />
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: COLORS.primary } }}
        name={routes.CART}
        component={CartScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.CHECKOUT}
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailStackNavigator;
