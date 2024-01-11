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
    },
    HANGER:{
        LIST:"/Hanger",
        CREATE:"/Hanger",
        EDIT:"/Hanger",
        DELETE:"/Hanger",
        GET:"/Hanger/get-by-id"
    },
    ORDER:{
        LIST:"/Order",
        CREATE:"/Order",
        UPDATEORDER:"/Order/UpdateOrder",
        CANCELORDER:"/Order/CancelOrder",
        GET:"/Order/get-by-id",
        GET_ORDER_CANCELLED:"Order/get-order-cancelled",
        GET_ORDER_WAITTING:"Order/get-order-waitting",
        GET_ORDER_CONFIRMED:"Order/get-order-confirm",
        GET_ORDER_SHIPPING:"Order/get-order-shipping",
        GET_ORDER_SHIPPED:"Order/get-order-shipped",
        GET_ORDER_SUCCESSED:"Order/get-order-successed",
        GET_TODAY_ORDERS:"Order/today-orders"
    },
    ORDERIMAGE:{
        LIST:"/OrderImage",
        CREATE:"/OrderImage",
        GET:"/OrderImage/get-by-order-id"
    },
    USER:{
        LIST:"/User",
        REGISTER:"/User/register",
        LOGIN:"/User/login",
        PROFILE:"/User/profile",
    }
}
export default url;