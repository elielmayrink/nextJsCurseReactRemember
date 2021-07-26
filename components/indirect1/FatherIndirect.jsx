import SonIndirect from "./sonIndirect";

export default function FatherIndirect(props) {
    const action = (param) => {
        console.log(param)
    }
    return (
        <div>
            <SonIndirect call={action} />
        </div>
    )
}