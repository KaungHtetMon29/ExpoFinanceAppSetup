import React from "react";
import { KeyboardAvoidingView, VStack } from "native-base";
import Container from "../components/container";
import NotiSetting from "../components/NotiSetting/NotiSetting";

export default function NotificationSetting() {
  return (
    <KeyboardAvoidingView flex={1}>
      <Container bg={"gray.200"}>
        <VStack space={5}>
          <NotiSetting
            name="Push Notification"
            description="Allow Push Notification"
          />
          <NotiSetting
            name="Email Notification"
            description="Allow Email Notification"
          />
          {/* <NotiSetting
            name="Push Notification"
            description="Allow Push Notification"
          /> */}
        </VStack>
      </Container>
    </KeyboardAvoidingView>
  );
}
