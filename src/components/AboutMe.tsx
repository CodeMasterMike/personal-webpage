import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";

function AboutMe() {
  const tech = [
    ".NET 8/9",
    ".NET MAUI",
    "TypeScript",
    "Node.js",
    "React",
    "Azure",
  ];

  return (
    <Container className="about-me my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h1">Hello! I'm Michael McAlpin.</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Full Stack .NET and JS developer.
              </Card.Subtitle>

              <Card.Text>
                I build cross-platform apps and web experiences using modern
                .NET and JavaScript technologies. I enjoy shipping clean,
                maintainable solutions for web and native platforms.
              </Card.Text>

              <h5 className="mt-4">Tech stack</h5>
              <ListGroup horizontal className="flex-wrap tech-list" role="list">
                {tech.map((t) => (
                  <ListGroup.Item key={t} className="border-0 px-0 py-2">
                    <Badge bg="primary" pill className="me-2 tech-badge">
                      {t}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <div className="mt-4">
                <Button variant="outline-primary" href="#projects">
                  See my projects
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
