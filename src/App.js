import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    < Header />
  <Routes>
    <Route path='/' element={<ProductList/>} />
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
} 

export default App;
