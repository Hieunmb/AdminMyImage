

function Hangers_Edit() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Edit Hanger</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Hanger</h5>
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

export default Hangers_Edit;