import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Lista from './components/Lista';
import AgregarItem from './components/AgregarItem';
import ModalPopQ from './components/ModalPopQ';

export default function App() {
  
  const [lista, setList] = useState([])
  const [textInput, setTextInput] = useState("")
  const [modalState, setModalState] = useState(false)
  const [itemSelected, setItemSelected] = useState({})


  const onAdd = () => {
    setList([...lista, {id: idGenerator(), value: textInput, state: false }])
  }
  const onHandlerModal = (item) => {
    setItemSelected(item)
    setModalState(true)
  }
  const onDelete = (id) => {
    setList(lista.filter(item => item.id != id))
    setModalState(false)
  }
 const onState = (item) =>{
  setItemSelected(item)
  onDelete(item.id)
  setList([...lista, {id: item.id, value: item.textInput, state: true }])
 }

  function idGenerator() {
    var id = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (id()+id()+"-"+id()+"-"+id());
  }

  return (
    <View style={styles.container}>
      <ModalPopQ modalState={modalState} setModalState={setModalState} onDelete={onDelete} itemSelected={itemSelected}/>
      <AgregarItem setTextInput={setTextInput} onAdd={onAdd}/> 
      <Lista lista={lista} onHandlerModal={onHandlerModal} onState={onState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});