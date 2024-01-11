import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Footer from './components/layouts/footer';
import Dashboard from './components/pages/dashboard';
import Users from './components/pages/users';
import View_orders from './components/pages/view_orders';
import Feedback from './components/pages/feedback';
import Orders from './components/pages/orders';
import Orders_create from './components/pages/orders_create';
import Orders_edit from './components/pages/orders_edit';
import Hangers from './components/pages/hangers';
import Hangers_create from './components/pages/hangers_create';
import Hangers_edit from './components/pages/hangers_edit';
import Sizes from './components/pages/sizes';
import Sizes_create from './components/pages/sizes_create';
import Sizes_edit from './components/pages/sizes_edit';
import Frames from './components/pages/frames';
import Frames_create from './components/pages/frames_create';
import Frames_edit from './components/pages/frames_edit';
import Login from './components/pages/login';
import { useJwt } from 'react-jwt';
import Orders_Waitting from './components/pages/orders_waitting';
import Orders_Today from './components/pages/orders_today';
import Orders_Confirmed from './components/pages/orders_confirmed';
import Orders_Shipping from './components/pages/orders_shipping';
import Orders_Shipped from './components/pages/orders_shipped';
import Orders_Successed from './components/pages/orders_successed';
import Orders_Cancelled from './components/pages/orders_cancelled';

function App() {
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (!token || isExpired || isInvalid) {
        localStorage.removeItem("accessToken");
        return <Navigate to="/login" />;
    }

    return element;
};

const ProtectedLoginRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (token && !isExpired && !isInvalid) {
        return <Navigate to="/dashboard" />;
    }

    return element;
};
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="App">
      <div class="paira-container pages-container">
        {!isLoginPage && (
          <>
            <Header />
            <Sidebar />
          </>
        )}
        <Routes>
          <Route path='/login' element={<ProtectedLoginRoute element={<Login />} />} />
          <Route path='/' element={<ProtectedRoute element={<Dashboard />} />}/>
          <Route path='/users' element={<ProtectedRoute element={<Users />} />}/>
          <Route path='/view_orders/:id' element={<ProtectedRoute element={<View_orders />} />}/>
          <Route path='/feedback' element={<ProtectedRoute element={<Feedback />} />}/>

          <Route path='/orders' element={<ProtectedRoute element={<Orders />} />}/>
          <Route path='/orders_create' element={<ProtectedRoute element={<Orders_create />} />}/>

          <Route path='/orders_waitting' element={<ProtectedRoute element={<Orders_Waitting />} />}/>
          <Route path='/orders_today' element={<ProtectedRoute element={<Orders_Today />} />}/>
          <Route path='/orders_confirmed' element={<ProtectedRoute element={<Orders_Confirmed />} />}/>
          <Route path='/orders_shipping' element={<ProtectedRoute element={<Orders_Shipping />} />}/>
          <Route path='/orders_shipped' element={<ProtectedRoute element={<Orders_Shipped />} />}/>
          <Route path='/orders_successed' element={<ProtectedRoute element={<Orders_Successed />} />}/>
          <Route path='/orders_cancelled' element={<ProtectedRoute element={<Orders_Cancelled />} />}/>

          <Route path='/hangers' element={<ProtectedRoute element={<Hangers />} />}/>
          <Route path='/hangers_create' element={<ProtectedRoute element={<Hangers_create />} />}/>
          <Route path='/hangers_edit/:id' element={<ProtectedRoute element={<Hangers_edit />} />}/>

          <Route path='/sizes' element={<ProtectedRoute element={<Sizes />} />}/>
          <Route path='/sizes_create' element={<ProtectedRoute element={<Sizes_create />} />}/>
          <Route path='/sizes_edit/:id' element={<ProtectedRoute element={<Sizes_edit />} />}/>

          <Route path='/frames' element={<ProtectedRoute element={<Frames />} />}/>
          <Route path='/frames_create' element={<ProtectedRoute element={<Frames_create />} />}/>
          <Route path='/frames_edit/:id' element={<ProtectedRoute element={<Frames_edit />} />}/>
        </Routes>
        {!isLoginPage && (
          <>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
