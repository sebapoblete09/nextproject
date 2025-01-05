"use client"
import { useState } from "react";

function HomePage(){

    const [cont, setCont] = useState(0)

    const contador = ()=>{
        setCont(cont+1);
    }

    return (
            <div>
            <div>
                <h2>Hero wrapped carrousel</h2>
            </div>
            <div>
                recomendados, ultimos vistos y mas
            </div>

            <div>
                ver catalogo completo
            </div>
            </div>
        
    )
}

export default HomePage;