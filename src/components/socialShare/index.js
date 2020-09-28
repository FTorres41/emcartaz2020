import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Container } from './styled';

const SocialShare = ({ link, title }) => {
    return (
        <Container>
            <EmailShareButton url={link} subject={title} />
            <FacebookShareButton url={link} quote={title} />
            <LinkedinShareButton url={link} title={title} />
            <TelegramShareButton url={link} title={title} />
            <TwitterShareButton url={link} title={title} via={'@EmCartaz_'}/>
            <WhatsappShareButton url={link} title={title} />
        </Container>
    )
};

export default SocialShare;