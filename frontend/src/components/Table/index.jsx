import React, { useState } from 'react';
import TBody from '../TBody';
import Modal from 'react-modal';
import './styles.scss';

const Table = ({ data, current }) => {
    const [ modalOpen, setModalOpen ] = useState(false);
    const currentCompanyData = data.filter(function(company) {
        return company.name === current;
    });

    return (
        <div className="table-main-container">
            <button style={{width: '150px'}} onClick={() => setModalOpen(true)}>Agregar cliente</button>
            <table className="table-container">
                <tr className="titles">
                    <td>Nombre</td>
                    <td>Apellidos</td>
                    <td>Email</td>
                    <td>Direcciones</td>
                    <td>Actions</td>
                </tr>
                {currentCompanyData && currentCompanyData[0] && currentCompanyData[0].clients && currentCompanyData[0].clients.map(clientId => (
                    <TBody key={clientId} id={clientId}/>
                ))}
            </table>
        </div>
    );
};

export default Table;
