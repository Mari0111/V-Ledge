import React from "react";
import YouTube from "react-youtube";

//https://www.youtube.com/watch?v=MRIMT0xPXFI
class Example extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }s
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { videoId } = this.props;

    return (
      <YouTube videoId={videoId} opts={opts} videoOnReady={this._videOnReady} />
    );
  }
}
export default YouTube