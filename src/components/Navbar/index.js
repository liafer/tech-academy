import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className='header'>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link>
                        <Link className='link'
                            to="/"
                            smooth={true}
                            duration={500}>Home
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link className='link'
                            to="about_us"
                            smooth={true}
                            duration={500}>About
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link className='link'
                            to="cards"
                            smooth={true}
                            duration={500}>Courses
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navbar;