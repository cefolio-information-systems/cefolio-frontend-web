import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './intro.css';
import GoogleAuth from '../auth.js';

import { GoogleAuthProvider } from 'firebase/auth';

let IntroSection = () => {
  return (
    <>
      <div id="back">
        <Row>
          <Col sm={12} md={12}>
            <div style={{ textAlign: 'center' }}>
              <h1 id="heading" style={{ margin: '5px' }}>
                CeFolio
              </h1>
              <h1>A Link is all you need!</h1>
              <Button style={{ textAlign: 'center', margin: '10px' }}>
                Get started 🚀
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col sm={12}>
          <h2 style={{ textAlign: 'center', margin: '20px' }}>
            Building your{' '}
            <span
              style={{
                borderBottom: '5px solid #00C8AA',
              }}
            >
              Portfolio
            </span>{' '}
            is now Fast and Easy
          </h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h5 style={{ textAlign: 'center' }}>
            <Button variant="outline-primary" style={{ margin: '5px' }}>
              <b>Cefolio is lightning fast </b>⚡
            </Button>
            <Button variant="outline-primary" style={{ margin: '5px' }}>
              <b>There's no software to download </b>💻
            </Button>
            <Button variant="outline-primary" style={{ margin: '5px' }}>
              <b>No multi-part sign-up form. </b>🙄
            </Button>
            <Button variant="outline-primary" style={{ margin: '5px' }}>
              <b>No long-winded tutorials</b>🥱
            </Button>
            <br />
            <h4> Just a straightforward process.</h4>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ textAlign: 'center' }}>
          <h2>Active 132 cefolio users joined.</h2>
        </Col>
      </Row>
    </>
  );
};

export default IntroSection;
