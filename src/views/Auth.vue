<template>
  <div class="background">
    <div class="form-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  components: {
  },
};
</script>

<style lang="scss" scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://i.pinimg.com/originals/ea/1d/97/ea1d9797c9bf3dda7a23b238e5e4b364.jpg");
  width: 100%;
  height: 100%;

  .form-container {
    flex-basis: 25%;
    background: $primary-color;
    color: $base-color;
    padding: 15px;
    border-radius: 15px;
  }
}
</style>
