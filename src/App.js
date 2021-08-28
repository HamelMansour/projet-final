
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
 import Register from "./pages/register/register";
import Login from "./pages/login/login";
import {useContext, useEffect} from "react";
import AuthContext from "./context/auth.context";
import Addtrock from './pages/addtrock/addtrock';
import Home from './pages/home/home';
 
const App = () => {
    const auth = useContext(AuthContext)
    useEffect(() => {
        const isAuth = localStorage.getItem('auth')
        if (isAuth === 'true') auth.login()
    }, [])
    return (
        <BrowserRouter>
            <>
                {!auth.auth && (
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login"/>
                        </Route>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/home" component={Home}/>
                        <Route component={Login}/>
                    </Switch>
                )}
                {auth.auth && (
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"/>
                        </Route>
                        <Route path="/home" component={Home}/>
                        <Route path= {'/addtrock'} component={Addtrock}/>        
                     </Switch>
                )}
            </>
        </BrowserRouter>
    );
}

export default App;