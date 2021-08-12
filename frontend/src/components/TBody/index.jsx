import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TBody = ({ id }) => {
    const [ client, setClient ] = useState({});

    useEffect(() => { 
        axios.get(`http://localhost:8080/clients/${id}`)
        .then(function (res) {
            setClient(res.data);
        });
    }, );

    return (
        <tr className="table-row">
            <td>{client.name}</td>
            <td>{client.lastName}</td>
            <td>{client.email}</td>
            <td>{client.address && client.address.map((item, index) => (
                <div key={`${index}-${item}`}>
                    {item}<br/>
                </div>
            ))}</td>
            <td>
                <button onClick={() => {
                }}>Editar</button>
                <button>Borrar</button>
            </td>
        </tr>
    );
};

export default TBody;
