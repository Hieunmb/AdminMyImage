function Hangers() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Hangers</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Hangers</li>
                            </ol>
                            <a type="button" class="btn btn-info d-none d-lg-block m-l-15 text-white" href="/hangers_create">Create New</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">List Hangers</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Hanger Name</th>
                                                <th>Hanger Price</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mắc treo bằng sắt</td>
                                                <td>50$</td>
                                                <td><a href="/hangers_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Mắc treo bằng sắt</td>
                                                <td>50$</td>
                                                <td><a href="/hangers_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Mắc treo bằng sắt</td>
                                                <td>50$</td>
                                                <td><a href="/hangers_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Mắc treo bằng sắt</td>
                                                <td>50$</td>
                                                <td><a href="/hangers_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Mắc treo bằng sắt</td>
                                                <td>50$</td>
                                                <td><a href="/hangers_edit" class="text-inverse p-r-10" data-bs-toggle="tooltip" title="" data-original-title="Edit"><i class="ti-marker-alt"></i></a> <a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td>
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
    
export default Hangers;