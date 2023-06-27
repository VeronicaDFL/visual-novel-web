import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";


const Home = () => {

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
      <Container fluid className="visual-board">
        <Row className="g-0">
          <Col lg={5}>
            <Image src={imageUri + "start.jpg"} />
          </Col>

          <Col lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "second.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={8}><Image src={imageUri + "third.jpg"} /></Col>
                <Col lg={4}><Image src={imageUri + "fourth.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "fifth.jpg"} /></Col>
                <Col lg={6}><Image src={imageUri + "sixth.jpg"} className="flip-180" /></Col>

              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + "seventh.jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>

        <Row>
          <Col>
            <Image src={imageUri + "eight.jpg"} />
          </Col>
        </Row>

        <Row className="bg-grey-dark">
          <Col
            xs={{span: 6, offset: 3}}>
            <Image src={imageUri + "nineth.jpg"} />
          </Col>
        </Row>
    

        <Row className="g-0">
          <Col>
            <Image src={imageUri + "tenth.jpg"} />
          </Col>
          <Col>
            <Image src={imageUri + "eleventh.jpg"} />
          </Col>
          <Col>
            <Image src={imageUri + "wedding.jpg"} />
          </Col>
        </Row>


      </Container>
      </section>
    </AppLayout>
  );
}

export default Home;