import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Container,
  Button,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "../assets/map.jpg";

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
        <h1 style={{ "text-decoration": "underline" }}>
          Bienvenue à Nathan's Art Arena!
        </h1>
      </div>
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Salons artistiques à venir:</Card.Header>
                <Card.Body>
                  <Card.Text>20 Juillet 2020 - 19h00</Card.Text>
                  <Card.Text>21 Juillet 2020 - 19h00</Card.Text>
                  <Card.Text>22 Juillet 2020 - 19h00</Card.Text>
                  <Card.Text>23 Juillet 2020 - 19h00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Où nous trouver:</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={map} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Contactez nous sur:</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {" "}
                    <Card.Link href="#">Facebook</Card.Link>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Card.Link href="#">Instagram</Card.Link>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Card.Link href="#">Twitter</Card.Link>
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    <Card.Link href="#">Snapchat</Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Button href="/Home" variant="outline-primary">
        English
      </Button>{" "}
      <Button href="/Home2" variant="outline-primary">
        French
      </Button>{" "}
    </div>
  );
}

export default App;
