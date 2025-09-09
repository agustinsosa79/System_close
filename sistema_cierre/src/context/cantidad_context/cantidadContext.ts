import { createContext, type Dispatch, type SetStateAction } from "react"


 type cantidadesType = {
    [producto: string] : number
 }
type CantidadesContextType = {
  cantidadesInicio: cantidadesType;
   setCantidadesInicio: Dispatch<SetStateAction<cantidadesType>>;
  cantidadesCierre: cantidadesType;
  setCantidadesCierre: Dispatch<SetStateAction<cantidadesType>>;
};


export const CantidadesContext = createContext<CantidadesContextType>({
  cantidadesInicio: {},
  setCantidadesInicio: () => {},
  cantidadesCierre: {},
  setCantidadesCierre: () => {},
});
//HOLA