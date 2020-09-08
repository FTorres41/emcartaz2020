import React, { useEffect, useState } from "react";
import { api, apiKey, playlistId } from "../../../../services/youtubeApi";
import YouTube from "@u-wave/react-youtube";
import { Container, Content, VideoItem } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import { List, ListItemText } from "@material-ui/core";
import { AiFillYoutube } from "react-icons/ai";

const YouTubeCard = () => {
  const [videoId, setVideoId] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const { data } = await api.get(
        `playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
      );

      if (data.items.length > 0) {
        setVideoId(data.items[0].snippet.resourceId.videoId);
        setVideos(data.items.splice(0, 3));
      }
    }

    loadVideos();
  }, []);

  return (
    <Container>
      <SectionTitle
        value={"TV Em Cartaz"}
        color={(props) => props.theme.pink}
      />
      <Content>
        <YouTube video={videoId} autoplay={false} width={400} height={240} />
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

export default YouTubeCard;
