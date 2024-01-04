

function Frames_Edit() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Frames Edit</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">Frames</li>
                                <li class="breadcrumb-item active">Frames Edit</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Frame</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="frameName" className="form-label">Frame Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="frameName"
                                            placeholder="Enter Frame Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="frameColorOutsite" className="form-label">Frame Color Outsite</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="frameColorOutsite"
                                            placeholder="Enter Frame Color Outsite"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="frameColorInsite" className="form-label">Frame Color Insite</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="frameColorInsite"
                                            placeholder="Enter Frame Color Insite"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="framePrice" className="form-label">Frame Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="framePrice"
                                            placeholder="Enter Frame Price"
                                        />
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Save
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

export default Frames_Edit;