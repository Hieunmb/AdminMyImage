import { useEffect,useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Hangers_Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id:id,
        hanger_name: "",
        hanger_price: 0,
    });
    const fetchData = async () => {
        try {
            const response = await api.get(url.HANGER.GET+`?id=${id}`); // Fetch data for the specific 'id'
            const { hanger_name,
                hanger_price,
                 } = response.data;
            setFormData({
                ...formData,
                hanger_name,
                hanger_price
              
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

            const editHanger = await api.put(url.HANGER.EDIT, formData);
            window.alert('Edit Hanger success!');
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
                        <h4 className="text-themecolor">Hangers Edit</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item ">Hangers</li>
                                <li class="breadcrumb-item active">Hangers Edit</li>

                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Hanger</h5>
                                <form method="POST" onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="hangerName" className="form-label">Hanger Name</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={formData.hanger_name}
                                            className="form-control"
                                            id="hangerName"
                                            placeholder="Enter Hanger Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hangerPrice" className="form-label">Hanger Price</label>
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={formData.hanger_price}
                                            className="form-control"
                                            id="hangerPrice"
                                            placeholder="Enter Hanger Price"
                                        />
                                    </div>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hangers_Edit;