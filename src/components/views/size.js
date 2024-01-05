import { Link } from "react-router-dom";

function Size(props){
    const product = props.product;
    console.log(props.product);
    return(
        <tr>
            <td>{product.id}</td>
             <td>{product.sizeName}</td>
             <td>{product.sizeWidth}</td>
             <td>{product.sizeHeight}</td>
             <td>${product.sizeAmount}.00</td>
            <td><Link to={`/sizes_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
        </tr>
    )
}
export default Size;