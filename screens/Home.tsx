import React from "react";
import { Button, KeyboardAvoidingView, Text, VStack, View } from "native-base";
import { Platform, useWindowDimensions } from "react-native";
import Balance from "../components/Home/Balance";
import UsageGraph from "../components/Home/UsageGraph";
import RecentUsage from "../components/Home/RecentUsage";
import { useRef, useState } from "react";
import Profile from "../components/Home/Profile";
import { localPageTypes } from "../navigation/Pagetypes";
import Container from "../components/container";
import { SafeAreaView } from "react-native-safe-area-context";
import BalanceInput from "../components/Home/modal/Balanceinput";
import UsageInputModal from "../components/Home/modal/UsageInputModal";
function Home({ navigation }: { navigation: localPageTypes }) {
  const dimension = useWindowDimensions();
  const [ModalVisible, setModalVisible] = useState(false);
  const [UsageModalVisible, setUsageModalVisible] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View flex={1} paddingBottom={3}>
          <BalanceInput
            inputprops={{
              ModalVisible,
              setModalVisible,
              initialRef,
              finalRef,
            }}
          />
          <UsageInputModal
            inputprops={{
              ModalVisible: UsageModalVisible,
              setModalVisible: setUsageModalVisible,
              initialRef,
              finalRef,
            }}
          />
          <Container>
            <VStack justifyContent={"space-between"} height={"full"} flex={1}>
              <VStack flex={1} justifyContent={"space-between"}>
                <View height={dimension.height / 14}>
                  <Profile navigation={navigation} />
                </View>
                <View height={(dimension.height / 10.8) * 1.5}>
                  <Balance
                    navigation={navigation}
                    setModalVisible={setModalVisible}
                  />
                </View>
                <View height={(dimension.height / 10) * 3.5}>
                  <UsageGraph />
                </View>
                <View height={(dimension.height / 10) * 3}>
                  <RecentUsage navigation={navigation} />
                </View>
              </VStack>

              <Button
                onPress={() => setUsageModalVisible(true)}
                marginX={"auto"}
                width={"100%"}
                bg="blue.500"
                _pressed={{
                  opacity: 0.9,
                  bg: "blue.600",
                  width: "98%",
                }}
              >
                <Text
                  fontSize={dimension.fontScale * 18}
                  fontWeight={"semibold"}
                  color={"white"}
                >
                  Add Usage
                </Text>
              </Button>
            </VStack>
          </Container>
        </View>
        {/* <Text>Home screen</Text>
  <Button bg="red" onPress={() => navigation.navigate("Profile")}>
    Home2
  </Button> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default Home;
