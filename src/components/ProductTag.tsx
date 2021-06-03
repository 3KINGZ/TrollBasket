import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../styles";

interface IProductTag {
  tag: {
    icon: string;
    color: string;
    label: string;
  };
}

export const ProductTag = ({ tag }: IProductTag) => {
  const { icon, color, label } = tag;

  return (
    <View style={styles.container}>
      <View style={[styles.mainContainer, { backgroundColor: color }]}>
        <Icon name={icon} size={20} color={COLORS.primary} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(50),
    height: scale(50),
    marginHorizontal: 20,
    alignSelf: "baseline",
    marginVertical: scale(10),
  },
  mainContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
    marginTop: 5,
  },
});
