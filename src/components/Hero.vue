<template>
    <section class="hero" id="home">
        <div class="container">
            <div class="content-hero">
                <h1 class="title">Contemporary Ideas</h1>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nobis optio sunt animi vero eaque repudiandae quis unde consequuntur aliquid deleniti sint, quasi quisquam eum ullam distinctio, tempore, pariatur error</p>
                <a href="#" class="btn">register now</a>
            </div>
            

        </div>
        <ReturnToTop />
    </section>
</template>

<script>
import ReturnToTop from './returnToTop.vue';
import returnToTop from './returnToTop.vue';
    export default {
        components: {
            returnToTop,
            ReturnToTop
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/img/hero.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: $white;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
  .content-hero {
    position: relative;
    text-align: center;
    padding: 3rem;
    z-index: 10;
    .title {
        font-size: 4.5rem;
        margin-bottom: 2rem;
    }
    .text {
        line-height: 1.6;
        font-size: 1.125rem;
        margin-bottom: 4.5rem;
    }
    .btn {
        background-color: $light-blue;
        padding: 1.25rem 3rem;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        transition: 0.25s ease-out;
        &:hover {
            background-color: $light-blue-hover;
        }
    }

  }
  
}


</style>