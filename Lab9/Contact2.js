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
                    Si vous souhaitez joindre le personnel ou la propriété de
                    Nathan Art Arena, veuillez prendre des mesures compte tenu
                    des coordonnées au dessous de.
                  </b>
                </p>
                <p>
                  <b>Email:</b> NathansArtArena@gmail.com
                </p>
                <p>
                  <b>Numéro de téléphone:</b> 613-325-2354
                </p>
                <p>
                  <b>Adresse:</b> 123 Sesame Street
                </p>
                <p>
                  <b>Heures d'ouverture:</b> 11 h 00 à 19 h 00
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
