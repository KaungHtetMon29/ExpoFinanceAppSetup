import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Home2 from "../screens/Test";
import UsageHistory from "../screens/UsageHistory";

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UsageHistory" component={UsageHistory} />
      <Stack.Screen
        name="Profile"
        component={Home2}

        // options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}
