import React, { useState, useEffect } from 'react';
import TableClients from '../../components/Table';
import axios from 'axios';

import './styles.scss';

function TechnicalTestPage() {
    const [ companies, setCompanies ] = useState([]);
    const [ currentCompany, setCurrentCompany ] = useState(companies || []);

    useEffect(() => { 
        axios.get('http://localhost:8080/companies')
        .then(function (res) {
            setCompanies(res.data);
        });
    }, []);

    return (
        <div className="test-container">
            <div className="dropdown-container">
                <select  
                    className="dropdown" 
                    name="company"
                    value={currentCompany}
                    onChange={e => setCurrentCompany(e.target.value)}
                    displayEmpty
                >
                    <option disabled value="">Seleccione la compañia</option>
                    {companies.map(company => (
                        <option 
                        key={company._id} 
                        value={company.name}
                        >
                        {company.name}
                        </option>
                    ))}
                </select>
            </div>
            <TableClients data={companies} current={currentCompany} />
        </div>
  );
}

export default TechnicalTestPage;
