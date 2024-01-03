import React from "react";

function Sidebar() {
    return (
        <aside class="left-sidebar" style={{ flexDirection: "column" }}>
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Dashboard</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Orders</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Hanger</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Images</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Frame</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/admin" aria-expanded="false"><i class="ti-email"></i><span class="hide-menu">Feedback</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="#" aria-expanded="false"><i class="bi bi-box-arrow-right"></i><span class="">Logout</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>  
    )
}

export default Sidebar;