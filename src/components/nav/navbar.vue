<template>
  <div>
    <div class="nav-container alignMiddle">
      <div class="navbar dark-glass-effect">
        <!-- Logo -->
        <div class="logo-container">
          <div class="overlay alignMiddle">
            <div class="logo-align">
              <img :src='require("@/assets/image/logo/logo.png")' class="nav-logo" alt="raceview logo">
            </div>
          </div>
        </div>

        <!-- Home Button -->
        <div class="nav-option-container alignMiddle" id="home-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'landing' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <span class="fa-solid fa-house"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Book Button -->
        <div class="nav-option-container alignMiddle" id="book-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'book' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <span class="fa-solid fa-flag-checkered"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Track & Kart Button -->
        <div class="nav-option-container alignMiddle" id="track-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'track' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <i class="fa-solid fa-car"></i>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- About Button -->
        <div class="nav-option-container alignMiddle" id="about-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'landing' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <span class="fa-solid fa-circle-info"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- FAQs Button -->
        <div class="nav-option-container alignMiddle" id="faqs-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'landing' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <span class="fa-solid fa-circle-question"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Auth Button -->
        <div class="nav-option-container alignMiddle" id="auth-btn">
          <div class="icon-container-align">
            <router-link :to="{ name: 'landing' }" class="menu-link">
              <div class="icon-container transition alignMiddle">
                <div class="icon-align">
                  <span class="fa-solid fa-user"></span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-container {
  position: fixed;
  left: 0;

  width: 125px;
  height: 100vh;

  z-index: 100;
}

.navbar {
  width: 80px;
  overflow: hidden;
  margin: auto;
}

.logo-container {
  width: 100%;
  height: 90px;
  margin-block-end: 15px;

  /* Custom Shape */
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% calc(100% - 10px),
    0% 100%
  );

  position: relative;

  background: url('~@/assets/image/nav/navigation-logo-bg.png') no-repeat;
  background-size: 150px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
}

.logo-align {
  width: 100%;
  text-align: center;
}

.nav-logo {
  width: 70px;
}

/* Navigation Links */
.nav-option-container {
  width: 100%;
  height: 60px;
  margin-block-start: 7px;
  margin-block-end: 7px;
}

.icon-container-align {
  width: 100%;
}

.icon-container {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: auto;
}

.icon-container:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

.icon-align {
  width: 100%;
  text-align: center;
  font-size: 17px;
}

.router-link-exact-active {
  color: white;
}

/*--| RESPONSIVE CSS |--*/
@media screen and (max-width: 590px) {
  .nav-container {
    position: fixed;
    bottom: 0;

    width: 100vw;
    height: 100px;
  }

  .navbar {
    width: 95%;
    height: 70px;
    margin: auto;
  }

  /* Nav Icons & Logo */
  .logo-container {
    width: 20%;
    height: 70px;
    float: left;
    margin-block-end: 0;

    /* Custom Shape */
    clip-path: polygon(0% 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }

  .nav-option-container {
    width: calc(80% / 4);
    height: 70px;
    float: left;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  #about-btn {
    display: none;
  }

  #faqs-btn {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  /* Nav Icons & Logo */
  .logo-container {
    width: 25%;
    height: 70px;
    float: left;
    margin-block-end: 0;

    /* Custom Shape */
    clip-path: polygon(0% 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
  }

  .nav-option-container {
    width: calc(75% / 4);
    height: 70px;
    float: left;
    margin-block-start: 0;
    margin-block-end: 0;
  }
}

@media screen and (max-width: 450px) {
  .navbar {
    width: 95%;
    height: 60px;
    margin: auto;
  }

  /* Nav Icons & Logo */
  .logo-container {
    display: none;
  }

  .nav-option-container {
    width: calc(100% / 4);
    height: 60px;
    float: left;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .icon-container {
    width: 45px;
    height: 45px;
  }

  .icon-container:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>