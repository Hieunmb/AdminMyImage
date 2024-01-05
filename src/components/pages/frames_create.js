import { useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";

function Frames_Create() {
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedColorInsite, setSelectedColorInsite] = useState('');

    const handleColorChange = (color) => {
        // Validate color format before setting
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            setSelectedColor(color);
            document.getElementById('frameColorOutsite').value = color;
        } else {
            // Handle invalid color format error
            console.error('Invalid color format. Please select a color in the format #rrggbb.');
        }
    };
    const handleColorChangeInsite = (color) => {
        // Validate color format before setting
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            setSelectedColorInsite(color);
            document.getElementById('frameColorInsite').value = color;
        } else {
            // Handle invalid color format error
            console.error('Invalid color format. Please select a color in the format #rrggbb.');
        }
    };
    const [formData, setFormData] = useState({
        frame_amount: 0,
        frame_name: "",
        frame_color_outsite:"",
        frame_color_insite:"",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const amountAsInt = parseInt(formData.frame_amount, 10); // Radix 10 for base 10 numbers    
            // Assign selected colors to form data
            const updatedFormData = {
                ...formData,
                frame_amount: amountAsInt, // Assign the integer value to frame_amount
                frame_color_outsite: selectedColor.toString(),
                frame_color_insite: selectedColorInsite.toString(),
            };

            const addframe = await api.post(url.FRAME.CREATE, updatedFormData);
            window.alert('Add frame success!');
            navigate('/frames');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Frames Create</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item">Frames</li>
                                <li className="breadcrumb-item active">Frames Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create New Frame</h5>
                                <form method="POST" onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="frameName" className="form-label">Frame Name</label>
                                        <input
                                        onChange={handleChange}
                                        value={formData.frame_name}
                                        name="frame_name"
                                            type="text"
                                            className="form-control"
                                            id="frameName"
                                            placeholder="Enter Frame Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="frameColorOutsite" className="form-label">Frame Color Outsite</label>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="color"
                                                className="form-control"
                                                id="frameColorOutsite"
                                                value={selectedColor}
                                                onChange={(e) => handleColorChange(e.target.value)}
                                                placeholder="Enter Frame Color Outside"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="frameColorInsite" className="form-label">Frame Color Insite</label>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="color"
                                            className="form-control"
                                            value={selectedColorInsite}
                                            onChange={(e) => handleColorChangeInsite(e.target.value)}
                                            id="frameColorInsite"
                                            placeholder="Enter Frame Color Insite"
                                        />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="framePrice" className="form-label">Frame Price</label>
                                        <input
                                        name="frame_amount"
                                            type="number"
                                            onChange={handleChange}
                                        value={formData.frame_amount}
                                            className="form-control"
                                            id="framePrice"
                                            placeholder="Enter Frame Price"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frames_Create;