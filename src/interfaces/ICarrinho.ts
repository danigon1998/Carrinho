import { IProduto } from "./IProduto";

export interface ICarrinhoProduto extends IProduto {
    quantidade: number; 
}

export interface ICarrinho{
    id: string,
    produtos: ICarrinhoProduto[],
    quantidadeItems: number,
    total: number
}