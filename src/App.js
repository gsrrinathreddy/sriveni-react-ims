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
import Signin from './pages/Signin';
import Checkout1 from './pages/Checkout1';
import IMSButton from './components/IMSButton';
import Signout from './pages/Signout';
import Favorite from './pages/Favourite';


function App() {
  
   let a=['cake', 'Chocolates', 'Flowers','Gifts','Plants'];

   let b=[ 'Checkout1', 'Dashboard', ];
   
    
   
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
       <Route path='/Checkout1' element={<Checkout1/>}/>
       <Route path='/IMSButton' element={<IMSButton/>}/>
        <Route path='/Signout' element={<Signout/>}/>  
        <Route path='/Favourite' element={<Favorite/>}/>     

    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
