function Hangers_Create() {
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
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="hangerName" className="form-label">Hanger Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="hangerName"
                                            placeholder="Enter Hanger Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="hangerPrice" className="form-label">Hanger Price</label>
                                        <input
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