import React from 'react'
import {View, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native'

export default function AddItem(props) {

    const { setTextInput, onAdd } = props

    return (
        <View style={styles.containerInput} >
            <TextInput placeholder="Escriba su producto" onChangeText={(text) => setTextInput(text)} style={styles.input}/>
            <TouchableOpacity style={styles.button} onPress={() => onAdd()}><Text style={styles.whiteText}>Add</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: "row", 
        width: "100%", 
        height: "10%", 
        marginTop: "3%", 
        justifyContent: "space-around", 
        alignItems: "center"
    },
    input: {
        borderBottomColor: "black", 
        borderBottomWidth: 2, 
        width: "75%",
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        width: '15%',
        height: '50%',
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    RedText: {
        color: 'red',
        fontWeight: 'bold',
        
    },
    whiteText: {
        color: 'white',
        fontWeight: 'bold'
      },
})