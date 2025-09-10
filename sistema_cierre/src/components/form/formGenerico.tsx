import { useState, type ChangeEvent, type FormEvent} from "react"

//interface generica
interface ProductoFormProps {
    productoKey: string
    label: string
    onGuardar : (producto: string, cantidad: number) => void
    tipo: 'precio' | 'cantidad'
}

export const ProductoForm = ({ productoKey, label ,onGuardar, tipo}: ProductoFormProps) => {
    const [valor, setValor] = useState('')
    const [error, setError] = useState('')

    const numero = Number(valor)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(valor.trim() === '') return
        if(tipo === 'cantidad' && numero >= 1000) {
            setValor('')
            setError('Solo se permiten hasta 1000 productos')
            setTimeout(() => setError(''), 3000)
            return
        }
        if (tipo === 'precio' && numero >30000) {
            setValor('')
            setError('No esta permitido')
            setTimeout(() => setError(''), 3000)
            return
        }
        if((tipo === 'cantidad' || tipo === 'precio') && numero < 0 ) {
            setValor('')
            setError('no se permiten numeros negativos')
            setTimeout(() => setError(''), 3000)
            return
        }
        onGuardar(productoKey, numero)
        setValor('')
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value)
    }

    return (
        <form
    onSubmit={handleSubmit}
    className="!space-y-4 !p-4 bg-gray-800 rounded-xl shadow-md w-full max-w-sm"
>
  {/* Label */}
    <h4 className="text-sm   font-semibold text-gray-100">{label}</h4>

  {/* Input numérico */}
    <div className="flex flex-col space-y-1">
    <label htmlFor="input-valor" className="text-sm text-gray-300">
    {tipo === "cantidad" ? "Cantidad" : "Precio"}
    </label>
    <input
        id="input-valor"
        type="number"
        value={valor}
        onChange={handleOnChange}
        className="rounded-lg bg-gray-900 border border-gray-600 text-gray-100 !px-3 !py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        placeholder={tipo === "cantidad" ? "Ej: 10" : "Ej: 2500"}
    />
    </div>

  {/* Botón */}
    <button
    type="submit"
    className="w-full py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition-colors"
    >
    {tipo === "cantidad" ? "Agregar Cantidad" : "Agregar Precio"}
    </button>

  {/* Error */}
    {error && (
    <p className="text-sm text-red-400 font-medium">
        {error}
    </p>
    )}
</form>

    )
}