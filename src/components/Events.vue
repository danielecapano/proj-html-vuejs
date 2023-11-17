<template>
   <section class="events">
    <div class="container">
        <div class="grid">
            <img src="../assets/img/events.jpg" alt="image">
            <div class="events-content">
                
                    <h2 class="event-content-title">Empowering Children to Reach Their Potential.</h2>
                    <p class="event-content-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo excepturi necessitatibus obcaecati voluptas, dolor tempore est. Culpa quos dolores iste odit quod doloremque quia.
                    </p>
                    <div class="numbers">
                        <div class="number">168<span>User Stories</span></div>
                        <div class="number">347<span>Events</span></div>
                    </div>
               
            </div>
        </div>
    </div>
   </section>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.events {
    padding: 3.5rem 2.5rem;
    .grid {
        display: grid;
        place-items: end;
        grid-template-columns: repeat(2, 1fr);

        .events-content {
            padding: 2rem 2.5rem;
            .event-content-title {
                font-size: 2.5rem;
                margin-bottom: 1.5rem;
            }
            .event-content-text {
                font-size: 1.125rem;
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            .numbers {
                display: flex;
                align-items: center;
                gap: 6rem;
                font-family: 'Merriweather', serif;
                color: $light-blue;
                font-size: 3.25rem;
                .number{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    span {
                         font-size: 1.25rem;
                    }
                }
            }
        }
    }
}

</style>