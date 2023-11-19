<template>
    <section class="online-courses">
        <div class="container">
            <div class="content">
                <h2 class="title">Popular Online Courses</h2>
                <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae officiis perferendis reiciendis sequi quae, dolorem fugiat quo laboriosam laborum
                </p>
            </div>
            <div class="grid">
                <Card :cards="cards"/>

            </div>
        </div>
    </section>
</template>

<script>
import Card from './Card.vue';
    export default {
        components: {
            Card
        },
        data() {
            return {
                cards: [
                    {
                        imgSrc: 'src/assets/img/course-1.jpg',
                        name: 'Andriod Developer',
                        teacher: 'David Sanders',
                        price: 'free',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae officiis perferendis reiciendis sequi quae, dolorem fugiat quo laboriosam laborum',
                        number: 1,
                        category: 'programming'
                    },
                    {
                        imgSrc: 'src/assets/img/course-2.jpg',
                        name: 'Web Designing',
                        teacher: 'Jennifer Powell',
                        price: 'free',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae officiis perferendis reiciendis sequi quae, dolorem fugiat quo laboriosam laborum',
                        number: 1,
                        category: 'programming'
                    },
                    {
                        imgSrc: 'src/assets/img/course-3.jpg',
                        name: 'Financial Modeling',
                        teacher: 'Edward Bowman',
                        price: '$20',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae officiis perferendis reiciendis sequi quae, dolorem fugiat quo laboriosam laborum',
                        number: 1,
                        category: 'business'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *; 

.online-courses {
padding: 3.5rem 2.5rem;
background-image: url(../assets/img/background-pattern.jpg);
background-size: 400% auto;
background-position: top right;
background-repeat: no-repeat;
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .title {
        font-size: 3rem;
        line-height: 50px;
        margin-bottom: 2rem;
    }
    .text {
        font-size: 17px;
        line-height: 28px;
        max-width: 90%;
        margin-bottom: 6rem;
    }
}
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

</style>