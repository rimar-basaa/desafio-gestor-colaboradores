import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
    return (
        <Table responsive striped bordered size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map(colaborador => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.id}</td>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default Listado;