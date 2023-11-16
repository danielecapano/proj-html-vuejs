<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';

export default {
  components: {
    Header, Hero, Courses,
  }
}

</script>

<template>
  <Header />
  <Hero />
  <Courses />
  
</template>

<style lang="scss">
@use './styles/general.scss';



</style>
