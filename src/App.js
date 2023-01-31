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


function App() {
   let a=['cake', 'Chocolates', 'Flowers','Gifts','Plants'];

   let b=['Profile', 'Account', 'Dashboard', 'Logout'];
  return (
    <div className="App">
      <BrowserRouter>
      <IMSNavbar pages={a} settings={b}/>
      <Routes>
      <Route path="/" element={<Flowers/>}/>

       <Route path="/Cake" element={<Cake/>}/>
       <Route path="/Chocolates" element={<Chocolates/>}/>
       <Route path="/Flowers"element={<Flowers/>}/>
       <Route path="/Gifts" element={<Gifts/>}/>
       <Route path="/Cart" element={<Cart/>}/>
       <Route path='/Plants' element={<Plants/>}/>
       

    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
