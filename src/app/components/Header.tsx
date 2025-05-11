// components/Header.jsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="md" 
      className={`py-3 fixed-top transition-all duration-300 ${
        scrolled 
          ? 'glass shadow-lg backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <div className="position-relative">
            <Image 
              src="/images/Thermo_Logo2.webp" 
              alt="Thermomix Logo" 
              width={60} 
              height={60}
              className="me-2 position-relative z-index-2"
            />
            <div className="blob-shape position-absolute" 
                 style={{width: '70px', height: '70px', top: '-5px', left: '-5px', opacity: '0.5'}}></div>
          </div>
          <span className="fw-bold ms-2 text-gradient">Thermomix Türkiye</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link 
              as={Link} 
              href="/" 
              className="mx-md-3 fw-medium"
              onClick={() => setExpanded(false)}
            >
              Ana Sayfa
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/Urunler" 
              className="mx-md-3 fw-medium"
              onClick={() => setExpanded(false)}
            >
              Ürünler
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/Blog" 
              className="mx-md-3 fw-medium"
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              href="/iletisim" 
              className="mt-2 mt-md-0 ms-md-3"
              onClick={() => setExpanded(false)}
            >
              <button className="btn btn-hover-lift d-flex align-items-center" 
                     style={{
                       background: 'linear-gradient(135deg, #16a34a, #15803d)',
                       color: 'white',
                       borderRadius: '50px',
                       padding: '10px 20px',
                       border: 'none'
                     }}>
                <i className="bi bi-headset me-2"></i>
                İletişim
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}