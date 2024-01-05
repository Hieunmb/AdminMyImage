const url ={
    BASE_URL:"https://localhost:7174/api",
    ADMIN:{
        LOGIN:"/Admin/login",
        REGISTER:"/Admin/register",
        PROFILE:"/Admin/profile",
    },
    FRAME:{
        LIST:"/Frame",
        CREATE:"/Frame",
        EDIT:"/Frame",
        DELETE:"/Frame",
        GET:"/Frame/get-by-id"
    },
    SIZE:{
        LIST:"/Size",
        CREATE:"/Size",
        EDIT:"/Size",
        DELETE:"/Size",
        GET:"/Size/get-by-id"
    }
}
export default url;