<template>
  <div class="home">
    <h1>Final Space</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  background: url("https://i.pinimg.com/originals/ea/1d/97/ea1d9797c9bf3dda7a23b238e5e4b364.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: $primary-color;
    text-transform: uppercase;
    font-size: xxx-large;
    font-weight: bold;
  }
}
</style>
