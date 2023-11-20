<template>
    <a class="top" href="#home">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
        TOP
    </a>
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
.top {
    position: absolute;
    right: 0;
    bottom: 20px;
    width: 60px;
    aspect-ratio: 1;
    background-color: $light-blue;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    z-index: 100;
}

</style>