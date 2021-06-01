import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppTabNavigator from "./src/navigation/AppTabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
};

export default App;
