function Frames_create() {
    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Frames Create</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item">Frames</li>
                                <li class="breadcrumb-item active">Frames Create</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Create</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>FrameName</th>
                                                <th>Frame Color Outsite</th>
                                                <th>Frame Color Insite</th>
                                                <th>Frame Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="text" class="form-control"></input></td>
                                                <td><input type="text" class="form-control"></input></td>
                                                <td><input type="text" class="form-control"></input></td>
                                                <td><input type="text" class="form-control"></input></td>
                                                <td><input type="text" class="form-control"></input></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a type="button" class="btn btn-info " href="/frames">Create</a>
            </div>
        </div>
    )
}
    
export default Frames_create;