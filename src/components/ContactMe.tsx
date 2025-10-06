import { Container, Row, Col, Card } from "react-bootstrap";

function ContactMe() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Contact Me</h1>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title as="h2">Socials</Card.Title>
              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/in/michael-mcalpin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 text-decoration-none"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/CodeMasterMike?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  GitHub
                </a>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title as="h2">Location</Card.Title>
              <Card.Text className="mt-3">Pittsburgh, PA</Card.Text>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title as="h2">Email</Card.Title>
              <Card.Text className="mt-3">
                <a
                  href="ma&#105;lto&#58;%6D%6Dca%6Cp&#105;n&#106;r&#64;&#103;ma%&#54;9%6C&#37;2&#69;c%6Fm"
                  className="text-decoration-none"
                >
                  mmcal&#112;i&#110;j&#114;&#64;gmail&#46;com
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
