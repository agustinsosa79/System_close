import { useContext } from "react"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"

import { ProductoForm } from "../components/form/formGenerico"
import { useHeladosFecth } from "../hooks/useFetchIce"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const Inicio = () => {
    const { productos } = useHeladosFecth()

    const {cantidadesInicio, setCantidadesInicio } = useContext(CantidadesContext)

    const guardarInicio = async (productoKey: string, cantidad: number) => {
        setCantidadesInicio((prev) => ({...prev, [productoKey]: cantidad}))
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

    return (
        <div className="w-lvw  mx-auto  bg-black/70 text-white rounded-lg shadow-md mt-10 md:p-30 p-10 !space-y-10">

  {/* Formulario de cantidades */}
  <section>
    <h3 className="text-2xl font-semibold mb-6">Ingresar cantidades</h3>
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-9 gap-4">
      {productos.map((p) => (
        <ProductoForm
          key={p._id}
          productoKey={p.key}
          label={p.label}
          onGuardar={guardarInicio}
          tipo="cantidad"
        />
      ))}
    </div>
  </section>

  {/* Cantidades actuales */}
  <section>
    <h3 className="text-2xl font-semibold mb-4">Cantidades actuales</h3>
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#111",
        borderRadius: "12px",
        boxShadow: "none",
      }}
    >
      <Table sx={{ minWidth: 0, border: "2px"}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white", fontWeight: 600 }}>Producto</TableCell>
            <TableCell sx={{ color: "white", fontWeight: 600 }} align="center">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(cantidadesInicio).map(([producto, cantidad]) => (
            <TableRow key={producto} hover>
              <TableCell sx={{ color: "white", fontSize: "16px" }}>{producto}</TableCell>
              <TableCell align="center">
                <span className=" bg-white px-3 py-1 rounded-xl text-md">{cantidad}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </section>

</div>
    )
}