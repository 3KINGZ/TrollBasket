/* eslint-disable react/display-name */
import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";

import { ProductDetail, CartScreen, CheckoutScreen } from "../screens";
import { routes } from "./routes";
import { COLORS } from "../styles";
import { CartIcon, IconContainer } from "../components";

const Stack = createStackNavigator();

const ProductDetailStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.primary },
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => navigation.navigate(routes.APP_TAB)}
          />
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 50,
              justifyContent: "space-between",
              width: 40,
            }}>
            <IconContainer>
              <Icon name="search1" />
            </IconContainer>
            <IconContainer>
              <CartIcon />
            </IconContainer>
          </View>
        ),
      })}>
      <Stack.Screen name={routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={routes.CART} component={CartScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.CHECKOUT}
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailStackNavigator;
