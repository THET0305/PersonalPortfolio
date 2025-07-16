// pages/HeroSection.jsx
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{height: '100vh'}}>
      <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Hi, I'm [Your Name]</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}>Modern, Minimalist Portfolio</motion.p>
      <div className="mt-3">
        <Button as={Link} to="/projects" variant="danger" className="mx-2">View Projects</Button>
        <Button as={Link} to="/resume" variant="outline-dark" className="mx-2">View Resume</Button>
      </div>
    </Container>
  );
}
