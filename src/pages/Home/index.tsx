import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { IProduto } from "../../interfaces/IProduto";
import ItemCard from "../../components/itemCard";
import { AppContext } from "../../context/appContext";

export default function Home(){

    const {AddProduto, carrinho} = useContext(AppContext)
    const navigation = useNavigation<any>();
    const [produtos, SetProdutos] = useState<IProduto[]>([
        {
            id: '1',
            name: 'Coca Cola 350ml',
            price: 4.5
        },
        {
            id: '2',
            name: 'Coca Cola 1L',
            price: 8.5
        },
        {
            id: '3',
            name: 'Coca Cola 2L',
            price: 12.5
        }
        ,
        {
            id: '4',
            name: 'Lasanha 1Kg',
            price: 18
        },
        {
            id: '5',
            name: 'Lasanha 2Kg',
            price: 25
        },
        {
            id: '6',
            name: 'Barra grande de chocolate Lacta',
            price: 8
        },
        {
            id: '7',
            name: 'Barra pequena de chocolate Lacta',
            price: 4
        }
    ])


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Lista de Produtos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-cart" size={30} color="#000" />
                    <Text style={styles.qtd}>{carrinho?.quantidadeItems}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <ItemCard id={item.id}  name={item.name} price={item.price} AddItem={()=> AddProduto(item)}/>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    qtd: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#fff',
        marginTop: -10,
        width: 15,
        height: 15,
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
    }
});