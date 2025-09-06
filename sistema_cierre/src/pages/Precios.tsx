import { useContext } from "react"
import { PreciosContext } from "../context/precios_context/preciosContext"
import productos from "../types/helados.types"
import { ProductoForm } from "../components/form/formGenerico"



export const Precios = () => {
    const {precios, setPrecios} = useContext(PreciosContext)

    return (
        <div>
      {productos.map((p) => (
        <ProductoForm
        key={p.key}
        productoKey={p.key}
        label={p.label}
        onGuardar={setPrecios}
        tipo="precio"
        />
        ))}

      <h3>Precios de tus productos</h3>
      {Object.entries(precios).map(([producto, precio]) => (
        <p key={producto}>
          {producto}: ${precio}
        </p>
      ))}
    </div>
    )
}
