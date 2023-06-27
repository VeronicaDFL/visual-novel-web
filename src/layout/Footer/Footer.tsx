import { Container,Row,Col } from "react-bootstrap";


    export default function Footer () {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col> 
            <p className="text-center">&copy;Veronica De Felice {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

