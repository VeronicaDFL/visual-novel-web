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
      <div>
      <Button variant="outline-light" onClick={handleShow}>
        About
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title><p>"Concealed in Paradise"</p></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body><p>
        In a world teeming with extraordinary abilities, our tale unfolds around a remarkable woman yearning for an ordinary existence. Struggling to conceal her extraordinary powers, she dreams of a life free from the burdens of her unique gifts. However, fate intervenes, cruelly unmasking her true nature, and plunging her into a perilous journey of survival.

        Forced to flee, she seeks solace in a remote tropical paradise, where the lush landscapes and vibrant cultures hide her from those who would seek to exploit her abilities. Amidst the idyllic surroundings, an unexpected encounter alters the course of her destiny forever. There, she crosses paths with a captivating man, a kindred spirit with his own untold secrets, igniting a spark of hope for a fresh start.

        As their lives intertwine, the woman finds herself caught between the allure of love and the constant threat of being discovered. Together, they navigate the challenges of forging a new existence, as they grapple with their shared pasts and the uncertain future that lies ahead.

        </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
        <Row className="g-0">
          <Col lg={5} >
            <Image className="rounded-5" src={imageUri + "start.jpg"} />
          </Col>

          <Col lg={7}>
            <Container fluid>
              <Row className="g-0">
                <Col lg={12}><Image className="rounded-5" src={imageUri + "second.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={8}><Image className="rounded-5" src={imageUri + "third.jpg"} /></Col>
                <Col lg={4}><Image className="rounded-5" src={imageUri + "fourth.jpg"} /></Col>
              </Row>

              <Row className="g-0">
                <Col lg={12}><Image className="rounded-5" src={imageUri + "fifth.jpg"} /></Col>
                <Col lg={6}>
                  <Image className="rounded-5" src={imageUri + "sixth.jpg"}/>
                 </Col>
                <Col lg={6}>
                  <Image className="rounded-5" src={imageUri + "fall.jpg"}/>
                 </Col>

              </Row>

              <Row className="g-0">
                <Col>
                  <Image className="rounded-5" src={imageUri + "seventh.jpg"} />
                </Col>
              </Row>
            </Container>            
          </Col>
        </Row>

        <Row className="g-0">
          <Col>
            <Image className="rounded-5" src={imageUri + "eight.jpg"} />

          </Col>
        </Row>

        <Row className="g-0">
        <Col>
            <Image className="rounded-5" src={imageUri + "plane.jpg"} />
          </Col>
          <Col>
            <Image className="rounded-5" src={imageUri + "nineth.jpg"} />
          </Col>
        </Row>
    

        <Row className="g-0">
          <Col>
            <Image className="rounded-5" src={imageUri + "tenth.jpg"} />
          </Col>
          <Col>
            <Image className="rounded-5" src={imageUri + "eleventh.jpg"} />
          </Col>
          <Col>
            <Image className="rounded-5" src={imageUri + "wedding.jpg"} />
          </Col>
        </Row>


      </Container>
      </section>
    </AppLayout>
  );
}

export default Home;