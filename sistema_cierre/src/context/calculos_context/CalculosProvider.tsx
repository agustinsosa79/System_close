import { useState } from "react"
import { CalculosContext } from "./CalculosContext"

type Resultados = {
    id: string
    producto: string
    inicio: number
    cierre: number
    vendidos: number
    total: number
}


export const CalculosProvider = ({children}: {children : React.ReactNode}) => {
    const [ resultado, setResultado] = useState<Resultados[]>([])
    const [ TotalGeneral, setTotalGeneral ] = useState(0)

    return (
        <CalculosContext.Provider value={{resultado, setResultado, TotalGeneral, setTotalGeneral}}>
            {children}
        </CalculosContext.Provider>
    )

}