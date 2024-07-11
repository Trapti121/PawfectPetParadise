import './App.css';
import "./index.css";
import React, {useState} from "react";
import Initialpage from './routes/Initialpage';
import Home from "./routes/Home";
import Dogs from "./routes/Dogs";
import Cats from "./routes/Cats";
import Fishes from "./routes/Fishes";
import Birds from "./routes/Birds";
import Feedbacks from "./routes/Feedbacks";
import Dogfood from "./routes/DogFoods";
import Catfood from "./routes/CatFoods";
import Additem from "./components/AdminWork/Additems";
import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import {AdminLogin} from './routes/AdminLogin';
import { Register } from './routes/Register';
import EnquiryForm from './components/Enquiry/EnquiryForm';
import CartPage from './components/CartFolder/CartPage';
import PrivateComponent from './components/PrivateComponent';
import AdminComponent from './components/AdminComponent';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
   <>
    <Routes>
    
      <Route path="/dogs" element={<PrivateComponent><Dogs/></PrivateComponent>}/>  
      <Route path="/cats" element={<PrivateComponent><Cats/></PrivateComponent>}/>
      <Route path="/birds" element={<PrivateComponent><Birds/></PrivateComponent>}/>
      <Route path="/fishes" element={<PrivateComponent><Fishes/></PrivateComponent>}/>
      <Route path="/add-items" element={<AdminComponent><Additem/></AdminComponent>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/dogfood" element={<PrivateComponent><Dogfood/></PrivateComponent>}/>
      <Route path="/catfood" element={<PrivateComponent><Catfood/></PrivateComponent>}/>
      <Route path="/feedback" element={<PrivateComponent><Feedbacks/></PrivateComponent>}/>
      <Route path="/fishes/sendenquiry/:id" element={<EnquiryForm/>}/>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
      
      <Route path="/admin-login" element={<AdminLogin onFormSwitch={toggleForm} />} />
      <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
      <Route path="/initialpage" element={<Initialpage/>}></Route>
      </Routes>
    </>
  );
}
export default App;
