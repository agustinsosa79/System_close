import { useCalculoGeneral } from "./calculoTeorico"



export const Calculos = () => {
    const {Calcular, resultado, TotalGeneral} = useCalculoGeneral()

    const formatCurrency = (v: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 2 }).format(v);

    return (
        <div className=" m-auto w-lvw flex flex-col justify-center items-center h-200  mt-40 px-4">
      {/* Header: botón + resumen */}
      <div className="flex items-center justify-between p-2 gap-4 mb-4">
        <div className=" flex flex-col gap-10 text-center">
            <h1 className="text-white text-4xl">Calculo previo</h1>
          <button
            onClick={Calcular}
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Calcular total"
          >
            Calcular total
          </button>
        </div>

        <div className="text-sm font-semibold bg-white/10 border border-white/30 rounded-3xl p-7 text-white/90">
          {TotalGeneral !== 0 ? <span>Total: {formatCurrency(TotalGeneral)}</span> : <span className="text-white/60">Aún no hay totales</span>}
        </div>
      </div>

      {/* Tabla compacta */}
      <div className="overflow-x-auto w-lvw bg-gray-900/60 p-10 rounded-lg border border-white/6 shadow-2xl shadow-black">
        <table className=" !p-30 w-full table-fixed text-sm">
          <thead className="text-left text-xs uppercase text-white/60">
            <tr>
              <th className="px-3 py-2 w-2/6">Producto</th>
              <th className="px-3 py-2 w-1/6 text-center">Inicio</th>
              <th className="px-3 py-2 w-1/6 text-center">Cierre</th>
              <th className="px-3 py-2 w-1/6 text-center">Vendidos</th>
              <th className="px-3 py-2 w-1/6 text-right">Total</th>
            </tr>
          </thead>

          <tbody>
            {resultado.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-center text-white/60">
                  No hay resultados todavía
                </td>
              </tr>
            )}

            {resultado.map((r) => (
              <tr key={r.id} className="border-t border-white/6">
                <td className="px-3 py-3 align-middle">
                  <div className="text-sm font-medium text-white truncate">{r.producto}</div>
                </td>

                <td className="px-3 py-3 text-center align-middle">
                  <span className="inline-block text-sm px-2 py-0.5 rounded-full bg-white/6">{r.inicio}</span>
                </td>

                <td className="px-3 py-3 text-center align-middle">
                  <span className="inline-block text-sm px-2 py-0.5 rounded-full bg-white/6">{r.cierre}</span>
                </td>

                <td className="px-3 py-3 text-center align-middle">
                  <span className="inline-block text-sm px-2 py-0.5 rounded-full bg-white/6">{r.vendidos}</span>
                </td>

                <td className="px-3 py-3 text-right align-middle">
                  <span className="inline-block text-sm px-3 py-0.5 rounded-full bg-emerald-600/20 text-emerald-300 font-medium">
                    {formatCurrency(r.total)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )

    
}