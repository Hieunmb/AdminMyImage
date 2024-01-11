import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";

function Dashboard() {

    const [orders,setOrders] = useState([]);
    const [today_orders,setTodayOrders] = useState([]);
    const [today_amount, setTodayAmout] = useState(0);
    const [users,setUsers] = useState([]);
    const loadOrders = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_ORDER_WAITTING);
            setOrders(rs.data);
        } catch (error) {
            
        }
    }
    const loadTodayOrders = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_TODAY_ORDERS);
            setTodayOrders(rs.data);

            const total = rs.data.reduce((acc, today_orders) => acc + today_orders.total_amount, 0);
            setTodayAmout(total);

        } catch (error) {
            
        }
    }
    const loadUsers = async ()=>{
        try {
            const rs = await api.get(url.USER.LIST);
            setUsers(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadOrders();
        loadTodayOrders();
        loadUsers();
    },[]);


    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Dashboard</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><Link to={"/orders_waitting"}>NEW ORDERS</Link></h4>
                                <div class="text-end"> <span class="text-muted">Waitting Order</span>
                                    <br></br>
                                    <br></br>
                                    <h1 class="font-light"><i class="ti-bag text-success"></i> {orders.length}</h1>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><Link to={"/orders_today"}>TODAY ORDERS</Link></h4>
                                <div class="text-end"> <span class="text-muted">orders in today</span>
                                <br></br>
                                    <br></br>
                                    <h1 class="font-light"><i class="ti-bag text-primary"></i> {today_orders.length}</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Today Amounts</h4>
                                <div class="text-end"> <span class="text-muted">Total amount in today</span>
                                <br></br>
                                <br></br>
                                    <h1 class="font-light"><i class="ti-money text-info"></i>{today_amount}</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title"><Link to={"/users"}>List User</Link></h4>
                                <div class="text-end"> <span class="text-muted">Number of users</span>
                                <br></br>
                                <br></br>
                                    <h1 class="font-light"><i class="ti-user text-inverse"></i> {users.length}</h1>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Product Overview</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Total Amount</th>
                                                <th>Quantity</th>
                                                <th>Created at</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order =>(
                                            <tr>
                                                <td>{order.id}</td>
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
    
export default Dashboard;