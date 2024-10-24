// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { Toast } from 'react-bootstrap';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [showToast, setShowToast] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setShowToast(true);
//     setEmail('');
//   };

//   return (
//     <footer className="bg-dark text-light py-5 mt-auto">
//       <Container>
//         <Row className="gy-4">
//           <Col md={4}>
//             <h5 className="mb-4">About RailWing</h5>
//             <p className="text-muted">
//               Your trusted partner for seamless train and flight bookings. 
//               Experience convenience and reliability in every journey.
//             </p>
//             <div className="social-icons">
//               {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
//                 <a key={index} href="#" className="text-light me-3">
//                   <FontAwesomeIcon icon={icon} size="lg" />
//                 </a>
//               ))}
//             </div>
//           </Col>

//           <Col md={4}>
//             <h5 className="mb-4">Contact Info</h5>
//             <ul className="list-unstyled text-muted">
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faLocationDot} className="me-2" />
//                 123 Travel Street, Journey City
//               </li>
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faPhone} className="me-2" />
//                 +1 234 567 8900
//               </li>
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                 info@railwing.com
//               </li>
//             </ul>
//           </Col>

//           <Col md={4}>
//             <h5 className="mb-4">Newsletter</h5>
//             <Form onSubmit={handleSubscribe}>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="bg-light"
//                 />
//               </Form.Group>
//               <Button type="submit" variant="primary" className="w-100">
//                 Subscribe to Newsletter
//               </Button>
//             </Form>
//           </Col>
//         </Row>

//         <hr className="my-4" />

//         <Row>
//           <Col className="text-center text-muted">
//             <p className="mb-0">© 2024 RailWing. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>

//       <Toast
//         show={showToast}
//         onClose={() => setShowToast(false)}
//         delay={3000}
//         autohide
//         className="position-fixed bottom-0 end-0 m-3"
//       >
//         <Toast.Header>
//           <strong className="me-auto">Success!</strong>
//         </Toast.Header>
//         <Toast.Body>Thank you for subscribing to our newsletter!</Toast.Body>
//       </Toast>
//     </footer>
//   );
// };

// export default Footer;


// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../Styles/Footer.css';
// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [showToast, setShowToast] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setShowToast(true);
//     setEmail('');
//   };

//   return (
//     <footer className="bg-dark text-light py-5 mt-auto">
//       <Container>
//         <Row className="gy-4">
//           <Col md={4}>
//             <h5 className="mb-4">About RailWing</h5>
//             <p>
//               Your trusted partner for seamless train and flight bookings. Experience convenience and reliability in every journey.
//             </p>
//             <div className="social-icons mb-3">
//               {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
//                 <a key={index} href="#" className="text-light me-3" style={{ fontSize: '1.5rem' }}>
//                   <FontAwesomeIcon icon={icon} />
//                 </a>
//               ))}
//             </div>
//           </Col>

//           <Col md={4}>
//             <h5 className="mb-4">Contact Info</h5>
//             <ul className="list-unstyled">
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faLocationDot} className="me-2" />
//                 123 Travel Street, Journey City
//               </li>
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faPhone} className="me-2" />
//                 +1 234 567 8900
//               </li>
//               <li className="mb-3">
//                 <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                 info@railwing.com
//               </li>
//             </ul>
//           </Col>

//           <Col md={4}>
//             <h5 className="mb-4">Newsletter</h5>
//             <Form onSubmit={handleSubscribe}>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="bg-light"
//                 />
//               </Form.Group>
//               <Button type="submit" variant="light" className="w-100">
//                 Subscribe to Newsletter
//               </Button>
//             </Form>
//           </Col>
//         </Row>

//         <hr className="my-4" />

//         <Row>
//           <Col md={3}>
//             <h5 className="mb-4">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="/about" className="text-light">About Us</a></li>
//               <li className="mb-2"><a href="/contact" className="text-light">Contact Us</a></li>
//               <li className="mb-2"><a href="/terms" className="text-light">Terms of Service</a></li>
//               <li className="mb-2"><a href="/privacy" className="text-light">Privacy Policy</a></li>
//             </ul>
//           </Col>

//           <Col md={3}>
//             <h5 className="mb-4">Customer Support</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="/faq" className="text-light">FAQ</a></li>
//               <li className="mb-2"><a href="/help" className="text-light">Help Center</a></li>
//               <li className="mb-2"><a href="/feedback" className="text-light">Give Feedback</a></li>
//             </ul>
//           </Col>

//           <Col md={3}>
//             <h5 className="mb-4">Business Inquiries</h5>
//             <p>For partnership or business inquiries, please reach out to us at:</p>
//             <p>business@railwing.com</p>
//           </Col>

//           <Col md={3}>
//             <h5 className="mb-4">Office Hours</h5>
//             <p>Monday - Friday: 9 AM - 5 PM</p>
//             <p>Saturday: 10 AM - 3 PM</p>
//             <p>Sunday: Closed</p>
//           </Col>
//         </Row>

//         <hr className="my-4" />

//         <Row>
//           <Col className="text-center">
//             <p className="mb-0">© 2024 RailWing. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>

//       <Toast
//         show={showToast}
//         onClose={() => setShowToast(false)}
//         delay={3000}
//         autohide
//         className="position-fixed bottom-0 end-0 m-3"
//       >
//         <Toast.Header>
//           <strong className="me-auto">Success!</strong>
//         </Toast.Header>
//         <Toast.Body>Thank you for subscribing to our newsletter!</Toast.Body>
//       </Toast>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css'; // Import the CSS file

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowToast(true);
    setEmail('');
  };

  return (
    <footer className="py-5 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5>About <span className='text-warning'>RailWing</span></h5>
            <p>
              Your trusted partner for seamless train and flight bookings. Experience convenience and reliability in every journey.
            </p>
            <div className="social-icons mb-3">
              {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
                <a key={index} href="#" className="text-light me-3" style={{ fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </Col>

          <Col md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                123 Travel Street, Journey City
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +1 234 567 8900
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@railwing.com
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Newsletter</h5>
            <Form onSubmit={handleSubscribe}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-light"
                />
              </Form.Group>
              <Button type="submit" variant="light" className="w-100">
                Subscribe to Newsletter
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-light">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-light">Contact Us</a></li>
              <li className="mb-2"><a href="/terms" className="text-light">Terms of Service</a></li>
              <li className="mb-2"><a href="/privacy" className="text-light">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/faq" className="text-light">FAQ</a></li>
              <li className="mb-2"><a href="/help" className="text-light">Help Center</a></li>
              <li className="mb-2"><a href="/feedback" className="text-light">Give Feedback</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Business Inquiries</h5>
            <p>For partnership or business inquiries, please reach out to us at:</p>
            <p>business@railwing.com</p>
          </Col>

          <Col md={3}>
            <h5>Office Hours</h5>
            <p>Monday - Friday: 9 AM - 5 PM</p>
            <p>Saturday: 10 AM - 3 PM</p>
            <p>Sunday: Closed</p>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 RailWing. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Header>
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>Thank you for subscribing to our newsletter!</Toast.Body>
      </Toast>
    </footer>
  );
};

export default Footer;



