import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import ContactUS from "./Pages/ContactUS/ContactUS.JSX";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";

const Routes = [
       {path:'/',element:<Home />},
       {path:'/Property',element:<Property />},
       {path:'/About',element:<About />},
       {path:'/Blog',element:<Blog />},
       {path:'/Contact',element:<ContactUS />},
]

export default Routes