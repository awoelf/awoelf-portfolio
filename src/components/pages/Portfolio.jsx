import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
  return (
    <Container fluid>
      <h4 className="text-center">Portfolio</h4>
      <Row>
        <Project
          title="My Tech Site"
          body="A full-stack blog where users can sign up, create a post, and make comments."
          github="https://github.com/awoelf/my-tech-site"
          page="https://awoelf-my-tech-site.herokuapp.com/"
        />
        <Project
          title="Social Network Back-end"
          body="A MongoDB project that keeps track of users and their posts on a social media network."
          github="https://github.com/awoelf/social-network-db"
          page=""
        />
        <Project
          title="Note Taking App"
          body="A note taking app where users can create and delete notes. I developed the back end for this project."
          github="https://github.com/awoelf/note-taking-app"
          page="https://awoelf-note-taking-app.herokuapp.com/"
        />
        <Project
          title="Monster Fighter"
          body="A full-stack deck building project that utilized the D&D api for monster data, and Firebase for chat features. I worked on the front-end."
          github="https://github.com/awoelf/monster-fighter"
          page="https://group11-monster-fighter.herokuapp.com/"
        />
        <Project
          title="Weather Dashboard"
          body="A web app that displays weather conditions for searched cities. Uses the OpenWeather API."
          github="https://github.com/awoelf/weather-dashboard"
          page="https://awoelf.github.io/weather-dashboard/"
        />
        <Project
          title="Code Quiz"
          body="A web app that quizzes the user on their JavaScript knowledge. "
          github="https://github.com/awoelf/code-quiz"
          page="https://awoelf.github.io/code-quiz/"
        />
      </Row>
    </Container>
  );
}

export default Portfolio;
