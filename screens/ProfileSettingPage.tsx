import React from "react";
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import { Text, View } from "native-base";
import { lazy, Suspense } from "react";

export default function ProfileSettingPage({
  navigation,
}: {
  navigation: StackNavigationHelpers;
}) {
  const ProfileSettingLazy = lazy(() => import("./ProfileSetting"));
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <ProfileSettingLazy navigation={navigation} />
    </Suspense>
  );
}
