import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Page } from "../constants/page";

function AboutMe() {
  const tech = [
    ".NET 8/9",
    ".NET Xamarin and MAUI",
    "Entity Framework",
    "SQL",
    "TypeScript",
    "React",
    "Node.js",
    "Electron",
    "Azure",
  ];

  return (
    <Container className="about-me my-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Hello! I'm Michael McAlpin.</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                A Full Stack .NET and JS engineer
              </Card.Subtitle>

              <Card.Text>
                I build cross-platform apps and web experiences using modern
                .NET and JavaScript technologies. I love shipping clean,
                maintainable solutions for web and native platforms.
                Communication is my strongest suit, and I thrive in
                collaborative, agile environments.
              </Card.Text>

              <h5 className="mt-4">Tech expertise</h5>
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
                <Link to={`/${Page.Projects}`} className="text-decoration-none">
                  <Button variant="outline-primary">See my projects</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Text>When I'm not coding, you can find me:</Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  🧗‍♂️ Bouldering at the local climbing gym
                </ListGroup.Item>
                <ListGroup.Item>🎮 Playing video games</ListGroup.Item>
                <ListGroup.Item>
                  🏈 Rooting for the Buffalo Bills
                </ListGroup.Item>
                <ListGroup.Item>🎢 Riding roller coasters</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
