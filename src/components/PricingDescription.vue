<template>
    
        <div class="pricing-description">
            <h3 class="list-title">
                {{ title }}
            </h3>
            <ul class="list">
                <li class="item" v-for="(item, i) in list">{{ item }}</li>
            </ul>
        </div>
   
</template>

<script>
    export default {
        props:
            ['title', 'list']
        ,
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.pricing-description {
   
    border-top: none;
    
}
.list-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    line-height: 1.6;
    height: 300px;
    border-top: 4px solid $very-light-blue;
    border-bottom: 1px solid $boder-color;
    border-left: 1px solid $boder-color;
    border-right: 1px solid $boder-color;
    
    padding: 2rem;
}
.item {
    display: flex;
    align-items: center;
    height: 70px;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    color: $text-gray;
    padding: 0 2rem;
    
    border-bottom: 1px solid $boder-color;
    border-left: 1px solid $boder-color;
    border-right: 1px solid $boder-color;
}

</style>