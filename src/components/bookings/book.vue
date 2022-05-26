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
          <!-- Speed Trial Bronze -->
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
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/7EJ6AW-_ukmkEWgIptaZPAAC/availability"
              sessionAvailable="yes">
          </session-card>

          <!-- Speed Trial Silver -->
          <session-card
              sessionTitle="Speed Trial Silver"
              sessionRating="4"
              sessionNumberRating="3.9"

              sessionInfo=
                  "The Silver Speed Trail gives you a total 20 minutes of track time and as it is a time based session,
                  the goal is to be the quickest around our track. The session consists of four 5 minute sessions,
                  during which you will assigned a different kart for each, giving everyone a chance to set a fantastic
                  lap and getting on our leaderboard. For more information on our track and karts, see the 'Track & Karts'
                  page (the car icon located in the navigation bar)."

              sessionType="time"
              sessionPrice="£29.00"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/DaV6AXPU9kqSU5eRyKCCTQF9/availability"
              sessionAvailable="yes">
          </session-card>

          <!-- Speed Trial Gold -->
          <session-card
              sessionTitle="Speed Trial Gold"
              sessionRating="5"
              sessionNumberRating="5.0"

              sessionInfo=
                  "The Gold Speed Trail gives you a total 30 minutes of track time and as it is a time based session,
                  the goal is to be the quickest around our track. The session consists of three 10 minute sessions,
                  during which you will assigned a different kart for each, giving everyone a chance to set a fantastic
                  lap and getting on our leaderboard. For more information on our track and karts, see the 'Track & Karts'
                  page (the car icon located in the navigation bar)."

              sessionType="time"
              sessionPrice="£38.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/5o96AWdBSUGr6LtLeIpwmw93/availability">
          </session-card>
        </div>

        <!-- Sprints -->
        <div class="subtitle-container">
          <div class="subtitle">
            Sprints
          </div>
        </div>

        <div class="session-container">
          <!-- Sprint 30 -->
          <session-card
              sessionTitle="Sprint 30"
              sessionRating="4"
              sessionNumberRating="4.4"

              sessionInfo=
                  "The Sprint 30 consists of two different sessions. The first is a qualifying session that is 4 laps,
                   followed by a 30 lap race. The qualifying will be your chance to set a lightning fast lap that establishes
                   your starting point on the grid for the 30 lap race. For more information on our track and karts, see
                   the 'Track & Karts' page (the car icon located in the navigation bar)."

              sessionType="race"
              sessionPrice="£22.00"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/QlN6ASRBJU2NjpTDbdgeKQD8/availability"
              sessionAvailable="yes">
          </session-card>

          <!-- Sprint 60 -->
          <session-card
              sessionTitle="Sprint 60"
              sessionRating="5"
              sessionNumberRating="4.8"

              sessionInfo=
                  "The Sprint 60 consists of three different sessions. The first is a qualifying session that is 4 laps,
                   followed by two 30 lap races. The qualifying will be your chance to set a lightning fast lap that
                   establishes your starting point on the grid for the 30 lap race. After the first 30 lap race is
                   completed, the next session will be another 30 lap race, but this one starts with a reverse grid -
                   the fastest in qualifying will start at the back of the grid. For more information on our track and
                   karts, see the 'Track & Karts' page (the car icon located in the navigation bar)."

              sessionType="race"
              sessionPrice="£38.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/du97AYhFgECRX05w-A5miA40/availability"
              sessionAvailable="yes">
          </session-card>
        </div>

        <!-- Grand Pix -->
        <div class="subtitle-container">
          <div class="subtitle">
            Grand Prix
          </div>
        </div>

        <div class="session-container">
          <!-- Standard Grand Prix -->
          <session-card
              sessionTitle="Grand Prix"
              sessionRating="5"
              sessionNumberRating="5"

              sessionInfo=
                  "The Grand Prix is fast paced and ruthless as Formula 1 demonstrates every weekend. The Grand Prix
                   consists of four races per group. The first is a qualifying session, like the sprint sessions, it
                   gives you four laps to establish a starting grid position for the first heat. Heat 1 and heat 2 are
                   both 10 laps each with heat 2 being a reverse grid start. The final race in the Grand Prix is the Final.
                   This declares the winner of the overall session. For more information on our track and karts, see
                   the 'Track & Karts' page (the car icon located in the navigation bar)."

              sessionType="race"
              sessionPrice="£38.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/QlN6ASRBJU2NjpTDbdgeKQD8/availability"
              sessionAvailable="yes">
          </session-card>

          <!-- Championship -->
          <session-card
              sessionTitle="Championship"
              sessionRating="4"
              sessionNumberRating="4.1"

              sessionInfo=
                  "This is best experience Raceview can offer larger groups of 20 plus. A Championship will have the entire
                   party split into small groups of 4 or 5 and each or these groups will then compete in multiple 4 lap
                   heats with the groups changing every heat. From these heats, 2 finals will be created and will consist of
                   the top 10 point scorers from the heats. The For more information on our track and karts, see the
                   'Track & Karts' page (the car icon located in the navigation bar)."

              sessionType="race"
              sessionPrice="£38.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/du97AYhFgECRX05w-A5miA40/availability"
              sessionAvailable="no">
          </session-card>
        </div>

        <!-- Unlimited Laps -->
        <div class="subtitle-container">
          <div class="subtitle">
            Unlimited Laps
          </div>
        </div>

        <div class="session-container">
          <!-- Unlimited Laps -->
          <session-card
              sessionTitle="Unlimited Laps"
              sessionRating="5"
              sessionNumberRating="5"

              sessionInfo=
                  "The unlimited laps is the longest and best value for money session available at Raceview. The unlimited
                   laps session gives you one hour of non-stop track time during which you can come on and off the track
                   as much as you like. You will have 1 hour to set the fast lap you can and our track team will be on hand
                   to assist with this. Note: This session is limited to 6 people on track at once. For more information
                   on our track and karts, see the 'Track & Karts' page (the car icon located in the navigation bar)."

              sessionType="time"
              sessionPrice="£49.50"
              sessionLink="https://flow.alphatiming.co.uk/raceviewkarting/book/activity/zRh8AYFthUGAMEo4FPFDcA02/availability"
              sessionAvailable="yes">
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