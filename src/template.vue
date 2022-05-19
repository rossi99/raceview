<template>
  <div>
    <navbar></navbar>

    <div class="page">
      <div class="content">
        <!-- Page Title -->
        <div class="title-container alignMiddle">
          <div class="title-align">
            BOOK YOUR SESSION
          </div>
        </div>

        <!-- Page Content -->
        <div class="page-content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/nav/navbar";

export default {
  components: {Navbar}
}
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}

.content {
  width: calc(100% - 140px);
  height: 100vh;
  margin-inline-start: 140px;
}

/* Title */
.title-container {
  width: 100%;
  height: 100px;
  color: white;
  font-size: 30px;
  letter-spacing: 5px;
  font-family: 'Bebas Neue', cursive;
}

/* Content */
.content {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>