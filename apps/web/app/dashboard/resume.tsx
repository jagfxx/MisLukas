"use client";
export default function Resume() {
    return (
        <div className="flex flex-col items-center  w-full h-full">
                <h1 className="text-2xl font-bold">Resumen Financiero</h1>
                <div className="flex flex-col items-center  w-full h-full">
                  <div className="flex flex-row items-center  w-full h-full">
                    <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <h2 className="text-lg font-bold">Ingresos Totales</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <h2 className="text-lg font-bold">Gastos fijos</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <h2 className="text-lg font-bold">Gastos totales</h2>
                    </div>
                  </div>
                </div>
             </div>
    )
}