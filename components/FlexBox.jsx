import { StyleSheet, Text, View } from "react-native";
import React from "react";

function FlexBox() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "orange",
          flex: 1,
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View style={{ backgroundColor: "skyblue", flex: 1 }}></View>

        <View style={{ backgroundColor: "red", flex: 1 }}></View>

        <View style={{ backgroundColor: "violet", flex: 1 }}></View>
      </View>
      <View style={{ backgroundColor: "white", flex: 1 }}></View>
      <View style={{ backgroundColor: "green", flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default FlexBox;
