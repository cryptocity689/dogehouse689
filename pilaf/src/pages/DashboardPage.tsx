import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/buttons/Buttons";
import { colors, fontFamily } from "../constants/dogeStyle";

export const DashboardPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text
        style={{
          alignSelf: "center",
          fontFamily: fontFamily.extraBold,
          color: colors.text,
        }}
      >
        Dashboard Page
      </Text>
      <Button title={"New room"} onPress={console.log} loading={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary900,
  },
});
