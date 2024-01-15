import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import Order from "../views/order";
import { useNavigate } from "react-router-dom";

function Orders() {

    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('');
    const [daysAgo, setDaysAgo] = useState(0);
    const loadProducts = async ()=>{
        try {
            const rs = await api.get(url.ORDER.LIST);
            setProducts(rs.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        loadProducts();
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

const handleRunButtonClick = () => {
    // Chuyển sang trang orders_filterdays và truyền giá trị daysAgo
    navigate(`/orders_filterdays/${daysAgo}`);
}

    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Orders</h4>
                    </div>
                    
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Orders</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="top_select" style={{display:"flex"}}>
                                    <h5 class="card-title">List Orders</h5>
                                    <div className="select_status" style={{ marginLeft: "auto" }}>
                                        <select style={{height:"35px"}} name="FilterOrder" value={selectedFilter} onChange={handleFilterChange}>
                                            <option value="all_orders">All Orders</option>
                                            <option value="orders_waitting">Orders Waitting</option>
                                            <option value="orders_confirmed">Orders Confirmed</option>
                                            <option value="orders_shipping">Orders Shipping</option>
                                            <option value="orders_shipped">Orders Shipped</option>
                                            <option value="orders_successed">Orders Succeeded</option>
                                            <option value="orders_cancelled">Orders Canceled</option>
                                        </select>
                                    </div>
                                    <div className="filter_days" style={{ marginLeft: "50px" }}>
                                        <form action="" style={{ display: "flex" }}>
                                            <input onChange={(e) => setDaysAgo(parseInt(e.target.value, 10))} value={daysAgo} min={0} type="number" style={{ width: "120px", marginRight: "5px", height: "35px" }} placeholder="Filter Days Ago" />
                                            <button type="button" onClick={handleRunButtonClick} className="btn btn-primary">Run</button>
                                        </form>
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
                                        {
                                            products.map((e,k)=>{
                                                return (
                                                    <Order key={k} product={e} />
                                                )
                                            })
                                        }
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
    
export default Orders;