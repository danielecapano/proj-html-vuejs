<template>
    <section class="pricing" id="pricing">
        <div class="container">
            <div class="content">
                <h2 class="title">Pricing Plans</h2>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptatibus est. Dolor, quos? Dolorum voluptatibus alias beatae rem at quidem!</p>
            </div>
            <div class="grid">
                <PricingDescription :title="titleDescription" :list="listDescription"/>
                <PricingPlan :plans="pricingPlans"/>


            </div>
        </div>
        <ReturnToTop />
    </section>
</template>

<script>
import PricingDescription from './PricingDescription.vue';
import PricingPlan from './PricingPlan.vue';
import ReturnToTop from './ReturnToTop.vue';


    export default {
        components: {
    PricingDescription,
    PricingPlan,
  
    ReturnToTop
},
        data() {
            return {
                titleDescription: 'Save up to 40% by paying weekly',
                listDescription: [
                    'Number of Courses',
                    'Time',
                    'Web Designing',
                    'Human-Centered Design',
                    'Basic Marketing',
                    'Python of Everybody',
                    'Android Developer',
                    'Business English'
                ],
                pricingPlans: [
                    {
                        imgSrc: 'src/assets/img/plan-icon-1.png',
                        name: 'Standard',
                        price: '$12',
                        list: [
                            2,
                            '15 Days',
                            'V',
                            'V',
                            'F',
                            'F',
                            'F',
                            'F',
                        ]
                    },
                    {
                        imgSrc: 'src/assets/img/plan-icon-2.png',
                        name: 'Professional',
                        price: '$59',
                        list: [
                            4,
                            '30 Days',
                            'V',
                            'V',
                            'V',
                            'V',
                            'F',
                            'F',
                        ]
                    },
                    {
                        imgSrc: 'src/assets/img/plan-icon-3.png',
                        name: 'Advanced',
                        price: '$59',
                        list: [
                            6,
                            '30 Days',
                            'V',
                            'V',
                            'V',
                            'V',
                            'V',
                            'V',
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.pricing {
    position: relative;
    padding: 10rem 2.5rem;
    background-image: url(../assets/img/background-pattern.jpg);
    background-size: 400% auto;
    background-position: top right;
    background-repeat: no-repeat;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .title {
        font-size: 3rem;
        line-height: 50px;
        margin-bottom: 2rem;
    }
    .text {
        font-size: 17px;
        line-height: 28px;
        max-width: 90%;
        margin-bottom: 6rem;
    }
}
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

</style>