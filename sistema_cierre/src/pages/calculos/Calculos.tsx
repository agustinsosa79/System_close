import { useCalculoGeneral } from "./calculoTeorico"



export const Calculos = () => {
    const {Calcular, resultado, TotalGeneral} = useCalculoGeneral()

    return (
        <div className="text-end">
        <button onClick={Calcular}>Calcular Total</button>
        {resultado.map((r) => (
            <p key={r.id} className="grid grid-cols-4 !p-10 border rounded-2xl border-white/10">
                <p>Producto:{r.producto}</p>
                <p>inicio: {r.inicio}</p>
                <p>Cierre: {r.cierre}</p>
                <p>Vendidos:{r.vendidos}</p>
                <p>Total:{r.total}</p>
            </p>
        ))}
        <h3>Total:{TotalGeneral}</h3>
        </div>
    )

    
}