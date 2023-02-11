import { View, Text, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./styles"

export function Home() {
  const participants = ['João']
  
  function handleParticipantAdd() {

    if(participants.includes("Marcelo")){
      return Alert.alert("participante existente", "Já existe um participante na lista com esse nome")

    }
    participants.push("ana")

    console.log(participants)
  }

  function handleParticipantRemove(name: String) {
    Alert.alert("Remover", `Deseja remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}> 

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#FFFF"
      
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