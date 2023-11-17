<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';
import Instructor from './components/Instructor.vue';
import Events from './components/Events.vue';


export default {
  components: {
    Header, Hero, Courses,
    Instructor, Events,
}
}

</script>

<template>
  <Header />
  <Hero />
  <Courses />
  <Instructor />
  <Events />
  
</template>

<style lang="scss">
@use './styles/general.scss';




</style>
