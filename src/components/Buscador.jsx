import Form from 'react-bootstrap/Form';

const Buscador = () => {

    return (
        <Form>                
            <Form.Group controlId="formFile">
                <Form.Control
                    size="sm"
                    className="mb-3"
                    type="text"
                    placeholder="Buscar colaborador..."                    
                />
            </Form.Group>                
        </Form>
    );
};
export default Buscador;