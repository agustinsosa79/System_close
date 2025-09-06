import { useState, type ReactNode } from "react";
import { CantidadesContext } from "./cantidadContext";

type props = {
    children: ReactNode
}

type cantidadesType = {
    [producto: string] : number
 }

export const CantidadesProvider = ({children}: props) => {
    const [cantidadesInicio, setCantidadesState] = useState<cantidadesType>({})
    const [cantidadesCierre, setCantidadesCierreState] = useState<cantidadesType>({})

    const  setCantidadesInicio = (producto: string, cantidad: number) => {
        setCantidadesState(prev => ({...prev,  [producto]: cantidad}))
    }

    const setCantidadesCierre = (producto:string, cantidad: number) => {
        setCantidadesCierreState(prev => ({...prev, [producto]: cantidad}))
    }

    return (
        <CantidadesContext.Provider value={{cantidadesInicio, setCantidadesInicio, cantidadesCierre, setCantidadesCierre}} >
            {children}
        </CantidadesContext.Provider>
    )
}
