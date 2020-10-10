import React from "react";
import YouTube from "react-youtube";

export default function GameplayPreview({ height, width, video }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 1 },
  };
  return <YouTube videoId='UV9ZqzQTyCc' opts={opts} />;
}
