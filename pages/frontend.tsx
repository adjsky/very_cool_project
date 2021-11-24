import React from "react"
import Container from "@/shared/Container"
import VideoPlayer from "@/components/VideoPlayer"

function Frontend() {
  return (
    <Container>
      <div style={{ width: "50%" }}>
        <VideoPlayer
          onReady={(player) => {
            console.log(player)
          }}
          options={{
            autoplay: false,
            controls: true,
            fluid: true,
            preload: "auto",
            sources: [
              {
                src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
            ]
          }}
        />
      </div>
    </Container>
  )
}

export default Frontend
