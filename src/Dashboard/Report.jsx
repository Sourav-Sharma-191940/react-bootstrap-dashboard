import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {BsFillFileEarmarkBarGraphFill} from 'react-icons/bs'
function Report() {
    const data = [
        {
          id: 1,
          icon: <BsFillFileEarmarkBarGraphFill size={26} color="#0A596B"/>,
          heading: 'CT Scan -Full Body',
          date: '12th February 2020',
          backgroundColor: '#F3F7F8',
        },
        {
          id: 2,
          icon: <BsFillFileEarmarkBarGraphFill size={26} color="#F1AC37"/>,
          heading: 'Creatine Kinase T',
          date: '12th February 2020',
          backgroundColor: '#FEFBF4',
        },
        {
          id: 3,
          icon: <BsFillFileEarmarkBarGraphFill size={26} color="#DC6255"/>,
          heading: 'Eye Fluorescein Test',
          date: '12th February 2020',
          backgroundColor: '#FDF8F5',
        },
      ];
  return (
    <div className="px-4">
    <Card className="border-0 px-3">
      <Card.Body>
        <Card.Title style={{ fontSize: '1.7rem', marginTop: '1rem' }}>Test Reports</Card.Title>
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => (
            <Col key={item.id}>
              <Card className="border-0">
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div
                        style={{
                          backgroundColor: item.backgroundColor, 
                          width: '60px', 
                          height: '60px',
                          borderRadius: '10%', 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </div>
                    </Col>
                    <Col xs={9} className="text-left">
                      <Card.Title>{item.heading}</Card.Title>
                      <Card.Text>{item.date}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Report