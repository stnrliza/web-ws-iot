<template>
    <div class=" w-screen flex flex-col justify-center items-center scrollbar-track-sky-500 mb-8">
        <section class=" pt-5 md:pt-10 pb-1 md:pb-4 px-4 md:px-12 w-full flex flex-col items-center">
          <div class=" font-roboto font-bold text-center text-2xl md:text-4xl"> Accomplishment </div>
          <hr class="border-2 sm:border-4 border-yellow-400 w-[15%] sm:w-[10%] text-center">
        </section>
        <section class="flex px-4 md:px-12 z-0 flex-row items-center justify-center w-screen">
            <div class="scroll-smooth w-full flex flex-col overflow-x-hidden">
                <Carousel ref="carousel" :breakpoints="breakpoints" v-model="currentSlide" :itemsToShow="4.35" :wrapAround="true" :transition="500" :autoplay="4000"> <!--:autoplay="4000"-->
                    <Slide v-for="todo in todos" :key="todo.id" id="wrapper-box" class="rounded-xl bg-component-bar cursor-default"> 
                        <div class=" rounded-xl mb-1 md:mb-3 flex flex-col justify-start h-full" style="">
                          <div>
                            <span v-if="getUrl(todo.id) == null || getUrl(todo.id) == ''">
                            loading ...
                            </span>
                            <span v-else class=" flex justify-center items-center">
                              <vue-load-image>
                                <template v-slot:image>
                                  <img :src="getUrl(todo.id)" height="20" width="" alt="" class=" aspect-square w-full h-full rounded-xl">
                                </template>
                                <template v-slot:preloader>
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(241, 242, 243, 0); display: block; shape-rendering: auto;" width="" height="" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <circle cx="50" cy="50" fill="none" stroke="#233172" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                    </circle>
                                  </svg>
                                </template>
                                <template v-slot:error>Image load fails</template>
                              </vue-load-image>
                            </span> 
                          </div>
                          <div class="flex flex-col">
                            <span class=" font-bold text-yellow-300 flex min-h-[3rem] md:min-h-[5rem] items-center justify-center font-roboto text-sm sm:text-base lg:text-xl mdpb-1 px-3">{{ todo.lomba }}</span> 
                            <span class=" text-white font-roboto text-xxs px-1 w-auto">{{ todo.nama }} </span>
                          </div>
                        </div> 
                    </Slide>
                    <template #addons>
                        <navigation class=" bg-white bg-opacity-50 shadow-md rounded-full" />
                        <Pagination class="mt-3" />
                    </template>
                </Carousel>
            </div>
        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { collection } from 'firebase/firestore'
import db from '../utilities/firebase.js'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCollection } from 'vuefire'
import VueLoadImage from 'vue-load-image'

export default defineComponent({
  name: 'pagePrestasi',
  components:{
    Carousel,
    Slide,
    Pagination,
    Navigation,
    'vue-load-image': VueLoadImage,
  },
  setup(){
      const todos = useCollection(collection(db, 'prestasi'));
      return{todos}
    },
  data(){
    return{
        i:7,
        breakpoints: {
          // 700px and up
          0: {
            itemsToShow: 2,
            snapAlign: 'center',
          },
          // 1024 and up
          768: {
            itemsToShow: 4.2,
            //snapAlign: 'center',
          },
        },
    }
  },
  methods:{
    getUrl(w){
        return 'https://firebasestorage.googleapis.com/v0/b/iot-website-38452.appspot.com/o/prestasi%2F' +w+ '?alt=media&token=26157571-e49e-4d42-a021-ec6e525ebdc3'
    },
  }
  
})
</script>

<style scoped>
.carousel__slide {
  padding: 0px;
}

.carousel__viewport {
  perspective: 200px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.75);
}

.carousel__slide {
  transform: rotateY(20deg) scale(0.7);
}

.carousel__slide--prev {
  opacity: 1;
  
  transform: rotateY(-10deg) scale(0.75);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.75);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(0.9);
}

</style>