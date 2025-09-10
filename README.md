<h1>Sistema de Cierre — Panel de Inventario y Caja</h1>

Una mini-app frontend pensada para gestionar productos (precios, cantidades de inicio y cierre), calcular ventas y cerrar caja. Responsive y pensada para poner en funcionabilidad donde trabajo.
<h1>¿Cuales son sus principales funcionabilidades?</h1>

Permite ingresar cantidades de inicio y cantidades de cierre por producto.

Permite cargar precios por producto.

Calcula un total de ventas por producto y un Total General.

Módulo de cálculo real de caja (tiradas + posnet + cambio) y muestra la diferencia con el total teórico.

Validaciones en inputs: sin negativos, límites (ej.: cantidad máximas / precios máximos), mensajes de error temporales.

UI compacta y consistente: panels para Inicio, Cierre, Precios, Resultados; componentes reutilizables (ProductoForm, CierreForm, InicioPanel, CierrePanel, PreciosPanel, ComponenteResultados).

Persistencia simple en localStorage (opcional), pensada para no depender de backend (ideal para prototipado).

🚀 <h1>Stack tecnológico</h1>

Frontend: React + TypeScript

Estilos: Tailwind CSS (claro/oscuro, minimal)

Componentes UI: Material UI (TableContainer/Tabla) combinado con Tailwind para layout rápido

Backend: Express + nodeJS + MongoDB

<h1>Componentes clave:</h1>

ProductoForm: input genérico para cantidad o precio por producto. Maneja validación local.

InicioPanel: formulario para ingresar cantidades iniciales + tabla con cantidades actuales.

CierrePanel: formulario para ingresar cantidades del cierre + resumen.

PreciosPanel: formulario para cargar precios + resumen con formato de moneda.

ComponenteResultados: lista/tabla con el cálculo por producto (inicio, cierre, vendidos, total) y TotalGeneral.

CierreForm: formulario para calcular caja real (tiradas, posnet, cambio) y mostrar diferencia con total vendido. Incluye validaciones y mensajes.
