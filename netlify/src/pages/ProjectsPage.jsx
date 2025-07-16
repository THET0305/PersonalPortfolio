// pages/ProjectsPage.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from '../data/projects.json';

export default function ProjectsPage() {
  return (
    <Container className="my-5 pt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              {project.type === 'image' && <Card.Img variant="top" src={project.media} />}
              {project.type === 'video' && (
                <div className="ratio ratio-16x9">
                  <iframe src={project.media} title={project.title} allowFullScreen></iframe>
                </div>
              )}
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.type === 'webgl' && (
                  <Button variant="danger" href={project.media} target="_blank">View WebGL App</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
