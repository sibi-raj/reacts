import SignInSide from "./SignInSide";
import {RouterProvider, createBrowserRouter } from  "react-router-dom"
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import ForgotPassword from './ForgotPassword';
import Aboutus from "./Aboutus";
import Restaurant1 from "./Restaurant1";
import Restaurant2 from "./Restaurant2";
import Restaurant3 from "./Restaurant3";
import Restaurant4 from "./Restaurant4";
import Restaurant5 from "./Restaurant5";
import Restaurant6 from "./Restaurant6";
import Contacts from "./Contacts";
import { userContext } from "./Context";
import { useState } from "react";
import { Menu } from "./Menu";
import { Book1 } from "./Book1";

const route = createBrowserRouter([
  {path : '/', element: <HomePage/>},
  {path : '/login', element: <SignInSide/>},
  {path : '/signup', element: <SignUp/>},
  {path : '/forgot', element: <ForgotPassword/>},
  {path:'/about',element:<Aboutus></Aboutus>},
  {path: '/contact',element:<Contacts></Contacts>},
  {path: '/men',element:<Menu></Menu>},
  {path: '/res1',element:<Restaurant1></Restaurant1>},
  {path:'res2',element:<Restaurant2></Restaurant2>},
  {path:'res3',element:<Restaurant3></Restaurant3>},
  {path:'res4',element:<Restaurant4></Restaurant4>},
  {path:'res5',element:<Restaurant5></Restaurant5>},
  {path:'res6',element:<Restaurant6></Restaurant6>},
  {path:'/boo1',element:<Book1></Book1>}

])

function App()
{
  const [user, setuser] = useState("");
  return(
    <div>
      <userContext.Provider value = {[user, setuser]}>
       <RouterProvider router = {route}/>

      </userContext.Provider>
     </div>
  );
}

export default App;