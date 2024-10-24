// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlane, faTrain, faClock, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const features = [
//     { icon: faClock, title: "24/7 Service", description: "Round-the-clock customer support" },
//     { icon: faTicket, title: "Instant Booking", description: "Quick and easy reservation process" },
//     { icon: faUserGroup, title: "User Friendly", description: "Simple and intuitive interface" }
//   ];

//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "Frequent Traveler",
//       content: "RailWing made my travel planning incredibly easy. Highly recommended!"
//     },
//     {
//       name: "Sarah Smith",
//       role: "Business Traveler",
//       content: "The best booking platform I've used. Simple and efficient."
//     }
//   ];

//   return (
//     <div className="min-vh-100 d-flex flex-column">
//       {/* Hero Section */}
//       <section className="hero-section bg-primary text-white py-5 mt-5">
//         <Container className="py-5">
//           <Row className="align-items-center">
//             <Col lg={6}>
//               <h1 className="display-4 fw-bold mb-4">
//                 Your Journey, Our Priority
//               </h1>
//               <p className="lead mb-4">
//                 Experience seamless train and flight bookings with RailWing. 
//                 Your one-stop destination for all travel needs.
//               </p>
//               <div className="d-flex gap-3">
//                 <Button 
//                   variant="light" 
//                   size="lg"
//                   onClick={() => navigate('/flight-booking')}
//                 >
//                   <FontAwesomeIcon icon={faPlane} className="me-2" />
//                   Book Flights
//                 </Button>
//                 <Button 
//                   variant="outline-light" 
//                   size="lg"
//                   onClick={() => navigate('/train-booking')}
//                 >
//                   <FontAwesomeIcon icon={faTrain} className="me-2" />
//                   Book Trains
//                 </Button>
//               </div>
//             </Col>
//             <Col lg={6} className="mt-4 mt-lg-0">
//               <img
//                 src="/api/placeholder/600/400"
//                 alt="Travel"
//                 className="img-fluid rounded shadow"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Features Section */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center mb-5">Why Choose RailWing?</h2>
//           <Row>
//             {features.map((feature, index) => (
//               <Col key={index} md={4} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm">
//                   <Card.Body className="text-center p-4">
//                     <FontAwesomeIcon 
//                       icon={feature.icon} 
//                       size="3x" 
//                       className="text-primary mb-3" 
//                     />
//                     <Card.Title>{feature.title}</Card.Title>
//                     <Card.Text className="text-muted">
//                       {feature.description}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">What Our Customers Say</h2>
//           <Row>
//             {testimonials.map((testimonial, index) => (
//               <Col key={index} md={6} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm">
//                   <Card.Body className="p-4">
//                     <Card.Text className="mb-3">
//                       "{testimonial.content}"
//                     </Card.Text>
//                     <div className="d-flex align-items-center">
//                       <div className="ms-3">
//                         <h6 className="mb-0">{testimonial.name}</h6>
//                         <small className="text-muted">
//                           {testimonial.role}
//                         </small>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlane, faTrain, faClock, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Home.css'; // Import the CSS file for additional styles

// const Home = () => {
//   const navigate = useNavigate();

//   const features = [
//     { icon: faClock, title: "24/7 Service", description: "Round-the-clock customer support" },
//     { icon: faTicket, title: "Instant Booking", description: "Quick and easy reservation process" },
//     { icon: faUserGroup, title: "User Friendly", description: "Simple and intuitive interface" }
//   ];

//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "Frequent Traveler",
//       content: "RailWing made my travel planning incredibly easy. Highly recommended!"
//     },
//     {
//       name: "Sarah Smith",
//       role: "Business Traveler",
//       content: "The best booking platform I've used. Simple and efficient."
//     }
//   ];

//   return (
//     <div className="min-vh-100 d-flex flex-column">
//       {/* Hero Section */}
//       <section className="hero-section bg-primary text-white py-5 mt-5">
//         <Container className="py-5">
//           <Row className="align-items-center">
//             <Col lg={6}>
//               <h1 className="display-4 fw-bold mb-4">
//                 Your Journey, Our <span className='text-warning'>Priority</span>
//               </h1>
//               <p className="lead mb-4">
//                 Experience seamless train and flight bookings with RailWing. 
//                 Your one-stop destination for all travel needs.
//               </p>
//               <div className="d-flex gap-3">
//                 <Button 
//                   variant="light" 
//                   size="lg"
//                   onClick={() => navigate('/flight-booking')}
//                 >
//                   <FontAwesomeIcon icon={faPlane} className="me-2" />
//                   Book Flights
//                 </Button>
//                 <Button 
//                   variant="outline-light" 
//                   size="lg"
//                   onClick={() => navigate('/train-booking')}
//                 >
//                   <FontAwesomeIcon icon={faTrain} className="me-2" />
//                   Book Trains
//                 </Button>
//               </div>
//             </Col>
//             <Col lg={6} className="mt-4 mt-lg-0">
//               <img
//                 src='../src/assets/railwing.jpg'
//                 alt="Travel"
//                 className="img-fluid rounded shadow"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Features Section */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center mb-5">Why Choose RailWing?</h2>
//           <Row>
//             {features.map((feature, index) => (
//               <Col key={index} md={4} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm feature-card">
//                   <Card.Body className="text-center p-4">
//                     <FontAwesomeIcon 
//                       icon={feature.icon} 
//                       size="3x" 
//                       className="text-primary mb-3" 
//                     />
//                     <Card.Title className="fw-bold">{feature.title}</Card.Title>
//                     <Card.Text className="text-muted">
//                       {feature.description}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-5 bg-light">
//         <Container>
//           <h2 className="text-center mb-5">What Our Customers Say</h2>
//           <Row>
//             {testimonials.map((testimonial, index) => (
//               <Col key={index} md={6} className="mb-4">
//                 <Card className="h-100 border-0 shadow-sm testimonial-card">
//                   <Card.Body className="p-4">
//                     <Card.Text className="mb-3">
//                       "{testimonial.content}"
//                     </Card.Text>
//                     <div className="d-flex align-items-center">
//                       <div className="ms-3">
//                         <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
//                         <small className="text-muted">
//                           {testimonial.role}
//                         </small>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain, faClock, faTicket, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css'; // Import the CSS file for additional styles

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: faClock, title: "24/7 Service", description: "Round-the-clock customer support" },
    { icon: faTicket, title: "Instant Booking", description: "Quick and easy reservation process" },
    { icon: faUserGroup, title: "User Friendly", description: "Simple and intuitive interface" }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Frequent Traveler",
      content: "RailWing made my travel planning incredibly easy. Highly recommended!"
    },
    {
      name: "Sarah Smith",
      role: "Business Traveler",
      content: "The best booking platform I've used. Simple and efficient."
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Hero Section */}
      <section className="hero-section text-white py-5 mt-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                Your Journey, Our <span className='highlight text-danger'>Priority</span>
              </h1>
              <p className="lead mb-4">
                Experience seamless train and flight bookings with RailWing. 
                Your one-stop destination for all travel needs.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  variant="light" 
                  size="lg"
                  className="custom-button"
                  onClick={() => navigate('/flight-booking')}
                >
                  <FontAwesomeIcon icon={faPlane} className="me-2" />
                  Book Flights
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="custom-button-outline"
                  onClick={() => navigate('/train-booking')}
                >
                  <FontAwesomeIcon icon={faTrain} className="me-2" />
                  Book Trains
                </Button>
              </div>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
              <img
                src='../src/assets/railwing.jpg'
                alt="Travel"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 section-heading">Why Choose RailWing?</h2>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 border-0 shadow-sm feature-card hover-effect">
                  <Card.Body className="text-center p-4">
                    <FontAwesomeIcon 
                      icon={feature.icon} 
                      size="3x" 
                      className="icon-primary mb-3" 
                    />
                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 section-heading">What Our Customers Say</h2>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col key={index} md={6} className="mb-4">
                <Card className="h-100 border-0 shadow-sm testimonial-card hover-effect">
                  <Card.Body className="p-4">
                    <Card.Text className="mb-3 testimonial-content">
                      "{testimonial.content}"
                    </Card.Text>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.role}
                        </small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

