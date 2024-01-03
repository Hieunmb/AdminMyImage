import {useLocation, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Footer from './components/layouts/footer';
import Dashboard from './components/pages/dashboard';

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

function App() {
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='/orders' element={<Orders/>}/>
        <Route path='/orders_create' element={<Orders_create/>}/>
        <Route path='/orders_edit' element={<Orders_edit/>}/>

        <Route path='/hangers' element={<Hangers/>}/>
        <Route path='/hangers_create' element={<Hangers_create/>}/>
        <Route path='/hangers_edit' element={<Hangers_edit/>}/>

        <Route path='/sizes' element={<Sizes/>}/>
        <Route path='/sizes_create' element={<Sizes_create/>}/>
        <Route path='/sizes_edit' element={<Sizes_edit/>}/>

        <Route path='/frames' element={<Frames/>}/>
        <Route path='/frames_create' element={<Frames_create/>}/>
        <Route path='/frames_edit' element={<Frames_edit/>}/>
        
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
