<template>
    <section class="testimonials">
        <div class="container">
            <div class="content">
                <img src="/assets/img/testimonial.png" alt="image">
                <p class="quote">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis fuga quae, aliquid ab repellat id facere harum aut, voluptatum eos possimus? Commodi aspernatur velit consequuntur aut est quasi vero, hic esse, atque dolor eius cumque nulla consequatur distinctio vel"</p>
                <div class="info">
                    <h4 class="name">Joan Collins</h4>
                    <p class="job">student</p>
                </div>
                <div class="bullets">
                    <span></span>
                    <span class="active"></span>
                    <span></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.testimonials {
    padding: 8rem 2.5rem;
    background-image: url(../assets/img/world.png);
    background-repeat: no-repeat;
    background-size: 200% auto;
    background-position: center top;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        max-width: 80%;
        margin: 0 auto;
        color: $white;
        img {
            width: 100px;
        }
        .quote {
            font-size: 1.25rem;
            line-height: 1.6;
            text-align: center;
        }
        .info {
            text-align: center;
            font-size: 1.5rem;
            .name {
                margin-bottom: 0.75rem;
            }
            .job {
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 700;
                letter-spacing: 0.5px;
            }
            
        }
        .bullets {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                span {
                    display: block;
                    width: 13px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background-color: $gray;
                    &.active {
                        background-color: $white;
                    }
                }
            }

    }
}

</style>