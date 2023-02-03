import logo from './logo.svg';
import './App.css';


import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from './pages/Cart';

import Cake from './pages/Cake';
import IMSNavbar from './components/IMSNavbar';
import Chocolates from './pages/Chocolates';
import Flowers from './pages/Flowers';
import Gifts from './pages/Gifts';
import Plants from './pages/Plants';
import Error from './pages/Error';
import Delivery from './pages/Delivery';
import Signin from './features/Signin';
import Signout1 from './features/Signout1';
import Checkout1 from './pages/Checkout1';




function App() {
   let a=['cake', 'Chocolates', 'Flowers','Gifts','Plants'];

   let b=['Signin', 'Checkout1', 'Dashboard', 'Signout1'];
  return (
    <div className="App">
      <BrowserRouter>
      <IMSNavbar pages={a} settings={b}/>
      <Routes>
      <Route path="/" element={<Flowers/>}/>
      <Route path='/*' element={<Error/>}/>

       <Route path="/Cake" element={<Cake/>}/>
       <Route path="/Chocolates" element={<Chocolates/>}/>
       <Route path="/Flowers"element={<Flowers/>}/>
       <Route path="/Gifts" element={<Gifts/>}/>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path='/Plants' element={<Plants/>}/>
       <Route path='cart/Delivery'element={<Delivery/>}/>
       <Route path='/Signin' element={<Signin/>}/>
       <Route path='/Signout1' element={<Signout1/>}/>
       <Route path='/Checkout1' element={<Checkout1/>}/>
      
       

    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
