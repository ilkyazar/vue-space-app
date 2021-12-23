<template>
  <div class="dashboard">
    <AstronomyPictureOfDay :apodDetails="details" />
  </div>
</template>

<script>
import AstronomyPictureOfDay from "@/components/AstronomyPictureOfDay";

export default {
  name: "Dashboard",
  components: { AstronomyPictureOfDay },
  data() {
    return {
      details: {},
    };
  },
  beforeMount() {
    fetch(
      `${process.env.VUE_APP_NASA_URL}api_key=${
        process.env.VUE_APP_API_KEY
      }&date=${
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate()
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        data.title = "Astronomy Picture Of The Day: " + data.title;
        this.details = data;
      });
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 50px 150px;
}
</style>
