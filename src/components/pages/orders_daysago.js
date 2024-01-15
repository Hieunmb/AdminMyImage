import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Orders_Daysago() {

    const { daysAgo } = useParams();
    const [orders, setOrders] = useState([]);

    const loadOrdersByDaysAgo = async () => {
        try {
            const rs = await api.get(url.ORDER.GET_ORDER_DAYSAGO +'?daysAgo='+daysAgo);
            setOrders(rs.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadOrdersByDaysAgo();
    }, [daysAgo]);


    
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Orders for {daysAgo} ago</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Orders for {daysAgo} ago</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                            <div className="top_select" style={{display:"flex"}}>
                                    <h5 class="card-title">List Orders for {daysAgo} ago</h5>
                                </div>
                                <div class="table-responsive m-t-30">
                                {orders.length !== 0 ? (
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
                                ) : (
                                    <h2>Don't have orders for {daysAgo} ago!</h2>
                                )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Orders_Daysago;