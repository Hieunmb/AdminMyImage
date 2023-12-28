function Orders() {
    return (
        <div class="main-content app-content" style={{marginTop:"85px"}}>
            <div class="container-fluid">
                <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                    <h1 class="page-title fw-semibold fs-18 mb-0">Orders</h1>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card custom-card">
                            <div class="card-body d-flex align-items-center flex-wrap">
                                <div class="flex-fill">
                                    <span class="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span class="fw-semibold text-success">28</span></span>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle m-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Date</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Price</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Category</a></li>
                                    </ul>
                                </div>
                                <div class="d-flex align-items-center m-1" role="search">
                                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-light ms-2" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/1.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Denim Zep.Co Sweat Shirt</span>
                                        </a>
                                        <span class="d-block text-success">$1,299</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1203</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">13</span>
                                        <span class="fw-semibold">Dec</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div><span class="text-muted me-2">Status:</span><span class="badge bg-success-transparent">Shipped</span></div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/2.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Jimmy Lolfiger Jacket</span>
                                        </a>
                                        <span class="d-block text-success">$499</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-2936</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">25</span>
                                        <span class="fw-semibold">Nov</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted me-2">Status:</span>
                                    <span class="badge bg-primary-transparent">Confirmed</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/3.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Louie Phillippe Coat</span>
                                        </a>
                                        <span class="d-block text-success">$1,899</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1855</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-success">Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block justify-content-between align-items-center">
                                <div class="fs-11">
                                    <span>Delivered on:</span>
                                    <span class="fw-semibold">29,Oct 2022 - 12:47PM</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-primary-light">Rate Product<i class="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/4.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Denim Corp</span>
                                        </a>
                                        <span class="d-block text-success">$2,499</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1234</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-danger">Cancelled</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="float-end">
                                    <button class="btn btn-sm btn-light">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/13.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Orange Watch</span>
                                        </a>
                                        <span class="d-block text-success">$249</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1645</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-success">Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block justify-content-between align-items-center">
                                <div class="fs-11">
                                    <span>Delivered on:</span>
                                    <span class="fw-semibold">4,Nov 2022 - 10:24AM</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-primary-light">Rate Product<i class="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/8.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Pufa Sweat Shirt</span>
                                        </a>
                                        <span class="d-block text-success">$2,399</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1346</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">16</span>
                                        <span class="fw-semibold">Jan</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div><span class="text-muted me-2">Status:</span><span class="badge bg-success-transparent">Shipped</span></div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/9.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Bluberry Co.In</span>
                                        </a>
                                        <span class="d-block text-success">$499</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-2936</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">19</span>
                                        <span class="fw-semibold">Dec</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div><span class="text-muted me-2">Status:</span><span class="badge bg-warning-transparent">Out For Delivery</span></div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/11.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Garage & Co</span>
                                        </a>
                                        <span class="d-block text-success">$499</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1376</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">24</span>
                                        <span class="fw-semibold">Dec</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div><span class="text-muted me-2">Status:</span><span class="badge bg-success-transparent">Shipped</span></div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/14.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Hadimo Smart Watch(44mm)</span>
                                        </a>
                                        <span class="d-block text-success">$499</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-2903</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="delivery-date text-center ms-auto">
                                        <span class="fs-18 text-primary fw-bold">16</span>
                                        <span class="fw-semibold">Nov</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted me-2">Status:</span>
                                    <span class="badge bg-primary-transparent">Confirmed</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-danger-light">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/7.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">BMW Denim JAcket</span>
                                        </a>
                                        <span class="d-block text-success">$1,899</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1976</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-success">Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block justify-content-between align-items-center">
                                <div class="fs-11">
                                    <span>Delivered on:</span>
                                    <span class="fw-semibold">04,Nov 2022 - 03:12PM</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-primary-light">Rate Product<i class="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex d-block align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/16.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Totoya Watch For Kids</span>
                                        </a>
                                        <span class="d-block text-success">$799</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-8765</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-danger">Cancelled</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="float-end">
                                    <button class="btn btn-sm btn-light">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="card custom-card">
                            <div class="card-header d-block">
                                <div class="d-sm-flex align-items-center ">
                                    <div class="me-2">
                                        <span class="avatar bg-light avatar-md mb-1">
                                            <img src="../assets/images/ecommerce/png/10.png" alt=""/>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <a href="javascript:void(0)">
                                            <span class="fs-14 fw-semibold">Garage & Co</span>
                                        </a>
                                        <span class="d-block text-success">$249</span>
                                    </div>
                                    <div class="text-sm-center">
                                        <span class="fs-14 fw-semibold">Order Id :</span>
                                        <span class="d-sm-block">#SPK-1645</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="orders-delivery-address">
                                        <p class="mb-1 fw-semibold">Delivery Address</p>
                                        <p class="text-muted mb-0">
                                            mig-1-11,monroe street,georgetown,Washington D.C
                                        </p>
                                    </div>
                                    <div class="ms-auto">
                                        <span class="badge bg-success">Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer d-sm-flex d-block justify-content-between align-items-center">
                                <div class="fs-11">
                                    <span>Delivered on:</span>
                                    <span class="fw-semibold">22,Oct 2022 - 05:15PM</span>
                                </div>
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-sm btn-primary-light">Rate Product<i class="bi bi-star-fill ms-2 fs-12 text-warning"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
    
export default Orders;