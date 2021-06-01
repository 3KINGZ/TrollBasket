/* eslint-disable react/display-name */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  BuyScreen,
  DealsScreen,
  WalletScreen,
  MoreScreen,
} from "../screens";
import { routes } from "./routes";
import AIcon from "react-native-vector-icons/AntDesign";
import EIcon from "react-native-vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <AIcon name="home" />,
        }}
        name={routes.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <EIcon name="shopping-cart" />,
        }}
        name={routes.BUY}
        component={BuyScreen}
      />
      <Tab.Screen name={routes.DEALS} component={DealsScreen} />
      <Tab.Screen name={routes.WALLET} component={WalletScreen} />
      <Tab.Screen name={routes.MORE} component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
