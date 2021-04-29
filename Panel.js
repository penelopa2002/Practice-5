import React from "react";
import { StyleSheet, Text,View } from 'react-native';

const Panel = () => {
  return (
    <View>
      <Text style={styles.text}>
          Введите значения 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    backgroundColor: "#FF0000",
    fontSize: 25,
  },
});

export default Panel;
