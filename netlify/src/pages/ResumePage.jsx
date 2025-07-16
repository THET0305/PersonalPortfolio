// pages/ResumePage.jsx
import { Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ResumePage() {
  const [resumeContent, setResumeContent] = useState('');

  useEffect(() => {
    fetch('/resume.md')
      .then((res) => res.text())
      .then(setResumeContent);
  }, []);

  return (
    <Container className="my-5 pt-5">
      <h2 className="text-center mb-4">Resume</h2>
      <div className="mb-4">
        <Button variant="danger" href="/resume.pdf" download>Download PDF</Button>
      </div>
      <ReactMarkdown>{resumeContent}</ReactMarkdown>
    </Container>
  );
}
