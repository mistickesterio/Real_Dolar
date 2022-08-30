import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    let [Real, setReal] = useState();
    let [Cotacao, setCotacao] = useState();
    function CalcularTotal(){

        let resultado = parseFloat(Real/Cotacao);

        alert("O resultado total: " + resultado);

    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Converter Dinheiro</Text>

            <TextInput onChangeText={setReal} style={styles.campo} placeholder="Real"/>
            <TextInput onChangeText={setCotacao} style={styles.campo} placeholder="Cotação do Dolar"/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles =  StyleSheet. create({

    container:{
        backgroundColor: '#EEE8AA',
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
        
    },
    titulo:{
        fontSize:25,
        color:'#000000',
        fontWeight:'bold',
        marginBottom:40
    },
campo:{
    backgroundColor: '#B2BEBF',
    fontSize:18,
    padding:8,
    marginTop:10,
    marginBottom:10,
    width:300,
    borderRadius: 10
},

botao:{
    backgroundColor:'#BD2A2E',
    alignItems: "center",
    padding: 15,
    borderRadius: 6,
    marginTop: 20,
    width:250
},

botaoTexto:{
    color:"#FFF",
    fontSize:17,
    fontWeight: "900",
}




});