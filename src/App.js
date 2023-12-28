import {useLocation, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Index from './components/pages/index';
import Add_Products from './components/pages/add-products';
import Products from './components/pages/products';
import Orders from './components/pages/orders';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/admin' element={<Index/>}/>
        <Route path='/admin/add-products' element={<Add_Products/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
