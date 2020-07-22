import React from "react";
import { Navbar, Nav, Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <h1 style={{ "text-decoration": "underline" }}>FAQ</h1>
      </div>
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              <div>
                <p>
                  <b> Le fauteuil roulant venu est-il accessible? </b> Oui. Il y
                  en a deux entrées accessibles en fauteuil roulant.
                </p>
                <p>
                  <b> Serai-je servi dans les deux langues lors des salons? </b>{" "}
                  Oui, nous visons à fournir un service en anglais et en
                  français.
                </p>
                <p>
                  <b> Les spectacles sont-ils gratuits pour les enfants? </b>{" "}
                  Les enfants sont bienvenue mais doit payer le même prix que
                  les adultes.
                </p>
                <p>
                  <b> Y aura-t-il de la nourriture lors des spectacles? </b> Des
                  collations telles que comme fruits, boissons et gâteaux. Notez
                  que les aliments peuvent contenir des arachides.
                </p>
                <p>
                  <b>
                    Les artistes des œuvres seront-ils présents lors de leurs
                    spectacles?
                  </b>{" "}
                  {""}
                  Cela dépend de l'artiste. Certains viennent à chaque
                  spectacle, d'autres jamais fait.
                </p>
                <p>
                  <b> Puis-je acheter des tableaux lors des spectacles? </b>{" "}
                  Dans les cas où des artistes sont présents, ils peuvent être
                  soumissionnés.
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
