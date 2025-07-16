// pages/ExperiencePage.jsx
import { Container, ListGroup } from 'react-bootstrap';
import experience from '../data/experience.json';

export default function ExperiencePage() {
  return (
    <Container className="my-5 pt-5">
      <h2 className="text-center mb-4">Work Experience</h2>
      <ListGroup>
        {experience.map((job, index) => (
          <ListGroup.Item key={index}>
            <h5>{job.role} @ {job.company}</h5>
            <small>{job.duration}</small>
            <p>{job.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
