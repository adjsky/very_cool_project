import React from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css";

type VideoPlayerProps = {
  onReady: (player: videojs.Player) => void
  options: videojs.PlayerOptions
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const { onReady, options } = props

  React.useEffect(() => {
    const player = videojs(
      videoRef.current as HTMLVideoElement,
      options,
      () => {
        onReady(player)
      }
    )

    return () => {
      player.dispose()
    }
  }, [])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  )
}

export default VideoPlayer
