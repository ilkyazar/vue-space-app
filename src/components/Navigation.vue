<template>
  <div class="navlinks">
    <a
      ><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqQIDuwFpzUXo4EooHkIhuUApl1oU5uBX3Q&usqp=CAU"
    /></a>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Dashboard' }">Dashboard </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AstronomyPictureList' }"
            >Explore
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navlinks {
  display: flex;
  align-items: center;
  a img {
    width: 80px;
    padding-left: 20px;
  }
  nav ul {
    display: flex;
    align-items: center;
    li {
      padding: 0 20px;
      a {
        text-decoration: none;
        color: $primary-color;
        font-weight: lighter;
        &.router-link-active {
          font-weight: bold;
          border-bottom: 1px dotted $primary-color;
        }
      }
    }
    li + li {
      border-left: solid 1px black;
    }
  }
}
</style>
