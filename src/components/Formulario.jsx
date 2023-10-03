import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = ({ colaboradores, setColaboradores, setDataAlerta }) => {

    // --------------------------- useState para almacenar los datos    
    const [counter, setCounter] = useState(4);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    

    // ------------------------------------------------- validacion de los input
    const validar = (e) => {
        e.preventDefault();

        let msg = '';
        let color = '';

        switch (true) {
            case nombre === '':
            case correo === '':
            case edad === '':
            case cargo === '':
            case telefono === '':
                msg = 'Todos los campos son obligatorios';
                color = 'danger';
                break;
            case !/^[A-Za-z\s]+$/.test(nombre):
                msg = 'Nombre: No debe tener números ni caracteres especiales';
                color = 'danger';
                break;
            case !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(correo):
                msg = 'Correo: No es válido';
                color = 'danger';
                break;
            case !/^[\][0-9]{2}$/.test(edad):
                msg = 'Edad: Solo numeros de 2 digitos y sin caracteres especiales';
                color = 'danger';
                break;
            case !/^[A-Za-z\s]+$/.test(cargo):
                msg = 'Cargo: No debe tener números ni caracteres especiales';
                color = 'danger';
                break;
            case !/^[\][0-9]{8}$/.test(telefono):
                msg = 'Telefono: 8 numeros y sin caracteres especiales';
                color = 'danger';
                break;
            default:
                msg = 'Registro exitoso';
                color = 'success';
                setNombre('');
                setCorreo('');
                setEdad('');
                setCargo('');
                setTelefono('');
                 // ---------------------- Agrega colaborador
                setCounter(counter + 1);
                let id = counter.toString();
                const colaborador = { id, nombre, correo, edad, cargo, telefono };
                setColaboradores([...colaboradores, colaborador]);
            break;
        };       
        setDataAlerta({ msg, color });
    };

    return (
        <Form onSubmit={validar}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEdad">
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Edad"
                    onChange={(e) => setEdad(e.target.value)}
                    value={edad}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCargo">
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Cargo"
                    onChange={(e) => setCargo(e.target.value)}
                    value={cargo}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTelefono">
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                />
            </Form.Group>           

            <Button 
                size="sm" 
                variant="primary" 
                type="submit" 
                className="btn mb-3">
                Agregar
            </Button>
        </Form>
    );
};

export default Formulario;
