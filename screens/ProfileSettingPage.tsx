import React from "react";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as Animatable from "react-native-animatable";
import { lazy, Suspense } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View } from "native-base";
export default function ProfileSettingPage({
  navigation,
}: {
  navigation: StackNavigationHelpers;
}) {
  const ProfileSettingLazy = lazy(() => import("../screens/ProfileSetting"));
  return (
    <Suspense
      fallback={
        <View
          width={"full"}
          height={"full"}
          borderRadius={"2xl"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ display: "flex" }}
        >
          <Animatable.View
            animation="rotate"
            iterationCount="infinite"
            useNativeDriver
          >
            <AntDesign name="loading1" size={90} color="gray" />
          </Animatable.View>
        </View>
      }
    >
      <ProfileSettingLazy navigation={navigation} />
    </Suspense>
  );
}
