import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Frame(props){
    const product = props.product;
    const navigate= useNavigate();
    const handleDelete = async () => {
        try {
            await api.delete(`${url.FRAME.DELETE}/?id=${product.id}`);
            window.alert(`Product with frame name ${product.frame_name} has been deleted.`);
            navigate("/frames");
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
              <td>{product.frame_name}</td>
              <td>{product.frame_color_outsite}</td>
              <td>{product.frame_color_insite}</td>
              <td>${product.frame_amount}.00</td>
              <td><Link to={`/frames_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link>
              <a onClick={handleDelete} class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
          </tr>
                                            
    )
}
export default Frame;