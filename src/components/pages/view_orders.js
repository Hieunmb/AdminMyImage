function View_orders() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">View Orders</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">View</li>
                                <li class="breadcrumb-item active">View Orders</li>
                            </ol>
                        </div>
                    </div>
                </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Orders Detail</h5>
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Thumbnail</th>
                                                        <th>Frame</th>
                                                        <th>Hanger</th>
                                                        <th>Size</th>
                                                        <th>Quantity</th>
                                                        <th>Create At</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td><img src="../assets/images/gallery/chair.jpg" alt="iMac" width="80"/></td>
                                                        <td>Khung den hong</td>
                                                        <td>Mac treo bang sat</td>
                                                        <td>20 x 30</td>
                                                        <td>20</td>
                                                        <td>10-12-2009</td>
                                                        <td class="font-500">$153</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="7" class="font-500" align="right">Total Amount</td>
                                                        <td class="font-500">$153</td>
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
    
export default View_orders;