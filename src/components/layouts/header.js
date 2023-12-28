import React from "react";

function Header() {
    return(
    <header class="app-header">
        <div class="main-header-container container-fluid">
            <div class="header-content-left">
                <div class="header-element">
                    <div class="horizontal-logo">
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo"/>
                        </a>
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo"/>
                        </a>
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark"/>
                        </a>
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark"/>
                        </a>
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white"/>
                        </a>
                        <a href="index.html" class="header-logo">
                            <img src="../assets/images/brand-logos/toggle-white.png" alt="logo" class="toggle-white"/>
                        </a>
                    </div>
                </div>
                <div class="header-element">
                    <a aria-label="Hide Sidebar" class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="javascript:void(0);"><span></span></a>
                </div>
            </div>
            <div class="header-content-right">

                <div class="header-element header-search">
                    <a href="javascript:void(0);" class="header-link" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i class="bx bx-search-alt-2 header-link-icon"></i>
                    </a>
                </div>
                <div class="header-element country-selector">
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                        <img src="../assets/images/flags/us_flag.jpg" alt="img" class="rounded-circle header-link-icon"/>
                    </a>
                    <ul class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/us_flag.jpg" alt="img"/>
                                </span>
                                English
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/spain_flag.jpg" alt="img" />
                                </span>
                                Spanish
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/french_flag.jpg" alt="img" />
                                </span>
                                French
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/germany_flag.jpg" alt="img" />
                                </span>
                                German
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/italy_flag.jpg" alt="img" />
                                </span>
                                Italian
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="javascript:void(0);">
                                <span class="avatar avatar-xs lh-1 me-2">
                                    <img src="../assets/images/flags/russia_flag.jpg" alt="img" />
                                </span>
                                Russian
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="header-element header-theme-mode">
                    <a href="javascript:void(0);" class="header-link layout-setting">
                        <span class="light-layout">
                        <i class="bx bx-moon header-link-icon"></i>
                        </span>
                        <span class="dark-layout">
                        <i class="bx bx-sun header-link-icon"></i>
                        </span>
                    </a>
                </div>

                <div class="header-element cart-dropdown">
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                        <i class="bx bx-cart header-link-icon"></i>
                        <span class="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">5</span>
                    </a>
                    <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Cart Items</p>
                                <span class="badge bg-success-transparent" id="cart-data">5 Items</span>
                            </div>
                        </div>
                        <div><hr class="dropdown-divider"/></div>
                        <ul class="list-unstyled mb-0" id="header-cart-items-scroll">
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img src="../assets/images/ecommerce/jpg/1.jpg" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <a href="cart.html">SomeThing Phone</a>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">$1,299.00</span>
                                                <a href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="min-w-fit-content d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item d-flex">
                                                <li>Metallic Blue</li>
                                                <li>6gb Ram</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img src="../assets/images/ecommerce/jpg/3.jpg" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <a href="cart.html">Stop Watch</a>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">$179.29</span>
                                                <a href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="min-w-fit-content d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item">
                                                <li>Analog</li>
                                                <li><span class="badge bg-pink-transparent fs-10">Free shipping</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img src="../assets/images/ecommerce/jpg/5.jpg" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <a href="cart.html">Photo Frame</a>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">$29.00</span>
                                                <a href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="min-w-fit-content d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item d-flex">
                                                <li>Decorative</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img src="../assets/images/ecommerce/jpg/4.jpg" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <a href="cart.html">Kikon Camera</a>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">$4,999.00</span>
                                                <a href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="min-w-fit-content d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item d-flex">
                                                <li>Black</li>
                                                <li>50MM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img src="../assets/images/ecommerce/jpg/6.jpg" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3"/>
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <a href="cart.html">Canvas Shoes</a>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">$129.00</span>
                                                <a href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item d-flex">
                                                <li>Gray</li>
                                                <li>Sports</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="p-3 empty-header-item border-top">
                            <div class="d-grid">
                                <a href="checkout.html" class="btn btn-primary">Proceed to checkout</a>
                            </div>
                        </div>
                        <div class="p-5 empty-item d-none">
                            <div class="text-center">
                                <span class="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                    <i class="ri-shopping-cart-2-line fs-2"></i>
                                </span>
                                <h6 class="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                <span class="mb-3 fw-normal fs-13 d-block">Add some items to make me happy</span>
                                <a href="products.html" class="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i class="bi bi-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-element notifications-dropdown">
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                        <i class="bx bx-bell header-link-icon"></i>
                        <span class="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">5</span>
                    </a>
                    <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Notifications</p>
                                <span class="badge bg-secondary-transparent" id="notifiation-data">5 Unread</span>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        <ul class="list-unstyled mb-0" id="header-notification-scroll">
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start">
                                    <div class="pe-2">
                                        <span class="avatar avatar-md bg-primary-transparent avatar-rounded"><i class="ti ti-gift fs-18"></i></span>
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><a href="notifications.html">Your Order Has Been Shipped</a></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">Order No: 123456 Has Shipped To Your Delivery Address</span>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start">
                                    <div class="pe-2">
                                        <span class="avatar avatar-md bg-secondary-transparent avatar-rounded"><i class="ti ti-discount-2 fs-18"></i></span>
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><a href="notifications.html">Discount Available</a></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">Discount Available On Selected Products</span>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start">
                                    <div class="pe-2">
                                        <span class="avatar avatar-md bg-pink-transparent avatar-rounded"><i class="ti ti-user-check fs-18"></i></span>
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><a href="notifications.html">Account Has Been Verified</a></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">Your Account Has Been Verified Sucessfully</span>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start">
                                    <div class="pe-2">
                                        <span class="avatar avatar-md bg-warning-transparent avatar-rounded"><i class="ti ti-circle-check fs-18"></i></span>
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><a href="notifications.html">Order Placed <span class="text-warning">ID: #1116773</span></a></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">Order Placed Successfully</span>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown-item">
                                <div class="d-flex align-items-start">
                                    <div class="pe-2">
                                        <span class="avatar avatar-md bg-success-transparent avatar-rounded"><i class="ti ti-clock fs-18"></i></span>
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="mb-0 fw-semibold"><a href="notifications.html">Order Delayed <span class="text-success">ID: 7731116</span></a></p>
                                            <span class="text-muted fw-normal fs-12 header-notification-text">Order Delayed Unfortunately</span>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0);" class="min-w-fit-content text-muted me-1 dropdown-item-close1"><i class="ti ti-x fs-16"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="p-3 empty-header-item1 border-top">
                            <div class="d-grid">
                                <a href="notifications.html" class="btn btn-primary">View All</a>
                            </div>
                        </div>
                        <div class="p-5 empty-item1 d-none">
                            <div class="text-center">
                                <span class="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                    <i class="ri-notification-off-line fs-2"></i>
                                </span>
                                <h6 class="fw-semibold mt-3">No New Notifications</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-element header-shortcuts-dropdown">
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false">
                        <i class="bx bx-grid-alt header-link-icon"></i>
                    </a>
                    <div class="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Related Apps</p>
                            </div>
                        </div>
                        <div class="dropdown-divider mb-0"></div>
                        <div class="main-header-shortcuts p-2" id="header-shortcut-scroll">
                        <div class="row g-2">
                            <div class="col-4">
                                <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/figma.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Figma</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/microsoft-powerpoint.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Power Point</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/microsoft-word.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">MS Word</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/calender.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Calendar</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/sketch.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Sketch</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/google-docs.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Docs</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/google.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Google</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/translate.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Translate</span>
                                        </div>
                                    </a>
                            </div>
                            <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="../assets/images/apps/google-sheets.png" alt=""/>
                                            </span>
                                            <span class="d-block fs-12">Sheets</span>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        </div>
                        <div class="p-3 border-top">
                            <div class="d-grid">
                                <a href="javascript:void(0);" class="btn btn-primary">View All</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-element header-fullscreen">
                    <a onclick="openFullscreen();" href="javascript:void(0);" class="header-link">
                        <i class="bx bx-fullscreen full-screen-open header-link-icon"></i>
                        <i class="bx bx-exit-fullscreen full-screen-close header-link-icon d-none"></i>
                    </a>
                </div>

                <div class="header-element">
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <div class="d-flex align-items-center">
                            <div class="me-sm-2 me-0">
                                <img src="../assets/images/faces/9.jpg" alt="img" width="32" height="32" class="rounded-circle"/>
                            </div>
                            <div class="d-sm-block d-none">
                                <p class="fw-semibold mb-0 lh-1">Json Taylor</p>
                                <span class="op-7 fw-normal d-block fs-11">Web Designer</span>
                            </div>
                        </div>
                    </a>
                    <ul class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                        <li><a class="dropdown-item d-flex" href="profile.html"><i class="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</a></li>
                        <li><a class="dropdown-item d-flex" href="mail.html"><i class="ti ti-inbox fs-18 me-2 op-7"></i>Inbox <span class="badge bg-success-transparent ms-auto">25</span></a></li>
                        <li><a class="dropdown-item d-flex border-block-end" href="to-do-list.html"><i class="ti ti-clipboard-check fs-18 me-2 op-7"></i>Task Manager</a></li>
                        <li><a class="dropdown-item d-flex" href="mail-settings.html"><i class="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</a></li>
                        <li><a class="dropdown-item d-flex border-block-end" href="javascript:void(0);"><i class="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</a></li>
                        <li><a class="dropdown-item d-flex" href="chat.html"><i class="ti ti-headset fs-18 me-2 op-7"></i>Support</a></li>
                        <li><a class="dropdown-item d-flex" href="sign-in-cover.html"><i class="ti ti-logout fs-18 me-2 op-7"></i>Log Out</a></li>
                    </ul>
                </div>

                <div class="header-element">
                    <a href="javascript:void(0);" class="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                        <i class="bx bx-cog header-link-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;