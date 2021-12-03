import './App.css';
import{BrowserRouter, Route, Switch} from "react-router-dom"

import Product from './component/User';
import Career from './component/Career';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Error from './component/Error';
import User from './component/User';





function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/user" component={User}/>
          {/* <Route exact path="/career"  component={Career}/> */}
          <Route exact path="/login" component={Login}/>
          <Route component={Error}/>
        </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
