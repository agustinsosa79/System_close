import { createContext } from "react"


 type cantidadesType = {
    [producto: string] : number
 }
type cantidadContextType = {
    cantidadesInicio: cantidadesType
    setCantidadesInicio: (prodcuto: string, cantidad: number) => void  
    cantidadesCierre: cantidadesType
    setCantidadesCierre: (producto: string, cantidad: number) => void
}


export const CantidadesContext = createContext<cantidadContextType>({
    cantidadesInicio: {},
    setCantidadesInicio: () => {},
    cantidadesCierre: {},
    setCantidadesCierre: () => {}
})
//HOLA