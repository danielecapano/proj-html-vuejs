<template>
    <div class="pricing-plan" v-for="(plan, i) in plans" :key="i">
        <div class="plan-header" :class="plan.name === 'Professional' ? 'active' : ''">
            <img :src="plan.imgSrc" alt="icon">
            <h3 class="name">{{ plan.name }}</h3>
            <p class="price">{{ plan.price }}</p>
        </div>
        <ul class="details" >
            <li class="item" v-for="(item, i) in plan.list">
                <span  class="checked" v-if="item === 'V'"><font-awesome-icon icon="fa-solid fa-check" /></span>
                <span v-else-if="item === 'F'"><font-awesome-icon icon="fa-solid fa-xmark" /></span>
                <span v-else>{{ item }}</span>
            </li>
        <div class="button">
            <button class="btn" :class="plan.name === 'Professional' ? 'active' : ''">get it now</button>
        </div>
                
                
        </ul>
        
    </div>
</template>

<script>
    export default {
        props: {
            plans: {
                type: Array
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

.pricing-plan {
    text-align: center;
    
}
.plan-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 300px;
    background-color: $light-green;
    border-bottom: 1px solid $boder-color;
    border-top: 4px solid $very-light-blue;
    border-right: 1px solid $boder-color;
    &.active {
        border-top: 4px solid $light-blue;
    }
    .name {
        font-size: 20px;
    }
    .price {
        font-size: 20px;
        font-weight: 700;
    }
}
.item {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $boder-color;
    border-right: 1px solid $boder-color;
    font-size: 20px;
    .checked {
        color: $light-blue;
    }
}
.button {

    padding: 1.5rem 0;
    
}

.btn {
    border: 2px solid $boder-color;
    background-color: $white;
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: $gray-base;
    padding: 1rem 2rem;
    cursor: pointer;
    &.active {
        background-color: $light-blue;
        border-color: $light-blue;
        color: $white;
    }
}

</style>