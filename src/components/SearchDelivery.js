import axios from "axios";
import React, { useState } from "react";

export default function SearchDelivery(){
    const [search, setSearch] = useState("");
    const [delivery, setDelivery] = useState([]);
    const handleChangeSearchDelivery = (e) => {
        setSearch(e.target.value);
    }
    const handleSearchDelivery = async (e) => {
        e.preventDefault();
        if (search.length === "") {
            const res = await axios.post('http://localhost:4545/api/ver1/delivery/findAllDeliveryOrders');
            setDelivery(res.data);
            console.log(delivery)
        } else {
            const config = {
                body : search
            }
            const res = await axios.post('http://localhost:4545/api/ver1/delivery/searchDelivery', config);
            setDelivery(res.data);
            console.log(delivery)
        }
    }
    return(
        <>
        <form class="d-flex" role="search">
            <input className="form-control me-2 w-25" type="search" placeholder="Buscar" aria-label="Search" onChange={handleChangeSearchDelivery}/>
            <button className="btn btn-outline-light me-2" onClick={handleSearchDelivery}>Buscar</button>
        </form>
        <br/>
        <table className="table text-white">
            <thead>
                <tr>
                    <th>Numero de orden</th>
                    <th>Solicitante</th>
                    <th>Fecha de envio</th>
                    <th>Informacion</th>
                </tr>
            </thead>
            <tbody>
                {delivery.map(delivery =>
                    <tr key={delivery._id}>
                        <th>{delivery.orderNumber}</th>
                        <th>{delivery.applicant}</th>
                        <th>{delivery.availabilityDate}</th>
                        <th>boton</th>
                    </tr>)}
            </tbody>
        </table>
        </>
    )
}