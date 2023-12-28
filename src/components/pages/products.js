function Products() {
    return (
        <div class="main-content app-content" style={{marginTop:"85px"}}>
        <div class="container-fluid">
            <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
               <h1 class="page-title fw-semibold fs-18 mb-0">Products</h1>
            </div>
            <div class="my-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card custom-card">
                            <div class="card-body p-0">
                                <nav class="navbar navbar-expand-xxl bg-white">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="javascript:void(0);">
                                            <img src="../assets/images/brand-logos/toggle-logo.png" alt="" class="d-inline-block align-text-top"/>
                                        </a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse navbar-justified flex-wrap gap-2" id="navbarSupportedContent">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-xxl-center">
                                                <li class="nav-item">
                                                    <a class="nav-link active" aria-current="page" href="javascript:void(0);">Men</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0);">Women</a>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        Kids
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                                        </li>
                                                        <li>
                                                            <hr class="dropdown-divider"/>
                                                        </li>
                                                        <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                                                here</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Today Deals</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Electronics</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Home & Kitchen</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Fashion</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link"><i class="ri-customer-service-line me-2 align-middle d-inline-block"></i>Customer Service</a>
                                                </li>
                                                <li class="nav-item mb-xxl-0 mb-2 ms-xxl-0 ms-3">
                                                    <div class="btn-group d-xxl-flex d-block">
                                                        <button class="btn btn-sm btn-primary-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Sort By
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="javascript:void(0);">Featured</a></li>
                                                            <li><a class="dropdown-item" href="javascript:void(0);">Price: High to Low</a></li>
                                                            <li><a class="dropdown-item active" href="javascript:void(0);">Price: Low to High</a></li>
                                                            <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                                            <li><a class="dropdown-item" href="javascript:void(0);">Ratings</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="nav-item mb-xxl-0 mb-2 ms-xxl-3 ms-3">
                                                    <div class="btn-group">
                                                        <button class="btn btn-sm btn-primary">IV</button>
                                                        <button class="btn btn-sm btn-primary">III</button>
                                                        <button class="btn btn-sm btn-primary">II</button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="d-flex" role="search">
                                                <input class="form-control me-2" type="search" placeholder="Search"
                                                    aria-label="Search"/>
                                                <button class="btn btn-light"
                                                    type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-12">
                        <div class="card custom-card products-navigation-card">
                            <div class="card-body p-0">
                                <div class="p-4 border-bottom">
                                    <p class="fw-semibold mb-0 text-muted">CATEGORIES</p>
                                    <div class="px-2 py-3 pb-0">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="electronics"/>
                                            <label class="form-check-label" for="electronics">
                                                Electronics
                                            </label>
                                            <span class="badge bg-light text-muted float-end">2,712</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="Accesories"/>
                                            <label class="form-check-label" for="Accesories">
                                                Accesories
                                            </label>
                                            <span class="badge bg-light text-muted float-end">536</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="clothing" checked/>
                                            <label class="form-check-label" for="clothing">
                                                Clothing
                                            </label>
                                            <span class="badge bg-light text-muted float-end">18,289</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="fashion"/>
                                            <label class="form-check-label" for="fashion">
                                                Fashion
                                            </label>
                                            <span class="badge bg-light text-muted float-end">3,453</span>
                                        </div>
                                        <div class="collapse" id="category-more">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="furniture"/>
                                                <label class="form-check-label" for="furniture">
                                                    Furniture
                                                </label>
                                                <span class="badge bg-light text-muted float-end">7,165</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="footwear"/>
                                                <label class="form-check-label" for="footwear">
                                                    Footwear
                                                </label>
                                                <span class="badge bg-light text-muted float-end">5,964</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="mobiles"/>
                                                <label class="form-check-label" for="mobiles">
                                                    Mobiles
                                                </label>
                                                <span class="badge bg-light text-muted float-end">2,123</span>
                                            </div>
                                        </div>
                                        <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded="false" aria-controls="category-more">MORE</a>
                                    </div>
                                </div>
                                <div class="p-4 border-bottom">
                                    <p class="fw-semibold mb-0 text-muted">BRANDS</p>
                                    <div class="px-2 py-3 pb-0">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="Jimmy-Lolfiger" checked/>
                                            <label class="form-check-label" for="Jimmy-Lolfiger">
                                                Jimmy Lolfiger
                                            </label>
                                            <span class="badge bg-light text-muted float-end">512</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="dapzem1" checked/>
                                            <label class="form-check-label" for="dapzem1">
                                                Dapzem & Co
                                            </label>
                                            <span class="badge bg-light text-muted float-end">2,186</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="denim-winjo1" checked/>
                                            <label class="form-check-label" for="denim-winjo1">
                                                Denim Winjo
                                            </label>
                                            <span class="badge bg-light text-muted float-end">734</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="Louie-Phillippe"/>
                                            <label class="form-check-label" for="Louie-Phillippe">
                                                Louie Phillippe
                                            </label>
                                            <span class="badge bg-light text-muted float-end">16</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="garage-clothing"/>
                                            <label class="form-check-label" for="garage-clothing">
                                                Garage & Co
                                            </label>
                                            <span class="badge bg-light text-muted float-end">1,432</span>
                                        </div>
                                        <div class="collapse" id="brands-more">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="blueberry" checked/>
                                                <label class="form-check-label" for="blueberry">
                                                    Blueberry & Co
                                                </label>
                                                <span class="badge bg-light text-muted float-end">257</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="aus-polo-assn" checked/>
                                                <label class="form-check-label" for="aus-polo-assn">
                                                    Aus Polo Assn
                                                </label>
                                                <span class="badge bg-light text-muted float-end">1,845</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="denim-corp" checked/>
                                                <label class="form-check-label" for="denim-corp">
                                                    Denim Corp
                                                </label>
                                                <span class="badge bg-light text-muted float-end">5,893</span>
                                            </div>
                                        </div>
                                        <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#brands-more" role="button" aria-expanded="false" aria-controls="brands-more">MORE</a>
                                    </div>
                                </div>
                                <div class="p-4 border-bottom">
                                    <p class="fw-semibold mb-0 text-muted">PRICE</p>
                                    <div class="px-2 py-3 pb-0">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="low"/>
                                            <label class="form-check-label" for="low">
                                                $0 - $599
                                            </label>
                                            <span class="badge bg-light text-muted float-end">22,873</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="low1" checked/>
                                            <label class="form-check-label" for="low1">
                                                $599 - $1299
                                            </label>
                                            <span class="badge bg-light text-muted float-end">11,345</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="medium"/>
                                            <label class="form-check-label" for="medium">
                                                $1,299 - $2,199
                                            </label>
                                            <span class="badge bg-light text-muted float-end">6,987</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="high"/>
                                            <label class="form-check-label" for="high">
                                                $2,199 - $3,499
                                            </label>
                                            <span class="badge bg-light text-muted float-end">5,236</span>
                                        </div>
                                        <div class="form-check mb-4">
                                            <input class="form-check-input" type="checkbox" value="" id="high1"/>
                                            <label class="form-check-label" for="high1">
                                                $3,499 & Above
                                            </label>
                                            <span class="badge bg-light text-muted float-end">3,735</span>
                                        </div>
                                        <p class="fw-semibold mb-0 text-muted">PRICE RANGE</p>
                                        <div class="mt-5 mx-3" id="product-price-range"></div>
                                    </div>
                                </div>
                                <div class="p-4 border-bottom">
                                    <p class="fw-semibold mb-0 text-muted">DISCOUNT</p>
                                    <div class="px-2 py-3 pb-0">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="Jimmy-Lolfiger1"/>
                                            <label class="form-check-label" for="Jimmy-Lolfiger1">
                                                0% - 20%
                                            </label>
                                            <span class="badge bg-light text-muted float-end">16,563</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="dapzem2"/>
                                            <label class="form-check-label" for="dapzem2">
                                                20% - 40%
                                            </label>
                                            <span class="badge bg-light text-muted float-end">15,234</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="denim-winjo"/>
                                            <label class="form-check-label" for="denim-winjo">
                                                40% - 60%
                                            </label>
                                            <span class="badge bg-light text-muted float-end">6,278</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="Louie-Phillippe1" checked/>
                                            <label class="form-check-label" for="Louie-Phillippe1">
                                                60% - 80%
                                            </label>
                                            <span class="badge bg-light text-muted float-end">4,531</span>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="garage-clothing1"/>
                                            <label class="form-check-label" for="garage-clothing1">
                                                80% - 90%
                                            </label>
                                            <span class="badge bg-light text-muted float-end">2,405</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <p class="fw-semibold mb-0 text-muted">SIZES</p>
                                    <div class="px-2 py-3 pb-0">
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="extra-small"/>
                                            <label class="form-check-label" for="extra-small">
                                                Extra Small (XS)
                                            </label>
                                            <span class="badge bg-light text-muted float-end">23,156</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="small"/>
                                            <label class="form-check-label" for="small">
                                                Small (SM)
                                            </label>
                                            <span class="badge bg-light text-muted float-end">15,632</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="medium1"/>
                                            <label class="form-check-label" for="medium1">
                                                Medium (MD)
                                            </label>
                                            <span class="badge bg-light text-muted float-end">15,032</span>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="large" checked/>
                                            <label class="form-check-label" for="large">
                                                Large (L)
                                            </label>
                                            <span class="badge bg-light text-muted float-end">7,154</span>
                                        </div>
                                        <div class="collapse" id="sizes-more">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="extra-large"/>
                                                <label class="form-check-label" for="extra-large">
                                                    Extra Large (XL)
                                                </label>
                                                <span class="badge bg-light text-muted float-end">5,946</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="double-extralarge"/>
                                                <label class="form-check-label" for="double-extralarge">
                                                    XXL
                                                </label>
                                                <span class="badge bg-light text-muted float-end">3,267</span>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" value="" id="triple-extralarge"/>
                                                <label class="form-check-label" for="triple-extralarge">
                                                    XXL
                                                </label>
                                                <span class="badge bg-light text-muted float-end">578</span>
                                            </div>
                                        </div>
                                        <a class="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded="false" aria-controls="sizes-more">MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-9 col-xl-8 col-lg-8 col-md-12">
                        <div class="row">
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/1.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Dapzem & Co<span class="float-end text-warning fs-12">4.2<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Branded hoodie ethnic style</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$229<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$1,799</span></span><span class="badge bg-secondary-transparent float-end fs-10">72% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $229
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/2.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Denim Winjo<span class="float-end text-warning fs-12">4.0<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Vintage pure leather Jacket</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$599<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$2,499</span></span><span class="badge bg-secondary-transparent float-end fs-10">75% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $599</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/3.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Jimmy Lolfiger<span class="float-end text-warning fs-12">4.5<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Unisex jacket for men & women</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$1,199<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$3,299</span></span><span class="badge bg-secondary-transparent float-end fs-10">62% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $1,199</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/4.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Bluberry Co.In<span class="float-end text-warning fs-12">4.2<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Full sleeve white hoodie</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$349<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$1,299</span></span><span class="badge bg-secondary-transparent float-end fs-10">60% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $349</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/5.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Aus Polo Assn<span class="float-end text-warning fs-12">4.5<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Snow jacket with low pockets</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$1,899<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$3,799</span></span><span class="badge bg-secondary-transparent float-end fs-10">50% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $1,899</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/6.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">BMW<span class="float-end text-warning fs-12">4.1<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Ethnic wear jackets form BMW</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$1,499<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$2,499</span></span><span class="badge bg-secondary-transparent float-end fs-10">38% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $1,499</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/7.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Denim Corporation<span class="float-end text-warning fs-12">4.4<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Flap pockets denim jackets for men</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$299<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$399</span></span><span class="badge bg-secondary-transparent float-end fs-10">35% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $299</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/8.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Pufa<span class="float-end text-warning fs-12">3.8<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Ergonic designed full sleeve coat</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$2,399<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$5,699</span></span><span class="badge bg-primary-transparent float-end fs-10">72% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $2,399</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/9.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Louie Phillippe<span class="float-end text-warning fs-12">4.0<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Ergonic green colored full sleeve jacket</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$1,899<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$3,299</span></span><span class="badge bg-primary-transparent float-end fs-10">60% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $1,899</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/10.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Denim Corp<span class="float-end text-warning fs-12">4.1<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">beautiful brown colored snow jacket</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$2,499<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$4,999</span></span><span class="badge bg-primary-transparent float-end fs-10">50% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $2,499</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/11.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons"/>
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Garage & Co<span class="float-end text-warning fs-12">4.3<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Full sleeve sweat shirt</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$249<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$1,299</span></span><span class="badge bg-primary-transparent float-end fs-10">70% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $249</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="card custom-card product-card">
                                    <div class="card-body">
                                        <a href="product-details.html" class="product-image">
                                            <img src="../assets/images/ecommerce/png/12.png" class="card-img mb-3" alt="..."/>
                                        </a>
                                        <div class="product-icons">
                                            <a href="wishlist.html" class="wishlist"><i class="ri-heart-line"></i></a>
                                            <a href="cart.html" class="cart"><i class="ri-shopping-cart-line"></i></a>
                                            <a href="product-details.html" class="view"><i class="ri-eye-line"></i></a>
                                        </div>
                                        <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">Blueberry & Co<span class="float-end text-warning fs-12">4.0<i class="ri-star-s-fill align-middle ms-1 d-inline-block"></i></span></p>
                                        <p class="product-description fs-11 text-muted mb-2">Light colored sweater form blueberry</p>
                                        <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>$499<span class="text-muted text-decoration-line-through ms-1 d-inline-block op-6">$799</span></span><span class="badge bg-primary-transparent float-end fs-10">32% off</span></p>
                                        <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                            <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price $499</p>
                                    </div>
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
    
export default Products;