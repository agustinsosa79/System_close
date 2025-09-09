import { useState, type ReactNode } from "react"
import {PreciosContext} from './preciosContext'

type preciosType = {
    [producto: string]: number
}


export const PreciosProvider = ({children}: {children: ReactNode}) => {
    const [precios, setPreciosState] = useState<preciosType>({})

  // actualizar un solo producto
  const setPrecios = (producto: string, precio: number) => {
    setPreciosState(prev => ({ ...prev, [producto]: precio }));
  };

  // inicializar todo el estado desde DB
  const setPreciosTotal = (nuevoState: preciosType) => {
    setPreciosState(nuevoState);
  };
  
    return (
        <PreciosContext.Provider value={{precios, setPrecios, setPreciosTotal }}>
            {children}
        </PreciosContext.Provider>
    )
}