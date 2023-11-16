<template>
   <ul class="menu">
    <li class="menu-item" v-for="(link, i) in menu" :key="'i'">
        <a :class="{
            'active': link.active
        }" :href="link.href">{{ link.text }}</a>
    </li>
   </ul>
</template>

<script>
    export default {
        props: {
            menu: {
                type: Array
            },
        },

        data(){
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.menu {
    display: flex;
    align-items: center;
    color: $white;
    a {
        line-height: 23px;
        font-weight: 600;
        font-size: 0.875rem;
        text-transform: uppercase;
        padding: 1.75rem;
        transition: 0.25s ease-out;

        &:hover,
        &:active {
            color: $light-blue
        }
    }
}

</style>