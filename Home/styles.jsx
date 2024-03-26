import { StyleSheet } from "react-native"

export const estilos = StyleSheet.create({
    tela:{
        flex: 1,
        backgroundColor: '#93C6D6',
        padding:22,
    },
    form: {
        flexDirection: 'row',
        width:'80%',
        marginTop:80,
        marginLeft: 75, 
    },
    input_text:{
        flex: 1,
        height:50,
        color:'#FFF',
        fontSize: 15,
        padding:17,
        borderRadius:15,
        backgroundColor: '#3D458F',
    },
    botao:{
        justifyContent:'center',
        alignItems: 'center',     
        width:60,
        borderRadius:10,
        fontSize:50,
        backgroundColor: '#3D458F',
        marginLeft:16,
  },
  texto_botao:{
    fontSize:30,
  },
  Logo:{
    height:70,
    width:70,
    borderRadius: 30,
    marginTop: -60,
  },
})