<template>
   <header>
    <nav class="container">
        <img class="logo" src="/assets/img/logo.png" alt="logo">
        <Nav :menu="menu" />
        <ul class="icons">
            <li>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </li>
            <li>
                <font-awesome-icon icon="fa-regular fa-clipboard" />
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-bars" />
            </li>
        </ul>
    </nav>
   </header>
</template>

<script>
import Nav from './Nav.vue';
    export default {
        components: {
            Nav
        },
        data(){
            return {
                menu: [
                    {
                        text: 'home',
                        href: '#Home'
                    },
                    {
                        text: 'courses',
                        href: '#courses'
                    },
                    {
                        text: 'instuction',
                        href: '#instruction'
                    },
                    {
                        text: 'events',
                        href: '#events'
                    },
                    {
                        text: 'page',
                        href: '#'
                    },
                    {
                        text: 'elements',
                        href: '#'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 2.5rem;
   z-index: 100;
}
nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    .logo {
        width: 165px;
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: $white;
        li {
            
            transition: 0.25s ease-out;
            &:hover {
                color: $light-blue;
            }
        }
    }
}


</style>