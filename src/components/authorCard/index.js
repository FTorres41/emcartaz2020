import React from "react";
import { Col } from "react-flexbox-grid";
import { AuthorContainer } from './styled';

const AuthorCard = ({ data, cor }) => {
  const { name, description, avatar_urls/*, slug*/ } = data;

  return (
    <AuthorContainer cor={cor}>
      <Col sm={12} lg={2}>
        <img src={avatar_urls["96"]} alt={name} />
      </Col>
      <Col sm={12} lg={10}>
        <strong>{name}</strong>
        <p>{description}</p>
      </Col>
    </AuthorContainer>
  );
};

export default AuthorCard;
