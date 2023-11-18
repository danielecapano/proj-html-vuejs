<template>
    <div class="content" :class="i === store.currentIndex ? 'show' : ''" v-for="(item, i) in learningList">
        <h2 class="title">{{ item.title }}</h2>
        <p class="text">{{ item.text }}</p>
        <div class="group-list">
            <ul class="list">
                <li class="item" v-for="(item, i) in item.list" :key="i"><span class="checked">&#10004;</span> {{ item }}</li>
            </ul>
            <img :src="item.icon" alt="">
        </div>

    </div>
</template>

<script>
import { store } from '../store'
    export default {
        data(){
            return {
                store
            }
        },
        props: {
            learningList: {
                type: Array,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
.content {
    display: none;
    .title {
        font-size: 37px;
        line-height: 1.35em;
        margin: 20px 0;
    }
    .text {
        font-size: 17px;
        line-height: 28px;
        margin-bottom: 59px;
    }
    .group-list {
        display: flex;
        
        .list {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            .item {
                font-size: 17px;
                line-height: 26px;
                .checked {
                    color: $light-blue;
                }
            }
        }
        img {
            width: 115px;
            align-self: flex-end;
            
        }
    
    }
    &.show {
        display: block;
    }
}

</style>