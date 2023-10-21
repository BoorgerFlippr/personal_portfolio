import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <>
        <Navbar bg="light">
        <Container>
            <Nav className="m-auto">
                <Link href='/' className="nav-link">Home</Link>
                <Link href='/' className="nav-link">Portfolio</Link>
                <Link href='/' className="nav-link">Bio</Link>
            </Nav>
        </Container>
        </Navbar>
        <br/>
        <br/>
        </>
    )
}