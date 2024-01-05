import { useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";
function Sizes_create() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        size_amount: 0,
        size_name: "",
        size_width:"",
        size_height:"",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const addSize = await api.post(url.SIZE.CREATE, formData);
            window.alert('Add size success!');
            navigate('/sizes');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Sizes Create</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">Sizes</li>
                                <li class="breadcrumb-item active">Sizes Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create New Size</h5>
                                <form method="POST" onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeName" className="form-label">Size Name</label>
                                        <input
                                        name="size_name"
                                        onChange={handleChange}
                                        value={formData.size_name}
                                            type="text"
                                            className="form-control"
                                            id="orderSizeName"
                                            placeholder="Enter Size Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeWidth" className="form-label">Size Width</label>
                                        <input
                                        name="size_width"
                                        onChange={handleChange}
                                        value={formData.size_width}
                                            type="text"
                                            className="form-control"
                                            id="orderSizeWidth"
                                            placeholder="Enter Size Width"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeHeight" className="form-label">Size Height</label>
                                        <input
                                        name="size_height"
                                        onChange={handleChange}
                                        value={formData.size_height}
                                            type="text"
                                            className="form-control"
                                            id="orderSizeHeight"
                                            placeholder="Enter Size Height"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizePrice" className="form-label">Size Price</label>
                                        <input
                                        name="size_amount"
                                        onChange={handleChange}
                                        value={formData.size_amount}
                                            type="number"
                                            className="form-control"
                                            id="orderSizePrice"
                                            placeholder="Enter Size Price"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Sizes_create;