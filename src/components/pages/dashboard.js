function Dashboard() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Dashboard</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <button type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white">Create New</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">ORDER RECEIVED</h4>
                                <div class="text-end"> <span class="text-muted">Todays Order</span>
                                    <h1 class="font-light"><sup><i class="ti-arrow-up text-success"></i></sup> 12,000</h1>
                                </div>
                                <span class="text-success">20%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "20%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">TAX DEDUCATION</h4>
                                <div class="text-end"> <span class="text-muted">Monthly Deduction</span>
                                    <h1 class="font-light"><sup><i class="ti-arrow-up text-primary"></i></sup> $5,000</h1>
                                </div>
                                <span class="text-primary">30%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-primary" role="progressbar" style={{width: "30%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">REVENUE STATS</h4>
                                <div class="text-end"> <span class="text-muted">Todays Income</span>
                                    <h1 class="font-light"><sup><i class="ti-arrow-down text-info"></i></sup> $8,000</h1>
                                </div>
                                <span class="text-info">60%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style={{width: "60%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">YEARLY SALES</h4>
                                <div class="text-end"> <span class="text-muted">Yearly  Income</span>
                                    <h1 class="font-light"><sup><i class="ti-arrow-up text-inverse"></i></sup> $12,000</h1>
                                </div>
                                <span class="text-inverse">80%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-inverse" role="progressbar" style={{width: "80%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Product Overview</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Order ID</th>
                                                <th>Photo</th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Steave Jobs</td>
                                                <td>#85457898</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair.jpg" alt="iMac" width="80"/>
                                                </td>
                                                <td>Rounded Chair</td>
                                                <td>20</td>
                                                <td>10-7-2017</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td><a href="#" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Varun Dhavan</td>
                                                <td>#95457898</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair2.jpg" alt="iPhone" width="80"/>
                                                </td>
                                                <td>Wooden Chair</td>
                                                <td>25</td>
                                                <td>09-7-2017</td>
                                                <td>
                                                    <span class="label label-warning">Pending</span>
                                                </td>
                                                <td><a href="#" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Ritesh Desh</td>
                                                <td>#68457898</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair3.jpg" alt="apple_watch" width="80"/>
                                                </td>
                                                <td>Gray Chair</td>
                                                <td>12</td>
                                                <td>08-7-2017</td>
                                                <td>
                                                    <span class="label label-success">Paid</span>
                                                </td>
                                                <td><a href="#" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Hrithik</td>
                                                <td>#45457898</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair4.jpg" alt="mac_mouse" width="80"/>
                                                </td>
                                                <td>Pure Wooden chair</td>
                                                <td>18</td>
                                                <td>02-7-2017</td>
                                                <td>
                                                    <span class="label label-danger">Failed</span>
                                                </td>
                                                <td><a href="#" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
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
    
export default Dashboard;