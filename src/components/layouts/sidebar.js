import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaJediOrder } from "react-icons/fa";
import { TbHanger } from "react-icons/tb";
import { GiResize } from "react-icons/gi";
import { MdOutlineFilterFrames } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
    return (
        <aside class="left-sidebar" style={{ flexDirection: "column" }}>
        <div class="scroll-sidebar">
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li> <a class="waves-effect waves-dark" href="/dashboard" aria-expanded="false"><i style={{verticalAlign:"initial"}}><LuLayoutDashboard/></i><span>Dashboard</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/users" aria-expanded="false"><i style={{verticalAlign:"initial"}}><AiOutlineUserSwitch/></i><span>Users</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/orders" aria-expanded="false"><i style={{verticalAlign:"initial"}}><FaJediOrder/></i><span>Orders</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/hangers" aria-expanded="false"><i style={{verticalAlign:"initial"}}><TbHanger/></i><span>Hangers</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/sizes" aria-expanded="false"><i style={{verticalAlign:"initial"}}><GiResize/></i><span>Sizes</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="/frames" aria-expanded="false"><i style={{verticalAlign:"initial"}}><MdOutlineFilterFrames/></i><span>Frames</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="#" aria-expanded="false"><i style={{verticalAlign:"initial"}}><MdOutlineFeedback/></i><span>Feedback</span></a>
                    </li>
                    <li> <a class="waves-effect waves-dark" href="#" aria-expanded="false"><i style={{verticalAlign:"initial"}}><BiLogOut/></i><span>Logout</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>  
    )
}

export default Sidebar;