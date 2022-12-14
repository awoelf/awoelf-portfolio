import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    <Col sm={12} md={6} lg={4} xl={3} className="my-2">
      <Card>
        <div data-gif={props.title} className="border-bottom"></div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Row className="justify-content-between">
            <Col sm="auto" className="my-1 w-auto">
              <a href={props.github} target="_blank" rel="noreferrer">
                <button>
                  <i className="bi bi-github" /> GitHub
                </button>
              </a>
            </Col>
            {props.page === '' ? null : (
              <Col sm="auto" className="my-1 w-auto">
                <a href={props.page} target="_blank" rel="noreferrer">
                  <button>
                    <i className="bi bi-file-earmark-code" /> Page
                  </button>
                </a>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
