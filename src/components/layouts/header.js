import React from "react";

function Header() {
    return(
        <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark" style={{backgroundColor:"rgb(33, 37, 41)"}}>
            <div class="navbar-header">
                <a class="navbar-brand" href="/dashboard">
                    <b>
                       <i class="wi wi-sunset"></i>
                        <img src="../assets/images/logo-icon.png" alt="homepage" class="dark-logo" />
                        <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                    </b>
                    <span>
                     <img src="../assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                     <img src="../assets/images/logo-light-text.png" class="light-logo" alt="homepage" /></span> </a>
            </div>
            <div class="navbar-collapse" style={{background:"#212529"}}>
                <ul class="navbar-nav me-auto">

                </ul>
                <ul class="navbar-nav my-lg-0">
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Header;