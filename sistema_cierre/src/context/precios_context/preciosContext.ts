import { createContext } from "react"


type preciosType = {
    [producto: string]: number
}

type preciosContextType = {
    precios: preciosType
    setPrecios: (producto: string, precio: number) => void
}



export const PreciosContext = createContext<preciosContextType>({
    precios: {},
    setPrecios: () => {}
})
