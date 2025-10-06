import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

interface GitHubProject {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/CodeMasterMike/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Card id={project.id.toString()} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary" href={project.html_url}>
              View Project
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Projects;
