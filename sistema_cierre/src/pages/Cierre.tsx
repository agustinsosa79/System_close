    import { useContext } from "react"
    import { CantidadesContext } from "../context/cantidad_context/cantidadContext"
    import { ProductoForm } from "../components/form/formGenerico"
    import { useHeladosFecth } from "../hooks/useFetchIce"

    export const Cierre = () => {
        const { cantidadesCierre, setCantidadesCierre } = useContext(CantidadesContext)
        const { productos } = useHeladosFecth()
        
        const guardarCierre = async (productoKey: string, cantidad: number) => {
            setCantidadesCierre((prev) => ({...prev, [productoKey]: cantidad}))
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
        
        return(
            <div className="grid grid-cols-4">
            <div>
                {productos.map((p) => (
                    <ProductoForm key={p._id} productoKey={p.key} label={p.label} tipo="cantidad" onGuardar={guardarCierre} />
                ))}
            </div>
                <h3>Cantidades del Cierre</h3>
                {Object.entries(cantidadesCierre).map(([producto, cantidad]) => (
                    <p key={producto}>{producto}:{cantidad}</p>
                ))}
            </div>
        )
    }