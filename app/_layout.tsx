import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "tabs" }} />
      <Stack.Screen name="non-found" options={{ title: "Oops! Not found" }} />
    </Stack>
  );
}
