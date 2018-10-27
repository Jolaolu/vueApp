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
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    heading: "Soaring to new heights",
    subtitle: "Come Join us on the mission to change the world!",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq.sass'

</style>
