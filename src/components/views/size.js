import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Size(props){
    const product = props.product;
    const navigate= useNavigate();
    const handleDelete = async () => {
        try {
            await api.delete(`${url.SIZE.DELETE}/?id=${product.id}`);
            window.alert(`Product with size name ${product.sizeName} has been deleted.`);
            navigate("/sizes");
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
             <td>{product.sizeName}</td>
             <td>{product.sizeWidth}</td>
             <td>${product.sizeAmount}.00</td>
            <td><Link to={`/sizes_edit/${product.id}`} className="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i className="ti-marker-alt"></i></Link>
            <a onClick={handleDelete} className="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i className="ti-trash"></i></a></td>
        </tr>
    )
}
export default Size;