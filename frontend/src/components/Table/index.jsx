import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TBody from '../TBody';
import './styles.scss';

const Table = ({ data }) => {
    const [ clientsIds, setClientsIds ] = useState([]); 

    if (data && data[0]) {
        setClientsIds(data[0].clients)
    }

    return (
        <table className="table-container">
            <tr className="titles">
                <td>Nombre</td>
                <td>Apellidos</td>
                <td>Email</td>
                <td>Direcciones</td>
            </tr>
            {clientsIds.map(clientId => (
                <TBody id={clientId}/>
            ))}
        </table>
    )
};

export default Table;
