import React from "react";
import { Text, View } from "native-base";
import { lazy, Suspense } from "react";

export default function EditProfile() {
  const LazyEditProfile = lazy(
    () => import("../components/EditProfile/EditProfile")
  );
  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <LazyEditProfile />
    </Suspense>
  );
}
