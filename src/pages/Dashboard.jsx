import React from "react";
import Info from "../Dashboard/Info";
import Navbar from "../Dashboard/Navbar";
import Profile from "../Dashboard/Profile";
import Data from "../Dashboard/Data";
import Report from "../Dashboard/Report";
import Prescription from "../Dashboard/Prescription";
import { Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F5F6F8" }}>
      <Navbar />
      <Row>
        <Col sm={4}>
          <Profile />
          <Data />
        </Col>
        <Col sm={8}>
          <Info />
          <Report />
          <Prescription />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
