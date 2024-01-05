import { useState } from "react";
import { Link } from "react-router-dom";

function Frame(props){
    const product = props.product;
    const [isDeleted, setIsDeleted] = useState(false);
    const handleSoftDelete = () => {
        // Perform an action to soft delete the item (set 'deleted' flag to true)
        setIsDeleted(true);
    };
    if (isDeleted) {
        return null; // If deleted, don't render anything for this item
    }


    return(
          <tr>
              <td>{product.id}</td>
              <td>{product.frame_name}</td>
              <td>{product.frame_color_outsite}</td>
              <td>{product.frame_color_insite}</td>
              <td>{product.frame_amount}</td>
              <td><Link to={`/frames_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link> <a onClick={handleSoftDelete} class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
          </tr>
                                            
    )
}
export default Frame;