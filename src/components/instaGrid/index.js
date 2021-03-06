import * as React from "react";
import withInstagramFeed from "origen-react-instagram-feed";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import compose from "recompose/compose";
import { isMobileOnly } from 'react-device-detect';

const styles = () => ({
  wrapper: {},
  image: {
    width: "100%",
    height: "100%",
    maxHeight: !isMobileOnly ? "193px" : "133px",
    maxWidth: !isMobileOnly ? "193px" : "133px",
  },
});

const InstaGrid = ({ classes, media, account, status }) => {
  return (
    <Grid container className={classes.wrapper}>
      {media &&
        status === "completed" &&
        media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={6} sm={4} md={4} key={id || displayImage}>
            <ButtonBase
              href={postLink || `https://www.instagram.com/${account}/`}
              target="_blank"
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || "Instagram picture"}
                className={classes.image}
              />
            </ButtonBase>
          </Grid>
        ))}
      {status === "loading" && <p>loading...</p>}
      {status === "failed" && <p>Check instagram here</p>}
    </Grid>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};

export default compose(withInstagramFeed, withStyles(styles))(InstaGrid);
