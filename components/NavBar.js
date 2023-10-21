import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <>
        <Navbar bg="light">
        <Container>
            <Nav className="m-auto">
                <Link href='#home' className="nav-link">Home</Link>
                <Link href='#portfolio' className="nav-link">Portfolio</Link>
                <Link href='#biography' className="nav-link">Bio</Link>
            </Nav>
        </Container>
        </Navbar>
        <br/>
        <br/>
        </>
    )
}