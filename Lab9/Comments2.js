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
  Toast,
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
        <h1 style={{ "text-decoration": "underline" }}>Comment Section</h1>
      </div>
      <br />

      <div>
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "relative",
            minHeight: "200px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">User 1</strong>
                <small>Commenté tout à l'heure</small>
              </Toast.Header>
              <Toast.Body>
                Les couleurs pourraient être plus polies. Sinon, bravo.
              </Toast.Body>
            </Toast>
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">User 2</strong>
                <small>Commenté il y a 2 secondes</small>
              </Toast.Header>
              <Toast.Body>Cette peinture est incroyable!</Toast.Body>
            </Toast>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ajouter un commentaire public ...</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="secondary" size="sm">
              Commentaire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
