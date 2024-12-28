import React, {createContext, useState} from "react";
import {IProduto} from "../interfaces/IProduto";
import { ICarrinho, ICarrinhoProduto } from "../interfaces/ICarrinho";

interface IAppProvider{
    children: React.ReactNode;
}

interface IAppContext {
    AddProduto: (produto: IProduto) => void;
    carrinho: ICarrinho | undefined;
    setCarrinho: React.Dispatch<React.SetStateAction<ICarrinho | undefined>>
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

export default function AppProvider({children}:IAppProvider){

    const [carrinho, setCarrinho] = useState<ICarrinho>()

    function AddProduto(produto: IProduto){
        if(carrinho){
            const produtoExistente = carrinho.produtos.find((p) => p.id === produto.id);

            if (produtoExistente) {
                produtoExistente.quantidade += 1;
            } else {
                carrinho.produtos.push({ ...produto, quantidade: 1 });
                carrinho.quantidadeItems += 1;
            }
            carrinho.total += produto.price
            setCarrinho({...carrinho})
        }else{
            setCarrinho({
                id: "1",
                produtos: [{...produto, quantidade:1}],
                quantidadeItems: 1,
                total: produto.price
            })
        }
        console.log(carrinho)
    }

    return(
        <AppContext.Provider value={{AddProduto, carrinho, setCarrinho}}>
            {children}
        </AppContext.Provider>
    )
}