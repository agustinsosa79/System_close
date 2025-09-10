import { useState } from "react"
import { useCalculoGeneral } from "./calculoTeorico"

export const CalculoReal = () => {
    const { TotalGeneral } = useCalculoGeneral()
    const [caja, setCaja] = useState<{tiradas?: number, posnet?: number, cambio?: number}>({
        tiradas: undefined,
        posnet: undefined,
        cambio: undefined
    })
    const [diferencias, setDiferencias] = useState(0)
    const [ cajaRealTotal, setCajaRealTotal] = useState(0)

    const formatCurrency = (v: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(v);
    const [error, setError] = useState<string | null>(null)

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if ((caja.tiradas ?? 0) < 0 || (caja.posnet ?? 0) < 0 || (caja.cambio ?? 0) < 0) {
  setError("No se permiten números negativos");
  return;
}
setError(null);
            const cajaReal = (caja.tiradas ?? 0) + (caja.posnet ?? 0) + (caja.cambio ?? 0)
            const diferencia = cajaReal - TotalGeneral
            setCajaRealTotal(cajaReal)
            setDiferencias(diferencia)
}



    return (
         <div className="w-lvw mx-auto bg-black/70 text-white rounded-lg shadow-md mt-30 h-lvh p-6 space-y-4">

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-semibold">Cierre final</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="flex flex-col text-sm">
            <span className="text-xs text-white/70 mb-1">Tiradas</span>
            <input
              type="number"
              min={0}
              placeholder="Tiradas"
              value={caja.tiradas ?? ""}
              onChange={(e) => setCaja(prev => ({ ...prev, tiradas: Number(e.target.value) }))}
              className="bg-white/5 focus:bg-white/6 placeholder:text-white/40 rounded-md px-3 py-2 outline-none"
              aria-label="Tiradas"
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-xs text-white/70 mb-1">Posnet</span>
            <input
              type="number"
              min={0}
              placeholder="Posnet en ventas"
              value={caja.posnet ?? ""}
              onChange={(e) => setCaja(prev => ({ ...prev, posnet: Number(e.target.value) }))}
              className="bg-white/5 focus:bg-white/6 placeholder:text-white/40 rounded-md px-3 py-2 outline-none"
              aria-label="Posnet"
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-xs text-white/70 mb-1">Cambio</span>
            <input
              type="number"
              min={0}
              placeholder="Total de caja / cambio"
              value={caja.cambio ?? ""}
              onChange={(e) => setCaja(prev => ({ ...prev, cambio: Number(e.target.value) }))}
              className="bg-white/5 focus:bg-white/6 placeholder:text-white/40 rounded-md px-3 py-2 outline-none"
              aria-label="Cambio"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Calcular
          </button>

          <button
            type="button"
            onClick={() => setCaja({})}
            className="bg-transparent border border-white/10 text-white px-3 py-2 rounded-md text-sm hover:bg-white/3"
          >
            Limpiar
          </button>

          {error && <div className="text-sm text-yellow-300 ml-2">{error}</div>}
        </div>
      </form>

      {/* Resultado */}
      <div className="bg-gray-900/50 rounded-md p-4 border border-white/6">
        <h4 className="text-sm text-white/70 mb-2">Resumen</h4>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm">
            <div className="text-xs text-white/60">Caja</div>
            <div className="text-lg font-semibold">{formatCurrency(Number(cajaRealTotal ?? 0))}</div>
          </div>

          <div className="text-sm text-right">
            <div className="text-xs text-white/60">Diferencia</div>
            <div>
              {diferencias === 0 && <span className="text-green-400 font-medium">Caja cerrada OK ✅</span>}
              {diferencias > 0 && (
                <span className="text-yellow-400 font-medium">Sobró plata (+{formatCurrency(Number(diferencias))})</span>
              )}
              {diferencias < 0 && (
                <span className="text-red-400 font-medium">Falta plata ({formatCurrency(Number(diferencias))})</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}