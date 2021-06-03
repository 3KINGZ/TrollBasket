import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/en";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { COLORS } from "./src/styles";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={COLORS.backgroundColor}
          barStyle="dark-content"
        />
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
