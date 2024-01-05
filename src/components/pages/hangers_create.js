import { useEffect , useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";
function Hangers_Create() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        hanger_name: 0,
        hanger_price: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const addHanger = await api.post(url.HANGER.CREATE, formData);
            window.alert('Add hanger success!');
            navigate('/hangers');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Hangers Create</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item">Hangers</li>
                                <li className="breadcrumb-item active">Hangers Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create New Hanger</h5>
                                <form method="POST" onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="hangerName" className="form-label">Hanger Name</label>
                                        <input
                                            onChange={handleChange}
                                            value={formData.hanger_name}
                                            type="text"
                                            className="form-control"
                                            id="hangerName"
                                            placeholder="Enter Hanger Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hangerPrice" className="form-label">Hanger Price</label>
                                        <input
                                         name="hanger_price"
                                         onChange={handleChange}
                                         value={formData.hanger_price}
                                            type="text"
                                            className="form-control"
                                            id="hangerPrice"
                                            placeholder="Enter Hanger Price"
                                        />
                                    </div>
                                    <button type="button" className="btn btn-primary">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hangers_Create;