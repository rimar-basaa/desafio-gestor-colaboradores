import Alert from 'react-bootstrap/Alert';

const Alerta = ({ dataAlerta }) => {

    return (
        <>
            <Alert variant={dataAlerta.color}>
                <p>{dataAlerta.msg}</p>
            </Alert>
        </>
    );
};

export default Alerta;