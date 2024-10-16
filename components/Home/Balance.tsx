import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import { Pressable, useWindowDimensions } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { PageTypes } from "../../navigation/Pagetypes";
import { LinearGradient } from "expo-linear-gradient";
export default function Balance({
  navigation,
  setModalVisible,
}: {
  navigation: NavigationProp<Record<PageTypes, undefined>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dimension = useWindowDimensions();

  return (
    <Box flex={1} justifyContent={"center"}>
      <LinearGradient
        colors={["rgba(0,122,255,0.4)", "rgba(0,122,255,1)"]}
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 14,
          borderRadius: 24,
        }}
      >
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <VStack>
            <Text fontSize={dimension.fontScale * 15} color={"white"}>
              My Balance
            </Text>
            <Text
              fontSize={
                dimension.width > 360 ? (dimension.width > 400 ? 25 : 20) : 15
              }
              color={"white"}
              fontWeight={"bold"}
            >
              10,000,000 Ks
            </Text>
            <Text fontSize={dimension.fontScale * 12} color={"white"}>
              Updated Date: 12/12/2024
            </Text>
          </VStack>
          <HStack space={4} alignItems={"center"}>
            <Pressable onPress={() => setModalVisible(true)}>
              <FontAwesome
                name="plus"
                size={dimension.fontScale * 30}
                color="white"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("BalanceInput")}>
              <FontAwesome5
                name="history"
                size={dimension.fontScale * 30}
                color="white"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("RecurringPayment")}>
              <MaterialIcons
                name="payment"
                size={dimension.fontScale * 37}
                color="white"
              />
            </Pressable>
          </HStack>
        </HStack>
      </LinearGradient>
    </Box>
  );
}
