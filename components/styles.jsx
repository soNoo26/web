
import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    container:{
        marginTop: 30,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#545DB6',
        borderRadius:10,
    },
    texto:{
        flex: 1,
        padding: 12,
        fontSize: 20,
        color: '#fff',
    },
    botao:{
        height: 50,
        width:50, 
        backgroundColor: '#3D458F',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    texto_botao:{
        fontSize: 30,
        color: '#fff'
    }
})  