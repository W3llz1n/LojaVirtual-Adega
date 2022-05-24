import React from "react";
import {View,  TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function card({titulo, valor, imagem, onClick}){

    function filterDesc(desc){
        if(desc.length < 15){
            return desc;
        }
        return `${desc.substring(0, 10)}...`;
    }

    return (
        <>
        <TouchableOpacity style={estilo.containerJogos} onPress={onClick}>
            <Image
                style={estilo.images}
                source={require(`../../../assets/${imagem}`)}
            />

            <Text style={estilo.titulo}>{filterDesc(titulo)}</Text>
            <Text style={estilo.valor}>{valor}</Text>

        </TouchableOpacity>
        </>
    );
}

const estilo = StyleSheet.create({
    containerJogos:{
        backgroundColor: "#262223",
        borderRadius: 36,
        marginTop: 8,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 135,
        height: 175,
        marginLeft: 8,
        borderWidth:2,
        borderColor:"#000",
    },
    titulo:{
      color: "#fff",
      fontSize: 15,
      fontWeight: 8,  
    },
    valor: {
        color: "#fff",
        fontSize: 12,
        marginTop: 2,
        fontWeight: "bold",
    },
    images:{
        width: "100%",
        height: 95,
        borderRadius: 3,
        margin: 5
    },
});