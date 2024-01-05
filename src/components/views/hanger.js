import { Link } from "react-router-dom";

function Hanger(props){
    const product = props.product;
    console.log(props.product);
    return(
        <tr>
            <td>{product.id}</td>
             <td>{product.hangerName}</td>
             <td>${product.hangerPrice}.00</td>
            <td><Link to={`/hangers_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
        </tr>
    )
}
export default Hanger;