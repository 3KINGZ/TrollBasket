import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/AntDesign";

import { COLORS } from "../styles";

interface ISearchInput {
  onChange: ((text: string) => void) | undefined;
}

export const SearchInput = ({ onChange }: ISearchInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search merchbuy"
        onChangeText={onChange}
      />
      <View style={styles.iconContainer}>
        <Icon name="search1" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.neutral,
    borderRadius: 8,
    marginVertical: scale(10),
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: scale(16),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
});
