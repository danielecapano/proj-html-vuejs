<template>
    <section class="learning">
        <div class="container">
            <div class="grid">
                <SideList :sideList="sideList" @setActive="setCurrentIndex" />
                <learningList :learningList="learningList"/>
            </div>
        </div>
        <ReturnToTop />
    </section>
</template>

<script>
import { store } from '../store'
import SideList from './SideList.vue';
import LearningList from './LearningList.vue';
import returnToTop from './returnToTop.vue';
import ReturnToTop from './returnToTop.vue';
    export default {
        components: {
    SideList,
    LearningList,
    returnToTop,
    ReturnToTop
},
        data() {
            return {
                store,
                sideList: [
                    'What We Do',
                    'Degree Programme',
                    'Career Archivments',
                    'Personal Menagment',
                    'Steps To Succes',
                    'Knowledge Transfer'
                ],
                learningList: [
                    {
                        title: 'Learning Possibilities',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'We enrich lives through learning.',
                                'Maximizing potential through individual attention.',
                                'The trusted name for specialized training.',
                                'People teach. People learn. This is where they connect.'
                                ],
                        icon: 'src/assets/img/learning-icon-1.png'
                    },

                    {
                        title: 'Inspiring Minds',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'Maximizing potential through individual attention.',
                                'We enrich lives through learning.',
                                'People teach. People learn. This is where they connect.',
                                'The trusted name for specialized training.'
                                ],
                        icon: 'src/assets/img/learning-icon-2.png'
                    },

                    {
                        title: 'Investing in Knowledge',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'We enrich lives through learning.',
                                'Maximizing potential through individual attention.',
                                'The trusted name for specialized training.',
                                'People teach. People learn. This is where they connect.'
                                ],
                        icon: 'src/assets/img/learning-icon-3.png'
                    },

                    {
                        title: 'Secure Your Future',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'Maximizing potential through individual attention.',
                                'We enrich lives through learning.',
                                'People teach. People learn. This is where they connect.',
                                'The trusted name for specialized training.'
                                ],
                        icon: 'src/assets/img/learning-icon-4.png'
                    },

                    {
                        title: 'Where Learning Begins',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'We enrich lives through learning.',
                                'Maximizing potential through individual attention.',
                                'The trusted name for specialized training.',
                                'People teach. People learn. This is where they connect.'
                                ],
                        icon: 'src/assets/img/learning-icon-5.png'
                    },

                    {
                        title: 'Knowledge is Power',

                        text: 'Lorem Ipsn gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt',

                        list: [
                                'Maximizing potential through individual attention.',
                                'We enrich lives through learning.',
                                'People teach. People learn. This is where they connect.',
                                'The trusted name for specialized training.',
                                ],
                        icon: 'src/assets/img/learning-icon-6.png'
                    },

                    
                ],
               

            }
        },
        methods: {
            setCurrentIndex(i) {
                this.store.currentIndex = i
                console.log(i, this.store.currentIndex);
            },
        }
    }
</script>

<style lang="scss" scoped>
.learning {
    position: relative;
    padding: 8rem 2.5rem;
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 45px;
       
        
    }
}

</style>