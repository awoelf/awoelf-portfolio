import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

function AboutMe() {
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
      <Col lg={6} className="mx-auto">
        <h4 className="text-center">About Me</h4>
        <div className='box p-3'>
          <Row>
            <Col sm="auto" className="align-items-center">
            {width > 560
              ? (<img className="profile-picture" alt=""></img>)
              : (<Row>
                <img className="profile-picture mx-auto" alt=""></img>
              </Row>)
            }
            </Col>
            <Col>
              <p>
                I am a full stack developer located in the Austin, Tx area who is looking
                for a job in the software industry. I enjoy working in both the front and
                back end, so I can take on any role. I'm interested in data, UI/UX, and
                I'd eventually like to learn how to implement 3D visuals in my
                applications.
              </p>
              <p>
                My goal is to create great looking applications that are accessible and
                functional for all users.
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default AboutMe;
