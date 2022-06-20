<template>
  <div class="times-content">
    <div class="leaderboard-container">
      <div v-for="(item, index) in rows" :key="index" class="lap-row">
        <div :class="(positions[index] === '1st') ? 'first-lap' : 'other-lap'">
          <!-- Position -->
          <div class="position-container">
            <div :class="{ 'pole-position':(positions[index] === '1st') }" class="position centerScreen alignMiddle">
              <div class="position-align">
                {{ positions[index] }}
              </div>
            </div>
          </div>

          <!-- Kart Number -->
          <div class="kart-no-container">
            <div class="kart-no">
              {{ kartNo[index] }}
            </div>

            <div class="kart-img-container">
              <img :src='require("@/assets/image/track/laps/leaderboard-kart.png")' class="kart-img" alt="Sideview of kart">
            </div>
          </div>

          <!-- Lap Details -->
          <div :class="(positions[index] === '1st') ? 'first-lap-details' : 'other-lap-details'" class="lap-details-container">
            <!-- Name Container -->
            <!-- Lap Time Container -->
          </div>

          <div class="clearFix" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      rows: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],

      positions: [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th"
      ],

      kartNo: [
        33,
        27,
        85,
        33,
        33,
        11,
        55,
        7,
        44,
        27
      ],

      name: [
        "Ronan Doherty",
        "Ross Currie",
        "James Millar",
        "Sean McClements",
        "Michael Read",
        "Curtis McIlhagga",
        "Rhys Logan",
        "Ben Millar",
        "Patrick Huey",
        "Rain O'Boyle"
      ],

      time: [
        "15:430",
        "15:889",
        "15:892",
        "15:910",
        "16:010",
        "16:223",
        "16:410",
        "16:530",
        "16:842",
        "16:937"
      ],
    }
  }
}
</script>

<style scoped>
.times-content {
  width: 100%;
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
  overflow: hidden;
}

.leaderboard-container {
  width: 95%;
  max-width: 850px;
  margin: auto;
  margin-block-start: 20px;
  margin-block-end: 20px;
}

.lap-row {
  width: 100%;
  height: 70px;
  margin-block-start: 5px;
  margin-block-end: 5px;
  overflow: hidden;
}

.lap-row:first-child {
  border-top-left-radius: 15px;
}

.lap-row:last-child {
  border-bottom-left-radius: 15px;
}

.first-lap {
  width: 100%;
  height: 70px;
  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  color: #1b1b1b;
  clip-path: polygon(100% 0, 100% 0, 95% 100%, 0 100%, 0 0);
}

.other-lap {
  width: 95%;
  height: 70px;
  background: #1f1f1f;
}

.position-container {
  width: 80px;
  height: 70px;

  position: relative;

  float: left;
  font-weight: bolder;
}

.pole-position {
  border-radius: 10px;
}

.position {
  width: 45px;
  height: 45px;

  background: #262626;
  border-radius: 50%;
  color: white;
}

.position-align {
  width: 100%;
  text-align: center;
}

.kart-no-container {
  width: 170px;
  height: 70px;
  position: relative;

  float: left;
}

.kart-no {
  position: absolute;
  top: 0;

  width: 100%;
  text-align: center;

  font-size: 40px;
  font-family: 'Bebas Neue', cursive;
}

.kart-img-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.kart-img {
  width: 90px;
}

.first-lap-details {
  width: calc(95% - 250px);
}

.other-lap-details {
  width: calc(100% - 250px);
}

.lap-details-container {
  height: 70px;
  float: left;
}
</style>