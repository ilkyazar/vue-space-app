<template>
  <template v-if="details"
    ><AstronomyPictureOfDay :apodDetails="details"
  /></template>
  <template v-else>No data</template>
</template>

<script>
import AstronomyPictureOfDay from "@/components/AstronomyPictureOfDay";

export default {
  name: "AstronomyPicture",
  components: {
    AstronomyPictureOfDay,
  },
  data() {
    return {
      details: {},
    };
  },
  beforeMount() {
    fetch(
      `${process.env.VUE_APP_NASA_URL}api_key=${process.env.VUE_APP_API_KEY}&date=${this.$route.params.pictureid}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(
          `${process.env.VUE_APP_NASA_URL}api_key=${process.env.VUE_APP_API_KEY}&date=${this.$route.params.pictureid}`
        );
        console.log(data);
        this.details = data;
      });
  },
};
</script>
