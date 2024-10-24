import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Card, 
  Modal, 
  Alert, 
  Badge,
  Tabs,
  Tab,
  Navbar,
  Nav
} from 'react-bootstrap';
import { 
  Train, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Coffee,
  Wifi,
  Power,
  BatteryCharging,
  Users,
  Search
} from 'lucide-react';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import '../Styles/TrainBooking.css'; // Import custom CSS for styling
import { useNavigate } from 'react-router-dom';

const TrainBooking = ({ isLoggedIn, username, onNavigate }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedClass, setSelectedClass] = useState('all');
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date()); // State for current time

  const trainClasses = {
    'first': 'First Class',
    'second': 'Second Class',
    'business': 'Business Class',
    'sleeper': 'Sleeper Class'
  };

  const trains = [
    {
      id: 1,
      name: "RailWing Express",
      trainNumber: "RW2024",
      from: "New York",
      to: "Washington DC",
      departure: "08:00 AM",
      arrival: "11:30 AM",
      duration: "3h 30m",
      price: {
        first: 129,
        second: 79,
        business: 159,
        sleeper: 199
      },
      availableSeats: {
        first: 24,
        second: 56,
        business: 18,
        sleeper: 12
      },
      amenities: ['wifi', 'food', 'power', 'blanket'],
      stops: ['Philadelphia', 'Baltimore']
    },
    {
      id: 2,
      name: "RailWing Bullet",
      trainNumber: "RW2025",
      from: "New York",
      to: "Washington DC",
      departure: "10:30 AM",
      arrival: "02:00 PM",
      duration: "3h 30m",
      price: {
        first: 119,
        second: 69,
        business: 149,
        sleeper: 189
      },
      availableSeats: {
        first: 18,
        second: 42,
        business: 12,
        sleeper: 8
      },
      amenities: ['wifi', 'food', 'power'],
      stops: ['Philadelphia', 'Wilmington', 'Baltimore']
    },
    {
      id: 3,
      name: "RailWing Night Express",
      trainNumber: "RW2026",
      from: "New York",
      to: "Washington DC",
      departure: "11:00 PM",
      arrival: "02:30 AM",
      duration: "3h 30m",
      price: {
        first: 99,
        second: 59,
        business: 129,
        sleeper: 169
      },
      availableSeats: {
        first: 28,
        second: 64,
        business: 22,
        sleeper: 16
      },
      amenities: ['wifi', 'food', 'power', 'blanket'],
      stops: ['Philadelphia', 'Baltimore']
    }
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi size={16} />;
      case 'food':
        return <Coffee size={16} />;
      case 'power':
        return <Power size={16} />;
      case 'blanket':
        return <BatteryCharging size={16} />;
      default:
        return null;
    }
  };


//   local timer
useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
}, []);

  const handleBook = (train) => {
    setSelectedTrain(train); // Set the selected train
    setShowModal(true); // Show the modal
  };

  const handleConfirmBooking = () => {
    // Show toast notification
    toast.success("Booking Successful!"); // Show success message
    setShowModal(false); // Close the modal
  };

  return (

<div>
     {/* Navbar */}
     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Train Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Navbar.Text className="me-3 text-light">
                                {currentTime.toLocaleTimeString()} {/* Display current time */}
                            </Navbar.Text>
                            <Button variant="outline-light" onClick={() => navigate('/user')}>
                                User Dashboard <ArrowRight size={16} />
                            </Button>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




    <Container className="py-5">
      {/* Search Section */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="g-3">
            <Col md={3}>
              <div className="d-flex align-items-center">
                <MapPin size={20} className="text-muted me-2" />
                <Form.Control type="text" placeholder="From" />
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex align-items-center">
                <MapPin size={20} className="text-muted me-2" />
                <Form.Control type="text" placeholder="To" />
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex align-items-center">
                <Calendar size={20} className="text-muted me-2" />
                <Form.Control type="date" />
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex align-items-center">
                <Users size={20} className="text-muted me-2" />
                <Form.Select 
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                  ))}
                </Form.Select>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" className="d-flex align-items-center mx-auto">
              <Search size={16} className="me-2" />
              Search Trains
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Class Filter */}
      <div className="mb-4">
        <h5 className="mb-3">Filter by Class:</h5>
        <div className="d-flex gap-2">
          <Button 
            variant={selectedClass === 'all' ? 'primary' : 'outline-primary'}
            onClick={() => setSelectedClass('all')}
          >
            All Classes
          </Button>
          {Object.keys(trainClasses).map(classType => (
            <Button
              key={classType}
              variant={selectedClass === classType ? 'primary' : 'outline-primary'}
              onClick={() => setSelectedClass(classType)}
            >
              {trainClasses[classType]}
            </Button>
          ))}
        </div>
      </div>

      {/* Trains List */}
      {trains.map((train) => (
        <Card key={train.id} className="mb-4 shadow-sm">
          <Card.Body>
            <Row>
              <Col md={4}>
                <div className="d-flex align-items-center mb-3">
                  <Train size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-0">{train.name}</h5>
                    <small className="text-muted">{train.trainNumber}</small>
                  </div>
                </div>
                <div className="d-flex gap-2 mb-3">
                  {train.amenities.map((amenity, index) => (
                    <Badge 
                      key={index} 
                      bg="light" 
                      text="dark" 
                      className="d-flex align-items-center gap-1"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                    </Badge>
                  ))}
                </div>
              </Col>

              <Col md={4} className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <div>
                    <h5 className="mb-0">{train.departure}</h5>
                    <small className="text-muted">{train.from}</small>
                  </div>
                  <div className="mx-3">
                    <ArrowRight size={16} className="text-muted" />
                    <div className="text-muted small">{train.duration}</div>
                  </div>
                  <div>
                    <h5 className="mb-0">{train.arrival}</h5>
                    <small className="text-muted">{train.to}</small>
                  </div>
                </div>
                <div className="small text-muted">
                  Stops: {train.stops.join(' → ')}
                </div>
              </Col>

              <Col md={4}>
                <Tabs className="mb-3">
                  {Object.entries(trainClasses).map(([classType, className]) => (
                    <Tab 
                      key={classType}
                      eventKey={classType}
                      title={className}
                      disabled={train.availableSeats[classType] < passengers}
                    >
                      <div className="text-center">
                        <h4 className="text-primary mb-2">
                          ${train.price[classType] * passengers}
                        </h4>
                        <small className="text-muted d-block mb-2">
                          {train.availableSeats[classType]} seats available
                        </small>
                        <Button
                          variant="primary"
                          onClick={() => handleBook(train)}
                          disabled={train.availableSeats[classType] < passengers}
                        >
                          Book Now
                        </Button>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTrain && (
            <div className="space-y-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Train</span>
                <span>{selectedTrain.name} ({selectedTrain.trainNumber})</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Class</span>
                <span>{trainClasses[selectedTrain.selectedClass]}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Route</span>
                <span>{selectedTrain.from} → {selectedTrain.to}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Time</span>
                <span>{selectedTrain.departure} - {selectedTrain.arrival}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Passengers</span>
                <span>{passengers}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Total Price</span>
                <span className="text-primary fw-bold">
                  ${selectedTrain.price[selectedTrain.selectedClass] * passengers}
                </span>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Alert Message */}
      <Alert
        variant="danger"
        show={showAlert}
        className="position-fixed bottom-0 end-0 m-3"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Please log in to book a train ticket
      </Alert>
    </Container>
    </div>
  );
};

export default TrainBooking;
