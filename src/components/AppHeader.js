import { Breadcrumb } from 'react-bootstrap';

function AppHeader() {
    return (
        <header>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h1>Alexis Woelffer</h1>
                    <div className='d-flex align-items-center'>
                        <i className='bi bi-file-code h4 mb-1 me-2'></i>
                        <h4>Full Stack Developer</h4>
                    </div>
                    
                </div>
                <Breadcrumb>
                    <Breadcrumb.Item href='#'>About Me</Breadcrumb.Item>
                    <Breadcrumb.Item href='#'>Portfolio</Breadcrumb.Item>
                    <Breadcrumb.Item href='#'>Contact</Breadcrumb.Item>
                    <Breadcrumb.Item href='#'>Resume</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </header>
    )
}

export default AppHeader;

