import Table from 'react-bootstrap/Table';

const Listado = () => {

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
                <tr>
                    <td>1</td>
                    <td>rimar basaa</td>
                    <td>rimar@gmail.com</td>
                    <td>25</td>
                    <td>Front End</td>
                    <td>12345678</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>rimar basaa</td>
                    <td>rimar@gmail.com</td>
                    <td>25</td>
                    <td>Front End</td>
                    <td>12345678</td>
                </tr>

                <tr>
                    <td>1</td>
                    <td>rimar basaa</td>
                    <td>rimar@gmail.com</td>
                    <td>25</td>
                    <td>Front End</td>
                    <td>12345678</td>
                </tr>
            </tbody>
        </Table>        
    );
};

export default Listado;