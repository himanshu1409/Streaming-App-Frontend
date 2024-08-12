import { useRef, useEffect } from "react";
import VideoPlayerProps from "../Types/VideoPlayerProps";
import FlvJs from "flv.js";

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (FlvJs.isSupported()) {
      let flvPlayer = FlvJs.createPlayer({
        // creating an instance of FlvPlayer
        type: "flv",
        url: src,
      });
      flvPlayer.attachMediaElement(videoRef.current!); // attatching flvPlayer to video element
      flvPlayer.load();
      flvPlayer.play();
    }
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        controls
        style={{ width: "300px", height: "300px" }}
      />
    </>
  );
};

export default VideoPlayer;
