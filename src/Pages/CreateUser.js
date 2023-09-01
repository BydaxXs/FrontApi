import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import Logo from '../components/Logo';
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'

//react-hot-toast import
import {Toaster, toast} from 'react-hot-toast'

//css
import './../navLink.css'

export default function CreateUser() {
  //useState de datos para almacenarlos en la bd
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPaaword, setConfirmPassword] = useState("");

    //HandleChange --> obtienen los datos del front
    const HandleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const HandleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const HandleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const HandleChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const HandleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const HandleChangeConfimPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    //react-hot-toaster functions
    const errorNotify = () => toast.error('Error en la creacion del usuario \n \nIntentelo nuevamente');
    const okNotify = () => toast.success('Usuario creado correctamente \n \nEspere la activacion de la cuenta');

    //Funcion que llama al back
    const createUser = async () => {
        const config = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            username: userName,
            password: password
        }
        try {
            const res = await axios.post('http://localhost:4545/api/ver1/auth/register', config);
            okNotify();
        } catch (error) {
            errorNotify();
        }
    }
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="align-items-center">
        <div className="border-0 text-white">
          <Logo/>
          <div className="input-box">
            <div className="card-body loginCard logo">
              <br/>
              <div className="row justify-content-md-center">
                <div className="col col-xl-6 input-field">
                    <TextInput onChange={HandleChangeFirstName}/>
                    <label>Fisrt Name</label>
                </div>
                <div className="col col-xl-6 input-field">
                    <TextInput onChange={HandleChangeLastName}/>
                    <label>Last Name</label>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col col-xl-6 input-field">
                    <TextInput onChange={HandleChangeEmail}/>
                    <label for="email">Email</label>
                </div>
                <div className="col col-xl-6 input-field">
                    <TextInput onChange={HandleChangeUserName}/>
                    <label for="userName">User Name</label>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col col-xl-6 input-field">
                    <PasswordInput onChange={HandleChangePassword}/>
                    <label for="pasword">Password</label>
                </div>
                <div className="col col-xl-6 input-field">
                    <PasswordInput onChange={HandleChangeConfimPassword}/>
                    {password === confirmPaaword ? undefined : <h7 className='h7'>La contraseñas contraseñas deben coincidir</h7>}
                    <label for="confirmPassword">Confirm Password</label>
                </div>
              </div>
              <br/>
              <div className='row justify-content-md-center'>
                <div className="col col-xl-6 input-field">
                  <button type="button" className="btn btn-outline-light" onClick={createUser}>Create Account</button>
                  <Toaster/>
                </div>
              </div>
              <br/>
              <div className='createaccountlink'>
                <NavLink className="navlink" to = "/">Volver al inicio</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
