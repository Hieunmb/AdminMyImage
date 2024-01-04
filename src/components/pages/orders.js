function Orders() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Orders</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Orders</li>
                            </ol>
                            <a type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white" href="/orders_create">Create New</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">List Orders</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Total Amount</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th>Actions</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{verticalAlign: "initial"}}>
                                                <td>1</td>
                                                <td>Nguyễn Đức Anh</td>
                                                <td>50$</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td>10-7-2017</td>
                                                <td><a href="/orders_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                                <td><a href="/view_orders" className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}> View</a></td>
                                            </tr>
                                            <tr style={{verticalAlign: "initial"}}>
                                                <td>2</td>
                                                <td>Nguyễn Đức Anh</td>
                                                <td>50$</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td>10-7-2017</td>
                                                <td><a href="/orders_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                                <td><a href="/view_orders" className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}> View</a></td>
                                            </tr>
                                            <tr style={{verticalAlign: "initial"}}>
                                                <td>3</td>
                                                <td>Nguyễn Đức Anh</td>
                                                <td>50$</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td>10-7-2017</td>
                                                <td><a href="/orders_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                                <td><a href="/view_orders" className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}> View</a></td>
                                            </tr>
                                            <tr style={{verticalAlign: "initial"}}>
                                                <td>4</td>
                                                <td>Nguyễn Đức Anh</td>
                                                <td>50$</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td>10-7-2017</td>
                                                <td><a href="/orders_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                                <td><a href="/view_orders" className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}> View</a></td>
                                            </tr>
                                            <tr style={{verticalAlign: "initial"}}>
                                                <td>5</td>
                                                <td>Nguyễn Đức Anh</td>
                                                <td>50$</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td>10-7-2017</td>
                                                <td><a href="/orders_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                                <td><a href="/view_orders" className="btn btn-primary" style={{border:"0", backgroundColor:"#03a9f3"}}> View</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Orders;