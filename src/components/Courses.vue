<template>
    <section class="courses" id="courses">
        <div class="container">
            <div class="grid">
                
                    <div class="card" v-for="(course, i) in courses" :key="i">
                        <img class="card-image" :src="course.src" alt="icon">
                        <h4 class="card-title">{{ course.title }}</h4>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                courses: [
                    {
                        src: 'src/assets/img/icon-1.png',
                        title: 'Languages'
                    },
                    {
                        src: 'src/assets/img/icon-2.png',
                        title: 'Software'
                    },
                    {
                        src: 'src/assets/img/icon-3.png',
                        title: 'Business'
                    },
                    {
                        src: 'src/assets/img/icon-4.png',
                        title: 'Chemistry'
                    },
                    {
                        src: 'src/assets/img/icon-5.png',
                        title: 'Science '
                    },
                    {
                        src: 'src/assets/img/icon-6.png',
                        title: 'DIY&Craft'
                    },
                  
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
section.courses {
    padding: 3.5rem 2.5rem;
        .grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1.25rem;
            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                padding: 2.5rem 0;
                background-color: $light-green;
                border: 2px solid $light-gray;
                transition: 0.25s ease-out;
                cursor: pointer;
                &:hover {
                    transform: translateY(-5px);
                    // box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
                }
                .card-image {
                    max-width: 60px;
                }

            }
    }   
}



</style>