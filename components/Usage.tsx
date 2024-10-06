import { Box, HStack, Text, VStack } from "native-base";
import { useWindowDimensions } from "react-native";

export default function Usage() {
  const dimension = useWindowDimensions();
  return (
    <Box>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <VStack>
          <Text fontSize={dimension.fontScale * 17}>Food</Text>
          <Text fontSize={dimension.fontScale * 15} color={"gray.500"}>
            date
          </Text>
        </VStack>
        <Text fontSize={dimension.fontScale * 17}>-$1000</Text>
      </HStack>
    </Box>
  );
}
