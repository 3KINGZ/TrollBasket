import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
import StarRating from "react-native-star-rating";
import { COLORS } from "../styles";

import { parseRating } from "../utils";

export const Review = ({ review }) => {
  const { review: userReview, rating, user, userImage } = review;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <StarRating
          starSize={16}
          disabled={false}
          maxStars={5}
          rating={parseRating(Number(rating))}
          fullStarColor="gold"
          emptyStarColor="grey"
        />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <Text style={styles.review}>{userReview}</Text>
      <View style={styles.userDetailContainer}>
        <Image source={userImage} style={styles.avatarImage} />
        <Text style={styles.username}>{user}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  ratingContainer: {
    alignItems: "center",
    marginVertical: verticalScale(7),
    flexDirection: "row",
  },
  ratingText: {
    color: COLORS.textColor2,
    fontWeight: "bold",
    marginLeft: 7,
    fontSize: scale(15),
  },
  review: {
    marginVertical: verticalScale(7),
    color: COLORS.greyTextColor,
    fontSize: scale(13),
  },
  userDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(7),
  },
  avatarImage: { width: 40, height: 40, borderRadius: 20 },
  username: {
    marginLeft: 7,
    color: COLORS.textColor2,
    fontSize: scale(15),
  },
});
