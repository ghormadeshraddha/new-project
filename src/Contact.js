import { Row, Col, Input, Button } from "antd";
import React from "react";
import 'antd/dist/antd.css';

function Contact() {
  return (
    <>
      <Row className="contact_container" id="contact">
      
        <Col className="id_column" span={12}>
          <h1 className="tag">Quick ID</h1>

          <Row className="info">
            <h1>Phone : 9767957059</h1>
          </Row>

          <Row className="info">
            <h1>Email : ghormadeshraddha@gmail.com</h1>
          </Row>

          <Row className="info">
            <h1>Skype :  Shraddha Ghormade</h1>
          </Row>
        </Col>


        <Col span={12} className="details">
          <h1 className="heading">Get In Touch</h1>

          <Row>

            <Col className="contact_details">
              <input type="text" placeholder="Name" autoComplete="off" />
            </Col>

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Col className="contact_details">
              <input placeholder="Email" type="text" autoComplete="off" />
            </Col>

          </Row>

          <br />

          <Row className="contact_details">
            <input placeholder="Subject" type="text" autoComplete="off" />
          </Row>
          <br />

          <Row className="contact_details">
            <input placeholder="Message" type="text" autoComplete="off" />
          </Row>
          <br />

          <Row className="contact_details">
            <Button className="submit_btn" type="default" size="large">Submit</Button>
          </Row>

        </Col>

      </Row>
    </>
  )
}

export default Contact;