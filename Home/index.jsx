import { Text, View, TextInput, TouchableOpacity, Image } from "react-native"
import Card from "../../components"
import { estilos } from "./styles"

export default function Home(){


    return(
    <View style = {estilos.tela}>
            <View style = {estilos.form}>
                <TextInput 
                style = {estilos.input_text}
                />
               <TouchableOpacity style = {estilos.botao}>
                <Text style = {estilos.texto_botao}>
                🔍
                </Text>
               </TouchableOpacity>
            </View>     
    <View>
      <Image
        style={estilos.Logo}
        source={{
          uri: 'https://pin.it/1AGOKUjlL',
        }}
      />
        </View>
    </View>
        )
    }