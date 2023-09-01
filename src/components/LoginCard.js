import React, { useState, useContext } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Logo from './Logo';
import axios from 'axios';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext'

//react-hot-toast import
import {Toaster, toast} from 'react-hot-toast'

//Import CSS
import './../navLink.css'

export default function LoginCard(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {id, setId} = useContext(UserContext);
    const {role, setRole} = useContext(AuthContext);
    const {accessToken, setAccessToken} = useContext(AuthContext);

    //Toaster
    const errorNotify = () => toast.error('Credenciales de acceso incorrectas\nPorfavor vuelva a intentar' , {
        duration: 5000,
        position: 'top-center'
    });
    const focus = async () => {
        const config = {
            username : userName,
	        password : password
        }
        const res = await axios.post('http://localhost:4545/api/ver1/auth/login', config);
        setId(res.data.id);
        setRole(res.data.role);
        setAccessToken(res.data.access);
    }
    const login = () => {
        if(!accessToken){
            errorNotify();
        }else{
            navigate(`/Landing/${id}`);
        }
    }
    const handleChangeName = (e) => {
        setUserName(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div className="border-0 text-white">
            <Logo/>
            <div className='input-box'>
                <div className="card-body loginCard logo">
                    <h5 className='text-center'>Por favor Inicia Sesion</h5>
                    <br/>
                    <div className='row justify-content-md-center'>
                        <div className='col col-xl-8 input-field'>
                            <TextInput onChange={handleChangeName}/>
                            <label>Username</label>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col col-xl-8 input-field'>
                            <PasswordInput onChange={handleChangePassword} onBlur={focus}/>
                            <label>Password</label>
                        </div>
                    </div>
                    <div className='row justify-content-md-center'>
                        <div className='col col-xl-6 input-field'>
                            <button type='button' className='btn btn-outline-light' onClick={login}>Sing In</button>
                            <Toaster/>
                        </div>
                    </div>
                    <br/>
                    <div className='createaccountlink'>
                        <span>¿No tienes cuenta? <br/>
                            <NavLink className="navlink" to = "/createUser"> Creala aquí</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
