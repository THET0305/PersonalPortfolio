// components/Footer.jsx
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-5 border-top">
      <Container className="text-center">
        <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaGithub size={24} />
        </a>
        <a href="mailto:YOUR_EMAIL" className="mx-3">
          <FaEnvelope size={24} />
        </a>
        <p className="mt-2 mb-0 text-muted">&copy; {new Date().getFullYear()} Your Name</p>
      </Container>
    </footer>
  );
}
