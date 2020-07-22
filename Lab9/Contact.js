import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Container,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import picture2 from "../assets/vg2.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/Paintings">Paintings</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Help">Help</Nav.Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ "text-decoration": "underline" }}>Contact</h1>
      </div>
      <br />

      <div>
        <Container>
          <Row>
            <Col>
              <div>
                <p>
                  <b>
                    If you desire to reach the staff or ownership of Nathan's
                    Art Arena, please take action given the contact information
                    below.
                  </b>
                </p>
                <p>
                  <b>Email:</b> NathansArtArena@gmail.com
                </p>
                <p>
                  <b>Phone Number:</b> 613-325-2354
                </p>
                <p>
                  <b>Address:</b> 123 Sesame Street
                </p>
                <p>
                  <b>Operating Hours:</b> 11:00AM - 7:00PM
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Button href="/Contact" variant="outline-primary">
          English
        </Button>{" "}
        <Button href="/Contact2" variant="outline-primary">
          French
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
