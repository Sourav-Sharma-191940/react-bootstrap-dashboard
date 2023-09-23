import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineDown } from "react-icons/ai";
import Image from 'react-bootstrap/Image'

function Navbar() {
  return (
    <div className="px-5 pt-5" style={{ paddingLeft: "20px", marginLeft: "25px" }}>
      <Row className="align-items-center">
        <Col className="text-secondary fw-bold">
          <p className="mb-0">
            <BsArrowLeft className="me-2" />
            Back To Dashboard
          </p>
        </Col>
        <Col className="text-end">
          <VscBellDot className="fs-3" />
          <Image src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" style={{ borderRadius: "50%", height: "40px", width: "40px", marginLeft: "15px" }} />
          <span className="fw-bold ms-2">Dr. Alex Hess <AiOutlineDown /></span>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Current Appointment</h2>
      </Row>
    </div>
  );
}

export default Navbar;
