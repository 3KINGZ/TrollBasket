import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles";

interface ITabBarIcon {
  name: string;
  active: boolean;
}

export const TabBarIcon = ({ name, active }: ITabBarIcon) => {
  return active ? (
    <Icon name={name} color={COLORS.secondary} size={20} />
  ) : (
    <Icon name={`${name}-outline`} color={COLORS.grey} size={20} />
  );
};
