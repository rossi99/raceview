<template>
  <div>
    <div class="track-content">
      <div class="video-container">
        <!-- Lap Video -->
        <video class="track-video" id="track-video" playsinline autoplay muted loop>
          <source :src='require("@/assets/video/track/lap_loop.mp4")' type="video/mp4">
        </video>

        <div class="test-info">

        </div>

        <!-- Live Lap Times -->
        <div class="lap-btn-container">
          <a href="https://live.alphatiming.co.uk/raceviewkarting">
            <div class="live-lap-btn transition alignMiddle">
              <div class="live-lap-txt">
                See Live Lap Times
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.track-content {
  width: 100%;
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
  overflow: hidden;
}

.video-container {
  width: 100%;
  text-align: center;
}

.track-video {
  width: 100%;
  max-width: 850px;

  margin: auto;
  margin-block-start: 15px;

  border-radius: 10px;
}

.live-lap-btn {
  width: 100%;
  max-width: 300px;

  height: 45px;

  margin: auto;
  margin-block-start: 10px;
  margin-block-end: 15px;

  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  border-radius: 10px;

  color: #1b1b1b;
  font-size: 18px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
}

.live-lap-btn:hover {
  cursor: pointer;
  letter-spacing: 3px;
}

.live-lap-txt {
  width: 100%;
  text-align: center;
}


@media screen and (max-width: 1006px) {
  .track-video {
    margin-block-start: 0;

    border-radius: 10px 10px 0 0;
  }
}
</style>