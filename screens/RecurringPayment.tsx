import { FlatList, Text, View } from "native-base";
import React from "react";
export default function RecurringPayment() {
  return (
    <View>
      <FlatList
        data={[{ key: "test" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}
