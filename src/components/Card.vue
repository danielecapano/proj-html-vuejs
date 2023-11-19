<template>
    <ul class="card-list" v-for="(card, i) in cards" :key="i">
        <li class="card-item">
            <div class="card">
                <img :src="card.imgSrc" alt="Image">
                <div class="card-body">
                    <div class="card-header">
                        <div class="info">
                            <h4 class="name">{{ card.name }}</h4>
                            <p class="teacher">{{ card.teacher }}</p>
                        </div>
                        <span class="price"
                        :class="card.price === 'free' ? 'free' : ''"
                        >{{ card.price }}</span>
                    </div>
                    <p class="text">{{ card.text }}</p>
                    <div class="footer">
                        <span class="members"><font-awesome-icon icon="fa-solid fa-user" />{{ card.number }}</span>
                        <span class="tag"><font-awesome-icon icon="fa-solid fa-tag" />{{ card.category }}</span>
                    </div>
                </div>

            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            cards: {
                type: Array,
                requred: true
            }
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *; 

.card {
    border: 1px solid $boder-color;
    .card-body {
        padding: 1.5rem 1rem;
        background-color: $white;
        .card-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            .name {
                font-size: 15px;
                line-height: 22.5px;
            }
            .teacher {
                font-size: 14px;
                line-height: 26px;
                color: $text-gray;
            }
            .price {
                align-self: start;
                padding: 2px 17px;
                color: $white;
                background-color: $light-blue;
                border-radius: 12px;
                font-size: 0.75rem;
                text-transform: uppercase;
                &.free {
                    background-color: $yellow;
                }
            }
        }

        .text {
            font-size: 15px;
            line-height: 26px;
            color: $gray-base;
            margin-bottom: 1rem;
        }
        .footer {
            color: $text-gray;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                &.tag {
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 12px;
                }
            }
        }
    }
}

</style>