import React, { useContext } from 'react';
import './navbar.css'
import logo from '../../assets/logo1.PNG'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import AuthContext from "../../context/auth.context";
const Navbar = ()=>{
  const auth = useContext(AuthContext)
    console.log(auth.auth)
  const router = useHistory();
  return (
      <div className={'barre'}>
          <div > <img  className={'logog'} src= {logo}></img></div>
          <div className={'right'}>
            {router && !auth.auth && (
              <>
            <Button onClick={() => router.push('/addtrock')}  style={{fontWeight:'bold'}}>add new troc</Button>
            <Button  onClick={() => router.push('/login')} style={{fontWeight:'bold'}}>Login</Button>
            </>
            )}
            {auth.auth && (
              <>
              
              </>              
            )}         
          </div>
      </div>

  );
}
export default Navbar
