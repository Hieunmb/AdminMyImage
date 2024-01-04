function Sizes_Edit() {
    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Sizes Edit</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item ">Sizes</li>
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
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeName" className="form-label">Size Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderSizeName"
                                            placeholder="Enter Size Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeWidth" className="form-label">Size Width</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderSizeWidth"
                                            placeholder="Enter Size Width"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizeHeight" className="form-label">Size Height</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderSizeHeight"
                                            placeholder="Enter Size Height"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OrderSizePrice" className="form-label">Size Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="orderSizePrice"
                                            placeholder="Enter Size Price"
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

export default Sizes_Edit;