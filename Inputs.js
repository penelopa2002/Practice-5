import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Count from "./Count";

const Inputs = () => {

    const [as, setAs] = useState("");
    const [bs, setBs] = useState("");
    const [cs, setCs] = useState("");

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");

    function SendNum() {
      if(as == "" || bs == "" || cs == ""){
        alert("Куда ты тыкаешь?");
      }else {
        setA(as);
        setB(bs);
        setC(cs);
      }
    }

    return (
        <View >
          <Text>{'\t'}</Text>
            <View style={styles.container}>
                <Text>a=</Text>
                  <TextInput type="text" 
                  name="a" 
                  onChangeText={text => setAs(text)}
                  style={styles.input}
                  />
                <Text>b=</Text>
                  <TextInput type="text" 
                  name="b" 
                  onChangeText={text => setBs(text)}
                  style={styles.input}
                  />
                <Text>c=</Text>
                  <TextInput type="text" 
                  name="c" 
                  onChangeText={text => setCs(text)}
                  style={styles.input}
                  />
            </View>
              <Text>{'\t'}</Text>
            <View style={styles.outPut}>
                <Button 
                title="Результат" 
                onPress={SendNum}
                />
                <Text>{'\t'}</Text>
            </View>
            <Count a={a} b={b} c={c} />
        </View>

    );
}



const styles = StyleSheet.create ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "row",
        fontSize: 28,
    },  
    outPut: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    input: {
        width: "25%",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        
    },
});

export default Inputs;