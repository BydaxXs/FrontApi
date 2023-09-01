import React,{useContext} from 'react';
import logo from '../assets/logo-imperial-blanco.png';
import {NavLink, useNavigate} from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';

//cambiar los href por navlink y to="/direccion"

export default function GenericNavbar(){
    const navigate = useNavigate();
    const { id } = useContext(UserContext);
    const { role } = useContext(AuthContext);
    const {setAccessToken} = useContext(AuthContext);
    
    const logoRedirecction = () =>{
        navigate(`/Landing/${id}`);
    }
    const handleLogOut = () => {
        setAccessToken(null)
    }
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                <span className="spacing-nav navbar-brand">
                    <img src={logo} alt="" width='220' height="30"  onClick={logoRedirecction}/>
                </span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Recepcion
                                </span>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {role === 'admin' ? <li><NavLink className = "dropdown-item" to = {`/TaxInsert/${id}`}>Crear documento de recepcion</NavLink></li> : null}
                                    <li><NavLink className = "dropdown-item" to = {`/SearchTaxPage/${id}`}>Buscar documentos</NavLink></li>
                                    <li className='dropdown-item'>Buscar documentos *PROPIOS DE USUARIO*</li>
                                    {/*Crear funcion de busqueda propia y añadirla al controlador de pagina correspondiente*/}
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Despacho
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        {role === 'admin' ? <li><NavLink className = "dropdown-item" to = {`/CreateDeliveryPage/${id}`}>Crear order de despacho</NavLink></li> : null}
                                        <li><NavLink className = "dropdown-item" to = {`/SearchDeliveryPage/${id}`}>Buscar order de despacho</NavLink></li>
                                        <li className='dropdown-item'> Buscar orden de despacho *PROPIO DE USUARIO*</li>
                                        {/*Crear funcion de busqueda propia y añadirla al controlador de pagina correspondiente*/}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Asignacion
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><NavLink className = "dropdown-item" to = {`/Assingment/${id}`}>Asignar equipo</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Solicitud
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><NavLink className = "dropdown-item" to = {`/CreateRequest/${id}`}>Crear Solicitud</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <ul className="nav navbar-nav navbar-right auth-spacing mt-2 mt-lg-0">
                        <li className='nav-item'>
                            <NavLink className = 'nav-link' to = {`/profileData/${id}`}><i className="bi bi-person"/></NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" replace to ='/' onClick={handleLogOut}><i className="bi bi-box-arrow-left"/></NavLink>
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
        <br/>
        </>
    )
}

