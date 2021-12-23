<template>
  <div class="home">
    <h1>Final Space</h1>
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleLogin() {
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: url("https://i.pinimg.com/originals/ea/1d/97/ea1d9797c9bf3dda7a23b238e5e4b364.jpg");
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    color: $primary-color;
    text-transform: uppercase;
    font-size: xxx-large;
    font-weight: bold;
  }
  button {
    float: right;
    height: 40px;
    border-color: white;
    border-radius: 3px;
    color: white;
    background: transparent;
    background-size: 200% auto;
    text-transform: uppercase;
    padding: 10px 30px 10px 30px;
    cursor: pointer;
  }
  button:hover {
  }
}
</style>
