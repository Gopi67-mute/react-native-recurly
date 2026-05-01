import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Subscription = () => {
  return (
    <SafeAreaView className="p-5 bg-background flex-1">
      <Text>Subscription</Text>
    </SafeAreaView>
  );
};
export default Subscription;
