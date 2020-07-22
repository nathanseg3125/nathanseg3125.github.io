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
                <small>Commented just now</small>
              </Toast.Header>
              <Toast.Body>
                Colours could be polished more. Otherwise, well done.
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
                <small>Commented 2 seconds ago</small>
              </Toast.Header>
              <Toast.Body>This painting is amazing!</Toast.Body>
            </Toast>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add a public comment...</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="secondary" size="sm">
              Comment
            </Button>
          </div>
        </div>
        <Button href="/Comments" variant="outline-primary">
          English
        </Button>{" "}
        <Button href="/Comments2" variant="outline-primary">
          French
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
