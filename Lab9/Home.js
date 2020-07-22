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
        <h1 style={{ "text-decoration": "underline" }}>
          Welcome to Nathan's Art Arena!
        </h1>
      </div>
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Upcoming artshows:</Card.Header>
                <Card.Body>
                  <Card.Text>July 20, 2020 - 7:00PM</Card.Text>
                  <Card.Text>July 21, 2020 - 7:00PM</Card.Text>
                  <Card.Text>July 25, 2020 - 7:00PM</Card.Text>
                  <Card.Text>July 26, 2020 - 7:00PM</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Where to find us:</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={map} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card border="info" style={{ width: "18rem" }}>
                <Card.Header>Contact us on:</Card.Header>
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
