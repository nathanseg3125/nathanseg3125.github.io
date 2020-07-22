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
import picture1 from "../assets/vg1.jpg";
import picture2 from "../assets/vg2.jpg";
import picture3 from "../assets/vg3.jpg";
import picture4 from "../assets/vg4.png";
import picture5 from "../assets/vg5.jpg";
import picture6 from "../assets/vg6.jpg";

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
      <div>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Wistful Evening</Card.Title>
                  <Card.Img variant="top" src={picture1} />

                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
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
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Scream</Card.Title>
                  <Card.Img variant="top" src={picture3} />

                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Corridors</Card.Title>
                  <Card.Img variant="top" src={picture4} />
                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dance Away</Card.Title>
                  <Card.Img variant="top" src={picture5} />

                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Mona Lisa</Card.Title>
                  <Card.Img variant="top" src={picture6} />
                  <Card.Link href="/Comment">Comment</Card.Link>
                  <Card.Link href="/Information">Learn More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button href="/Paintings" variant="outline-primary">
            English
          </Button>{" "}
          <Button href="/Paintings2" variant="outline-primary">
            French
          </Button>{" "}
        </Container>
      </div>
    </div>
  );
}

export default App;
