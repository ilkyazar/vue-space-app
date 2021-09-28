<template>
  <div class="secure-layout">
    <Header />
    <main>
      <div class="text-bg">
        <div class="text-area">
          <h1>Final Space</h1>
          <p>Universe Simulator</p>
        </div>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Secure",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.secure-layout {
  height: 100%;
  main {
    height: 100%;
    .text-bg {
      background: url("http://static1.squarespace.com/static/5f80d695d292300cf957114a/5f9be9800e951b35861166b3/5f9d39e1aa6e763a1bd5b3c4/1607693959392/NGC2237+Rosette+Nebula_2000px.jpg?format=1500w");
      display: flex;
      justify-content: center;

      .text-area {
        padding: 100px;
        text-transform: uppercase;
        h1 {
          font-size: xxx-large;
          font-weight: bold;
        }
        p {
          font-size: large;
          font-style: italic;
          text-align: center;
        }
      }
    }
  }
}
</style>
