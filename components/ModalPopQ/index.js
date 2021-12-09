import React from 'react'
import { Modal, View, Text,TouchableOpacity, StyleSheet } from 'react-native'

export default function ModalPopQ(props) {
    
    const { modalState, setModalState, onDelete, itemSelected } = props

    return (
        <Modal visible={modalState} transparent animationType='fade' onRequestClose={() => setModalState(false)}>
            <View style={styles.containerModal}>
            <View style={styles.infoContainer}>
                <Text style={styles.bigText}>¿Borrar item? {"\n"}{itemSelected.value}</Text>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={() => onDelete(itemSelected.id)}><Text style={styles.whiteText}>Si</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setModalState(false)}><Text style={styles.whiteText}>No</Text></TouchableOpacity> 
                </View>
            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: 'rgba(0,0,0,0.5)', 
        height: '100%',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    infoContainer: {
        backgroundColor: 'white', 
        width: '60%', 
        height: '25%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '20%'
    },
    button: {
        width: '40%',
        height: '100%',
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
    bigText:{
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    textAlign: 'center',
    }
})