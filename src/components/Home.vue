<template>
  <div class="home">
    <section class="hero is-medium ">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{heading}}
          </h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle" >
              {{subtitle}}
            </h2>
            <a href="#" class="button is-large is-primary" >Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-black is-large"></i>
          </div>
          <div class="column is-one-third-destop">
            <p class="title"><strong>We provide superior logistics so that your business can succeed in a crazy world. </strong></p>
          </div>
          <div class="column">
            <p class="">We provide superior logistics so that your business can succeed in a crazy world.</p>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'Soaring to new heights',
      subtitle: 'Come Join us on the mission to change the world!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq.sass'

.hero
  background: url('../assets/sky.jpg')
  background-size: cover

.is-two-third
    margin-left: 100px
</style>
