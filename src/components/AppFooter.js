import Breadcrumb from 'react-bootstrap/Breadcrumb';

function AppFooter() {
    return (
        <footer className='position-absolute top-100 start-50 translate-middle text-center'>
            <p className='m-0'>Alexis Woelffer</p>
            <Breadcrumb>
                <Breadcrumb.Item href="https://github.com/awoelf?tab=repositories">Github</Breadcrumb.Item>
                <Breadcrumb.Item href="https://www.linkedin.com/in/alexis-w-dev/">LinkedIn</Breadcrumb.Item>
                <Breadcrumb.Item href="mailto:awoelf@outlook.com">Email</Breadcrumb.Item>
            </Breadcrumb>
        </footer>
    )
}

export default AppFooter;