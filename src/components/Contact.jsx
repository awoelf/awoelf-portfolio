import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Contact() {
  return (
    <div className='d-flex flex-column col-3 mx-auto'>
      <h4 className="text-center">Contact</h4>
      <div className='box d-flex flex-column align-items-center pt-3'>
        <p className="text-center">
            Email is the best way to get in touch with me. Check out my GitHub profile for
            all of the projects I'm working on!
            </p>
            <Breadcrumb>
            <Breadcrumb.Item href="https://github.com/awoelf?tab=repositories">
                <i className="bi bi-github" /> Github
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.linkedin.com/in/alexis-w-dev/">
                <i className="bi bi-linkedin" /> LinkedIn
            </Breadcrumb.Item>
            <Breadcrumb.Item href="mailto:awoelf@outlook.com">
                <i className="bi bi-envelope" /> Email
            </Breadcrumb.Item>
            </Breadcrumb>
      </div>
    </div>
  );
}

export default Contact;
