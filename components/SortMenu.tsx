import React from "react";
import { Flex, Menu, Text } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function SortMenu() {
  const dimension = useWindowDimensions();
  return (
    <Flex
      paddingX={dimension.width > 450 ? 10 : 5}
      paddingY={3}
      flexDir={"row"}
      width={"container"}
      justifyContent={"space-between"}
      bg={"blue.500"}
    >
      <Text fontSize={dimension.fontScale * 17} color={"white"}>
        SortMenu
      </Text>
      <Menu
        bg={"white"}
        width={"full"}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <AntDesign name="filter" size={24} color="white" />
            </Pressable>
          );
        }}
      >
        <Menu.Item>Sort By Date Range</Menu.Item>
        <Menu.Item>Sort By Amount</Menu.Item>
        <Menu.Item>Sort By Usage</Menu.Item>
      </Menu>
    </Flex>
  );
}
