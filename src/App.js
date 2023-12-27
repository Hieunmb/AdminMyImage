import {useLocation, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';

function App() {
  return (
    <div className="App">
      <div class="paira-container pages-container">
      <Header></Header>
      <Routes>
        
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
