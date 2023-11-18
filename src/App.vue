<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';
import Instructor from './components/Instructor.vue';
import Events from './components/Events.vue';
import Testimonials from './components/Testimonials.vue';
import Learning from './components/Learning .vue';
import OnlineCoueses from './components/OnlineCoueses.vue';


export default {
  components: {
    Header, Hero, Courses,
    Instructor, Events, Testimonials, Learning,
    OnlineCoueses
}
}

</script>

<template>
  <Header />
  <Hero />
  <Courses />
  <Instructor />
  <Events />
  <Testimonials />
  <Learning />
  <OnlineCoueses />
  
</template>

<style lang="scss">
@use './styles/general.scss';




</style>
