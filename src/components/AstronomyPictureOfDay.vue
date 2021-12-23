<template>
  <div class="item">
    <div class="item-header">
      <h1>{{ apodDetails.title }}</h1>
    </div>
    <hr />
    <div class="item-body">
      <div class="item-info-container">
        <p>
          {{ apodDetails.explanation }}
        </p>
        <p v-if="apodDetails.copyright">
          Copyright: {{ apodDetails.copyright }}
        </p>
      </div>
      <div class="item-img-container">
        <img :src="apodDetails.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AstronomyPictureOfDay",
  props: {
    apodDetails: {},
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  padding: 50px 150px;
  flex-direction: column;

  .item-header h1 {
    text-transform: uppercase;
    font-size: large;
    font-weight: bold;
    margin-bottom: 20px;
  }
  hr {
    width: 100%;
  }

  .item-body {
    margin-top: 20px;
    display: flex;
    .item-img-container {
      img {
        width: 100%;
      }
    }
    .item-info-container {
      flex-basis: 60%;
      min-width: 60%;
      p {
        line-height: 2;
        padding-right: 50px;
      }
    }
  }
}
</style>
