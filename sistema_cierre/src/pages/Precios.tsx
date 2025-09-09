import { useContext } from "react"
import { PreciosContext } from "../context/precios_context/preciosContext"
import { ProductoForm } from "../components/form/formGenerico"
import { useHeladosFecth } from "../hooks/useFetchIce"

type Producto = {
  _id: string,
  key: string,
  label:string,
  quantity: number
  price: number
}

export const Precios = () => {
    const {precios, setPrecios} = useContext(PreciosContext)
    const { productos } = useHeladosFecth()


    const guardarPrecio = async (productoKey: string, precio:number) => {
      setPrecios(productoKey, precio)

      await fetch(`http://localhost:3000/products/${productoKey}/price`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ price : precio})
      })

    }

    return (
        <div>
      {productos.map((p: Producto) => (
        <ProductoForm
        key={p._id}
        productoKey={p.key}
        label={p.label}
        onGuardar={guardarPrecio}
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
