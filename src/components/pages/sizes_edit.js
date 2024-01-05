import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";
function Sizes_Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id:id,
        size_amount: 0,
        size_name: "",
        size_width:"",
        size_height:"",
    });
    const fetchData = async () => {
        try {
            const response = await api.get(url.SIZE.GET+`?id=${id}`); // Fetch data for the specific 'id'
            const { size_amount,
                size_name,
                size_width,
                size_height, } = response.data;
            setFormData({
                ...formData,
                size_amount,
                size_name,
                size_width,
                size_height,
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData(); // Fetch data for the 'id' when the component mounts
    }, [id]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }; // Trigger useEffect whenever 'id' changes
    const formSubmit = async (e) => {
        e.preventDefault();
        try {

            const editSize = await api.put(url.SIZE.EDIT, formData);
            window.alert('Edit Size success!');
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
                        <h4 class="text-themecolor">Sizes Edit</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">Sizes</li>
                                <li class="breadcrumb-item active">Sizes Edit</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Size</h5>
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
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sizes_Edit;