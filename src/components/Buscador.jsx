import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = ({ onBuscar }) => {
    const [textoBusqueda] = useState('');

    const onInputChange = (event) => {
        onBuscar(event.target.value);
    };

    return (
        <Form>                
            <Form.Group controlId="formFile">
                <Form.Control
                    size="sm"
                    className="mb-3"
                    type="text"
                    placeholder="Buscar colaborador..."
                    onChange={onInputChange}
                />
            </Form.Group>                
        </Form>
    );
};

export default Buscador;
