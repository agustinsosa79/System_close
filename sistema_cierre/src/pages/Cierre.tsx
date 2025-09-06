import { useContext, useEffect } from "react"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"
import productos from "../types/helados.types"
import { ProductoForm } from "../components/form/formGenerico"

export const Cierre = () => {
    const { cantidadesCierre, setCantidadesCierre } = useContext(CantidadesContext)
    
    useEffect(() => {
        console.log(cantidadesCierre);

    }, [cantidadesCierre])
    
    
    return(
        <>
        <div>
            {productos.map((p) => (
                <ProductoForm productoKey={p.key} label={p.label} tipo="cantidad" onGuardar={setCantidadesCierre} />
            ))}
            <h3>Cantidades del Cierre</h3>
            {Object.entries(cantidadesCierre).map(([producto, cantidad]) => (
                <p key={producto}>{producto}:{cantidad}</p>
            ))}
        </div>
        </>
    )
}