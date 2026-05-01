import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const InSights = () => {
  return (
    <SafeAreaView className="p-5 flex-1 bg-background">
      <Text>InSights</Text>
    </SafeAreaView>
  );
};
export default InSights;
