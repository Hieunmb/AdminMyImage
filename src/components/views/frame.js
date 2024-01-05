import { Link } from "react-router-dom";

function Frame(props){
    const product = props.product;
    return(
          <tr>
              <td>{product.id}</td>
              <td>{product.frame_name}</td>
              <td>{product.frame_color_outsite}</td>
              <td>{product.frame_color_insite}</td>
              <td>${product.frame_amount}.00</td>
              <td><Link to={`/frames_edit/${product.id}`} class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></Link> <a class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
          </tr>
                                            
    )
}
export default Frame;