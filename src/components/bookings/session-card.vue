<template>
  <div>
    <div class="session-card-container">
      <div class="session-card transition" :class="{ 'border-gradient': isLimitedOffer }">
        <div class="card-content">
          <!-- Title -->
          <div class="session-title alignMiddle">
            <div class="title-align">
              {{ sessionTitle }}
            </div>
          </div>

          <!-- Session Rating-->
          <div class="session-info-container">
            <div class="session-rating-container">
              <div class="rating-align">
                <!-- 1 Star  -->
                <div v-if="sessionRating === '1'">
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>

                  <span>( {{ sessionNumberRating }} )</span>
                </div>

                <!-- 2 Star  -->
                <div v-if="sessionRating === '2'">
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>

                  <span>( {{ sessionNumberRating }} )</span>
                </div>

                <!-- 3 Star  -->
                <div v-if="sessionRating === '3'">
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>

                  <span>( {{ sessionNumberRating }} )</span>
                </div>

                <!-- 4 Star  -->
                <div v-if="sessionRating === '4'">
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star unfilled-star icon-space-right"></i>

                  <span>( {{ sessionNumberRating }} )</span>
                </div>

                <!-- 5 Star  -->
                <div v-if="sessionRating === '5'">
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>
                  <i class="fa-solid fa-star filled-star icon-space-right"></i>

                  <span>( {{ sessionNumberRating }} )</span>
                </div>
              </div>
            </div>

            <div class="session-reviews-container">
              <div class="reviews-align">
                <span class="reviews-txt">read reviews</span>
              </div>
            </div>

            <div class="clearFix"></div>
          </div>

          <!-- Session Description -->
          <div class="session-description-container">
            <div class="description-text-container">
              {{ sessionInfo }}
            </div>
          </div>

          <!-- Session Details (Big Screen) -->
          <div class="session-detail-container">
            <!-- Session Type -->
            <div class="session-details-slot alignMiddle">
              <div class="session-detail-align">
                <div class="detail-title">Type</div>

                <div class="detail-value">
                  <div v-if="sessionType === 'time'">
                    <span class="fa-solid fa-clock icon-space-right"></span>
                    <span class="time-type"></span>
                  </div>

                  <div v-if="sessionType === 'race'">
                    <span class="fa-solid fa-flag-checkered icon-space-right"></span>
                    <span class="race-type"></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Session People -->
            <div class="session-details-slot alignMiddle">
              <div class="session-detail-align">
                <div class="detail-title">Group</div>

                <div class="detail-value">
                  <span class="fa-solid fa-person icon-space-right"></span>
                  <span>Max 6</span>
                </div>
              </div>
            </div>

            <!-- Session Price -->
            <div class="session-details-slot alignMiddle">
              <div class="session-detail-align">
                <div class="detail-title">Price</div>

                <div class="detail-value">
                  {{ sessionPrice }} <span class="pp-price"></span>
                </div>
              </div>
            </div>

            <!-- Session Book Btn -->
            <div class="session-book-slot alignMiddle">
              <div class="session-book-align">
                <!-- If session is available -->
                <div v-if="sessionAvailable">
                  <a :href="sessionLink">
                    <div class="book-btn alignMiddle transition">
                      <div class="book-btn-text">Book Now</div>
                    </div>
                  </a>
                </div>

                <!-- If session is not available -->
                <div v-if="!sessionAvailable">
                  <div class="disabled-book-btn alignMiddle transition">
                    <div class="book-btn-text">Not Available</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="clearFix"></div>
          </div>

          <!-- Session Details (Small Screen) -->
          <div class="small-session-detail-container">

            <div class="table-detail-container">
              <table>
                <!-- Session Type -->
                <tr class="table-row">
                  <td class="table-title">
                    <div class="table-detail-title">
                      Type:
                    </div>
                  </td>
                  <td class="table-value">
                    <div v-if="sessionType === 'time'">
                      <span class="fa-solid fa-clock"></span>
                    </div>

                    <div v-if="sessionType === 'race'">
                      <span class="fa-solid fa-flag-checkered"></span>
                    </div>
                  </td>
                </tr>

                <!-- Session People -->
                <tr class="table-row">
                  <td class="table-title">
                    <div class="table-detail-title">
                      Group:
                    </div>
                  </td>
                  <td class="table-value">
                    <span>Max 6</span>
                  </td>
                </tr>

                <!-- Session Price -->
                <tr class="table-row">
                  <td class="table-title">
                    <div class="table-detail-title">
                      Swag:
                    </div>
                  </td>
                  <td class="table-value">
                    {{ sessionPrice }} <span class="pp-price"></span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Session Book Btn -->
            <div class="session-book-slot alignMiddle">
              <div class="session-book-align">
                <!-- If session is available -->
                <div v-if="sessionAvailable">
                  <a :href="sessionLink">
                    <div class="book-btn alignMiddle transition">
                      <div class="book-btn-text">
                        Book Now
                      </div>
                    </div>
                  </a>
                </div>

                <!-- If session is not available -->
                <div v-if="!sessionAvailable">
                  <div class="disabled-book-btn alignMiddle transition">
                    <div class="book-btn-text">
                      Not Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="clearFix"></div>
          </div>

          <div class="clearFix"></div>
        </div>
      </div>

      <div class="limited-container" :class="{ 'show-limited': isLimitedOffer }">
        <div class="limited-content alignMiddle">
          <div class="limited-align">
            <vue-countdown :time="7 * 24 * 60 * 60 * 1000" v-slot="{ days }">
              Limited Offer | {{ days }} day(s) remaining
            </vue-countdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sessionTitle: String,
    sessionRating: String,
    sessionNumberRating: String,
    sessionInfo: String,
    sessionType: String,
    sessionPrice: String,
    sessionLink: String,
    sessionAvailable: Boolean,
    isLimitedOffer: Boolean,
  },
};
</script>

<style scoped>
.session-card-container {
  width: 100%;
  margin-block-end: 80px;
  position: relative;
}

.session-card {
  width: 100%;
  margin: auto;
  background: #262626;
  border-radius: 10px;
}

.card-content {
  margin-inline-start: 20px;
  margin-inline-end: 20px;
}

.session-title {
  width: 100%;
  height: 60px;

  font-size: 20px;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', cursive;

  margin-block-start: 15px;
}

.title-align {
  width: 100%;
}

.session-info-container {
  width: 100%;
  margin-block-end: 20px;
}

.session-rating-container {
  width: calc(100% / 2);
  float: left;
}

.rating-align {
  width: 100%;
  text-align: left;
}

.filled-star {
  color: rgba(255, 255, 255, 1);
}

.unfilled-star {
  color: rgba(255, 255, 255, 0.3);
}

.session-reviews-container {
  width: calc(100% / 2);
  float: right;
}

.reviews-align {
  width: 100%;
  text-align: right;
}

.reviews-txt {
  color: rgba(255, 255, 255, 0.4);
  font-variant: small-caps;
}

.reviews-txt:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
}

.session-description-container {
  width: 100%;

  border: 1px solid #262626;
  border-radius: 10px;
  background: #1f1f1f;

  margin-block-end: 30px;
}

.description-text-container {
  width: calc(100% - 40px);
  padding-inline-start: 10px;
  padding-inline-end: 10px;

  padding-block-start: 10px;
  padding-block-end: 10px;
  margin: auto;
}

.session-detail-container {
  width: 100%;
  margin-block-end: 30px;
}

.session-details-slot {
  width: calc(100% / 4);
  height: 50px;
  float: left;
}

.session-detail-align {
  width: 100%;
}

.detail-title {
  width: 100%;
  margin-block-end: 10px;
  font-size: 18px;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', cursive;
}

.detail-value {
  width: 100%;
}

.time-type::before {
  content: "Time Trial";
}

.race-type::before {
  content: "Race";
}

.pp-price::before {
  content: "per person";
}

.session-book-slot {
  width: calc(100% / 4);
  height: 50px;
  float: left;
}

.session-book-align {
  width: 100%;
}

.book-btn {
  width: 60%;
  height: 45px;
  float: right;
  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  color: #1b1b1b;
  border-radius: 10px;
  letter-spacing: 1px;
}

.book-btn:hover {
  cursor: pointer;
  letter-spacing: 3px;
}

.book-btn-text {
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: 'Bebas Neue', cursive;
}

.disabled-book-btn {
  width: 60%;
  height: 45px;
  float: right;
  background: #686868;
  color: #1b1b1b;
  border-radius: 10px;
  letter-spacing: 1px;
}

.disabled-book-btn:hover {
  cursor: not-allowed;
}

/* Small Screen Booking Details */
.small-session-detail-container {
  /* Hide on Big Screens */
  display: none;

  width: 100%;
  margin-block-end: 30px;
}

.table-detail-container {
  width: 90%;
  margin: auto;
  margin-block-end: 15px;
}

.table-detail-title {
  width: 100%;
  margin-block-end: 0;
  font-size: 18px;
  letter-spacing: 3px;
  font-family: 'Bebas Neue', cursive;
}

.table-row {
  height: 35px;
}

.table-title {
  width: 30%;
}

.table-value {
  width: 50%;
}

/* Limited Offer Design */
.border-gradient {
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
}

.limited-container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.limited-content {
  width: 80%;
  max-width: 400px;
  height: 40px;
  margin: auto;
  background: rgb(25,238,2);
  background: linear-gradient(45deg, rgba(25,238,2,1) 7%, rgba(224,229,0,1) 100%);
  border-radius: 5px;
  color: #1b1b1b;
}

.limited-align {
  width: 100%;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-size: 17px;
}

.show-limited {
  display: block !important;
}

/*--| RESPONSIVE CSS |--*/
@media screen and (max-width: 980px) {
  .disabled-book-btn {
    width: 80%;
  }

  .book-btn {
    width: 80%;
  }
}

@media screen and (max-width: 845px) {
  .pp-price::before {
    content: "pp";
  }

  .time-type::before {
    content: "Timed";
  }
}

@media screen and (max-width: 810px) {
  .book-btn {
    width: 100%;
    height: 40px;
  }
}

@media screen and (max-width: 700px) {
  .disabled-book-btn {
    width: 95%;
  }

  .book-btn {
    width: 95%;
  }
}

@media screen and (max-width: 675px) {
  .session-details-slot {
    width: calc(100% / 3);
    height: 60px;

    margin-block-end: 30px;
  }

  .session-detail-align {
    width: 100%;
    text-align: center;
  }

  .session-book-slot {
    width: 100%;
    height: 60px;
  }

  .session-book-align {
    width: 100%;
    text-align: center;
  }

  .book-btn {
    width: 50%;
    height: 40px;
    float: none;
    margin: auto;
  }

  .disabled-book-btn {
    width: 50%;
    height: 40px;
    float: none;
    margin: auto;
  }
}

@media screen and (max-width: 590px) {
  .description-text-container {
    width: calc(100% - 20px);
    padding-inline-start: 10px;
    padding-inline-end: 10px;

    padding-block-start: 10px;
    padding-block-end: 10px;
    margin: auto;
  }
}

@media screen and (max-width: 450px) {
  .session-description-container {
    height: 150px;
    overflow: scroll;
  }
}

@media screen and (max-width: 430px) {
    .card-content {
      margin-inline-start: 10px;
      margin-inline-end: 10px;
    }

    .session-title {
      text-align: center;
      height: 70px;
    }

    .session-detail-container {
      margin-block-end: 15px;
    }

    .session-rating-container {
      width: 100%;
      float: none;
      margin-block-end: 10px;
    }

    .rating-align {
      text-align: center;
    }

    .session-reviews-container {
      width: 100%;
      float: none;
    }

    .reviews-align {
      text-align: center;
    }
}

@media screen and (max-width: 390px) {
  .session-detail-container {
    /* Hide details for big screen */
    display: none;
  }

  .small-session-detail-container {
    display: block;
  }

  .book-btn {
    width: 70%;
    height: 45px;
  }
}
</style>