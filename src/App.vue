<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';
import Instructor from './components/Instructor.vue';
import Events from './components/Events.vue';
import Testimonials from './components/Testimonials.vue';
import Learning from './components/Learning .vue';
import OnlineCourses from './components/OnlineCourses.vue';
import Pricing from './components/Pricing.vue';
import returnToTop from './components/returnToTop.vue';

export default {
  components: {
    Header, Hero, Courses,
    Instructor, Events, Testimonials, Learning,
    OnlineCourses, Pricing, returnToTop
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
  <OnlineCourses />
  <Pricing />
  
</template>

<style lang="scss">
@use './styles/general.scss';




</style>
