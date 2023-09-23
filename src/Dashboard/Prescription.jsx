import React from "react";
import { Card, Table } from "react-bootstrap";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";


function Prescription() {
  const jsonData = [
    { icon: <BsFillFileEarmarkTextFill color="#F1AC37" size={26}/>, name: 'Heart Disease', date: '25th October 2019', duration: '3 months' },
    { icon: <BsFillFileEarmarkTextFill color="#F1AC37" size={26}/>, name: 'Alice', date: '8th August 2019', duration: '2 months' },
  ];

  return (
    <div className="p-4">
      <Card className="border-0 px-3">
        <Card.Body>
          <Card.Title style={{ fontSize: "1.7rem", marginTop: "1rem" }}>Prescriptions</Card.Title>
          <Card className="border border-success border-dotted text-center my-3">
            <Card.Body className="text-success" style={{ padding: '1rem', fontWeight: "bold" }}> + Add a prescription</Card.Body>
          </Card>
          <Table>
            <thead>
              <tr>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Prescription</th>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Date</th>
                <th style={{ fontSize: "20px", color: "gray", padding: "20px" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((item, index) => (
                <tr key={index} className="custom-table-row" style={{ fontSize: "18px", color: "gray" }}>
                  <td style={{ padding: "20px" }}>{item.icon} {item.name}</td> {/* Add margin-right to the icons */}
                  <td style={{ padding: "20px" }}>{item.date}</td>
                  <td style={{ padding: "20px" }}>{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Prescription;
