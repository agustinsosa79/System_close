import { useContext} from "react"
import { CantidadesContext } from "../../context/cantidad_context/cantidadContext"
import { PreciosContext } from "../../context/precios_context/preciosContext"
import { useHeladosFecth } from "../../hooks/useFetchIce"
import { CalculosContext } from "../../context/calculos_context/CalculosContext"



export const useCalculoGeneral = () => {
    const { cantidadesInicio, cantidadesCierre } = useContext(CantidadesContext)
    const {precios} = useContext(PreciosContext)
    const { productos }  = useHeladosFecth()

    const { resultado, setResultado, TotalGeneral, setTotalGeneral } = useContext(CalculosContext)

    
    
    
    //Calculo total del cierre de caja
    const Calcular = () => {
        const calculos = productos.map((p) => {
            const inicio= cantidadesInicio[p.key] || 0
            const cierre = cantidadesCierre[p.key] || 0
            const precio = precios[p.key] || 0  
            const vendidos = inicio - cierre
            const total = vendidos * precio
            return {
                id: p._id,
                producto: p.label,
                inicio,
                cierre,
                vendidos,
                precio, 
                total
            }
        })
        
        setResultado(calculos)
        
    }
    
    const total = resultado.reduce((acc, r) => acc + (r.total || 0), 0)
    setTotalGeneral(total)
    
    
    
    return {TotalGeneral, Calcular, resultado}
}