<template>
  <div class="track-content">
    <div class="carousel-container">
      <Carousel>
        <Slide v-for="(item, index) in tracks" :key="index">
          <!-- Indoor Track -->
          <div class="carousel__item">
            <!-- Lap Video -->
            <div class="track-video-container">
              <!-- Video -->
              <video class="track-video" id="track-video" playsinline autoplay muted loop controls>
                <source :src='videos[index]' type="video/mp4">
              </video>

              <div v-if="availability[index] === 'no'" class="not-available-screen">
                <!-- Not Available screen -->
                <div class="not-available-content centerScreen">
                  Track coming soon
                </div>
              </div>

              <div v-if="availability[index] === 'yes'" class="track-book-container">
                <router-link :to="{ name: 'book' }" style="color: #1b1b1b;">
                  <!-- Book button -->
                  <div class="track-book-btn">
                    <span>Book now</span>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="track-info">
              <div class="info-detail">
                <p class="info-heading">{{ headings[index] }}</p>

                <p>{{ descriptions[index] }}</p>

                <div class="info-stats">
                  <table>
                    <tr>
                      <td class="info-title">Track Type:</td>
                      <td>{{ trackType[index] }}</td>
                    </tr>

                    <tr>
                      <td class="info-title">Max On Track:</td>
                      <td>
                        <i class="fa-solid fa-child icon-space-right"></i>
                        {{ trackMax[index] }}
                      </td>
                    </tr>

                    <tr>
                      <td class="info-title">Age Restriction:</td>
                      <td>{{ trackAge[index] }}</td>
                    </tr>

                    <tr>
                      <td class="info-title">Karts Used:</td>
                      <td>{{ trackKarts[index] }}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      tracks: [
        1,
        2,
        3
      ],

      availability: [
        "yes",
        "no",
        "no"
      ],

      videos: [
        require("@/assets/video/track/lap_loop.mp4"),
        require("@/assets/video/track/test.mp4"),
        require("@/assets/video/track/test.mp4"),
      ],

      headings: [
        "The Indoor Track",
        "The Outdoor Track",
        "The Bambino Track",
      ],

      descriptions: [
        // Indoor Description
        "Our indoor track is sure to satisfy your need for speed. As soon as you exit from the pit lane, the thrill\n" +
        "begins with a fast-paced, long right-hand corner into flat straight that ends with a double apex. After the\n" +
        "second apex is a steep decline into another long right-hand turn, under the bridge. Your lap finishes with a\n" +
        "tight right-hand corner and then a sprint to the finish line.",

        // Outdoor Description
        "This track is currently not available to book any session on yet. However, the good news is that it will\n" +
        "be soon. The outdoor track aims to incorporate the more technical aspects of karting with hairpin corners,\n" +
        "longer straights and more overtaking spots to ensure you and your rivals can battle the whole way around\n" +
        "the track.",

        // Bambino Description
        "The bambino track is located outside at the front of the building. The bambino track is a small oval shape\n" +
        "track that is occupied by our electric karts."
      ],

      trackType: [
        "Indoor",
        "Outdoor",
        "Outdoor"
      ],

      trackMax: [
        "6",
        "6",
        "2"
      ],

      trackAge: [
        "8 yrs and above",
        "8 yrs and above",
        "8 yrs and Under"
      ],

      trackKarts: [
        "Sodi SR5 & LR5",
        "Sodi RT8",
        "Sodi KIDRACER"
      ]
    }
  }
}
</script>

<style scoped>
.track-content {
  width: 100%;
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
  overflow: hidden;
}

.carousel-container {
  width: 95%;
  margin: auto;
  margin-block: 10px;
}

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

/* Track Videos */
.track-video-container {
  position: relative;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}

.not-available-screen {
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);
}

.not-available-content {
  font-size: 25px;
  letter-spacing: 5px;
  font-family: 'Bebas Neue', cursive;
}

.track-book-container {
  position: absolute;
  top: 0;
  right: 0;

  width: 200px;

  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  border-radius: 0 0 0 50px;
  color: #1b1b1b;
}

.track-book-btn {
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Bebas Neue', cursive;
  margin-block: 5px;
}

.track-video {
  width: 100%;
  max-width: 850px;
  margin: auto;
}

.track-info {
  width: 100%;
  max-width: 850px;

  margin: auto;

  background: #1f1f1f;
  border-radius: 0 0 10px 10px;
  color: white;

  text-align: left;
}

.info-detail {
  width: calc(100% - 40px);
  margin-inline: 20px;
  padding-block: 15px;
  text-align: left;
}

.info-heading {
  font-size: 20px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  padding-block: 5px;
}

.info-stats {
  margin-block-start: 15px;
  margin-block-end: 5px;
}

.info-title {
  font-size: 16px;
  font-family: 'Bebas Neue', cursive;
  padding-inline-end: 12px;
}
</style>