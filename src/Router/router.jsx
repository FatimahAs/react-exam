import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/Signup";
import ProductList from "../Pages/ProductList";
import ProductDetails from "../Pages/ProductDetails"
import Checkout from "../Pages/Checkout";

//import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import AddToCart from "../Pages/AddToCart";



function Layout() {
  return (
	
	  <div className="min-h-screen flex flex-col">
		{/*<Navbar/>*/}
			<main className="flex-grow">
			    <Outlet />
		    </main>
		  <Footer/>
		</div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
		{ path: "/", element: <Home /> },
		{ path: "signin", element: <Signin /> },
		{ path: "signup", element: <SignUp /> },
		{ path: "productlist", element: <ProductList /> },
		{ path: "productdetails/:id", element: <ProductDetails /> },
		{ path: "addtocart", element: <AddToCart /> },
		{ path: "checkout", element: <Checkout /> },
		
		
	 
    ],
  },
]);




function Router() {
  return <RouterProvider router={router} />
}

export default Router;