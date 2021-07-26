export default function lista() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <ul>

            {
                list.map(number => <span key={number}>{number},<br/></span>)
            }
            </ul>
        </div>
    )
}