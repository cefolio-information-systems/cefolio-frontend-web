import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './footer.css';

let Footer = () => {
  return (
    <div id="footer">
      <Row>
        <Col sm={12}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>
            Follow us on :{' '}
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
