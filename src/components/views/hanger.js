import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Hanger(props){
    const product = props.product;
    const navigate=useNavigate();
    const handleDelete = async () => {
        try {
            await api.delete(`${url.HANGER.DELETE}/?id=${product.id}`);
            window.alert(`Product with hanger name ${product.hangerName} has been deleted.`);
            navigate("/hangers");
            // Optionally, you can trigger a refresh or update the UI after deletion
            // For instance, you might want to remove the deleted item from the list
        } catch (error) {
            console.error("Error deleting product:", error);
            // Handle errors, show an alert, or perform specific actions
        }
    };
    return(
        <tr>
            <td>{product.id}</td>
             <td>{product.hangerName}</td>
             <td>${product.hangerAmount}.00</td>
            <td><Link to={`/hangers_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link>
             <a onClick={handleDelete} class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
        </tr>
    )
}
export default Hanger;