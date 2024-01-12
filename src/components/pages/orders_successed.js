import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Orders_Successed() {

    const navigate = useNavigate();
    const [orders,setOrders] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');

    const loadOrders = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_ORDER_SUCCESSED);
            setOrders(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadOrders();
    },[]);

    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
    
        // Kiểm tra giá trị được chọn và thực hiện chuyển hướng
        switch (selectedValue) {
          case 'all_orders':
            navigate('/orders');
            break;
          case 'orders_waitting':
            navigate('/orders_waitting');
            break;
          case 'orders_confirmed':
            navigate('/orders_confirmed');
            break;
          case 'orders_shipping':
            navigate('/orders_shipping');
            break;
          case 'orders_shipped':
            navigate('/orders_shipped');
            break;
          case 'orders_successed':
            navigate('/orders_successed');
            break;
          case 'orders_cancelled':
            navigate('/orders_cancelled');
            break;
          default:
            break;
        }
    };
    
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Orders Successed</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Orders Successed</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                            <div className="top_select" style={{display:"flex"}}>
                                    <h5 class="card-title">List Orders Succeeded</h5>
                                    <div className="select_status" style={{ marginLeft: "auto" }}>
                                        <select name="FilterOrder" value={selectedFilter} onChange={handleFilterChange}>
                                            <option value="all_orders">All Orders</option>
                                            <option value="orders_waitting">Orders Waitting</option>
                                            <option value="orders_confirmed">Orders Confirmed</option>
                                            <option value="orders_shipping">Orders Shipping</option>
                                            <option value="orders_shipped">Orders Shipped</option>
                                            <option value="orders_successed">Orders Succeeded</option>
                                            <option value="orders_cancelled">Orders Canceled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Total Amount</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order=>(
                                        <tr style={{verticalAlign: "initial"}}>
                                                <td>{order.id}</td>
                                                <td>{order.user.name}</td>
                                                <td>${order.total_amount}</td>
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
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Orders_Successed;