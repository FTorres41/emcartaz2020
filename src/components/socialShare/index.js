import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Container } from "./styled";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaTelegram, FaWhatsappSquare } from "react-icons/fa";

const SocialShare = ({ link, title }) => {
  return (
    <Container>
        <p>Compartilhe com seus amigos! </p>
      <EmailShareButton url={link} subject={title}>
        <AiOutlineMail color={"#DC4C3F"} size={"1.5em"} />
      </EmailShareButton>
      <FacebookShareButton url={link} quote={title}>
        <AiFillFacebook color={"#036CE4"} size={"1.5em"} />
      </FacebookShareButton>
      <LinkedinShareButton url={link} title={title}>
        <AiFillLinkedin color={"#283E4A"} size={"1.5em"} />
      </LinkedinShareButton>
      <TelegramShareButton url={link} title={title}>
        <FaTelegram color={"#2FA4D7"} size={"1.5em"} />
      </TelegramShareButton>
      <TwitterShareButton url={link} title={title} via={"@EmCartaz_"}>
        <AiFillTwitterSquare color={"#1A91DA"} size={"1.5em"} />
      </TwitterShareButton>
      <WhatsappShareButton url={link} title={title}>
        <FaWhatsappSquare color={"#25CB63"} size={"1.5em"} />
      </WhatsappShareButton>
    </Container>
  );
};

export default SocialShare;
