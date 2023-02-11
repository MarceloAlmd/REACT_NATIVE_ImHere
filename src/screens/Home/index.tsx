import React, {useState} from "react";

import { View, Text, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantsName, setParticipantsName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantsName)){
      return Alert.alert("participante Existente",`${participantsName} já está na lista`)
    }
    if(participantsName === ''){
      return Alert.alert("Erro", "escreva um nome para adicionar")
    }

    setParticipants(prevState => [...prevState, participantsName])
    setParticipantsName('')

  }

  function handleParticipantRemove(name: String) {

    Alert.alert("Remover", `Deseja remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => setParticipants(currentState => currentState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  function showDateCurrent(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0') // 1 -> 01
    const month = String(date.getMonth() + 1).padStart(2, '0')

    const year = date.getFullYear()

    const dateCurrent = `${day}/${month}/${year}`

    return dateCurrent
  }

  return (
    <View style={styles.container}> 

      <Text style={styles.eventName}>
      Mega Circle Pit
      </Text>

      <Text style={styles.eventDate}>
        {showDateCurrent()}
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#FFFF"
          onChangeText={setParticipantsName}
          value={participantsName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    
    <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            adicione participantes a sua lista de presença
          </Text>
        )}
    />
    </View>

  )
}