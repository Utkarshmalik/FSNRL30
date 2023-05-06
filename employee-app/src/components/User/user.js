import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function User(props){

    const user = props.userInfo;

    return <div>
     <Card style={{border:"3px solid black", width: '18rem' }}>
      <Card.Img variant="top" src={user.image} />
      <Card.Body>
        <div>
        </div>
        <Card.Title> {user.firstName + " " + user.lastName} </Card.Title>
        <Card.Text>
         {user.birthDate}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {user.email} </ListGroup.Item>
        <ListGroup.Item> Phone: {user.phone} </ListGroup.Item>
        <ListGroup.Item> University: {user.university} Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> {user.gender} </Card.Link>
        <Card.Link href="#"> {user.bloodGroup} </Card.Link>
      </Card.Body>
    </Card>
    </div>
}

export default User;