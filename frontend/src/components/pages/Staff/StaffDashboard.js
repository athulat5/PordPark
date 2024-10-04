import React from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../../images/home.jpg';

// Inline Styles for background and container
const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  overflow: 'auto',
  paddingTop: '10px',
};

const styles = {
  navbar: {
    width: '100%',
    marginBottom: '20px',
  },
  card: {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
  },
  container: {
    maxWidth: '1200px',
  },
  cardBody: {
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const StaffDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout logic, e.g., clearing token and navigating to login page
    localStorage.removeItem('token'); // Example of removing token
    navigate('/Login');
  };

  return (
    <div style={backgroundStyle}>
      {/* Navbar with Logout Button */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={styles.navbar}>
        <Container>
          <Navbar.Brand href="/StaffDashboard">Staff Dashboard</Navbar.Brand>
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>

      {/* Dashboard Cards */}
      <Container style={{ ...styles.container, marginTop: '100px' }}>
        <Row className="mb-4">
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card
              className="text-center"
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = styles.cardHover.boxShadow)}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = styles.card.boxShadow)}
            >
              <Card.Body style={styles.cardBody}>
                <Card.Title>Add New Staff</Card.Title>
                <Card.Text>Manage staff details.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/Staffreg')}>
                  Add Staff
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card
              className="text-center"
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = styles.cardHover.boxShadow)}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = styles.card.boxShadow)}
            >
              <Card.Body style={styles.cardBody}>
                <Card.Title>View Companies</Card.Title>
                <Card.Text>View and manage all company details.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/Reg')}>
                  View Companies
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card
              className="text-center"
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = styles.cardHover.boxShadow)}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = styles.card.boxShadow)}
            >
              <Card.Body style={styles.cardBody}>
                <Card.Title>Product Details</Card.Title>
                <Card.Text>View and manage product information.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/Products')}>
                  View Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card
              className="text-center"
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = styles.cardHover.boxShadow)}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = styles.card.boxShadow)}
            >
              <Card.Body style={styles.cardBody}>
                <Card.Title>View Complaints</Card.Title>
                <Card.Text>View complaints from companies.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/Complaints')}>
                  View Complaints
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-4">
            <Card
              className="text-center"
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = styles.cardHover.boxShadow)}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = styles.card.boxShadow)}
            >
              <Card.Body style={styles.cardBody}>
                <Card.Title>Clent Apporve</Card.Title>
                <Card.Text>View and Approve Client.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/Clientapprove')}>
                  Client Approve
                </Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
      </Container>
    </div>
  );
};

export default StaffDashboard;

