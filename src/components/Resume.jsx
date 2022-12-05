import { Document } from 'react-pdf';
import Container from 'react-bootstrap/Container';
import pdf from '../assets/resume.pdf';

async function Resume() {
  return (
    <Container>
      <Document file={pdf}></Document>
    </Container>
  );
}

export default Resume;
