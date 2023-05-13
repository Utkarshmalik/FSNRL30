import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "./user.css";

function User(props){

    const user = props.userInfo;
    const onDeleteFunction = props.onDelete;
    const onUserClick = props.onUserClick;

    return <div onClick={()=>onUserClick(user.id)} className="user">
     <Card style={{border:"3px solid black", width: '19rem'}}>
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
      <Card.Body style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
        <Card.Link href="#"> {user.gender} </Card.Link>
        <Card.Link href="#"> {user.bloodGroup} </Card.Link>
      <Button onClick={()=>onDeleteFunction(user.id)} variant="primary">Delete User </Button>
      </Card.Body>
    </Card>
    </div>
}

export default User;