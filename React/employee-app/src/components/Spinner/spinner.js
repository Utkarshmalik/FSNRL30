import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent() {
  return (
    <div style={{textAlign:"center"}} >
    <Spinner  size="lg" animation="border" role="status">
    </Spinner>
          <p>Loading...</p>
    </div>
  );
}

export default SpinnerComponent;