// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Alert, Card, Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
// import { toast } from 'react-toastify'; // Import toast from react-toastify
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import { ArrowRight } from 'lucide-react'; // Import the go to icon
// import '../Styles/FlightBooking.css'; // Import custom CSS for styling

// const FlightBooking = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [selectedFlight, setSelectedFlight] = useState(null);
//     const [showAlert, setShowAlert] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date()); // State for current time
//     const navigate = useNavigate(); // Hook for navigation

//     const flights = [
//         {
//             id: 1,
//             airline: "RailWing Airways",
//             flightNumber: "RW101",
//             from: "New York (JFK)",
//             to: "London (LHR)",
//             departure: "10:00 AM",
//             arrival: "10:30 PM",
//             duration: "7h 30m",
//             price: {
//                 economy: 549,
//                 premium: 849,
//                 business: 2249,
//                 first: 4549
//             },
//             stops: [],
//             aircraft: "Boeing 787-9",
//             amenities: ['In-flight entertainment', 'Wi-Fi', 'Complimentary meals'],
//             baggagePolicy: '1 carry-on and 1 checked bag included',
//             reviews: [
//                 { user: "Alice", comment: "Great service and comfortable seats!", rating: 5 },
//                 { user: "Bob", comment: "On-time and smooth flight.", rating: 4 }
//             ]
//         },
//         {
//             id: 2,
//             airline: "SkyHigh Airlines",
//             flightNumber: "SH202",
//             from: "Los Angeles (LAX)",
//             to: "Tokyo (NRT)",
//             departure: "1:00 PM",
//             arrival: "5:00 PM (next day)",
//             duration: "12h",
//             price: {
//                 economy: 699,
//                 premium: 999,
//                 business: 2999,
//                 first: 5999
//             },
//             stops: ["Seattle (SEA)"],
//             aircraft: "Airbus A350",
//             amenities: ['In-flight entertainment', 'Wi-Fi', 'Meal options'],
//             baggagePolicy: '2 carry-on bags allowed',
//             reviews: [
//                 { user: "Charlie", comment: "Excellent food and service.", rating: 5 },
//                 { user: "Diana", comment: "Flight was delayed, but overall good experience.", rating: 3 }
//             ]
//         },
//         // Add more flight objects as needed
//     ];

//     // Timer effect to update the current time every second
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer); // Cleanup on unmount
//     }, []);

//     const handleBook = (flight) => {
//         setSelectedFlight(flight); // Set the selected flight
//         setShowModal(true); // Show the modal
//     };

//     const handleConfirmBooking = () => {
//         // Show toast notification
//         toast.success("Booking Successful!"); // Show success message
//         setShowModal(false); // Close the modal
//     };

//     return (
//         <div className="flight-booking-container">
//             {/* Navbar */}
//             <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//                 <Container>
//                     <Navbar.Brand href="#home">Flight Booking</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="ms-auto">
//                             <Button variant="outline-light" onClick={() => navigate('/user')}>
//                                 User Dashboard <ArrowRight size={16} />
//                             </Button>
//                             <Navbar.Text className="ms-3">
//                                 {currentTime.toLocaleTimeString()} {/* Display current time */}
//                             </Navbar.Text>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             <Container className="mt-5 pt-5">
//                 <h1>Available Flights</h1>
//                 <p>Choose from a variety of flights to make your journey comfortable and enjoyable.</p>
                
//                 {/* Promotional Banner */}
//                 <div className="alert alert-info text-center">
//                     <strong>Special Offer!</strong> Book now and get 20% off on your first flight!
//                 </div>

//                 <Row xs={1} md={2} lg={3} className="g-4">
//                     {flights.map((flight) => (
//                         <Col key={flight.id}>
//                             <Card className="flight-card">
//                                 <Card.Body>
//                                     <Card.Title>{flight.airline} - {flight.flightNumber}</Card.Title>
//                                     <Card.Text>
//                                         <strong>From:</strong> {flight.from} <br />
//                                         <strong>To:</strong> {flight.to} <br />
//                                         <strong>Departure:</strong> {flight.departure} <br />
//                                         <strong>Arrival:</strong> {flight.arrival} <br />
//                                         <strong>Duration:</strong> {flight.duration} <br />
//                                         <strong>Price:</strong> ${flight.price.economy} (Economy) <br />
//                                         <strong>Amenities:</strong> {flight.amenities.join(', ')} <br />
//                                         <strong>Baggage Policy:</strong> {flight.baggagePolicy}
//                                     </Card.Text>
//                                     <Button variant="primary" onClick={() => handleBook(flight)}>
//                                         Book Now
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>

//                 {/* Booking Confirmation Modal */}
//                 <Modal show={showModal} onHide={() => setShowModal(false)}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Confirm Booking</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         {selectedFlight && (
//                             <div>
//                                 <h5>{selectedFlight.airline}</h5>
//                                 <p>Flight Number: {selectedFlight.flightNumber}</p>
//                                 <p>From: {selectedFlight.from} To: {selectedFlight.to}</p>
//                                 <p>Departure: {selectedFlight.departure}</p>
//                                 <p>Arrival: {selectedFlight.arrival}</p>
//                                 <p>Duration: {selectedFlight.duration}</p>
//                                 <p>Price: ${selectedFlight.price.economy}</p>
//                             </div>
//                         )}
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={() => setShowModal(false)}>
//                             Cancel
//                         </Button>
//                         <Button variant="primary" onClick={handleConfirmBooking}>
//                             Confirm Booking
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>

//                 {/* Frequently Asked Questions (FAQs) */}
//                 <h2>Frequently Asked Questions</h2>
//                 <ul>
//                     <li><strong>What is the baggage policy?</strong> Each airline has its own baggage policy. Please check the details for each flight.</li>
//                     <li><strong>Can I change my booking?</strong> Yes, you can change your booking up to 24 hours before departure.</li>
//                     <li><strong>What if my flight is delayed?</strong> We will notify you via email and SMS if there are any changes to your flight schedule.</li>
//                 </ul>

//                 {/* Travel Tips Section */}
//                 <h2>Travel Tips</h2>
//                 <ul>
//                     <li>Arrive at the airport at least 2 hours before your flight.</li>
//                     <li>Check the weather at your destination before packing.</li>
//                     <li>Keep your travel documents handy and secure.</li>
//                 </ul>

//                 {/* Alert for non-logged-in users */}
//                 <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
//                     You need to be logged in to book a flight.
//                 </Alert>
//             </Container>
//         </div>
//     );
// };

// export default FlightBooking;




import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert, Card, Row, Col, Navbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Plane } from 'lucide-react';
import '../Styles/FlightBooking.css';
const FlightBooking = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate();

    const flights = [
        {
            id: 1,
            airline: "RailWing Airways",
            flightNumber: "RW101",
            from: "New York (JFK)",
            to: "London (LHR)",
            departure: "10:00 AM",
            arrival: "10:30 PM",
            duration: "7h 30m",
            price: {
                economy: 549,
                premium: 849,
                business: 2249,
                first: 4549
            },
            stops: [],
            aircraft: "Boeing 787-9",
            amenities: ['In-flight entertainment', 'Wi-Fi', 'Complimentary meals'],
            baggagePolicy: '1 carry-on and 1 checked bag included',
            reviews: [
                { user: "Alice", comment: "Great service and comfortable seats!", rating: 5 },
                { user: "Bob", comment: "On-time and smooth flight.", rating: 4 }
            ]
        },
        {
            id: 2,
            airline: "SkyHigh Airlines",
            flightNumber: "SH202",
            from: "Los Angeles (LAX)",
            to: "Tokyo (NRT)",
            departure: "1:00 PM",
            arrival: "5:00 PM (next day)",
            duration: "12h",
            price: {
                economy: 699,
                premium: 999,
                business: 2999,
                first: 5999
            },
            stops: ["Seattle (SEA)"],
            aircraft: "Airbus A350",
            amenities: ['In-flight entertainment', 'Wi-Fi', 'Meal options'],
            baggagePolicy: '2 carry-on bags allowed',
            reviews: [
                { user: "Charlie", comment: "Excellent food and service.", rating: 5 },
                { user: "Diana", comment: "Flight was delayed, but overall good experience.", rating: 3 }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleBook = (flight) => {
        setSelectedFlight(flight);
        setShowModal(true);
    };

    const handleConfirmBooking = () => {
        toast.success("Booking Successful!");
        setShowModal(false);
    };

    const searchStyles = {
        searchHero: {
            backgroundColor: '#003580',
            padding: '40px 0',
            color: 'white',
            marginBottom: '30px'
        },
        searchCard: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
    };

    return (
        <div className="flight-booking-container">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Flight Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="outline-light" onClick={() => navigate('/user')}>
                                User Dashboard <ArrowRight size={16} />
                            </Button>
                            <Navbar.Text className="ms-3">
                                {currentTime.toLocaleTimeString()}
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* New Search Section */}
            <div style={searchStyles.searchHero}>
                <Container>
                    <h2 className="mb-4">Search Your Flight</h2>
                    <Card style={searchStyles.searchCard}>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col md={6} lg={3} className="mb-3">
                                        <Form.Group>
                                            <Form.Label>From</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <Plane size={16} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Departure City"
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={3} className="mb-3">
                                        <Form.Group>
                                            <Form.Label>To</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <Plane size={16} />
                                                </InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Arrival City"
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={2} className="mb-3">
                                        <Form.Group>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} lg={2} className="mb-3">
                                        <Form.Group>
                                            <Form.Label>Class</Form.Label>
                                            <Form.Select>
                                                <option>Economy</option>
                                                <option>Premium Economy</option>
                                                <option>Business</option>
                                                <option>First Class</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={2} className="mb-3 d-flex align-items-end">
                                        <Button variant="primary" className="w-100">
                                            <Search size={16} className="me-2" />
                                            Search
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>

            <Container className="mt-4">
                <h1>Available Flights</h1>
                <p>Choose from a variety of flights to make your journey comfortable and enjoyable.</p>
                
                <div className="alert alert-info text-center">
                    <strong>Special Offer!</strong> Book now and get 20% off on your first flight!
                </div>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {flights.map((flight) => (
                        <Col key={flight.id}>
                            <Card className="flight-card h-100">
                                <Card.Body>
                                    <Card.Title>{flight.airline} - {flight.flightNumber}</Card.Title>
                                    <Card.Text>
                                        <strong>From:</strong> {flight.from} <br />
                                        <strong>To:</strong> {flight.to} <br />
                                        <strong>Departure:</strong> {flight.departure} <br />
                                        <strong>Arrival:</strong> {flight.arrival} <br />
                                        <strong>Duration:</strong> {flight.duration} <br />
                                        <strong>Price:</strong> ${flight.price.economy} (Economy) <br />
                                        <strong>Amenities:</strong> {flight.amenities.join(', ')} <br />
                                        <strong>Baggage Policy:</strong> {flight.baggagePolicy}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleBook(flight)}>
                                        Book Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Booking</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedFlight && (
                            <div>
                                <h5>{selectedFlight.airline}</h5>
                                <p>Flight Number: {selectedFlight.flightNumber}</p>
                                <p>From: {selectedFlight.from} To: {selectedFlight.to}</p>
                                <p>Departure: {selectedFlight.departure}</p>
                                <p>Arrival: {selectedFlight.arrival}</p>
                                <p>Duration: {selectedFlight.duration}</p>
                                <p>Price: ${selectedFlight.price.economy}</p>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleConfirmBooking}>
                            Confirm Booking
                        </Button>
                    </Modal.Footer>
                </Modal>

                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li><strong>What is the baggage policy?</strong> Each airline has its own baggage policy. Please check the details for each flight.</li>
                    <li><strong>Can I change my booking?</strong> Yes, you can change your booking up to 24 hours before departure.</li>
                    <li><strong>What if my flight is delayed?</strong> We will notify you via email and SMS if there are any changes to your flight schedule.</li>
                </ul>

                <h2>Travel Tips</h2>
                <ul>
                    <li>Arrive at the airport at least 2 hours before your flight.</li>
                    <li>Check the weather at your destination before packing.</li>
                    <li>Keep your travel documents handy and secure.</li>
                </ul>

                <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                    You need to be logged in to book a flight.
                </Alert>
            </Container>
        </div>
    );
};

export default FlightBooking;
