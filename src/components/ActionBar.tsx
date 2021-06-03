import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/Entypo";

import { COLORS, FONTS } from "../styles";
import Location from "../assets/icons/location-blip.svg";
import File from "../assets/icons/file.svg";
import { CartIcon } from "./CartIcon";

const Divider = () => <View style={styles.divider} />;

interface IActionBar {
  value: string;
  setLocation: (value: any, index: number) => void;
}

export const ActionBar = ({ value, setLocation }: IActionBar) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Location height={scale(18)} width={scale(18)} />
        <RNPickerSelect
          onValueChange={() => console.log("location")}
          useNativeAndroidPickerStyle={false}
          placeholder={{ label: "Location" }}
          Icon={() => <Icon name="chevron-small-down" />}
          style={{
            iconContainer: { marginLeft: 15 },
            inputAndroidContainer: {
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            },
          }}
          items={[
            { label: "Lagos", value: "lagos" },
            { label: "Abuja", value: "Abuja" },
            { label: "Port-Harcort", value: "port-harcourt" },
          ]}
        />
      </View>
      <Divider />

      <View style={styles.actionContainer}>
        <File height={scale(18)} width={scale(18)} />
        <Text style={styles.actionLabel}>My Orders</Text>
      </View>
      <Divider />

      <View style={styles.actionContainer}>
        <CartIcon />
        <Text style={styles.actionLabel}>Cart</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: COLORS.neutral,
    marginVertical: verticalScale(10),
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: verticalScale(5),
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: COLORS.neutral,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    marginLeft: 5,
    color: COLORS.mainTextColor,
  },
  cartTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 14,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});
