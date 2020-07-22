import React from "react";
import { Navbar, Nav, Row, Col, Container, Button } from "react-bootstrap";
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
        <h1 style={{ "text-decoration": "underline" }}>FAQ</h1>
      </div>
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              <div>
                <p>
                  <b>Is the venu wheelchair acessible?</b> Yes. There are two
                  entrances acessible via wheelchair.
                </p>
                <p>
                  <b>Will I be serviced in both languages at the shows?</b> Yes,
                  we aim to provide service in both English and French.
                </p>
                <p>
                  <b>Are the artshows free for children?</b> Children are
                  welcome but must pay the same ticket prices as adults.
                </p>
                <p>
                  <b>Will there be food provided at the shows?</b> Snacks such
                  as fruit, drinks and cake. Note food may contain peanuts.
                </p>
                <p>
                  <b>
                    Will the artists of the works be present during their shows?
                  </b>{" "}
                  This depends on the artist. Some come to each show, others
                  never do.
                </p>
                <p>
                  <b>May I purchase paintings at the shows?</b> In the cases the
                  artists are present, they may be bidded on.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Button href="/Help" variant="outline-primary">
          English
        </Button>{" "}
        <Button href="/Help2" variant="outline-primary">
          French
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
