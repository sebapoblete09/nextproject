"use client"
import { useState } from "react";

function HomePage(){

    const [cont, setCont] = useState(0)

    const contador = ()=>{
        setCont(cont+1);
    }

    return (
            <div>
                <h1> Pagina de Inicio</h1>

                <div>
                    <h2>Contador</h2>
                    <button onClick={contador}>{cont}</button>
                </div>
            </div>
        
    )
}

export default HomePage;