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
        <h1 style={{ "text-decoration": "underline" }}>Artwork Details</h1>
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
                  <b>Artist:</b> Nathan Embaye
                </p>
                <p>
                  <b>Year:</b> 1999
                </p>
                <p>
                  <b>Medium:</b> Regular Canvas
                </p>
                <p>
                  <b>Subject:</b> Exestential
                </p>
                <p>
                  <b>Dimensions:</b> 12x16
                </p>
                <p>
                  <b>Location:</b> Asmara, Eritrea
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Button href="/Information" variant="outline-primary">
          English
        </Button>{" "}
        <Button href="/Information2" variant="outline-primary">
          French
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
