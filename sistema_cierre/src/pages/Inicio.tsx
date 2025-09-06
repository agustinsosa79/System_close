import { useContext } from "react"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"

import  productos  from "../types/helados.types"
import { ProductoForm } from "../components/form/formGenerico"

export const Inicio = () => {

    const {cantidadesInicio, setCantidadesInicio } = useContext(CantidadesContext)

    return (
        <div>
            {productos.map((p) => (
                <ProductoForm key={p.key} productoKey={p.key} label={p.label} onGuardar={setCantidadesInicio} tipo="cantidad" / >
            ))} 
            <h3>Cantidades Actuales:</h3>
            {Object.entries(cantidadesInicio).map(([producto, cantidad]) => (
                <p key={producto}> {producto}: {cantidad}</p>
            ))}
        </div>
    )
}