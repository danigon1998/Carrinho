import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { AppContext } from "../../context/appContext";


export default function Cart(){

    const {carrinho, setCarrinho, AddProduto} = useContext(AppContext)

    function handleRemoveItem(id: string){
        if(carrinho){
            const produto = carrinho.produtos.find((p) => p.id === id);
            if(produto){
                if(produto.quantidade > 1){
                    produto.quantidade -= 1;
                    carrinho.total -= produto.price
                    setCarrinho({...carrinho})
                }else{
                    carrinho.produtos = carrinho.produtos.filter((p) => p.id !== id);
                    carrinho.quantidadeItems -= 1;
                    carrinho.total -= produto.price
                    setCarrinho({...carrinho})
                }
            }
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Produtos no Carrinho</Text>
            <FlatList
            data={carrinho?.produtos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={styles.containerItem}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>R${item.price}</Text>
                    <Text style={styles.text}>Qtd:{item.quantidade}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleRemoveItem(item.id)}>
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => AddProduto(item)}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                </View>
            )}
            />
            <Text style={styles.textTotal}>Total: R${carrinho?.total}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    text: {
        width: 90,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerItem: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    textTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    }
});