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
            <div className="w-lvw mx-auto bg-black/70 text-white rounded-lg shadow-md mt-30 md:mt-10 md:p-25 p-2 space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left: Formularios (ocupa 2 columnas en desktop) */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Ingresar cantidades (Cierre)</h3>

          <div className="grid grid-cols-1 md:grid-cols-5   gap-3">
            {productos.map((p) => (
              <ProductoForm
                key={p._id}
                productoKey={p.key}
                label={p.label}
                tipo="cantidad"
                onGuardar={guardarCierre}
              />
            ))}
          </div>
        </div>

        {/* Right: Cantidades del cierre */}
        <aside className="bg-gray-900/60 rounded-lg p-4 border border-white/6">
          <h3 className="text-lg font-semibold mb-3">Cantidades del cierre</h3>

          {/* Si preferís tabla MUI podés cambiar aquí; dejo versión Tailwind compacta */}
          <div className="space-y-2">
            {Object.keys(cantidadesCierre).length === 0 ? (
              <p className="text-sm text-white/60">Aún no hay datos</p>
            ) : (
              <div className="divide-y divide-white/6">
                {Object.entries(cantidadesCierre).map(([producto, cantidad]) => (
                  <div key={producto} className="flex items-center justify-between py-2">
                    <div className="text-sm truncate max-w-[160px]">{producto}</div>
                    <div>
                      <span className="inline-block text-white bg-white/8 px-3 py-0.5 rounded-full text-sm font-medium">
                        {cantidad}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
        )
    }