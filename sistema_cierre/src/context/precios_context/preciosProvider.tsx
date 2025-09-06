import { useState, type ReactNode } from "react"
import {PreciosContext} from './preciosContext'

type preciosType = {
    [producto: string]: number
}




export const PreciosProvider = ({children}: {children: ReactNode}) => {
    const [precios, setPreciosState] = useState<preciosType>({})

    const setPrecios = (producto: string, precio: number) => {
        setPreciosState(prev => ({...prev, [producto]: precio}))
    }


    return (
        <PreciosContext.Provider value={{precios, setPrecios }}>
            {children}
        </PreciosContext.Provider>
    )
}