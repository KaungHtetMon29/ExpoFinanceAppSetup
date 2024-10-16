import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import UsageHistory from "../screens/UsageHistory";
import BalanceInputHistory from "../screens/BalanceInputHistory";
import Login from "../screens/Login";
import EditProfile from "../screens/EditProfile";
import NotificationSetting from "../screens/NotificationSetting";
import TermOfUse from "../screens/TermOfUse";
import ProfileSettingPage from "../screens/ProfileSettingPage";
import RecurringPayment from "../screens/RecurringPayment";

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "rgba(0,122,255,1)" },
        headerTintColor: "rgba(0,122,255,1)",
      }}
    >
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{ headerShown: false }}
        // options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="UsageHistory" component={UsageHistory} />
      <Stack.Screen name="BalanceInput" component={BalanceInputHistory} />
      <Stack.Screen name="RecurringPayment" component={RecurringPayment} />
      <Stack.Screen name="Profile Setting" component={ProfileSettingPage} />
      <Stack.Screen name="EDIT PROFILE" component={EditProfile} />
      <Stack.Screen name="NOTIFICATION" component={NotificationSetting} />
      <Stack.Screen name="TERMS OF USE" component={TermOfUse} />
      <Stack.Screen name="FAQ" component={TermOfUse} />
    </Stack.Navigator>
  );
}
