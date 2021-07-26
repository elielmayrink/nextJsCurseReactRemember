import { useState } from "react"

export default function counter() {
    const [counter, setCouter] = useState(0)

    return (
        <div style={{color: "#fff"}}>

            
            <div style={{
                backgroundColor: "#222",
                color: "#fff",
                height: "100vh",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>Counter</h1>
                <h2>{counter}</h2>
                <div style={{display:"flex"}}>
                    <button onClick= {() => setCouter(counter - 1)}>-</button>
                    <button onClick= {() => setCouter(counter + 1)}>+</button>
                </div>
            </div>

        </div>
    )
}