import { Container,Row,Col } from "react-bootstrap";


    export default function Footer () {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container >
        <Row>
          <Col> 
            <p className="text-center text-white">&copy;_AI Generated Visual Novel by: Veronica De Felice_ {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

