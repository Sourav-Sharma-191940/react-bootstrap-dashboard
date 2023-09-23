import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Data() {
  const data = [
    {
      id: 1,
      heading: 'Gender:',
      value: 'Male',
    },
    {
      id: 2,
      heading: 'Blood Type:',
      value: 'O+ (Positive)',
    },
    {
      id: 3,
      heading: 'Allergies:',
      value: 'Milk, Penicillin',
    },
    {
      id: 4,
      heading: 'Diseases:',
      value: 'Diabetes, Blood Disorder',
    },
    {
      id: 5,
      heading: 'Height:',
      value: '1.78m',
    },
    {
      id: 6,
      heading: 'Weight:',
      value: '65 kg',
    },
    {
      id: 7,
      heading: 'Patient ID:',
      value: '208898786',
    },
    {
      id: 8,
      heading: 'Last Visit:',
      value: '25th October 2019',
    },
  ];

  return (
    <div className="px-4 pb-5" style={{ paddingLeft: "20px", marginLeft: "40px" }}>
      <Card className="border-0 px-3 pb-4">
          <Card.Body>
            <Card.Title style={{ fontSize: "1.7rem", marginTop: "1rem" }}>Information:</Card.Title>
            {data.map((item) => (
              <Row key={item.id}>
                <Col xs={4} className="text-left lh-2 fw-bold p-2" style={{ fontSize: "1.1rem" }}>{item.heading}</Col>
                <Col xs={8} className="text-right lh-2 p-2" style={{ fontSize: "1.1rem", fontColor: "gray"}}>{item.value}</Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
    </div>
  );
}

export default Data;
