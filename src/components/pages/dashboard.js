import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";


function Dashboard() {
    const currentDate = new Date();

    const [orders,setOrders] = useState([]);
    const [today_orders,setTodayOrders] = useState([]);
    const [today_amount, setTodayAmout] = useState([]);
    const [yesterday_amount, setYesterdayAmout] = useState([]);
    const [twodaysago_amount, setTwodaysagoAmout] = useState([]);
    const [threedaysago_amount, setThreedaysagoAmout] = useState([]);
    const [fourdaysago_amount, setFourdaysagoAmout] = useState([]);
    const [fivedaysago_amount, setfivedaysagoAmout] = useState([]);
    const [sixdaysago_amount, setSixdaysagoAmout] = useState([]);

    const [month1_amount, setMonth1Amout] = useState([]);
    const [month2_amount, setMonth2Amout] = useState([]);
    const [month3_amount, setMonth3Amout] = useState([]);
    const [month4_amount, setMonth4Amout] = useState([]);
    const [month5_amount, setMonth5Amout] = useState([]);
    const [month6_amount, setMonth6Amout] = useState([]);
    const [month7_amount, setMonth7Amout] = useState([]);
    const [month8_amount, setMonth8Amout] = useState([]);
    const [month9_amount, setMonth9Amout] = useState([]);
    const [month10_amount, setMonth10Amout] = useState([]);
    const [month11_amount, setMonth11Amout] = useState([]);
    const [month12_amount, setMonth12Amout] = useState([]);

    const [users,setUsers] = useState([]);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear()


    const loadOrders = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_ORDER_WAITTING);
            setOrders(rs.data);
        } catch (error) {
            
        }
    }

    const loadTodayOrders = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_ORDER_TODAY);
            setTodayOrders(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountToday = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_TODAY);
            setTodayAmout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountYesterday = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_YESTERDAY);
            setYesterdayAmout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountTwodaysago = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_TWODAYSAGO);
            setTwodaysagoAmout(rs.data);

        } catch (error) {
            
        }
    }
    const loadAmountThreedaysago = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_THREEDAYSAGO);
            setThreedaysagoAmout(rs.data);

        } catch (error) {
            
        }
    }
    const loadAmountFourdaysago = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_FOURDAYSAGO);
            setFourdaysagoAmout(rs.data);

        } catch (error) {
            
        }
    }
    const loadAmountFivedaysago = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_FIVEDAYSAGO);
            setfivedaysagoAmout(rs.data);

        } catch (error) {
            
        }
    }
    const loadAmountSixdaysago = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_SIXDAYSAGO);
            setSixdaysagoAmout(rs.data);

        } catch (error) {
            
        }
    }


    const loadAmountMonth1 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH1);
            setMonth1Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth2 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH2);
            setMonth2Amout(rs.data);

        } catch (error) {
            
        }
    }
    
    const loadAmountMonth3 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH3);
            setMonth3Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth4 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH4);
            setMonth4Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth5 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH5);
            setMonth5Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth6 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH6);
            setMonth6Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth7 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH7);
            setMonth7Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth8 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH8);
            setMonth8Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth9 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH9);
            setMonth9Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth10 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH10);
            setMonth10Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth11 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH11);
            setMonth11Amout(rs.data);

        } catch (error) {
            
        }
    }

    const loadAmountMonth12 = async ()=>{
        try {
            const rs = await api.get(url.ORDER.GET_AMOUNT_MONTH12);
            setMonth12Amout(rs.data);

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
        loadAmountToday();
        loadAmountYesterday();
        loadAmountTwodaysago();
        loadAmountThreedaysago();
        loadAmountFourdaysago();
        loadAmountFivedaysago();
        loadAmountSixdaysago();

        loadUsers();

        loadAmountMonth1();
        loadAmountMonth2();
        loadAmountMonth3();
        loadAmountMonth4();
        loadAmountMonth5();
        loadAmountMonth6();
        loadAmountMonth7();
        loadAmountMonth8();
        loadAmountMonth9();
        loadAmountMonth10();
        loadAmountMonth11();
        loadAmountMonth12();
    },[]);


    useEffect(()=>{

        const xValues = [day-6, day-5, day-4, day-3, day-2 , day-1, day,];
        const ctx = document.getElementById("myChart").getContext("2d");

        new window.Chart(ctx, { 
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    data: [ sixdaysago_amount.total_amount, fivedaysago_amount.total_amount, fourdaysago_amount.total_amount, threedaysago_amount.total_amount, twodaysago_amount.total_amount, yesterday_amount.total_amount, today_amount.total_amount,],
                    borderColor: "green",
                    fill: false
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: `Amount in month ${month}`,
                }
            }
        });

        const aValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const bValues = [month1_amount.total_amount, month2_amount.total_amount, month3_amount.total_amount, month4_amount.total_amount, month5_amount.total_amount, month6_amount.total_amount, month7_amount.total_amount, month8_amount.total_amount, month9_amount.total_amount, month10_amount.total_amount, month11_amount.total_amount, month12_amount.total_amount];
        const barColors = ["red", "green", "blue", "orange", "brown", "yellow", "pink", "blue", "red", "green", "orange", "violet"];

        const ctx2 = document.getElementById("myChart2").getContext("2d");

        new window.Chart(ctx2, {
            type: "bar",
            data: {
                labels: aValues,
                datasets: [
                    {
                        backgroundColor: barColors,
                        data: bValues,
                    },
                ],
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: `World Wine Production ${year}`,
                },
            },
        });
    })

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
                                    <h1 class="font-light"><i class="ti-money text-info"></i>{today_amount.total_amount}</h1>
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
                <div class="row" style={{backgroundColor:"#fff",width:"1249.2px",margin:"auto"}}>
                    <div class="col-lg-6 col-md-12">
                    <canvas id="myChart" style={{width:"100%",maxWidth:"1250px"}}></canvas>
                    </div>
                    <div class="col-lg-6 col-md-12">
                    <canvas id="myChart2" style={{width:"100%",maxWidth:"1250px"}}></canvas>
                    </div>
                </div>
                <div class="row"  style={{marginTop:"20px"}}>
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Waitting Orders</h5>
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