

const action = () => console.log("action #1")


export default function botao() {
const action2 = () => console.log("action #2")

    return (
        <div style={{
            margin: "auto"
        }}>
            <button onClick={action}>Click1</button>
            <button onClick={action2}>Click2</button>
            <button onClick={function(){
                console.log("action #3")
            }}>Click3</button>
            <button onClick={() => console.log("action #4")}>click4</button>

            <input onChange={e => console.log(e.target.value)} />
        </div>
    )
}