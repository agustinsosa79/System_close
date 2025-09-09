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

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const cajaReal = (caja.tiradas ?? 0) + (caja.posnet ?? 0) + (caja.cambio ?? 0)
            const diferencia = cajaReal - TotalGeneral
            setCajaRealTotal(cajaReal)
            setDiferencias(diferencia)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Cierre final</h3>
            <div className="grid grid-cols-3">
            <label>Tiradaas
            <input type="number" placeholder="Tiradas" value={caja.tiradas ?? ''} onChange={(e) => setCaja((prev) => ({...prev, tiradas: Number(e.target.value)}))} />
            </label>
            <label>Posnet:
            <input type="number" placeholder="Posnet en ventas" value={caja.posnet ?? ''} onChange={(e) => setCaja((prev) => ({...prev, posnet: Number(e.target.value)}))} />
            </label>
            <label >Cambio:
            <input placeholder="Total de caja/cambio" type="number" value={caja.cambio ?? ''} onChange={(e) => setCaja((prev) => ({...prev, cambio: Number(e.target.value)}))} />
            </label>
            <button type="submit">Calcular</button>
            </div>
            </form>
            <div>
                <div>
                    <h3>Caja: {cajaRealTotal}</h3>
                    <h4>Diferencia: {diferencias}</h4>
                    {diferencias === 0 && <p className="text-green-500">Caja cerrada OK ✅</p>}
                    {diferencias > 0 && <p className="text-yellow-500">Sobró plata (+{diferencias})</p>}
                    {diferencias < 0 && <p className="text-red-500">Falta plata ({diferencias})</p>}
                </div>
            </div>
        </div>
    )
}