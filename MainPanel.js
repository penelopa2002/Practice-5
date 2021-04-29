import React from "react";
import { StyleSheet, Text,View } from 'react-native';

const Panel = () => {
  return (
    <View style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }}>
      <Text style={styles.text}>
 Корни квадратного уравнения     </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "100%",
    textAlign: "center",
    backgroundColor: '#0000FF',
    
    fontSize: 25,
  },
});

export default Panel;