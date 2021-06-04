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

import { COLORS } from "../styles";
import { TabBarIcon } from "../components";

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.secondary,
        inactiveTintColor: COLORS.grey,
        labelStyle: { fontSize: 12 },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" active={focused} />
          ),
        }}
        name={routes.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="cart" active={focused} />
          ),
        }}
        name={routes.BUY}
        component={BuyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="pricetag" active={focused} />
          ),
        }}
        name={routes.DEALS}
        component={DealsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="wallet" active={focused} />
          ),
        }}
        name={routes.WALLET}
        component={WalletScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="menu" active={focused} />
          ),
        }}
        name={routes.MORE}
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
