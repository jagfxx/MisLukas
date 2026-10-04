"use client";
export default function Income() {
    return (
        <div className="flex flex-col items-center  w-full h-full">
            <h1 className="text-2xl font-bold">Ingresos totales</h1>
            <div className="flex flex-col items-center border border-gray-300 rounded-md p-4  w-full ">
                <fieldset className="flex  items-center  w-full h-full gap-4">
                    <legend className="text-lg font-bold">Registrar ingreso</legend>
                    <input type="text" placeholder="Descripcion" required className="w-full h-10 rounded-md border border-gray-300 p-2" />
                    <input type="number" placeholder="Monto" required className="w-full h-10 rounded-md border border-gray-300 p-2" />
                    <input type="date" placeholder="Fecha" required className="w-full h-10 rounded-md border border-gray-300 p-2" />
                    <button className="w- h-10 rounded-md border border-gray-300 p-2">Agregar</button>
                </fieldset>
            </div>

            <div className="flex flex-col items-center  w-full border border-gray-300 rounded-md p-4 ">
                <h1 className="text-2xl font-bold">Historial de ingresos</h1>
                <table className="w-full h-full">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Descripcion</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}