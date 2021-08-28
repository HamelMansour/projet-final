import { Button, Card, TextField } from '@material-ui/core'
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import API from "../../api/api";
import AuthContext from "../../context/auth.context";
import './login.css'
const Login =()=>{
    const router = useHistory();
    const auth = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const send = () => {
        API.post('/login', {email, password})
            .then(res => {
                if (res.data.error) {
                    Swal.fire(res.data.msg, '', 'warning')
                } else {
                    auth.login();
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('user', JSON.stringify(res.data))
                    Swal.fire('', '', 'success')
                        .then(ok => {
                            if (ok.isConfirmed) {
                                router.push('/home')
                            }
                        })
                }
            })
            .catch(err => {
                Swal.fire('', '', 'error')
            })
    }

    return (
        <div className={'register-container'}>
        <Card className={'register-card'}>
            <h1>Login</h1>
            <TextField label="Email"
                       type="search"
                       value={email}
                       onChange= {event=>setEmail (event.target.value)}
                      
                       variant="outlined"/>
            <TextField label="Mot de passe"
                        value={password}
                        onChange={event=>setPassword(event.target.value)}
                       type="search"
                       variant="outlined"/>
            <Button  onClick={send} variant="contained" color="primary">
                Envoyer
            </Button>
            <Button  onClick={() => router.push('/register')} variant="contained" color="primary">
                inscription
            </Button>
        </Card>
    </div>
    ) 
}
export default Login