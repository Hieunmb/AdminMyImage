import { Link, useNavigate } from "react-router-dom";


function Order(props){
    const order = props.product;
    return(
        <tr style={{verticalAlign: "initial"}}>
            <td>{order.id}</td>
            <td>{order.user.name}</td>
            <td>{order.total_amount}</td>
            <td>
                {
                    (() => {
                    switch (order.status) {
                        case 0:
                        return <span className="label label-danger">Canceled</span>;

                        case 1:
                        return <span className="label label-warning">Waitting...</span>;

                        case 2:
                        return <span className="label label-success">Confirmed</span>;

                        case 3:
                        return <span className="label label-success">Shipping...</span>;

                        case 4:
                        return <span className="label label-success">Shipped</span>;

                        case 5:
                        return <span className="label label-success">Successed</span>;

                        default:
                        return null;
                    }
                    })()
                }
            </td>
            <td>{order.created_at}</td>
            <td><Link to={`/view_orders/${order.id}`} className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}>View</Link></td>
        </tr>
    )
}
export default Order;