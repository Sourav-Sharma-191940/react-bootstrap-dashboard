import React from 'react'
import { Card, Button, Image } from 'react-bootstrap';

function Profile() {
  return (
    <div className="p-4" style={{ paddingLeft: "20px", marginLeft: "40px" }}>
      <Card className="border-0 text-center">
        <Card.Body>
          <Image src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" style={{ borderRadius: "15%", height: "150px", width: "150px", marginTop: "2rem" }} />
          <Card.Title style={{ fontSize: "1.5rem", marginTop: "1rem" }}>Roger Curtis</Card.Title>
          <Card.Text style={{ fontSize: "1rem", marginBottom: "1rem", color:"gray", fontWeight: "bold"}}>
            Age: 36
          </Card.Text>
          <Button variant="success" style={{ backgroundColor: "#44BC8E", padding: "0.5rem 2rem", marginBottom: "2rem", fontSize: "1.25rem", fontWeight: "bold" }}>Update</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile;
