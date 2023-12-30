import {useLocation, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/header';
import Sidebar from './components/layouts/sidebar';
import Index from './components/pages/index';


function App() {
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/admin' element={<Index/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
