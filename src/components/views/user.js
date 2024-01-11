

function User(props){
    const user = props.user;
    return(
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.city}</td>
            <td>{user.role}</td>
            {/* <td><a href="#" class="text-inverse" title="" data-bs-toggle="tooltip" data-original-title="Delete"><i class="ti-trash"></i></a></td> */}
        </tr>
    )
}

export default User;