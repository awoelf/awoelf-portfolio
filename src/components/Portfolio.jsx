import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Project
          title="My Tech Site"
          body="A full-stack blog where users can sign up, create a post, and make comments."
          gif="my-tech-site"
          github="https://github.com/awoelf/my-tech-site"
          page="https://awoelf-my-tech-site.herokuapp.com/"
        />
        <Project
          title="Note Taking App"
          body="A note taking app where users can create and delete notes. I developed the back end for this project."
          gif="note-taking-app"
          github="https://github.com/awoelf/note-taking-app"
          page="https://awoelf-note-taking-app.herokuapp.com/"
        />
        <Project
          title="Note Taking App"
          body="A note taking app where users can create and delete notes. I developed the back end for this project."
          gif="note-taking-app"
          github="https://github.com/awoelf/note-taking-app"
          page="https://awoelf-note-taking-app.herokuapp.com/"
        />
      </Row>
    </Container>
  );
}

export default Portfolio;
