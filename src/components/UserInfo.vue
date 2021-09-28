<template>
  <div class="user-info">
    <span v-if="user"> {{ user.name }} </span>
    <img
      src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png"
      alt="user"
    />
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  /*async*/ mounted() {
    setTimeout(() => {}, 3000);
    const user = /*await*/ {name: "İlkyaz", username : "ilkyaz"};
    this.$store.commit('setUser', user); 
    // Vuex dispatch action 
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  padding-right: 20px;
  img {
    border-radius: 20px;
    width: 40px;
  }
  span {
    margin-right: 10px;
  }
}
</style>
