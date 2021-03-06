import React, { Component } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

export default class PeopleYouMayKnow extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3 mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-left">People you may know</Card.Title>
            {this.props.deta.slice(10, 15).map((user) => {
              return (
                <Row style={{ height: "100px", overflow: "hidden" }}>
                  <Col xs={4} md={4}>
                    <Image
                      style={{ height: "56px", width: "56px" }}
                      src={user.image}
                      roundedCircle
                    />
                  </Col>
                  <Col xs={4}>
                    <div className="link">
                      <b style={{ fontSize: "15px" }}>{user.name}</b>
                      <p style={{ fontSize: "10px" }}>{user.bio}</p>
                    </div>
                    <hr />
                  </Col>
                  <Col
                    xs={4}
                    md={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <i className="fas fa-paper-plane link"></i>
                  </Col>
                  <hr />
                </Row>
              );
            })}
          </Card.Body>
          <Card.Text className="mb-2">Show more </Card.Text>
        </Card>
      </div>
    );
  }
}
