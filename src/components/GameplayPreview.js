import { motion } from "framer-motion";
import React from "react";
import YouTube from "react-youtube";

export default function GameplayPreview({ height, width, video }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 0 },
  };
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, damping: 10, type: "spring" }}
    >
      <YouTube videoId='UV9ZqzQTyCc' opts={opts} />;
    </motion.div>
  );
}
