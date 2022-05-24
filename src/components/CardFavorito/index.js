import React from "react";
import {View,  TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function jogos({titulo, valor, imagem}){

    function filterDesc(desc){
        if(desc.length < 18){
            return desc;
        }
        return `${desc.substring(0, 15)}...`;
    }

    return (
        <>
        <TouchableOpacity style={estilo.containerJogos}>
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
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        margin: 6,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "100vw",
        height: 120,
        borderColor: '#000',
        borderWidth: 2
    },
    titulo:{
      color: "#fff",
      fontSize: 15,
      fontWeight: 8,  
    },
    valor: {
        color: "#fff",
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: "bold",
    },
    images:{
        width: "30%",
        height: "100%",
        borderRadius: 3,
    },
});