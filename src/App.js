import SignInSide from "./SignInSide";
import {RouterProvider, createBrowserRouter } from  "react-router-dom"
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import ForgotPassword from './ForgotPassword';

const route = createBrowserRouter([
  {path : '/', element: <HomePage/>},
  {path : '/login', element: <SignInSide/>},
  {path : '/signup', element: <SignUp/>},
  {path : '/forgot', element: <ForgotPassword/>},
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