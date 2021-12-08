import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { TextInput, Checkbox, Paragraph } from "react-native-paper";

const Jarques = () => {
    const [name, setname] = useState()
    return (
        <View style={{justifyContent:"center"}}>
            <Paragraph>What will you store in this Jar?</Paragraph>
            <TextInput
        label="Name"
        selectionColor="black"
        activeOutlineColor="black"
        outlineColor="black"
        activeUnderlineColor="black"
        value={name}
        onChangeText={(name) => {
          setname(name), console.log(name);
        }}
      />
        </View>
    )
}

export default Jarques
