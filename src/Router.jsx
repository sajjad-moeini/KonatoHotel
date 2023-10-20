import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";

const Routes = [
       {path:'/',element:<Home />},
       {path:'/Property',element:<Property />},
       {path:'/About',element:<About />},
]

export default Routes