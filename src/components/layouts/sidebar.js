import React from "react";

function Sidebar() {
    return (
        <aside class="app-sidebar sticky" id="sidebar" style={{backgroundColor:"#111c43"}}>
            <div class="main-sidebar-header">
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
            <div class="main-sidebar" id="sidebar-scroll">
                <nav class="main-menu-container nav nav-pills flex-column sub-open">
                    <ul class="main-menu" >
                        <li class="slide">
                            <a href="/admin" class="side-menu__item">
                                <i class="bx bx-store-alt side-menu__icon"></i>
                                <span class="side-menu__label" style={{color:"#a3aed1"}}>Dashboard</span>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/admin/orders" class="side-menu__item">
                                <i class="bx bx-store-alt side-menu__icon"></i>
                                <span class="side-menu__label" style={{color:"#a3aed1"}}>Order</span>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/admin/products" class="side-menu__item">
                                <i class="bx bx-store-alt side-menu__icon"></i>
                                <span class="side-menu__label" style={{color:"#a3aed1"}}>Product</span>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="/admin/add-products" class="side-menu__item">
                                <i class="bx bx-store-alt side-menu__icon"></i>
                                <span class="side-menu__label" style={{color:"#a3aed1"}}>Add Product</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;