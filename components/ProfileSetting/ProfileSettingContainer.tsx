import React from "react";
import { Box } from "native-base";

export default function ProfileSettingContainer({
  children,
  flex,
}: {
  children: React.ReactNode;
  flex?: number;
}) {
  return (
    <Box
      shadow={1}
      rounded={"xl"}
      paddingX={5}
      paddingY={6}
      background={"white"}
      flex={flex}
    >
      {children}
    </Box>
  );
}
