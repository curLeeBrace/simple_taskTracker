import Container from 'react-bootstrap/Container';
import "./Header.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const Header = ({title}) => {
    return (
      <Container className="title-container " fluid>
        <Row>
          <Col className="title d-flex justify-content-center align-items-baseline fs-4 text-white-50">
            {title} 
            <div className='icon-container'>
              <Image src = "https://img.icons8.com/ios/50/FAB005/checked-2--v1.png" fluid/>
            </div>
          </Col>
       
        </Row>
      </Container>
    );

}