export default function SonIndirect(props) {
    return (
        <div>
            <h1>Indirect Son</h1>

            <button onClick={() => props.call("espirito vc esta ai??")}>click To call</button>
        </div>
    )
}