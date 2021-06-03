import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabNavigator from "./AppTabNavigator";
import ProductDetailStackNavigator from "./ProductDetailStackNavigator";
import { routes } from "./routes";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.APP_TAB} component={AppTabNavigator} />
      <Stack.Screen
        name={routes.DETAIL}
        component={ProductDetailStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
