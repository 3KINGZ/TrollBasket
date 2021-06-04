import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import IIcons from "react-native-vector-icons/Ionicons";
import AIcons from "react-native-vector-icons/AntDesign";
import { scale } from "react-native-size-matters";
import { useDispatch } from "react-redux";

import { COLORS } from "../styles";
import { removeFromCart } from "../actions/cart";

export const Cart = ({ product }: { product: Cart }) => {
  const dispatch = useDispatch();
  const { id, image, name, price, quantity } = product;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart(id))}
          style={styles.deleteContainer}>
          <IIcons name="trash-bin" color="#E25959" size={18} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>

        <View style={styles.qtyActionContainer}>
          <TouchableOpacity>
            <AIcons name="minuscircleo" color={COLORS.purple} size={18} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity>
            <AIcons name="pluscircleo" color={COLORS.purple} size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 12,
    marginVertical: scale(5),
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#F6F2F2",
    paddingBottom: 10,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 5,
  },
  title: {
    fontSize: scale(17),
    color: COLORS.textColor2,
  },
  price: {
    fontSize: scale(16),
    color: COLORS.textColor2,
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteText: {
    marginLeft: 5,
    color: COLORS.textColor2,
    fontSize: 15,
  },
  qtyActionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 10,
  },
});
