import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './component/Footer';
import MyNav from './component/MyNav';
import Home from './component/Home';
import Login from './component/Login';
import NotFound from './ass/NotFound.svg';
import Products from './component/Products';
function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<Home />} />
        <Route path='Proudect' element={<Products />} />
        <Route path='Login' element={<Login />} />
        <Route path='*' element={
          <>
            <div>
              <h1>Not Found</h1>
              <img src={NotFound}  >
              </img>
            </div>
          </>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
