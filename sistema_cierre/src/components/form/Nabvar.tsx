import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="!fixed !top-0 !left-0 !right-0 !flex !text-center !gap-2 md:!gap-10 justify-center !pt-20 bg-black text-white  !py-4 !shadow-md shadow-black   !z-50">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/cierre">Cierre</NavLink>
      <NavLink to="/precios">Precios</NavLink>
      <NavLink to="/calculos">Calculo</NavLink>
      <NavLink to="/calculoGeneral">Calculo general</NavLink>
    </nav>
  );
};