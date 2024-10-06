import { Box, Divider, ScrollView, Text, VStack, View } from "native-base";
import Usage from "../components/Usage";
import { useWindowDimensions } from "react-native";
import SortMenu from "../components/SortMenu";

export default function UsageHistory() {
  const dimension = useWindowDimensions();
  return (
    <View bg={"white"} flex={1}>
      <Box
        justifyContent={"center"}
        justifyItems={"center"}
        marginX={"auto"}
        paddingY={3}
      >
        <Text
          color={"blue.500"}
          fontSize={dimension.width > 450 ? 15 : 20}
          fontWeight={"semibold"}
        >
          Usage History
        </Text>
      </Box>
      <Divider />
      <SortMenu />
      <Divider />
      <ScrollView
        bg={"white"}
        paddingX={dimension.width > 450 ? 10 : 5}
        justifyItems={"center"}
      >
        <VStack space={7} paddingY={5}>
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
          <Usage />
        </VStack>
      </ScrollView>
    </View>
  );
}
