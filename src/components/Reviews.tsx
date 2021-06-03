import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLORS } from "../styles";

import { Review } from "./Review";

export const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Review and Ratings</Text>
        <Text style={styles.headerLink}>View all</Text>
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Review review={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: verticalScale(10),
  },
  headerText: {
    fontSize: scale(17),
    color: COLORS.textColor2,
  },
  headerLink: {
    fontSize: scale(15),
    color: COLORS.secondary,
  },
});
