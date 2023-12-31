import { Navbar } from "react-bootstrap"
import  { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../NavBar/NavBar.module.scss"



const NavBar = () => {

    return(

        <Navbar bg="primary" data-bs-theme="dark"  className=" mt-3 rounded">
            <Container>
            <Navbar.Brand  className='text-white'>Waiter.app</Navbar.Brand>
            <Nav className="flex justify-content-end" >
                <Nav.Link as={NavLink} to="/" >
                   <span className={styles.link}>Home</span>
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;