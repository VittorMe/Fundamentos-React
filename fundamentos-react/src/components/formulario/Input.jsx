import React, { useState } from 'react';
import './Inpute.css';

export default props => {
    const [valor, setValor] = useState("inical");

    function QuandoMudar(e) {
        setValor(e.target.value)

    }

    return (
        <div className="Input" >
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={QuandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined}  />
            </div>
        </div>
    )
}