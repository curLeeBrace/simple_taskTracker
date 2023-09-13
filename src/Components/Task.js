import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import "./Task.css";


const Task = ({task_id, userTask, removeTask}) => {



 

  return (
 
    <Container className="d-flex justify-content-center ">
      <Row className="custom-row-style p-2 col-11 text-light">
        <Col className="d-flex justify-content-between align-items-center">
          <div>{userTask}</div>
          <Button onClick= {() => removeTask(task_id)} size="sm" variant="outline-warning" style={{ width: "30px" }}> X       
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Task;
