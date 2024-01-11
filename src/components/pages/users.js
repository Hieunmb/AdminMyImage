import { useEffect , useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import User from "../views/user";

function Users() {

    const [users,setUsers] = useState([]);
    const loadUsers = async ()=>{
        try {
            const rs = await api.get(url.USER.LIST);
            setUsers(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadUsers();
    },[]);


    return (
        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Users</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-end">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb justify-content-end">
                                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                                <li class="breadcrumb-item active">Users</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">List Users</h5>
                                <div class="table-responsive m-t-30">
                                    <table class="table product-overview">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Role</th>
                                                {/* <th>Actions</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            users.map((e,k)=>{
                                                return (
                                                    <User key={k} user={e} />
                                                )
                                            })
                                            }
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
    
export default Users;