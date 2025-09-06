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
            return setError('No esta permitido')
        }
        onGuardar(productoKey, numero)
        setValor('')
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value)
    }

    return (
        <form  onSubmit={handleSubmit}>
            <h4>{label}</h4>
            <input type="number" value={valor} onChange={handleOnChange} />
            <button>{tipo === 'cantidad' ? 'Agregar Cantidad' : 'Agregar Precio'}</button>
            {error}
        </form>
    )
}