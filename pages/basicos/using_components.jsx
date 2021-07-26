import Title from "../../components/Title";

export default function usingComponents() {
    const name = "Eliel Mayrink"
    return (
        <>
            <Title
                title="Bom Dia"
                subTitle={name}
            />
        </>
    )
}