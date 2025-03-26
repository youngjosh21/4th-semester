import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react';


//autoexecutável
// Digite o valor pra conversão
export default function Component() {


    const [moeda, setMoeda] = useState('')
    const [dolar, setMoedaDolar] = useState('valorDolar: ')
    const [euro, setMoedaEuro] = useState('valorEuro: ')

    function converter(valor: number) {
        setMoedaDolar(`valor Dolar : ${(valor / 5.68).toFixed(2)}`)
        setMoedaEuro(`valor Euro : ${(valor / 6.15).toFixed(2)}`)
    }





    return (
        <View style={estilos.caixa}>



            <Text style={estilos.ctitle}>valor:</Text>
            <TextInput style={estilos.cinput}
                keyboardType='numeric'
                value={moeda}
                // pega o digitou na caixa leva pra variavel moeda
                onChangeText={setMoeda}
            />
            <Button
                title='converter' style={estilos.cbotao} onPress={()=>converter(moeda)}
            />

            <Text>{dolar}</Text>
            <Text>{euro}</Text>
        </View>

    );
}

const estilos = StyleSheet.create({

    caixa: {
        backgroundColor: 'white',
        width: '70%',
        padding: 20,
        borderRadius: 10,
        marginTop: 15
    },


    ctitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    cinput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#2196F3',
        marginBottom: 15,
        marginTop: 5,
        padding: 10

    }

})