import React,{useState} from "react";
import TextInput from "./TextInput";
import axios from "axios";

//react-hot-toast import
import {Toaster, toast} from 'react-hot-toast'

import './../navLink.css'

export default function TaxInsert(){
    const [docNum, setDocnum] = useState("");
    const [emissionDate, setEmissionDate] = useState("");
    const [docType, setDocType] = useState("");
    const [supplier, setSupplier] = useState("");
    const [implement, setImplement] = useState("");
    const [serie, setSerie] = useState("");
    const [user, setUser] = useState("");

    const successAdd = () => toast.success('Elemento agregado correctamente',{
        duration: 5000,
        position: "bottom-right"
    });
    const successInsert = () => toast.success('Registro Creado correctamente',{
        duration: 5000,
        position: "bottom-right"
    });
    
    const handleDocNum = (e) => {
        setDocnum(e.target.value);
    }
    const handleEmissionDate = (e) => {
        setEmissionDate(e.target.value)
    }
    const handleDocType = (e) => {
        setDocType(e.target.value)
    }
    const handleSupplier = (e) => {
        setSupplier(e.target.value)
    }
    const handleImplement = (e) => {
        setImplement(e.target.value)
    }
    const handleSerie = (e) => {
        setSerie(e.target.value)
    }
    const handleUser = (e) => {
        setUser(e.target.value)
    }

    let recivedItems = {};
    const [items, setItems] = useState([]);
    const agregarElemento = () => {
        recivedItems = {implementType:implement,serie:serie,finalUser:user};
        setItems([...items,recivedItems]);
    }

    function handleClick(){
        agregarElemento();
        successAdd();
    }

    const handleSend = () => {
        const config = {
            docNumber : docNum,
            emissionDate: emissionDate,
            docType: docType,
            supplier: supplier,
            recivedItems : items
        }
        axios.post('http://localhost:4545/api/ver1/tax/createTaxDocument', config);
        successInsert();
    }

    const handleCancel = () =>{
        setDocnum(null);
        setEmissionDate(null);
        setDocType(null);
        setSupplier(null);
        setImplement(null);
        setSerie(null);
        setUser(null);
        setItems("");
    }

    return(
        <>
            <div className="container justify-content-md-center d-flex input-box">
                <div className="text-white container">
                    <h1>Tax Insert</h1>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleDocNum} />
                            <label>Numero de Documento</label>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <TextInput onChange={handleEmissionDate}/>
                            <label>Fecha de emision</label>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-3 input-field">
                        <select className="combobox" name="Proveeedor" onChange={handleDocType}>
                                <option selected>Seleccionar Tipo de documento</option>
                                <option defaultValue='Guia de Despacho'>Guia de Despacho</option>
                                <option defaultValue='Factura Electronica'>Factura Electronica</option>
                                <option defaultValue='Nota de Credito'>Nota de Credito</option>
                            </select>
                        </div>
                        <div className="col col-xl-3 input-field">
                            <select className="combobox" name="Proveeedor" onChange={handleSupplier}>
                                <option selected>Seleccionar Proveedor</option>
                                <option defaultValue='Ricardo Rodruigez'>Ricardo Rodruigez</option>
                                <option defaultValue='R y C'>R y C</option>
                                <option defaultValue='IIA'>IIA</option>
                                <option defaultValue='Itshop'>Itshop</option>
                                <option defaultValue='TDS'>TDS</option>
                                <option defaultValue='Edapi'>Edapi</option>
                                <option defaultValue='STG Limitada'>STG Limitada</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-left">
                        <div className="col col-xl-4 input-field">
                            <TextInput onChange={handleImplement}/>
                            <label>Implemento</label>
                        </div>
                        <div className="col col-xl-4 input-field">
                            <TextInput onChange={handleSerie}/>
                            <label>Serie</label>
                        </div>
                        <div className="col col-xl-4 input-field">
                            <TextInput onChange={handleUser}/>
                            <label>Usuario</label>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <div className="m-2">
                            <button type="button" className="btn btn-outline-light" onClick={handleClick}>Agregar</button>
                            <Toaster/>
                        </div>
                        <div className="m-2">
                            <button type="button" className="btn btn-success" onClick={handleSend}>Insertar</button>
                            <Toaster/>
                        </div>
                        <div className="m-2">
                            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="justify-content-left">
                        <table className="table text-white">
                            <thead>                                    
                                <tr>
                                    <th>Implemento</th>
                                    <th>Serie</th>
                                    <th>Usuario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(items => 
                                    <tr>
                                        <th>{items.implementType}</th>
                                        <th>{items.serie}</th>
                                        <th>{items.finalUser}</th>
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