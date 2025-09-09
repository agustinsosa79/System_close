import { useState, type ReactNode} from "react";
import { CantidadesContext } from "./cantidadContext";

// Tipos
type cantidadesType = {
  [producto: string]: number;
};

// Provider
type Props = { children: ReactNode };

export const CantidadesProvider = ({ children }: Props) => {
  const [cantidadesInicio, setCantidadesInicio] = useState<cantidadesType>({});
  const [cantidadesCierre, setCantidadesCierre] = useState<cantidadesType>({});

  return (
    <CantidadesContext.Provider
      value={{
        cantidadesInicio,
        setCantidadesInicio,  
        cantidadesCierre,
        setCantidadesCierre 
      }}
    >
      {children}
    </CantidadesContext.Provider>
  );
};