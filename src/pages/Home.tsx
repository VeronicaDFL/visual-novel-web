import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";
import { useState } from 'react';
import { Button } from "../utils/Bootstrap";
import {Offcanvas} from "react-bootstrap";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageUri = process.env.PUBLIC_URL + '/images/';

  return (
    <AppLayout>
      <section>
      <Container fluid className="visual-board">
      <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
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