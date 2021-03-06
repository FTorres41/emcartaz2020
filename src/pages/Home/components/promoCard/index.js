import React, { useEffect, useState } from "react";
import { api, apiKey, playlistId } from "../../../../services/youtubeApi";
import YouTube from "@u-wave/react-youtube";
import { Container, Content, VideoItem } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import { List, ListItemText } from "@material-ui/core";
import { AiFillYoutube } from "react-icons/ai";
import {isTablet} from 'react-device-detect';

const PromoCard = () => {
  const [videoId, setVideoId] = useState("");
  const [videos, setVideos] = useState([]);

  const width = isTablet ? 560 : 360;

  useEffect(() => {
    async function loadVideos() {
      const { data } = await api.get(
        `playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
      );

      if (data && data.items.length > 0) {
        setVideoId(data.items[0].snippet.resourceId.videoId);
        setVideos(data.items.splice(0, 3));
      }
    }

    loadVideos();
  }, []);

  return (
    <Container width={width}>
      <SectionTitle
        value={"TV Em Cartaz"}
        color={(props) => props.theme.pink}
      />
      <Content>
        <YouTube video={videoId} autoplay={false} width={width} height={240} />
        <List>
          {videos &&
            videos.length > 0 &&
            videos.map((video) => (
              <VideoItem
                key={video.snippet.resourceId.videoId}
                onClick={() => setVideoId(video.snippet.resourceId.videoId)}
              >
                <AiFillYoutube size={20} />
                <ListItemText>
                  {"  "}
                  {video.snippet.title}
                </ListItemText>
              </VideoItem>
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default PromoCard;
