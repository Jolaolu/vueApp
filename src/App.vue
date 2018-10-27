<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
        My Company
        </a>

        <a role="button" class="navbar-burger burger " v-on:click="showNav = !showNav"  v-bind:class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': showNav } ">
        <div class="navbar-start" style= "flex-grow: 1; justify-content: center;" >
          <router-link to="/" class="navbar-item r-item" > Home </router-link>
          <router-link to="/about" class="navbar-item r-item" > About </router-link>
          <router-link to="/services" class="navbar-item r-item" > Services </router-link>
          <router-link to="/faq" class="navbar-item r-item" > FAQ </router-link>
        </div>
        <div class="navbar-end ">
          <div class = "navbar-item" >
            <div class='button'>
              <a class= "is-primary is-outlined">
                <strong>
                  Join Now
                </strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
          <div class="columns">
            <div class="column">
              <p> This Is a footer </p>
            </div>
            <div class="column has-text-right">
              <a class = "icon"  href="#"><i class="fa fa-facebook"></i></a>
              <a class = "icon"  href="#"><i class="fa fa-twitter"></i></a>
            </div>
          </div>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      showNav: false
    }
  }
  // methods: {
  //   toggleNav: () => {
  //     this.isActive = !this.isActive
  //   }
  // }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
  color: gray

.navbar-brand
    font-weight: bold

a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #f1f1f1
      .navbar-burger span
        background-color: #c1c1c1
footer
  background-color : $primary !important
  color: #fff
  .icon
    color: #fff
</style>
