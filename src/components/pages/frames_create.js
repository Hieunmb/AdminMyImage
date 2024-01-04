function Frames_Create() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Create Frame</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-end">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb justify-content-end">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item">Frames</li>
                                <li className="breadcrumb-item active">Create Frame</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create Frame</h5>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Frame Name</th>
                                                <th>Frame Color Outside</th>
                                                <th>Frame Color Inside</th>
                                                <th>Frame Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="text" className="form-control" placeholder="Enter Frame Name"></input></td>
                                                <td><input type="text" className="form-control" placeholder="Enter Frame Color Outside"></input></td>
                                                <td><input type="text" className="form-control" placeholder="Enter Frame Color Inside"></input></td>
                                                <td><input type="text" className="form-control" placeholder="Enter Frame Price"></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-end">
                        <a className="btn btn-info" href="/frames">Create</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frames_Create;