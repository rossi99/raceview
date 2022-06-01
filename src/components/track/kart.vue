<template>
  <div>
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
  </div>
</template>

<script>
import $ from "jquery";

export default {
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
      easyDriveBtn.addClass("active");

      // show default info
      easyDriveInfo.show();
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

/*--| RESPONSIVE CSS |--*/
@media screen and (max-width: 1280px) {
  .kart-img {
    width: 550px;
  }

  .info-point-container {
    width: 25px;
    height: 25px;
  }

  #proline-btn {
    top: 260px;
    left: 255px;
  }

  #absorption-device-btn {
    top: 230px;
    left: 40px;
  }

  #easy-drive-btn {
    top: 50px;
    left: 270px;
  }

  #adjustable-pedals-btn {
    top: 160px;
    left: 170px;
  }

  #integral-floor-btn {
    top: 175px;
    left: 230px;
  }

  #adjustable-seat-btn {
    top: 115px;
    left: 300px;
  }

  #wheels-btn {
    top: 125px;
    left: 65px;
  }

  #plastic-cover-btn {
    top: 120px;
    left: 420px;
  }

  #petrol-tank-btn {
    top: 130px;
    left: 260px;
  }

  #engine-btn {
    top: 10px;
    left: 245px;
  }
}

@media screen and (max-width: 1000px) {
  .kart-container {
    width: 100%;
    height: 350px;
    float: none;
  }

  .kart-info-container {
    width: 100%;
    height: 200px;
    float: none;
  }

  .kart-info {
    margin-block-end: 15px;
  }

  .feature-container {
    width: calc(100% - 30px);
    margin-inline-start: 15px;
    margin-inline-end: 15px;
  }
}

@media screen and (max-width: 740px) {
  .kart-img {
    width: 475px;
  }

  .info-point-container {
    width: 23px;
    height: 23px;
  }

  #proline-btn {
    top: 225px;
    left: 215px;
  }

  #absorption-device-btn {
    top: 200px;
    left: 35px;
  }

  #easy-drive-btn {
    top: 40px;
    left: 225px;
  }

  #adjustable-pedals-btn {
    top: 135px;
    left: 145px;
  }

  #integral-floor-btn {
    top: 150px;
    left: 200px;
  }

  #adjustable-seat-btn {
    top: 100px;
    left: 265px;
  }

  #wheels-btn {
    top: 100px;
    left: 55px;
  }

  #plastic-cover-btn {
    top: 104px;
    left: 350px;
  }

  #petrol-tank-btn {
    top: 110px;
    left: 220px;
  }

  #engine-btn {
    top: 5px;
    left: 200px;
  }

  .kart-info {
    width: 95%;
    height: 95%;
  }
}

@media screen and (max-width: 650px) {
  .kart-img {
    width: 400px;
  }

  .info-point-container {
    width: 20px;
    height: 20px;
  }

  .point-dot {
    width: 8px;
    height: 8px;
  }

  #proline-btn {
    top: 190px;
    left: 180px;
  }

  #absorption-device-btn {
    top: 165px;
    left: 25px;
  }

  #easy-drive-btn {
    top: 40px;
    left: 195px;
  }

  #adjustable-pedals-btn {
    top: 115px;
    left: 120px;
  }

  #integral-floor-btn {
    top: 130px;
    left: 170px;
  }

  #adjustable-seat-btn {
    top: 80px;
    left: 220px;
  }

  #wheels-btn {
    top: 85px;
    left: 45px;
  }

  #plastic-cover-btn {
    top: 85px;
    left: 300px;
  }

  #petrol-tank-btn {
    top: 95px;
    left: 185px;
  }

  #engine-btn {
    top: 5px;
    left: 180px;
  }
}

@media screen and (max-width: 440px) {
  .kart-container {
    height: 300px;
  }

  .kart-img {
    width: 350px;
  }

  #proline-btn {
    top: 162px;
    left: 160px;
  }

  #absorption-device-btn {
    top: 145px;
    left: 20px;
  }

  #easy-drive-btn {
    top: 40px;
    left: 150px;
  }

  #adjustable-pedals-btn {
    top: 100px;
    left: 110px;
  }

  #integral-floor-btn {
    top: 110px;
    left: 150px;
  }

  #adjustable-seat-btn {
    top: 70px;
    left: 200px;
  }

  #wheels-btn {
    top: 75px;
    left: 40px;
  }

  #plastic-cover-btn {
    top: 75px;
    left: 255px;
  }

  #petrol-tank-btn {
    top: 75px;
    left: 160px;
  }

  #engine-btn {
    top: 5px;
    left: 160px;
  }
}

@media screen and (max-width: 380px) {
  .kart-container {
    height: 275px;
  }

  .kart-img {
    width: 325px;
  }

  .info-point-container {
    width: 22px;
    height: 22px;
  }

  .point-dot {
    width: 10px;
    height: 10px;
  }

  #proline-btn {
    display: none;
  }

  #absorption-device-btn {
    top: 135px;
    left: 20px;
  }

  #easy-drive-btn {
    top: 30px;
    left: 130px;
  }

  #adjustable-pedals-btn {
    top: 90px;
    left: 100px;
  }

  #integral-floor-btn {
    display: none;
  }

  #adjustable-seat-btn {
    top: 40px;
    left: 190px;
  }

  #wheels-btn {
    display: none;
  }

  #plastic-cover-btn {
    top: 75px;
    left: 235px;
  }

  #petrol-tank-btn {
    top: 75px;
    left: 150px;
  }

  #engine-btn {
    top: 5px;
    left: 145px;
  }
}

@media screen and (max-width: 360px) {
  .kart-container {
    height: 250px;
  }

  .kart-img {
    width: 300px;
  }

  .info-point-container {
    width: 21px;
    height: 21px;
  }

  .point-dot {
    width: 10px;
    height: 10px;
  }

  #absorption-device-btn {
    top: 120px;
    left: 18px;
  }

  #easy-drive-btn {
    top: 28px;
    left: 145px;
  }

  #adjustable-pedals-btn {
    top: 90px;
    left: 90px;
  }

  #adjustable-seat-btn {
    top: 20px;
    left: 190px;
  }

  #plastic-cover-btn {
    top: 60px;
    left: 220px;
  }

  #petrol-tank-btn {
    top: 65px;
    left: 135px;
  }

  #engine-btn {
    top: 0;
    left: 120px;
  }
}
</style>