<template>
  <div>
    <navbar></navbar>

    <div class="content">
      <!-- Page Title -->
      <div class="title-container">
        <div class="title-align">
          BOOK A SESSION
        </div>
      </div>

      <div class="page-intro">
        Raceview offers a variety of different session to suit everyone. From speed trials, where you compete for the
        fastest lap to Sprints, where the first to cross line wins. Before booking, please ensure that all drivers
        fit the criteria to race. For more information on this or bookings, please see the
        <router-link :to="{ name: 'landing' }" class="menu-link" style="text-decoration: underline">FAQ page</router-link>
        or get in touch using the <a href="tel:028 2565 1000" class="menu-link" style="text-decoration: underline">phone</a> or
        <a href="mailto:info@raceviewkarting.com" class="menu-link" style="text-decoration: underline">email</a>.
      </div>

      <!-- Page Content -->
      <div class="page-content">
        <!-- Speed Trails -->
        <div class="subtitle-container">
          <div class="subtitle">
            SPEED TRAILS
          </div>
        </div>

        <div class="session-container">
          <session-card
              sessionTitle="Speed Trial Bronze"
              sessionRating="2"
              sessionNumberRating="2.2"

              sessionInfo=
                  "The Bronze Speed Trail gives you a total 15 minutes of track time and as it is a time based session,
                  the goal is to be the quickest around our track. The session consists of three 5 minute sessions,
                  during which you will assigned a different kart for each, giving everyone a chance to set a fantastic
                  lap and getting on our leaderboard. For more information on our track and karts, see the 'Track & Karts'
                  page (the car icon located in the navigation bar)."

              sessionType="time"
              sessionPrice="£22.00"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/7EJ6AW-_ukmkEWgIptaZPAAC/availability">
          </session-card>

          <session-card
              sessionTitle="Speed Trial Silver"
              sessionRating="4"
              sessionNumberRating="3.9"
              sessionType="time"
              sessionPrice="£29.00"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/DaV6AXPU9kqSU5eRyKCCTQF9/availability">
          </session-card>

          <session-card
              sessionTitle="Speed Trial Gold"
              sessionRating="5"
              sessionNumberRating="5.0"
              sessionType="time"
              sessionPrice="£38.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/5o96AWdBSUGr6LtLeIpwmw93/availability">
          </session-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/nav/navbar";
import SessionCard from "@/components/bookings/session-card";
export default {
  components: {SessionCard, Navbar}
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

.page-intro {
  width: calc(100% - 15px);
  margin-block-end: 30px;
}

/* Content */
.page-content {
  width: calc(100% - 15px);
  margin-inline-end: 15px;
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

.session-container {
  width: calc(100% - 10px);
  margin-block-start: 10px;
  margin-block-end: 20px;
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

  .session-container {
    width: 100%;
    margin-block-start: 10px;
    margin-block-end: 20px;
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

  .page-intro {
    width: 100%;
    margin-block-end: 20px;
  }

  .subtitle {
    font-size: 20px;
    letter-spacing: 5px;
    font-family: 'Bebas Neue', cursive;
  }
}
</style>