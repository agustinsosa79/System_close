import { useContext, useState } from "react"
import { PreciosContext } from "../context/precios_context/preciosContext"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"
import { useHeladosFecth } from "../hooks/useFetchIce"



export const Calculos = () => {
     const { cantidadesInicio, cantidadesCierre } = useContext(CantidadesContext)
    const {precios} = useContext(PreciosContext)
    const { productos }  = useHeladosFecth()

    const[resultado, setResultado] = useState<{
        id:string
        producto: string,
        inicio: number
        cierre: number 
        vendidos: number
        total: number
    }[]>([])

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

    const TotalGeneral = resultado.reduce((acc, r) => acc + (r.total || 0), 0)

    return (
        <>
        /*El usuario Puede Calcular el cierre con solo presionar el boton */
        <button onClick={Calcular}>Calcular Total</button>
        {resultado.map((r) => (
            <p key={r.id} className="!p-10">
                <p>Producto:{r.producto}</p>
                <p>
                    inicio: {r.inicio}
                </p>
                <p>Cierre: {r.cierre}</p>
                <p>Vendidos:{r.vendidos}</p>
                <p>Total:{r.total}</p>
            </p>
        ))}
        <h3>Total:{TotalGeneral}</h3>
        </>
    )

    
}