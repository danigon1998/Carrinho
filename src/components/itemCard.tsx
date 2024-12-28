import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { IProduto } from "../interfaces/IProduto";

interface IItemCard extends IProduto{
    AddItem: () => void;
}

export default function ItemCard({name, price, AddItem}: IItemCard){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={[styles.text,{margin: 4}]}>R${price}</Text>
                <TouchableOpacity style={styles.button} onPress={AddItem}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#000'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        height:30,
        width: 30,
        alignItems:'center',
        marginTop: 4
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    }
});