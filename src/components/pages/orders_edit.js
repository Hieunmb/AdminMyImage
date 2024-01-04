function Orders_Edit() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Edit Order</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Edit Order</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="OrderName" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderName"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="totalAmount" className="form-label">Total Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="totalAmount"
                                            placeholder="Enter Total"
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

export default Orders_Edit;