import Breadcrumb from 'react-bootstrap/Breadcrumb';

function AppFooter() {
    return (
        <footer className='d-flex flex-column align-items-center mt-auto'>
            <p className='m-0'>Alexis Woelffer</p>
            <Breadcrumb>
                <Breadcrumb.Item href="https://github.com/awoelf?tab=repositories"><i className="bi bi-github" /> Github</Breadcrumb.Item>
                <Breadcrumb.Item href="https://www.linkedin.com/in/alexis-w-dev/"><i className="bi bi-linkedin" /> LinkedIn</Breadcrumb.Item>
                <Breadcrumb.Item href="mailto:awoelf@outlook.com"><i className="bi bi-envelope" /> Email</Breadcrumb.Item>
            </Breadcrumb>
        </footer>
    )
}

export default AppFooter;