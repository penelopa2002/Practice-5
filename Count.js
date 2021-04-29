import React, { Component } from "react";
import { StyleSheet, Text, View,  } from 'react-native';

function Count(props) {
   
    var D = 69;  
    var text = <Text></Text>
    if (!isNaN(props.a && props.b && props.c)) { 
        let a = Number(props.a);
        let b = Number(props.b);
        let c = Number(props.c);
        
        if(a == 0){
            D = 69;
        }

        D = (b * b) - 4 * a * c;

        if(D < 0){
            text = <Text> Расчет квадратного уравнения: {D} {'\t'}  </Text>
        }
        else if(D > 0){
            var x1 = (-b - Math.sqrt(D)) / (2 * a);
            var x2 = (-b + Math.sqrt(D)) / (2 * a);

            text = <Text> Расчет квадратного уравнения: {D}.  
            x1={x1}  x2={x2}</Text>
        }
        else if(D == 1){
            var x = -b / -2 * a;
            text = <Text>
               {D}
            </Text>
        }
    }
    else {
        alert("Вводить только цифры!");
    }

    return(
    <View style={styles.box}>
        
        <Text style={styles.text}>{text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: "99%",
        margin: "auto",
        backgroundColor: "#FFFFFF",
        
    },
    text: {
        textAlign: "left",
        fontSize: 16,
    },
});

export default Count;