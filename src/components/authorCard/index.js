import React, { useEffect, useState } from "react";
import { Col } from "react-flexbox-grid";
import { AuthorContainer } from "./styled";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const AuthorCard = ({ data, cor }) => {
  const { name, description, avatar_urls, id } = data;
  const [midiasSociais, setMidiasSociais] = useState();

  useEffect(() => {
    const getSocialMedia = () => {
      switch (id) {
        case 2:
          return {
            facebook: "https://www.facebook.com/tamieonolor",
            instagram: "https://instagram.com/miezinha/",
          };
        case 4:
          return {
            facebook: "https://www.facebook.com/danielle.mei.3",
            instagram: "https://instagram.com/danielle_s_mei/",
          };
        case 35:
          return {
            facebook: "https://www.facebook.com/gabriel.lisboa.9",
            instagram: "https://instagram.com/gabelisboaa/",
          };
        case 32:
          return {
            facebook: "https://www.facebook.com/duds.leprevost",
            instagram: "https://instagram.com/duds86/",
          };
        case 17:
          return {
            facebook: "https://www.facebook.com/gisleine.moreira.7",
            instagram: "https://instagram.com/giza_leine/",
          };
        case 26:
          return {
            facebook: "https://www.facebook.com/henriqueromanine",
            instagram: "https://instagram.com/henriqueromanine/",
          };
        case 34:
          return {
            facebook: "https://www.facebook.com/ju.oliveiraantunes",
            instagram: "https://instagram.com/jujuantunes/",
          };
        case 33:
          return {
            facebook: "https://www.facebook.com/oscarariel.colaco",
            instagram: "https://instagram.com/arielaces/",
          };
        case 18:
          return {
            facebook: "https://www.facebook.com/fabiotorresdequadros",
            instagram: "https://instagram.com/fabio_torres/",
          };
        default:
          return {};
      }
    };

    setMidiasSociais(getSocialMedia());
  }, [id, setMidiasSociais]);

  return (
    <AuthorContainer cor={cor}>
      <Col sm={12} lg={2}>
        <img src={avatar_urls["96"]} alt={name} />
      </Col>
      <Col sm={12} lg={10}>
        <strong>{name}</strong>
        <p>{description}</p>
        {midiasSociais && (
          <div className='midias'>
            <a
              href={midiasSociais.facebook}
              rel="noopener noreferrer"
              target="_blank"
              alt="Facebook"
            >
              <AiFillFacebook color="#0572E6" size='1.5em' />
            </a>
            <a
              href={midiasSociais.instagram}
              rel="noopener noreferrer"
              target="_blank"
              alt="Instagram"
            >
              <AiOutlineInstagram color="#D92D7C" size='1.5em' />
            </a>
          </div>
        )}
      </Col>
    </AuthorContainer>
  );
};

export default AuthorCard;
