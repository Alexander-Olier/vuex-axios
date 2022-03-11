<template>
  <div>
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <div class="logo" v-show="!mobile">
        <router-link to="/">Logo</router-link>
      </div>
      <nav>
        <ul v-show="!mobile">
          <li><router-link to="/" class="active">Home</router-link></li>
          <li><router-link to="/">Estados</router-link></li>
          <li><router-link to="/">Productos</router-link></li>
        </ul>
        <div class="icon-bars">
          <fa
            @click="toggleMobileNav"
            v-show="mobile"
            :icon="['fas', 'bars-staggered']"
            :class="{ 'icon-active': mobileNav }"
          />
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link to="/" class="active">Home</router-link></li>
            <li><router-link to="/">Estados</router-link></li>
            <li><router-link to="/">Productos</router-link></li>
          </ul>
        </transition>
      </nav>
      <div class="users flex" v-show="!mobile">
        <h4>Name</h4>
        <img src="../assets/user.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.sizeScreen);
    this.sizeScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    sizeScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style>
.dropdown-nav {
  display: inline-block;
}
.icon-bars {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
}
.icon-active {
  transform: rotate(180deg);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #fff;
  top: 40px;
  right: 0;
}
</style>