import { useState } from "react";



export default function mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    function location(ev) {
        console.log(ev.clientX, ev.clientY)
        setX(ev.clientX);
        setY(ev.clientY)
    }
    return (
        <div onMouseMove={location} style={{
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div>
                Eixo X: {x}

                Eixo Y: {y}
            </div>
        </div>
    )
}