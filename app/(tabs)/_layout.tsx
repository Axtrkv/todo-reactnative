import React from "react";
import { Stack } from "expo-router";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import dateFormatter from "@/utils/dateFormatter";
import Colors from "@/constants/Colors";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.dark.background,
        },
        header: ({ route, navigation }) => {
          const isHome = route.name === "index";
          const title = isHome ? dateFormatter() : "Add a new task";

          return (
            <SafeAreaView
              style={{
                backgroundColor: Colors.dark.background,
              }}
            >
              <View
                style={{
                  height: 96,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isHome ? (
                  <>
                    <TouchableOpacity
                      disabled={!navigation.canGoBack()}
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        backgroundColor: Colors.light.background,
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: navigation.canGoBack() ? 1 : 0.25,
                      }}
                      onPress={() => {
                        if (navigation.canGoBack()) {
                          navigation.goBack();
                        }
                      }}
                    >
                      <Entypo
                        name="chevron-small-left"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        top: 30,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: Colors.light.background,
                      }}
                    >
                      {dateFormatter()}
                    </Text>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        backgroundColor: Colors.light.background,
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => navigation.goBack()}
                    >
                      <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <Text
                      style={{
                        position: "absolute",
                        top: 30,
                        fontSize: 16,
                        fontWeight: "bold",
                        color: Colors.light.background,
                      }}
                    >
                      {title}
                    </Text>
                  </>
                )}
              </View>
            </SafeAreaView>
          );
        },
      }}
    />
  );
}
