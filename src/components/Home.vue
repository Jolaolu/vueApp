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
        <div class="columns">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-black"></i>
          </div>
          <div class="column is-one-third">
            <p class="title"><strong>We provide superior logistics so that your business can succeed in a crazy world. </strong></p>
          </div>
          <div class="column">
            <p class="">We provide superior logistics so that your business can succeed in a crazy world.gbgnhmjxhxj,kk,kzmk,hnj,mxncj,fxxxx,j,j,k.kz</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-contents">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-contents">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-contents">
              <p class="subtitle">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                --
                Jeff Atwood
              </p>
            </div>
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

  .title
    +mobile
      font-weight: normal
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

.pd
  padding: 2rem
  +desktop
    font-weight: normal

h2
  margin: 2rem 2rem 0 !important

.fa-cog
  font-size: 40px
  
</style>
