import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Container>
      <h4>About Me</h4>
      <Row>
        <Col md='auto'>
            <img className='profile-picture' alt=''></img>
        </Col>
        <Col>
            <p>I am a full stack developer located in the Austin, Tx area who is looking for a job in the software industry. </p>
        </Col>
        
        
      </Row>
      
    </Container>
  );
}

export default AboutMe;
