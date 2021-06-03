import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import { useDispatch } from "react-redux";

import { Button } from "../components";
import { COLORS } from "../styles";
import { routes } from "../navigation/routes";
import { checkout } from "../actions/cart";

export const CheckoutScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(checkout);
    navigation.navigate(routes.APP_TAB, {
      screen: routes.BUY,
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.secondary} />
      <View style={styles.container}>
        <Icon name="checkcircle" color="#46BCAA" size={200} />
        <Text>Checkout Successful</Text>
        <Text>Your checkout is now successful</Text>
        <Button
          title="Got it"
          size="md"
          onPress={clearCart}
          style={{
            containerStyle: {
              backgroundColor: COLORS.primary,
              position: "absolute",
              bottom: 20,
            },
            textStyle: {
              color: COLORS.secondary,
              fontSize: scale(18),
              fontWeight: "bold",
            },
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
