import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Projects</h1>
          <Row xs={1} md={2} className="g-4">
            <Col key={1}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Quotidian</Card.Title>
                  <Card.Text className="text-muted">
                    WinForms desktop application for note-taking on readings,
                    featuring highlighting, tagging, and bibliographic
                    functionality.
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="outline-primary"
                      href="https://github.com/CodeMasterMike/Quotidian"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col key={2}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Drinki Poo</Card.Title>
                  <Card.Text className="text-muted">
                    (In progress) .NET Aspire application for tracking in-house
                    inventory of items, designed originally for use with
                    personal drink and cigar collections.
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="outline-primary"
                      href="https://github.com/CodeMasterMike/drinki-poo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col key={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Personal Webpage</Card.Title>
                  <Card.Text className="text-muted">
                    TypeScript, React, and React-Bootstrap based personal
                    portfolio. Source code behind this site.
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                      variant="outline-primary"
                      href="https://github.com/CodeMasterMike/personal-webpage"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
