import React from "react";
import { Col, Row } from "react-flexbox-grid";

const AuthorCard = ({ data }) => {
  const { name, description, avatar_urls/*, slug*/ } = data;

  return (
    <Row>
      <Col sm={12} lg={2}>
        <img src={avatar_urls["96"]} alt={name} />
      </Col>
      <Col sm={12} lg={10}>
        <strong>{name}</strong>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

export default AuthorCard;
