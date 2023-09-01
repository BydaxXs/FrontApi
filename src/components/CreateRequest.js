import React, { useEffect, useState } from "react";
import axios from "axios";
import TextInput from "./TextInput";

//react-hot-toast import
import {Toaster, toast} from 'react-hot-toast'

export default function CreateRequest(){
    const [idRequest, setIdRequest] = useState("");
    const [requestVia, setRequestVia] = useState("");
    const [requestTrace, setRequesTrace] = useState("");
    const [applicantName, setApplicantName] = useState("");
    const [applicantRut, setApplicantRut] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [applicantPhone, setApplicantPhone] = useState("");
    const [applicantPosition, setApplicantPosition] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [requestStatus, setRequestStatus] = useState("");
    const [requestCostCenter, setRequestCostCenter] = useState("");
    const [product, setProduct] = useState("");
    const [productAmount, setProductAmount] = useState("");
    const [costCenter, setCostCenter] = useState([])

    useEffect(() => {
        axios.post('http://localhost:4545/api/ver1/costcenter/findCostCenter')
        .then(res => {
            setCostCenter(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    const successAdd = () => toast.success('Elemento agregado correctamente',{
        duration: 5000,
        position: "bottom-right"
    });
    const successInsert = () => toast.success('Registro Creado correctamente',{
        duration: 5000,
        position: "bottom-right"
    });

    const handleId = (e) => {
        setIdRequest(e.target.value);
    }
    const handleRequestVia = (e) => {
        setRequestVia(e.target.value);
    }
    const handleRequestTrace = (e) => {
        setRequesTrace(e.target.value);
    }
    const handleApplicantName = (e) => {
        setApplicantName(e.target.value);
    }
    const handleApplicantRut = (e) => {
        setApplicantRut(e.target.value);
    }
    const handleApplicantEmail = (e) => {
        setApplicantEmail(e.target.value);
    }
    const handleApplicantPhone = (e) => {
        setApplicantPhone(e.target.value);
    }
    const handleApplicantPosition = (e) => {
        setApplicantPosition(e.target.value);
    }
    const handleCreationDate = (e) => {
        setCreationDate(e.target.value);
    }
    const handleRequestStatus = (e) => {
        setRequestStatus(e.target.value);
    }
    const handleRequestCostCenter = (e) => {
        setRequestCostCenter(e.target.value);
    }
    const handleProduct = (e) => {
        setProduct(e.target.value);
    }
    const handleProductAmount = (e) => {
        setProductAmount(e.target.value)
    }

    let requestItems = {};
    const [items, setItems] = useState([]);
    const addRequestItem = () => {
        requestItems = {product:product,amount:productAmount};
        setItems([...items,requestItems]);
        console.log(items)
    }
    
    function handleClick(){
        addRequestItem();
        successAdd();
    }

    const createRequest = () => {
        const config = {
            requestId:idRequest,
            requestMethod:[{
                requestVia:requestVia,
                requestTrackingId:requestTrace
            }],
            applicant:[{
                applicantName:applicantName,
                applicantRut:applicantRut,
                applicantEmail:applicantEmail,
                applicantPhone:applicantPhone,
                applicantPosition:applicantPosition
            }],
            creationDate:creationDate,
            requestStatus:requestStatus,
            costCenterApplicant:[{
                costCenterCode:requestCostCenter
            }],
            implement:items
        }
        axios.post('http://localhost:4545/api/ver1/request/create', config);
        successInsert();
    }

    return(
        <>
        <div className="container justify-content-md-center d-flex input-box">
            <div className="container text-white">
                <h1>Crear Solicitud</h1>
                <br/>
                <div className="row justify-content-md-left">
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleId}/>
                        <label>Id de solicitud</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleRequestVia}/>
                        <label>Via de solicitud</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleRequestTrace}/>
                        <label>Ticket de solicitud</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleApplicantName}/>
                        <label>Nombre Solicitante</label>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-md-left">
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleApplicantRut}/>
                        <label>RUT solicitante</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleApplicantEmail}/>
                        <label>Correo solicitante</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleApplicantPhone}/>
                        <label>Telefono solicitante</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleApplicantPosition}/>
                        <label>Cargo solicitante</label>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-md-left">
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleCreationDate}/>
                        <label>Fecha de creacion</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <select className="combobox" name="Estado" onChange={handleRequestStatus}>
                            <option selected>Seleccionar Estado</option>
                            <option defaultValue="Asignado">Asignado</option>
                            <option defaultValue="En Curso">En Curso</option>
                            <option defaultValue="Terminado">Terminado</option>
                            <option defaultValue="Cerrado">Cerrado</option>
                        </select>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <select className="combobox" name="Centro de costo" onChange={handleRequestCostCenter}>
                            <option selected>Seleccionar Centro de costo</option>
                            {costCenter.map(costCenter =>
                                <option value={costCenter.costCenterCode}>{costCenter.costCenterName}</option>)}
                            
                        </select>
                    </div>
                </div>
                <br/>
                <h3>Elementos a solicitar</h3>
                <br/>
                <div className="row justify-content-md-left">
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleProduct}/>
                        <label>Elemento solicitado</label>
                    </div>
                    <div className="col col-xl-3 input-field">
                        <TextInput onChange={handleProductAmount}/>
                        <label>Cantidad</label>
                    </div>
                </div>
                <br/>
                <div className="d-flex justify-content-center">
                    <div className="m-2">
                        <button type="button" className="btn btn-outline-light" onClick={handleClick}>Agregar</button>
                        <Toaster/>
                    </div>
                    <div className="m-2">
                        <button type="button" className="btn btn-success" onClick={createRequest}>Insertar</button>
                        <Toaster/>
                    </div>
                    <div className="m-2">
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
                <br/>
                <div className="justify-content-left">
                    <table className="table text-white">
                        <thead>                                    
                            <tr>
                                <th>Implemento</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(items => 
                            <tr>
                                <th>{items.product}</th>
                                <th>{items.amount}</th>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}