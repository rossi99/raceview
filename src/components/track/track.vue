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
        <div class="kart-content">
          <div class="kart-container">
            <!-- Image -->
            <div class="kart-img-container">
              <img :src='require("@/assets/image/track/karts/adult/adult-kart-shadow-1.png")' class="kart-img" alt="Raceview Sodi SR5 Kart">

              <!-- Info Points -->
              <!-- PROLINE (Surrounding Barrier) -->
              <div class="info-point-container transition" id="proline-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Absorption Device -->
              <div class="info-point-container transition" id="absorption-device-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Easy Drive -->
              <div class="info-point-container transition" id="easy-drive-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Adjustable Pedals 2D -->
              <div class="info-point-container transition" id="adjustable-pedals-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Integral-floor-covering -->
              <div class="info-point-container transition" id="integral-floor-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Adjustable Seat -->
              <div class="info-point-container transition" id="adjustable-seat-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Wheels -->
              <div class="info-point-container transition" id="wheels-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Covers -->
              <div class="info-point-container transition" id="plastic-cover-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Petrol Tank -->
              <div class="info-point-container transition" id="petrol-tank-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>

              <!-- Engine -->
              <div class="info-point-container transition" id="engine-btn">
                <div class="point-content">
                  <!-- Dot -->
                  <div class="point-dot centerScreen" id="show-proline-content"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="kart-info-container alignMiddle">
            <div class="kart-info">
              <div class="feature-container" id="proline-info">
                <!-- PROLINE (Surrounding Barrier) -->
                <div class="feature-title">
                  PROLINE&circledR; Barrier Technology
                </div>

                <div class="feature-description">
                  Loss of control and leaving the track limits are frequent in leisure karting, generating impacts
                  against track protective barriers or others karts. These frequent impacts can not only cause damage
                  to the kart structure and components, but also present a safety hazard to the driver. To reduce those
                  effects, but also avoid karts overriding or barriers penetrations, Sodi has developed a
                  “PROLINE”  360 all round high density plastic protection. PROLINE includes a front part, two side
                  parts (particularly protecting the wheels and engine), and a rear part (exhaust and transmission
                  protection). These different parts making up the PROLINE are attached to the frame with elastic
                  support blocks. This complete system offers great flexibility and deformation capabilities and therefore
                  enhance the energy absorption capacity.
                </div>
              </div>

              <div class="feature-container" id="absorption-device-info">
                <!-- Absorption Device -->
                <div class="feature-title">
                  Absorption Device
                </div>

                <div class="feature-description">
                  Sodi kart's patented HEAD System is a High-Energy Absorption Device system. This system, made of 2
                  specific properties cylinders, allows the front part to become distorted and to absorb frontal impact
                  energy.
                </div>
              </div>

              <div class="feature-container" id="easy-drive-info">
                <!-- Easy Drive -->
                <div class="feature-title">
                  Easy Drive
                </div>

                <div class="feature-description">
                  Designed by our R&D teams, this patented EASY DRIVE ® system provides unequalled comfort and driving
                  precision. A technological innovation whose priority is to make the driving experience more accessible.
                  This EASY DRIVE&circledR; system provides smoother and more precise steering. Whether you're an expert or an
                  amateur, this technology will satisfy all drivers.
                </div>
              </div>

              <div class="feature-container" id="adjustable-pedals-info">
                <!-- Adjustable Pedals 2D -->
                <div class="feature-title">
                  Adjustable Pedals
                </div>

                <div class="feature-description">
                  Patented adjustable pedal mechanism allowing pedals distance and height to be adapted to leg lengths
                  of the drivers and its feet size. This ergonomic adjustable pedal offers driving comfort and allows
                  the driver to benefit from optimum sensitivity and efficiency in braking or acceleration action. Adjustment
                  is a simple manual operation.
                </div>
              </div>

              <div class="feature-container" id="integral-floor-info">
                <!-- Integral Floor Covering -->
                <div class="feature-title">
                  Integral Floor Covering
                </div>

                <div class="feature-description">
                  Integral floor covering the petrol tank, steering column and steering tie rods, this feature is
                  providing a perfect protection of the drivers’ legs and enhances the comfort of the driver during
                  their session. The bodywork covering the tank is fitted with an opening allowing the fuel level in
                  the tank to be seen quickly by the track operator.
                </div>
              </div>

              <div class="feature-container" id="adjustable-seat-info">
                <!-- Adjustable Seat -->
                <div class="feature-title">
                  Adjustable Seat
                </div>

                <div class="feature-description">
                  Adjustable seat system on slides allowing the driving position to be improved. The “Easy-fit” system
                  benefits from an adjustment strap positioned behind the seat (if adjustment made by track operator) or
                  between the driver’s legs (if adjustment made by driver itself)  for easy and quick adjustment. A
                  single pull on the adjustment strap suffices to adapt the seat to the driver’s morphology.
                </div>
              </div>

              <div class="feature-container" id="wheels-info">
                <!-- Wheels -->
                <div class="feature-title">
                  Nylon Rods Concept
                </div>

                <div class="feature-description">
                  Sodi kart is the first manufacturer to have developed flexible nylon steering rods and integrate them
                  their product range some. This strong and flexible material allows the mechanical characteristics
                  needed for steering but offer the ability to deform in case of impact.
                </div>

                <div class="feature-title">
                  Fast Clips Braking System
                </div>

                <div class="feature-description">
                  Powerful performances and long lasting SODI KART brake system. Designed to reduce the time to change
                  brake pads and optimize maintenance operations. The fast clip braking system allows the technicians
                  to change brake pads in a few seconds only.
                </div>
              </div>

              <div class="feature-container" id="plastic-cover-info">
                <!-- Covers -->
                <div class="feature-title">
                  Engine Integral Covering
                </div>

                <div class="feature-description">
                  The engine cover is insulated protection against the heat released by the engine. It also protects
                  drivers, track marshals and operators against the risk of burns during driving or operations.
                </div>

                <div class="feature-title">
                  Full Rear Axle Covering
                </div>

                <div class="feature-description">
                  Integral rear bodywork element specially designed to cover the hot and rotating parts on the rear of
                  the kart. It is considerably reducing any risk of burns or strangling.
                </div>
              </div>

              <div class="feature-container" id="petrol-tank-info">
                <!-- Petrol Tank -->
                <div class="feature-title">
                  High Capacity Tank
                </div>

                <div class="feature-description">
                  Tank designed to offer greater capacity and allow maximum operating time. With 11 liters capacity,
                  constant thickness and an integrated hose passage, this tank increases the time between refuelling
                  and reduces the risk of failure.
                </div>
              </div>

              <div class="feature-container" id="engine-info">
                <!-- Engine -->
                <div class="feature-title">
                  Honda GX200 QX4
                </div>

                <div class="feature-description">
                  The Honda GX200 engine is ideal for heavy duty applications such as industrial equipment,
                  construction equipment, tillers, generators, welders, water pumps, and loads more. Being a 4-stroke
                  engine, it meets the worlds most stringent environmental legislation and emits very few emissions,
                  has low fuel and oil consumption and reduced vibration and noise levels.
                </div>
              </div>
            </div>
          </div>

          <div class="clearFix"></div>
        </div>

        <!-- Track & Times Container -->
        <div class="track-times-container">
          <div class="track-section">
            <!-- Track Heading -->
            <div class="subtitle-container">
              <div class="subtitle">
                Our Indoor Track
              </div>
            </div>

            <!-- Track -->
            <div class="track-content">
              <div class="video-container">
                <video class="track-video" id="background-video" playsinline autoplay muted loop>
                  <source :src='require("@/assets/video/track/lap_loop.mp4")' type="video/mp4">
                </video>
              </div>

              <div class="track-info">

              </div>
            </div>
          </div>

          <div class="times-section">
            <!-- Track Heading -->
            <div class="times-subtitle-container">
              <div class="subtitle">
                Lap Times
              </div>
            </div>

            <!-- Times -->
            <div class="times-content">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/nav/navbar";
import $ from "jquery";
export default {
  components: {
    Navbar
  },
  mounted: function () {
    // Variables
    // ~ Pointers
    let prolineBtn = $('#proline-btn');
    let prolineInfo = $('#proline-info');

    let absorptionDeviceBtn = $('#absorption-device-btn');
    let absorptionDeviceInfo = $('#absorption-device-info');

    let easyDriveBtn = $('#easy-drive-btn');
    let easyDriveInfo = $('#easy-drive-info');

    let adjustablePedalsBtn = $('#adjustable-pedals-btn');
    let adjustablePedalsInfo = $('#adjustable-pedals-info');

    let integralFloorBtn = $('#integral-floor-btn');
    let integralFloorInfo = $('#integral-floor-info');

    let adjustableSeatBtn = $('#adjustable-seat-btn');
    let adjustableSeatInfo = $('#adjustable-seat-info');

    let wheelsBtn = $('#wheels-btn');
    let wheelsInfo = $('#wheels-info');

    let plasticCoverBtn = $('#plastic-cover-btn');
    let plasticCoverInfo = $('#plastic-cover-info');

    let petrolTankBtn = $('#petrol-tank-btn');
    let petrolTankInfo = $('#petrol-tank-info');

    let engineBtn = $('#engine-btn');
    let engineInfo = $('#engine-info');

    // Functions
    // ~ Main Functions
    function setDefaults() {
      // set default active endpoint
      prolineBtn.addClass("active");

      // show default info
      prolineInfo.show();
    }

    function removeActivePoint() {
      prolineBtn.removeClass("active");
      absorptionDeviceBtn.removeClass("active");
      easyDriveBtn.removeClass("active");
      adjustablePedalsBtn.removeClass("active");
      integralFloorBtn.removeClass("active");
      adjustableSeatBtn.removeClass("active");
      wheelsBtn.removeClass("active");
      plasticCoverBtn.removeClass("active");
      petrolTankBtn.removeClass("active");
      engineBtn.removeClass("active");
    }

    function hideAllInfo() {
      prolineInfo.fadeOut(500);
      absorptionDeviceInfo.fadeOut(500);
      easyDriveInfo.fadeOut(500);
      adjustablePedalsInfo.fadeOut(500);
      integralFloorInfo.fadeOut(500);
      adjustableSeatInfo.fadeOut(500);
      wheelsInfo.fadeOut(500);
      plasticCoverInfo.fadeOut(500);
      petrolTankInfo.fadeOut(500);
      engineInfo.fadeOut(500);
    }

    // ~ Sub Functions
    function clickProline() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      prolineBtn.addClass("active");

      // show relevant info
      prolineInfo.delay(600).fadeIn(500);
    }
    function clickAbsorptionDevice() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      absorptionDeviceBtn.addClass("active");

      // show relevant info
      absorptionDeviceInfo.delay(600).fadeIn(500);
    }
    function clickEasyDrive() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      easyDriveBtn.addClass("active");

      // show relevant info
      easyDriveInfo.delay(600).fadeIn(500);
    }
    function clickAdjustablePedals() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      adjustablePedalsBtn.addClass("active");

      // show relevant info
      adjustablePedalsInfo.delay(600).fadeIn(500);
    }
    function clickIntegralFloor() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      integralFloorBtn.addClass("active");

      // show relevant info
      integralFloorInfo.delay(600).fadeIn(500);
    }
    function clickAdjustableSeat() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      adjustableSeatBtn.addClass("active");

      // show relevant info
      adjustableSeatInfo.delay(600).fadeIn(500);
    }
    function clickWheels() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      wheelsBtn.addClass("active");

      // show relevant info
      wheelsInfo.delay(600).fadeIn(500);
    }
    function clickPlasticCover() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      plasticCoverBtn.addClass("active");

      // show relevant info
      plasticCoverInfo.delay(600).fadeIn(500);
    }
    function clickPetrolTank() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      petrolTankBtn.addClass("active");

      // show relevant info
      petrolTankInfo.delay(600).fadeIn(500);
    }
    function clickEngine() {
      // remove active points
      removeActivePoint()

      // hide all info
      hideAllInfo()

      // set active point
      engineBtn.addClass("active");

      // show relevant info
      engineInfo.delay(600).fadeIn(500);
    }

    // Actions
    $(document).ready(function () {
      setDefaults();
    });

    prolineBtn.click(function () {
      clickProline();
    });
    absorptionDeviceBtn.click(function () {
      clickAbsorptionDevice();
    });
    easyDriveBtn.click(function () {
      clickEasyDrive();
    });
    adjustablePedalsBtn.click(function () {
      clickAdjustablePedals();
    });
    integralFloorBtn.click(function () {
      clickIntegralFloor();
    });
    adjustableSeatBtn.click(function () {
      clickAdjustableSeat();
    });
    wheelsBtn.click(function () {
      clickWheels();
    });
    plasticCoverBtn.click(function () {
      clickPlasticCover();
    });
    petrolTankBtn.click(function () {
      clickPetrolTank();
    });
    engineBtn.click(function () {
      clickEngine();
    });
  }
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

.kart-content {
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
}

.kart-container {
  width: 70%;
  height: 500px;
  position: relative;
  float: left;
}

.kart-img-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.kart-img {
  width: 700px;
}

/* Tips */
.info-point-container {
  position: absolute;
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
  border: 1px solid rgb(255, 255, 255);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.6;
}

.info-point-container:hover {
  cursor: pointer;
  opacity: 1;
}

.point-content {
  width: 100%;
  height: 100%;

  position: relative;
}

.point-dot {
  width: 10px;
  height: 10px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
}

.active {
  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  opacity: 1;
}

#proline-btn {
  top: 330px;
  left: 330px;
}

#absorption-device-btn {
  top: 295px;
  left: 50px;
}

#easy-drive-btn {
  top: 65px;
  left: 345px;
}

#adjustable-pedals-btn {
  top: 200px;
  left: 210px;
}

#integral-floor-btn {
  top: 225px;
  left: 300px;
}

#adjustable-seat-btn {
  top: 140px;
  left: 390px;
}

#wheels-btn {
  top: 155px;
  left: 80px;
}

#plastic-cover-btn {
  top: 150px;
  left: 530px;
}

#petrol-tank-btn {
  top: 165px;
  left: 330px;
}

#engine-btn {
  top: 10px;
  left: 310px;
}

.kart-info-container {
  width: 30%;
  height: 500px;
  float: left;
}

.kart-info {
  width: 90%;
  height: 90%;
  margin: auto;
  background: #1f1f1f;
  border-radius: 10px;
  overflow: scroll;
}

.feature-container {
  /* Hide */
  display: none;

  width: calc(100% - 40px);
  margin-inline-start: 20px;
  margin-inline-end: 20px;
  margin-block: 15px;
}

.feature-title {
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Bebas Neue', cursive;
  font-weight: bolder;
  margin-block-start: 15px;
  margin-block-end: 15px;
}

.feature-title:first-child {
  margin-block-start: 0;
}

/* ~ Track & Times */
.track-times-container {
  width: 100%;
}

.track-section {
  width: 60%;
  float: left;
}

.track-content {
  width: 95%;
  height: 500px;
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
  overflow: hidden;
}

.video-container {
  width: calc(100% - 20px);
  margin: auto;
  margin-block-start: 10px;
  margin-block-end: 20px;
}

.track-video {
  width: 100%;
  border-radius: 10px;
}

.track-info {

}

.times-section {
  width: 40%;
  float: right;
}

.times-content {
  width: 95%;
  height: 500px;
  margin-inline-start: 5%;
  background: #262626;
  border-radius: 10px;
  margin-block-end: 40px;
}

.times-subtitle-container {
  width: 95%;
  margin-inline-start: 5%;
  margin-block-end: 10px;
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