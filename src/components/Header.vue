<template>
  <header class="header-container">
    <Navigation />
    <UserInfo />
  </header>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import Navigation from "@/components/Navigation";

export default {
  name: "Secure",
  components: {
    UserInfo,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  background-color: $base-color;
  color: $primary-color;
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
