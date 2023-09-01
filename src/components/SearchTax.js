import axios from "axios";
import React,{useState} from "react";


export default function SearchTax(){
    const [search, setSearch] = useState("");
    const [tax, setTax] = useState([]);
    const implement = [];
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch = async (e) =>{
        e.preventDefault();
        if(search.length === ""){
            const res = await axios.post('http://localhost:4545/api/ver1/tax/findTaxDoc');
            setTax(res.data); 
        }else{
            const config = {
                body: search
            }
            const res = await axios.post('http://localhost:4545/api/ver1/tax/searchAny', config);
            setTax(res.data);
        }
    }
    const infoView = () => {
        for(let i = 0; i < tax[0].recivedItems.length; i ++){
            implement.push(tax[0].recivedItems[i].implementType);
        }
    }
    return(
        <>
        <form className="d-flex" role="search">
            <input className="form-control me-2 w-25" type="search" placeholder="Buscar" aria-label="Search" onChange={handleChangeSearch}/>
            <button className="btn btn-outline-light me-2" onClick={handleSearch}>Buscar</button>
        </form>
        <br/>
        <table className="table text-white">
            <thead>
                <tr>
                    <th>Numero de documento</th>
                    <th>Fecha de emision</th>
                    <th>Tipo de documento</th>
                    <th>Proveedor</th>
                    <th>Informacion</th>
                </tr>
            </thead>
            <tbody>
                {tax.map(tax => 
                    <tr key={tax._id}>
                        <th>{tax.docNumber}</th>
                        <th>{tax.emissionDate}</th>
                        <th>{tax.docType}</th>
                        <th>{tax.supplier}</th>
                        <th>
                            <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#modalInfo" onClick={infoView}>
                            <i className="bi bi-info-circle"/>
                            </button>
                        </th>
                    </tr>)}
            </tbody>
        </table>

        {/*Modal*/}
        <div className="modal modal-xl" id="modalInfo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Documento {tax.map(tax => tax.docNumber)}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <table>
                        <thead>
                        
                        </thead>
                        <tbody>
                            {implement}
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}