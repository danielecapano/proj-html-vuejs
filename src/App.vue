<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';
import Instructor from './components/Instructor.vue';


export default {
  components: {
    Header, Hero, Courses,
    Instructor
}
}

</script>

<template>
  <Header />
  <Hero />
  <Courses />
  <Instructor />
  
</template>

<style lang="scss">
@use './styles/general.scss';




</style>
