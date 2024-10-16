import React from "react";
import { Box } from "native-base";
import { useWindowDimensions } from "react-native";

export default function ProfileSettingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowDimensions();
  return (
    <Box
      shadow={1}
      rounded={"xl"}
      paddingX={4}
      paddingY={width > 360 ? (width > 390 ? (width > 412 ? 8 : 5) : 4) : 3}
      background={"white"}
    >
      {children}
    </Box>
  );
}
