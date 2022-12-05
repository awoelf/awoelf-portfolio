import { Breadcrumb } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AppHeader({ currentPage, setCurrentPage }) {
  return (
    <Container fluid>
      <Row className="justify-content-between align-items-center">
        <Col sm={12} md="auto">
          <div>
            <h1>Alexis Woelffer</h1>
            <div className="d-flex align-items-center">
              <i className="bi bi-file-code h4 mb-1 me-2"></i>
              <h4>Full Stack Developer</h4>
            </div>
          </div>
        </Col>
        <Col sm={12} md="auto">
          <Breadcrumb>
            <Breadcrumb.Item
              href="#about"
              onClick={() => setCurrentPage('AboutMe')}
              active={currentPage === 'AboutMe' ? true : false}
            >
              About Me
            </Breadcrumb.Item>
            <Breadcrumb.Item 
                href="#portfolio"
                onClick={() => setCurrentPage('Portfolio')}
                active={currentPage === 'Portfolio' ? true : false}
            >Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item
                href="#contact"
                onClick={() => setCurrentPage('Contact')}
                active={currentPage === 'Contact' ? true : false}
            >Contact</Breadcrumb.Item>
            <Breadcrumb.Item
                href="#resume"
                onClick={() => setCurrentPage('Resume')}
                active={currentPage === 'Resume' ? true : false}
            >Resume</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
}

export default AppHeader;
