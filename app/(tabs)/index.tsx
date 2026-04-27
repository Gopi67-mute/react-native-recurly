import "@/global.css";
// import { useState } from "react";
// import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center p-10 bg-background">
      <Text className="text-xl font-bold text-success">
        welcome to nativewind
      </Text>
      <Link
        href="/onboarding"
        className="text-xl mt-4 rounded-xl bg-primary text-white p-4"
      >
        go on board
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="text-xl mt-4 rounded-xl bg-primary text-white p-4"
      >
        Go To Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="text-xl mt-4 rounded-xl bg-primary text-white p-4"
      >
        Go to Sign Up
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="text-xl mt-4 rounded-xl bg-primary text-white p-4"
      >
        Spotify Subscriptions
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="text-xl mt-4 rounded-xl bg-primary text-white p-4"
      >
        {/* {" "} */}
        Claude max subscription
      </Link>
    </View>
  );
}
