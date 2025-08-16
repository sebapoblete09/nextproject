"use client"
import { forwardRef } from "react";

const NewFavState = forwardRef(({name, onConfirm}, ref) => {

    return (
        <dialog id="favDialog" ref={ref} className="bg-slate-500 rounded-lg p-6 shadow-lg">

            <form className="">
                <p>Añadir a favorito <strong>{name}</strong>
                <br />

                <label> En que estados tienes este anime: 
                    <select className="bg-slate-900 ">
                        <option value="default" disabled selected>Seleccionar estado</option>
                        <option value="En Espera">En Espera</option>
                        <option value="Viendo">Viendo</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </label>
                </p>
                <div className="flex justify-end gap-4 py-4">
                    <button value="Cancel" formMethod="dialog">Cancelar</button>
                    <button value="confirm" onClick={onConfirm} className="bg-[#ff640a] hover:bg-[#ff4500] p-2 rounded-lg">
                        Confirmar
                    </button>
                </div>
            </form>
        </dialog>
    )
});
export default NewFavState;
