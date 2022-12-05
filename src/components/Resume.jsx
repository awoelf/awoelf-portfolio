import Container from 'react-bootstrap/Container';
import pdf from '../assets/resume.pdf'

function Resume() {
  return (
    <Container>
      <h4 className='text-center'>Resume</h4>
      <embed src={pdf} type="application/pdf"></embed>
    </Container>
  );
}

export default Resume;
