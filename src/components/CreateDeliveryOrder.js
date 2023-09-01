import React,{useState} from "react";
import TextInput from "./TextInput";
import axios from "axios";

//react-hot-toast import
import {Toaster, toast} from 'react-hot-toast'

export default function CreateDeliveryOrder(){
    const [deliveryNum, setDeliveryNum] = useState("");
    const [outSerie, setOutSerie] = useState("");
    const [applicant, setApplicant] = useState("");
    const [store, setStore] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [status, setStatus] = useState("");
    const [serieNum, setSerieNum] = useState("");
    const [finalUser, setFinalUser] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const handleDelNum = (e) => {
        setDeliveryNum(e.target.value);
    }
    const handleOutSerie = (e) => {
        setOutSerie(e.target.value);
    }
    const handleApplicant = (e) => {
        setApplicant(e.target.value);
    }
    const handleStore = (e) => {
        setStore(e.target.value);
    }
    const handleDelDate = (e) => {
        setDeliveryDate(e.target.value);
    }
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleSerieNum = (e) => {
        setSerieNum(e.target.value);
    }
    const handleFinalUser = (e) => {
        setFinalUser(e.target.value);
    }
    const handleContactNum = (e) => {
        setContactNumber(e.target.value);
    }
    const successAdd = () => toast.success('Elemento agregado correctamente',{
        duration: 5000,
        position: "top-right"
    });
    const successInsert = () => toast.success('Registro Creado correctamente',{
        duration: 5000,
        position: "top-right"
    });

    let sendItems = {};
    const [items, setItems] = useState([]);
    const addElement = () => {
        sendItems = {serieNum:serieNum,finalUser:finalUser,contactPhone:contactNumber};
        setItems([...items,sendItems]);
    }

    let addresIndex = {};
    const [indexAddress, setIndexAddres] = useState([]);
    const setAddress = () =>{
        addresIndex = {id:store};
        setIndexAddres([addresIndex]);
    }

    function addClick(){
        addElement();
        successAdd();
    }
    const handleSend = () =>{
        setAddress();
        const config = {
            orderNumber: deliveryNum,
            sendItems: items,
            outSerieNum: outSerie,
            applicant: applicant,
            indexAddress: [{
                id:store
            }],
            availabilityDate: deliveryDate,
            condition: status
        }
        axios.post('http://localhost:4545/api/ver1/delivery/createDeloveryOrder', config);
        successInsert();
    }
    return(
        <>
            <div className="container justify-content-md-center d-flex input-box">
                <div className="text-white container">
                    <h2>Crear orden de despacho</h2>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleDelNum}/>
                            <label>Numero de orden</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleOutSerie}/>
                            <label>Serie Saliente</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleApplicant}/>
                            <label>Solicitante</label>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-3 input-field">
                            <select className="combobox" name="Tienda" onChange={handleStore}>
                                {/* HACER PETICION A BD PARA CARGAR TIENDAS Y LUEGO AGREGARLOS A LAS OPCIONES CON MAP */}
                                <option selected>Seleccionar Tienda</option>
                                <option value='1'>La Serena</option>
                                <option value='2'>Viña del Mar</option>
                                <option value='3'>Valparaiso</option>
                                <option value='4'>Mapocho</option>
                                <option value='5'>Huechuraba</option>
                                <option value='6'>Vespucio</option>
                                <option value='7'>San Bernardo</option>
                                <option value='8'>Maipu</option>
                                <option value='9'>Rancagua</option>
                                <option value='10'>Talca</option>
                                <option value='11'>Concepcion</option>
                                <option value='12'>Hualpen</option>
                                <option value='13'>Temuco</option>
                                <option value='14'>Puerto Montt</option>
                                <option value='15'>Santa Rosa</option>
                                <option value='16'>La Martina</option>
                                <option value='17'>Sistemas</option>
                            </select>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleDelDate}/>
                            <label>Fecha de despacho</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <select className="combobox" name="Estado" onChange={handleStatus}>
                                <option selected>Seleccionar estado</option>
                                <option defaultValue="1">Por asignar</option>
                                <option defaultValue="2">Asignado</option>
                                <option defaultValue="3">Retirado</option>
                            </select>
                        </div>
                    </div>
                    <h4>Items a despachar</h4>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleSerieNum}/>
                            <label>Numero de serie</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleFinalUser}/>
                            <label>Usuario final</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleContactNum}/>
                            <label>Numero de contacto</label>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-left">
                        <div className="m-2">
                            <button type="button" className="btn btn-outline-light" onClick={addClick}>Agregar</button>
                            <Toaster/>
                        </div>
                        <div className="m-2">
                            <button type="button" className="btn btn-success" onClick={handleSend}>Insertar</button>
                            <Toaster/>
                        </div>
                        <div className="m-2">
                            <button type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="justify-content-left">
                        <table className="table text-white">
                            <thead>
                                <tr>
                                    <th>Numero de serie</th>
                                    <th>Usuario final</th>
                                    <th>Numero de contacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(items =>
                                    <tr>
                                        <th>{items.serieNum}</th>
                                        <th>{items.finalUser}</th>
                                        <th>{items.contactPhone}</th>
                                    </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}