import Container from 'react-bootstrap/Container';
import pdf from '../assets/resume.pdf';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResizeWindow() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <Container>
      <h4 className="text-center">Resume</h4>
      {width > 500 ? (
        <embed src={pdf} type="application/pdf"></embed>
      ) : (
        <Row className='justify-content-center'>
          <Col sm="auto" className="my-1 w-auto">
            <a href={pdf} target="_blank" rel="noreferrer">
              <button>Open PDF</button>
            </a>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Resume;
