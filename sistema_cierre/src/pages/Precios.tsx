import { useContext } from "react"
import { PreciosContext } from "../context/precios_context/preciosContext"
import { ProductoForm } from "../components/form/formGenerico"
import { useHeladosFecth } from "../hooks/useFetchIce"



export const Precios = () => {
    const {precios, setPrecios} = useContext(PreciosContext)
    const { productos } = useHeladosFecth()
     const formatCurrency = (v: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 2 }).format(v);


    const guardarPrecio = async (productoKey: string, precio:number) => {
      setPrecios(productoKey, precio)

      await fetch(`http://localhost:3000/products/${productoKey}/price`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ price : precio})
      })

    }

    return (
          <div className="w-lvw mx-auto bg-black/70 text-white rounded-lg shadow-md md:mt-10 md:p-25 p-2 mt-30 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left: Formularios de precio (ocupa 2 columnas en desktop) */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Ingresar precios</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {productos.map((p) => (
              <ProductoForm
                key={p._id}
                productoKey={p.key}
                label={p.label}
                tipo="precio"
                onGuardar={guardarPrecio}
              />
            ))}
          </div>
        </div>

        {/* Right: Resumen de precios */}
        <aside className="bg-gray-900/60 rounded-lg p-4 border border-white/6">
          <h3 className="text-lg font-semibold mb-3">Precios de tus productos</h3>

          {Object.keys(precios).length === 0 ? (
            <p className="text-sm text-white/60">No hay precios cargados aún</p>
          ) : (
            <div className="divide-y divide-white/6">
              {Object.entries(precios).map(([producto, precio]) => (
                <div key={producto} className="flex items-center justify-between py-2">
                  <div className="text-sm truncate text-white max-w-[160px]">{producto}</div>
                  <div>
                    <span className="inline-block text-white bg-white/6 px-3 py-0.5 rounded-full text-sm font-medium">
                      {formatCurrency(Number(precio))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
    )
}
