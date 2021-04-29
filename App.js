import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Panel from "./Panel";
import Inputs from "./Inputs";
import MainPanel from "./MainPanel";

export default function App() {
  return (
    <View>
    <Text style={{
      backgroundColor: "#FFFFFF",
    }}>{'\t'}</Text>
    <Text style={{
      backgroundColor: "#FFFFFF",
    }}>{'\t'}</Text>
      <MainPanel />
      <Panel />
      <Inputs />
    </View>
  );
}
