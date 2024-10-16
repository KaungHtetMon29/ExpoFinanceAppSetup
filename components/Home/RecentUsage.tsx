import React from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Box, HStack, Text, VStack } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";
import Usage from "../Usage";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { AntDesign } from "@expo/vector-icons";

export default function RecentUsage({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dimension = useWindowDimensions();
  const [show, setshow] = useState(false);
  setTimeout(() => {
    setshow(true);
  }, 1000);
  return (
    <Box flex={1}>
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={2}
      >
        <Text fontSize={dimension.fontScale * 20} fontWeight={"semibold"}>
          Recent Usage
        </Text>
        <Pressable onPressIn={() => navigation.navigate("UsageHistory")}>
          <Text fontSize={dimension.fontScale * 16.5} color={"blue.600"}>
            see all
          </Text>
        </Pressable>
      </HStack>
      <VStack
        flex={1}
        borderRadius={"2xl"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{ display: "flex" }}
      >
        {show ? (
          <VStack justifyContent={"space-between"} paddingY={3} flex={1}>
            <Usage mode="show" type="Food" />
            <Usage mode="show" type="Clothing" />
            <Usage mode="show" type="Transport" />
          </VStack>
        ) : (
          <Animatable.View
            animation="rotate"
            iterationCount="infinite"
            useNativeDriver
          >
            <AntDesign name="loading1" size={50} color="gray" />
          </Animatable.View>
        )}
      </VStack>
    </Box>
  );
}
