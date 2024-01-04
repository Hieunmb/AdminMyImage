function Orders_create() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Orders Create</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">Orders</li>
                                <li class="breadcrumb-item active">Orders Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Create New Order</h5>
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
                                            placeholder="Enter Total Amount"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderStatus" className="form-label">Status</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderStatus"
                                            placeholder="Enter Status"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="CreateAt" className="form-label">Create At</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="createAt"
                                            placeholder="Enter Create At"
                                        />
                                    </div>
                                    <button type="button" className="btn btn-primary">
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
    
export default Orders_create;