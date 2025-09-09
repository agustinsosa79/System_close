import { createContext } from "react";

type Resultados = {
    id: string
    producto: string
    inicio: number
    cierre: number
    vendidos: number
    total: number
}

type CalculosContextType = {
    resultado: Resultados[];
    setResultado: React.Dispatch<React.SetStateAction<Resultados[]>>;
    TotalGeneral: number;
    setTotalGeneral: React.Dispatch<React.SetStateAction<number>>;
}

export const CalculosContext = createContext<CalculosContextType>({
    resultado: [] ,
    setResultado: () => {},
    TotalGeneral: 0,
    setTotalGeneral: () => {}

}) 