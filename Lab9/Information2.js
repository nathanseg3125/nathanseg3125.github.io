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
          <Navbar.Brand href="/Home2">Maison</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/Paintings2">Peintures</Nav.Link>
              <Nav.Link href="/Contact2">Contact</Nav.Link>
              <Nav.Link href="/Help2">Aidez-moi</Nav.Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ "text-decoration": "underline" }}>Détails de l'oeuvre</h1>
      </div>
      <br />

      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Vincent Van Gogh</Card.Title>
                  <Card.Img variant="top" src={picture2} />

                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <div>
                <p>
                  <b>Artiste:</b> Nathan Embaye
                </p>
                <p>
                  <b>An:</b> 1999
                </p>
                <p>
                  <b>Moyen:</b> Regular Canvas
                </p>
                <p>
                  <b>Matière:</b> Exestential
                </p>
                <p>
                  <b>Dimensions:</b> 12x16
                </p>
                <p>
                  <b>Emplacement:</b> Asmara, Eritrea
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Button variant="outline-primary">English</Button>{" "}
        <Button variant="outline-primary">French</Button>{" "}
      </div>
    </div>
  );
}

export default App;
