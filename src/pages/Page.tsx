import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout"


const Page = () => {

  const imageUri = process.env.PUBLIC_URL + '/images/'

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
                <Col lg={6}><Image src={imageUri + "third.jpg"} /></Col>
                <Col lg={6}><Image src={imageUri + "fourth.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "fifth.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + "sixth.jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>  

        <Row className="g-0">
          <Col>
            <Image src={imageUri + "seventh.jpg"} />
          </Col>
        </Row>   




         <Row className="g-0">
          <Col lg={5}>
            <Image src={imageUri + "eight.jpg"} />
          </Col>

          <Col lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + "nineth.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={6}><Image src={imageUri + "tenth.jpg"} /></Col>
                <Col lg={6}><Image src={imageUri + "eleventh.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image src={imageUri + ".jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col>
                  <Image src={imageUri + ".jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>  

        <Row className="g-0">
          <Col>
            <Image src={imageUri + ".jpg"} />
          </Col>
        </Row>     
      </Container>
      </section>
    </AppLayout>
  );
}

export default Page;