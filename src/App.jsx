// estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// logica
import { useState } from 'react';
import { BaseColaboradores } from './js/BaseColaboradores';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alerta from './components/Alerta';


function App() {

    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    console.log(colaboradores);// solo x monitoreo basedato

    const [dataAlerta, setDataAlerta] = useState({msg: "...", color: "light"}); 

  return (
    <Container fluid>
        <h1>Lista de colaboradores</h1>
        <Row>
            <Col sm={12} md={6}>

                {/* aqui Buscador */}
                <Buscador />

            </Col>
        </Row>
        <Row>
            <Col sm={12} md={9}>

                {/* aqui Listado */}
                <Listado />

            </Col>
                
            <Col sm={12} md={3}>
                <div className='boxAdd'>
                    <p className='titleForm'>Agregar colaborador</p>
                    <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setDataAlerta={setDataAlerta} />
                    <Alerta dataAlerta={dataAlerta} />
                </div>
            </Col>
        </Row>              
    </Container>
  );
};

export default App;
