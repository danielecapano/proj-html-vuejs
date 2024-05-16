<template>
    <section class="instructor" id="instruction">
        <div class="container">
            <div class="content">
                <h2 class="content-title">
                    The Trousted Name <br>
                    for In-Home Tutoring.
                </h2>
                <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea expedita modi quidem error corrupti, obcaecati eius ratione, consectetur reiciendis quia dicta voluptate, illo sint possimus beatae consequuntur.</p>
                <a href="#" class="link">learn more</a>
            </div>
            <img src="../assets/img/instructor.jpg" alt="image">
             
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
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.instructor {
    position: relative;
    padding: 3.5rem 2.5rem;
}

.content {
    margin-bottom: 3.5rem;
}

.content-title {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
}

.content-text {
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 2rem;
}
.link {
    text-transform: uppercase;
    font-weight: 700;
    color: $light-blue;
    letter-spacing: 0.5px;
}

</style>