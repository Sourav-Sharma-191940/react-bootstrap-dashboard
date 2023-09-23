import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsSuitHeartFill, BsThermometerSun } from 'react-icons/bs';
import { FaVial } from "react-icons/fa";

function Info() {
  const data = [
    {
      id: 1,
      icon: <BsSuitHeartFill size={36} color="#DC6255" />,
      intro: "Heart rate",
      value: 80,
      measure: "bpm",
    },
    {
      id: 2,
      icon: <BsThermometerSun size={36} color="#F1AC37" />,
      intro: "Body Temperature",
      value: 36.5,
      measure: "ºC",
    },
    {
      id: 3,
      icon: <FaVial size={36} color="#DC6255" />,
      intro: "Glucose",
      value: 100,
      measure: "mg/dl",
    },
  ];

  return (
    <>
      <Row xs={1} md={3} className="g-4 p-4">
        {data.map((item) => (
          <Col key={item.id}>
            <Card className="border-0 text-center">
              <Card.Body style={{ padding: "50px" }}>
                <span>{item.icon}</span>
                <Card.Title className="my-3">{item.intro}</Card.Title>
                <Card.Text>
                  <h2>
                    {item.value}
                    <span style={{ fontSize: "16px" }}>{item.measure}</span>
                  </h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Info;
