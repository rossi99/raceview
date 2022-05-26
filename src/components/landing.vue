<template>
  <div>
    <!-- Title Screen -->
    <div class="title-container">
      <!-- Video -->
      <div class="video-container">
        <video class="background-video" id="background-video" playsinline autoplay muted loop>
          <source src="https://raceviewkarting.com/wp-content/uploads/2021/09/Time-Trials-.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Menu -->
      <div class="menu-container">
        <div class="menu-content">
          <!-- Menu Button -->
          <div class="menu-icon-container">
            <div class="menu-btn transition alignMiddle" @click="showMenu = !showMenu">
              <div class="menu-icon-txt">
                <div v-if="!showMenu">
                  <span class="fa-solid fa-bars"></span>
                </div>

                <div v-if="showMenu">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Options -->
          <transition name="fade">
            <div v-if="showMenu" class="menu-content-container">
              <!-- Home -->
              <router-link :to="{ name: 'landing' }" class="menu-link">
                <div class="menu-option-row transition alignMiddle">
                  <div class="option-txt-container">
                    HOME
                  </div>
                </div>
              </router-link>

              <!-- Book -->
              <router-link :to="{ name: 'book' }" class="menu-link">
                <div class="menu-option-row transition alignMiddle">
                  <div class="option-txt-container">
                    BOOK
                  </div>
                </div>
              </router-link>

              <!-- Track & Karts -->
              <router-link :to="{ name: 'track' }" class="menu-link">
                <div class="menu-option-row transition alignMiddle">
                  <div class="option-txt-container">
                    TRACK & KARTS
                  </div>
                </div>
              </router-link>

              <!-- About -->
              <div class="menu-option-row transition alignMiddle">
                <div class="option-txt-container">
                  ABOUT
                </div>
              </div>

              <!-- FAQS -->
              <div class="menu-option-row transition alignMiddle">
                <div class="option-txt-container">
                  FAQS
                </div>
              </div>

              <!-- Auth -->
              <div class="menu-option-row transition alignMiddle">
                <div class="option-txt-container">
                  SIGN IN
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Text -->
      <div class="overlay-container">
        <div class="centerScreen" style="width: 100%">
          <!-- Logo -->
          <div class="logo-container">
            <img :src='require("@/assets/image/logo/logo.png")' class="landing-logo" alt="raceview logo">
          </div>

          <!-- Tagline -->
          <div class="tagline-container">
            The Ultimate Karting Experience
          </div>

          <!-- Book Button -->
          <div class="book-container">
            <router-link :to="{ name: 'book' }" style="color: white">
              <div class="book-btn transition">
                <p class="book-txt">EXPLORE</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Socials -->
      <div class="social-container">
        <div class="social-align">
          <!-- Facebook -->
          <a href="https://www.facebook.com/RaceviewIndoorKarting/" target="_blank">
            <div class="social-btn transition alignMiddle">
              <div class="social-btn-txt">
                <span class="fa-brands fa-facebook"></span>
              </div>
            </div>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/raceview_karting_/?hl=en" target="_blank">
            <div class="social-btn transition alignMiddle">
              <div class="social-btn-txt">
                <span class="fa-brands fa-instagram"></span>
              </div>
            </div>
          </a>

          <!-- Youtube -->
          <a href="https://raceviewkarting.com/wp-content/uploads/2021/09/Time-Trials-.mp4" target="_blank">
            <div class="social-btn transition alignMiddle">
              <div class="social-btn-txt">
                <span class="fa-brands fa-youtube"></span>
              </div>
            </div>
          </a>

          <!-- Address -->
          <a href="https://www.google.com/maps/dir/54.8339712,-5.8687488/Raceview+Karting,+1+Woodside+Rd+Industrial+Estate,+Ballymena+BT42+4QJ/@54.833675,-6.3306698,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4861b37203abb9d9:0x26919d80c33ab683!2m2!1d-6.2302778!2d54.8727778" target="_blank">
            <div class="social-btn transition alignMiddle">
              <div class="social-btn-txt">
                <i class="fa-solid fa-map-location-dot"></i>
              </div>
            </div>
          </a>

          <div class="clearFix"></div>
        </div>
      </div>

      <!-- Legal -->
      <div class="legal-container">
        <div class="legal-align alignMiddle">
          <div class="legal-txt">
            © 2022 | Raceview Karting
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import $ from 'jquery'

export default {
  setup() {
    const showMenu = ref(false)
    return { showMenu }
  },
  mounted: function () {
    // Variables
    let overlay = $('.overlay-container');
    let menu = $('.menu-container');
    let socials = $('.social-container');
    let legal = $('.legal-container');

    // Functions
    function showOverlay() {
      overlay.delay(3000).fadeIn(1000);
      menu.delay(3000).fadeIn(1000);
      socials.delay(3000).fadeIn(1000);
      legal.delay(3000).fadeIn(1000);
    }

    // Actions
    $(document).ready(function () {
      showOverlay();
    });
  }
};
</script>

<style scoped>
/* Video Title Screen */
.title-container {
  width: 100%;
  height: 100vh;

  position: relative;
}

/* Video */
.video-container {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.background-video {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

/* Overlay */
.overlay-container {
  /* Hide */
  display: none;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(0,0,0,0.6);
  color: white;
}

/* Menu */
.menu-container {
  /* Hide */
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}

.menu-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.menu-icon-container {
  margin-block-start: 15px;
  margin-inline-start: 20px;
}

.menu-btn {
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.5);
}

.menu-icon-txt {
  width: 100%;
  font-size: 22px;
  text-align: center;
}

.menu-btn:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
}

.menu-content-container {
  position: absolute;
  top: 0;
  left: 70px;
  width: 200px;
  border-radius: 10px;
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  border: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 20;
}

.menu-option-row {
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}

.menu-option-row:hover {
  cursor: pointer;
  color: rgb(255, 255, 255);
}

.menu-option-row:first-child {
  margin-block-start: 0;
}

.menu-option-row:last-child {
  margin-block-end: 0;
}

.option-txt-container {
  width: 85%;
  margin: auto;
}

.menu-link {
  text-decoration: none;
}

/* ~ Animating logo */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.2s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.2s ease;
}

/* Watch */
.watch-container {
  /* Hide */
  display: none;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
}

.watch-align {
  color: rgba(255, 255, 255, 0.5);
  height: 40px;
  margin-block-start: 15px;
  margin-inline-end: 20px;
}

/* Title Screen */
/* ~ Logo */
.landing-logo{
  width: 225px;
}

/* ~ Tagline */
.tagline-container {
  margin-block-end: 20px;
  width: 100%;
  font-size: 25px;
  letter-spacing: 7px;
  font-family: 'Bebas Neue', cursive;
}

/* ~ Book */
.book-container {
  width: 100%;
}

.book-btn {
  margin: auto;
  width: 200px;
  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  color: #1b1b1b;
  font-size: 18px;
  font-family: 'Bebas Neue', cursive;
  border-radius: 10px;
}

.book-txt {
  padding: 10px;
}

.book-btn:hover {
  cursor: pointer;
  letter-spacing: 3px;
}

/* Social */
.social-container {
  /* Hide */
  display: none;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.social-align {
  margin-block-end: 15px;
  margin-inline-start: 20px;
}

.social-btn {
  width: 40px;
  height: 40px;
  margin-inline-end: 10px;
  float: left;
  color: rgba(255, 255, 255, 0.5);
}

.social-btn-txt {
  width: 100%;
  font-size: 22px;
  text-align: center;
}

.social-btn:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
}

/* Legal */
.legal-container {
  /* Hide */
  display: none;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
}

.legal-align {
  color: rgba(255, 255, 255, 0.5);
  height: 40px;
  margin-block-end: 15px;
  margin-inline-end: 20px;
}

/*--| RESPONSIVE CSS |--*/
@media screen and (max-width: 540px) {
  .menu-icon-container {
    margin-block-start: 10px;
    margin-inline-start: 10px;
  }

  .menu-content-container {
    width: calc(100vw - 60px);
    top: 0;
    left: 55px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .landing-logo {
    width: 225px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 25px;
    letter-spacing: 4px;
  }

  .book-btn {
    width: 200px;
  }
}

@media screen and (max-width: 500px) {
  .menu-icon-container {
    margin-block-start: 7px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(100vw - 50px);
    top: 0;
    left: 45px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 230px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 23px;
    letter-spacing: 3px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 22px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 480px) {
  .menu-icon-container {
    margin-block-start: 7px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(100vw - 50px);
    top: 0;
    left: 45px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 230px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 23px;
    letter-spacing: 3px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 22px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 414px) {
  .menu-icon-container {
    margin-block-start: 7px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(100vw - 50px);
    top: 0;
    left: 45px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 230px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 23px;
    letter-spacing: 3px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 22px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 412px) {
  .menu-icon-container {
    margin-block-start: 7px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(100vw - 50px);
    top: 0;
    left: 45px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 230px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 23px;
    letter-spacing: 3px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 22px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 411px) {
  .menu-icon-container {
    margin-block-start: 7px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(100vw - 50px);
    top: 0;
    left: 45px;
  }

  .menu-option-row {
    height: 60px;
    color: rgb(255, 255, 255);
    font-size: 16px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 230px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 23px;
    letter-spacing: 3px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 22px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 384px) {
  .title-container {
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
  }

  .menu-icon-container {
    margin-block-start: 10px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(80vw - 55px);
    top: 0;
    left: 50px;
  }

  .menu-option-row {
    height: 50px;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 175px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 20px;
    letter-spacing: 2px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 20px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 375px) {
  .menu-icon-container {
    margin-block-start: 10px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(80vw - 55px);
    top: 0;
    left: 50px;
  }

  .menu-option-row {
    height: 50px;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .menu-icon-txt {
    font-size: 22px;
  }

  .landing-logo {
    width: 175px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 20px;
    letter-spacing: 2px;
  }

  .book-btn {
    width: 200px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .social-btn-txt {
    font-size: 20px;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 360px) {
  .menu-icon-container {
    margin-block-start: 10px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(80vw - 55px);
    top: 0;
    left: 50px;
  }

  .menu-option-row {
    height: 50px;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .landing-logo {
    width: 200px;
    margin-block-end: 0;
  }

  .tagline-container {
    font-size: 22px;
    letter-spacing: 5px;
  }

  .book-btn {
    width: 170px;
  }

  .book-txt {
    padding: 7px;
  }


  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 320px) {
  .menu-icon-container {
    margin-block-start: 10px;
    margin-inline-start: 7px;
  }

  .menu-content-container {
    width: calc(80vw - 55px);
    top: 0;
    left: 50px;
  }

  .menu-option-row {
    height: 50px;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }

  .landing-logo {
    width: 175px;
    margin-block-end: 20px;
  }

  .tagline-container {
    display: none;
  }

  .book-btn {
    width: 140px;
  }

  .book-txt {
    padding: 7px;
  }

  .social-container {
    width: 100%;
    bottom: 40px;
  }

  .social-align {
    margin-block-end: 0;
    margin-inline-start: 0;
  }

  .social-btn {
    width: calc(100% / 4);
    margin-inline-end: 0;
  }

  .legal-container {
    width: 100%;
  }

  .legal-align {
    width: 100%;
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  .legal-txt {
    width: 100%;
    text-align: center;
  }
}
</style>