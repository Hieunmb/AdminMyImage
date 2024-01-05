import { useEffect,useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import Hanger from "../views/hanger";

function Hangers() {
    const [products,setProducts] = useState([]);
    const loadProducts = async ()=>{
        try {
            const rs = await api.get(url.HANGER.LIST);
            setProducts(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadProducts();
    },[]);
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Hangers</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Hangers</li>
                            </ol>
                            <a type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white" href="/hangers_create">Create New</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">List Hangers</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Hanger Name</th>
                                                <th>Hanger Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            products.map((e,k)=>{
                                                return (
                                                    <Hanger key={k} product={e} />
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
    
export default Hangers;