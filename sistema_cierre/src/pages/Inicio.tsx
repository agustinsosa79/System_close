import { useContext } from "react"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"

import { ProductoForm } from "../components/form/formGenerico"
import { useHeladosFecth } from "../hooks/useFetchIce"

export const Inicio = () => {
    const { productos } = useHeladosFecth()

    const {cantidadesInicio, setCantidadesInicio } = useContext(CantidadesContext)

    const guardarInicio = async (productoKey: string, cantidad: number) => {
        setCantidadesInicio((prev) => ({...prev, [productoKey]: cantidad}))
        try {
             await fetch(`http://localhost:3000/products/${productoKey}/quantity`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({quantity: cantidad})
             })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {productos.map((p) => (
                <ProductoForm key={p._id} productoKey={p.key} label={p.label} onGuardar={guardarInicio} tipo="cantidad" / >
            ))} 
            <h3>Cantidades Actuales:</h3>
            {Object.entries(cantidadesInicio).map(([producto, cantidad]) => (
                <p key={producto}> {producto}: {cantidad}</p>
            ))}
        </div>
    )
}