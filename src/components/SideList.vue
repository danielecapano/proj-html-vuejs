<template>
    <ul class="sidelist">
        <li class="sidelist-item"
        :class="i === store.currentIndex ? 'active' : ''"
        v-for="(item, i) in sideList" :key="i"
        @click="$emit('setActive', i)"
        >{{ item }}</li>
    </ul>
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
            sideList: {
                type: Array,
                required: true
            }
        },
       
    }
</script>

<style lang="scss" scoped>
 @use '../styles/partials/variables' as *;
.sidelist {
    border: 1px solid $boder-color;
   .sidelist-item {
        font-family: 'Merriweather', serif;
        font-size: 16px;
        line-height: 36px;
        font-weight: 700;
        color: #847b7b;
        width: 100%;
        padding: 20px 10px 20px 20px;
        border-left: 7px solid transparent;
        border-bottom: 1px solid $boder-color;
        cursor: pointer;
        transition: 0.25s ease-out;
        &:last-child {
            border-bottom: none;
        }
        &:hover,
        &.active {
            color: $light-blue;
            border-left-color: $light-blue;
            padding-left: 1.5rem;
        }
    }
}

</style>