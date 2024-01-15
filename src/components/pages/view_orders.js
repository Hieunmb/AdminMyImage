import { useState,useEffect } from "react";
import url from "../../services/url";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function View_orders() {
    const {id} = useParams();
    const navigate=useNavigate();
    const [order, setOrder] = useState([]);
    const [orderimage, setOrderImage] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const loadOrder = async()=>{
        try {
            const rs = await api.get(url.ORDER.GET+`?id=${id}`);
            setOrder(rs.data);
        } catch (error) {
            console.error("Error loading order:", error);
        }
    }

    const loadOrderImage = async()=>{
        try {
            const rs = await api.get(url.ORDERIMAGE.GET+`?orderId=${id}`);
            setOrderImage(rs.data);

            const total = rs.data.reduce((acc, image) => acc + image.amount, 0);
            setTotalAmount(total);

        } catch (error) {
            console.error("Error loading order:", error);
        }
    }

    useEffect(()=>{
        loadOrder();
        loadOrderImage();
    },[]);



    const handleUpdateOrder = async () => {
        try {
            const rs = await api.put(url.ORDER.UPDATEORDER + `?Id=${id}`);
            window.alert(`This order has been updated !`);
            // Logic sau khi xác nhận đơn hàng thành công
            navigate(`/view_orders/${id}`);
            if(rs.data.status==3)
            console.log("Order confirmed successfully:", rs.data);const emailPayload = {
                to: rs.data.email,
                subject: "Payment Confirmation",
                body: `<html>
                <body>
                  <h1 style="color: #333;">Your Order Confirmation</h1>
                  <p style="font-size: 16px; color: #666;">
                    Your order has been processed and is now on its way to you.
                  </p>
                  <p style="font-size: 14px; color: #888;">
                    Please click the following link to view and confirm your order details:
                    <a href="http://localhost:3000/orders" target="_blank" style="color: #007bff; text-decoration: none;">
                      View Order Details
                    </a>
                  </p>
                  <hr style="border-top: 1px solid #ddd;">
                  <p style="font-size: 12px; color: #aaa;">
                    This is an automated message. Please do not reply.
                  </p>
                </body>
              </html>`,
              };
          
              // Replace the following lines with your actual email sending logic
              const emailResponse = await api.post('https://localhost:7174/send', emailPayload);
        } catch (error) {
            console.error("Error confirming order:", error);
        }
    };

    const handleCancelOrder = async () => {
        try {
            const rs = await api.put(url.ORDER.CANCELORDER + `?Id=${id}`);
            window.alert(`This order has been cancelled !`);
            // Logic sau khi hủy đơn hàng thành công
            navigate(`/view_orders/${id}`);
            console.log("Order canceled successfully:", rs.data);
        } catch (error) {
            console.error("Error canceling order:", error);
        }
    };
    //thumbnail detail
    const handlePrintThumbnail = (imageUrl) => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "thumbnail.jpg"; // Set the desired filename here
        link.target = "_blank"; // Open in a new tab/window
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">View Orders</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">View</li>
                                <li class="breadcrumb-item active">View Orders</li>
                            </ol>
                        </div>
                    </div>
                </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Orders Detail</h5>
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Thumbnail</th>
                                                        <th>Frame</th>
                                                        <th>Hanger</th>
                                                        <th>Size</th>
                                                        <th>Quantity</th>
                                                        <th>Create At</th>
                                                        <th>Action</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        orderimage.map(image =>(
                                                        <tr>
                                                        <td>{image.id}</td>
                                                        <td><img src={image.thumbnail} alt="Thumbnail" width="80"/></td>
                                                        <td>{image?.frame?.frame_name}</td>
                                                        <td>{image?.hanger?.hanger_name}</td>
                                                        <td>{image?.size?.size_name}</td>
                                                        <td>{image.quantity}</td>
                                                        <td>{image?.order?.created_at}</td>
                                                        <td>
                                                            <button onClick={() => handlePrintThumbnail(image.thumbnail)} className="btn btn-primary">
                                                              Thumbnail Detail
                                                            </button>
                                                        </td>
                                                        <td class="font-500">${image.amount}</td>
                                                    </tr>
                                                        ))
                                                    }
                                                    
                                                    <tr>
                                                        <td colspan="8" class="font-500" align="right">Total Amount</td>
                                                        <td class="font-500">${order.total_amount}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row" style={{marginLeft:"40px"}}>
                                        <div className="col-xl-6">
                                            <ul className="list-unstyled">
                                                <li className="text-muted"><span style={{fontWeight:"bold"}}>Name: </span><span>{order?.user?.name}</span></li>
                                                <li className="text-muted"><span style={{fontWeight:"bold"}}>Email: </span><span>{order.email}</span></li>
                                                <li className="text-muted"><span style={{fontWeight:"bold"}}>Phone: </span><span>{order.phone}</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="list-unstyled">
                                                <li className="text-muted"><span style={{fontWeight:"bold"}}>Street: </span><span>{order.address}</span></li>
                                                <li className="text-muted"><span style={{fontWeight:"bold"}}>City: </span><span>{order.city}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style={{marginTop:"20px", marginLeft:"45px", marginBottom:"30px"}}>
                                    {
                                        (() => {
                                        switch (order.status) {
                                            case 0:
                                            return <>
                                             <i style={{color:"red",fontSize:"25px",fontWeight:"bold"}}>Canceled</i>
                                            </>;
                                            
                                            case 1:
                                                return <>
                                                <i style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>Waitting</i>
                                                <br></br>
                                                <br></br>
                                                <a onClick={handleCancelOrder} className="btn btn-danger">Cancel</a>   
                                                <a onClick={handleUpdateOrder} className="btn btn-success" style={{marginLeft:"20px"}}>Confirm</a>
                                                </>;
                                            case 2:
                                                return <>
                                                <i style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>Confirmed</i>
                                                <br></br>
                                                <br></br>
                                                <a onClick={handleUpdateOrder} className="btn btn-success">Transport</a>
                                                </>;
                                            case 3:
                                                return <>
                                                <i style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>Shipping</i>
                                                <br></br>
                                                <br></br>
                                                <a onClick={handleUpdateOrder} className="btn btn-success">Shipped</a>
                                                </>;
                                            case 4:
                                                return <>
                                                <i style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>Shipped</i>
                                                </>;
                                            case 5:
                                                return <>
                                                <i style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>Successed</i>
                                                </>;
                                            default:
                                            return null;
                                        }
                                        })()
                                    }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
    
export default View_orders;