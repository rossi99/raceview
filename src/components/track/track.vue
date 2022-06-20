<template>
  <div>
    <navbar></navbar>

    <div class="content">
      <!-- Page Title -->
      <div class="title-container">
        <div class="title-align">
          Track, Times & Karts
        </div>
      </div>

      <!-- Page Content -->
      <div class="page-content">
        <!-- Kart Heading -->
        <div class="subtitle-container">
          <div class="subtitle">
            Explore Our Karts
          </div>
        </div>

        <!-- Kart -->
        <kart></kart>

        <!-- Track Heading -->
        <div class="subtitle-container">
          <div class="subtitle">
            See our Tracks
          </div>
        </div>

        <!-- Track -->
        <tracks></tracks>

        <!-- Times Heading -->
        <div class="subtitle-container">
          <div class="subtitle">
            Our Leaderboard
          </div>
        </div>

        <!-- Times -->
        <times></times>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/nav/navbar";
import Kart from "@/components/track/kart";
import Tracks from "@/components/track/carousel/tracks";
import Times from "@/components/track/leaderboard";

export default {
  components: {
    Navbar,
    Kart,
    Tracks,
    Times,
  },
}
</script>

<style scoped>
.content {
  width: calc(100% - 140px);
  margin-inline-start: 140px;
}

/* Title */
.title-container {
  width: 100%;
  color: white;
  font-size: 30px;
  letter-spacing: 6px;
  font-family: 'Bebas Neue', cursive;
  margin-block-start: 25px;
  margin-block-end: 10px;
}

.subtitle-container {
  width: 100%;
  margin-block-end: 10px;
}

.subtitle {
  font-size: 25px;
  letter-spacing: 5px;
  font-family: 'Bebas Neue', cursive;
}

/* Content */
/* ~ Kart */
.page-content {
  width: calc(100% - 15px);
  margin-inline-end: 15px;
}

/* ~ Track & Times */
.track-container {
  width: 100%;
}

.track-section {
  width: 100%;
}

/*--| RESPONSIVE CSS |--*/
@media screen and (max-width: 590px) {
  .content {
    width: calc(100% - 30px);
    height: auto;
    margin-inline-start: 15px;
    margin-inline-end: 15px;
    margin-block-end: 100px;
  }

  .page-content {
    width: 100%;
    margin-inline-end: 0;
  }
}

@media screen and (max-width: 430px) {
  .title-container {
    width: 100%;
    color: white;
    font-size: 25px;
    letter-spacing: 5px;
    font-family: 'Bebas Neue', cursive;
    margin-block-start: 20px;
    margin-block-end: 5px;
  }

  .subtitle {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: 'Bebas Neue', cursive;
  }
}
</style>