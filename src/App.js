import SignInSide from "./SignInSide";
import {RouterProvider, createBrowserRouter } from  "react-router-dom"
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import ForgotPassword from './ForgotPassword';
import Aboutus from "./Aboutus";


const route = createBrowserRouter([
  {path : '/', element: <HomePage/>},
  {path : '/login', element: <SignInSide/>},
  {path : '/signup', element: <SignUp/>},
  {path : '/forgot', element: <ForgotPassword/>},
  {path:'/about',element:<Aboutus></Aboutus>}
])

function App()
{
  return(
    <div>
       <RouterProvider router = {route}/>
     </div>
  );
}

export default App;