import { useContext, useEffect, useState } from "react"
import { PreciosContext } from "../context/precios_context/preciosContext"
import { CantidadesContext } from "../context/cantidad_context/cantidadContext"

type Producto = {
  _id: string;
  key: string;
  label: string;
  price: number;
  quantity: number;
};



export const useHeladosFecth = () => {
    const { setPreciosTotal } = useContext(PreciosContext)
    const { setCantidadesCierre, setCantidadesInicio } = useContext(CantidadesContext)
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
    const fetchProductos = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data: Producto[] = await res.json();

    const precios: Record<string, number> = {};
    const cantidadesInicio: Record<string, number> = {};
    const cantidadesCierre: Record<string, number> = {};

    data.forEach((p: { key: string; price: number; quantity: number }) => {
        precios[p.key] = p.price ?? 0;
        cantidadesInicio[p.key] =  p.quantity ?? 0;
        cantidadesCierre[p.key] =  0  
    });



        setProductos(data);  
    setPreciosTotal(precios);         
    setCantidadesInicio((prev) => Object.keys(prev).length === 0 ? cantidadesCierre : prev)
    setCantidadesCierre((prev) =>Object.keys(prev).length === 0 ? cantidadesCierre : prev);
  };

  fetchProductos();
}, [setCantidadesCierre, setPreciosTotal,setCantidadesInicio]);

    return {productos}
}