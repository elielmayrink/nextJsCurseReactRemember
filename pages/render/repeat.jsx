import productList from "../../data/productList"
import Product from "../../models/product";
export default function repeat() {

    const list = productList;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(product => {
                        return <tr key={product.id}> 
                                    <td style={{border: "1px solid #000"}}>{product.id}</td> 
                                    <td style={{border: "1px solid #000"}}>{product.name}</td> 
                                    <td style={{border: "1px solid #000"}}>{product.preco}</td>
                                    </tr>
                                })}
                </tbody>
            </table>
            
        </div>
    )
}