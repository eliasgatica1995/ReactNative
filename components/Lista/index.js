import React from "react";
import { FlatList, View, Text,TouchableOpacity, StyleSheet } from "react-native";

export default function Lista(props) {

    const { lista, onHandlerModal, onState } = props

    return (
        <>
        {lista.length > 0 
        ? <FlatList 
            data={lista} 
            renderItem={data => (
                <View style={styles.containerItem}>
                    <Text style={[
                        styles.textItem, 
                        { 
                            fontStyle: data.item.state == true ? 'italic' : 'normal',
                            textDecorationLine: data.item.state == true ? 'line-through' : 'none' 
                        }
                        ]}>{data.item.value}</Text>
                    
                    <TouchableOpacity style={styles.button} onPress={() => (onState(data.item))}><Text style={styles.whiteText}>C</Text></TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => onHandlerModal(data.item)}><Text style={styles.whiteText}>X</Text></TouchableOpacity> 
                </View>
            )}
            keyExtractor={(item) => item.id}
            />
        : <Text style={styles.blackText}> No hay Tareas </Text>
        }
        </>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: '3%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    textItem: {
        fontWeight: "bold", 
        fontSize: 20, 
        color: 'black'
    },
    button: {
        width: '15%',
        height: 27,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 9,
       
    },
    whiteText: {
        color: 'white',
        fontWeight: 'bold'
      },
      blackText: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10,
      },
   
})