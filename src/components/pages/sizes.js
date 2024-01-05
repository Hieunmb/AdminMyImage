import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import Size from "../views/size";

function Sizes() {
    const [products,setProducts] = useState([]);
    const loadProducts = async ()=>{
        try {
            const rs = await api.get(url.SIZE.LIST);
            setProducts(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadProducts();
    },[]);
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Sizes</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item active">Sizes</li>
                            </ol>
                            <a type="button" className="btn btn-info d-none d-lg-block m-l-15 text-white" href="/sizes_create">Create New</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">List Sizes</h5>
                                <div className="table-responsive m-t-30">
                                    <table className="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Size Name</th>
                                                <th>Size Width</th>
                                                <th>Size Height</th>
                                                <th>Size Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            products.map((e,k)=>{
                                                return (
                                                    <Size key={k} product={e} />
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
    
export default Sizes;