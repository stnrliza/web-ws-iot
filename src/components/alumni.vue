<template>
    <div class=" w-screen flex flex-col justify-center items-center">
        <section class=" pb-3 md:pb-10 mt-10 flex justify-between w-full">
          <div class=" font-roboto pl-4 md:pl-12 font-bold text-left text-2xl md:text-4xl"> Alumni </div>
          <div class="flex flex-col justify-end w-[55%] sm:w-[60%] md:w-3/4">
            <hr class="border-yellow-400 border-2 md:border-4 mb-4 md:mb-5">
            <hr class="border-yellow-400 absolute right-0 mb-2 w-[35%] sm:w-[40%] md:w-1/2 border-2 md:border-4">
          </div>
        </section>
        <div class="w-full px-4 md:px-12 flex flex-col">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" class=" w-full">
                <Slide v-for="(todo) in todos" :key="todo.id" id="galery" class="w-full md:px-4 my-2 cursor-default">
                    <section class="carousel__item w-full h-full">
                        <div class="h-full justify-center w-full rounded-xl items-center flex flex-row md:px-3 pt-7 pb-7" style=""> 
                            <span class="mx-5 md:mx-10 self-start md:self-center">
                                <vue-load-image>
                                    <template v-slot:image>
                                        <img :src="getUrl(todo.id)" alt="" height="20" :width="[windowWidth <= 767 ? '120' : '240']" class=" aspect-square rounded-full border-2 md:border-4 border-black ">
                                    </template>
                                    <template v-slot:preloader>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(241, 242, 243, 0); display: block; shape-rendering: auto;" :width="[windowWidth <= 767 ? '100' : '200']" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                          <circle cx="50" cy="50" fill="none" stroke="#233172" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                          </circle>
                                        </svg>
                                    </template>
                                    <template v-slot:error>Image load fails</template>
                                </vue-load-image>
                            </span> 
                            <span class=" flex flex-col h-full justify-between w-full md:mr-5 md:mx-5">
                              <div class=" flex flex-col mr-5 md:mr-0 md:mx-5">
                                <span class=" text-black font-roboto text-xxs md:text-sm md:mt-5 mb-2 text-justify">{{todo.kesan}}</span> 
                                <span v-if="todo.quotes == ''" class=" text-black font-roboto text-left text-xxs md:text-sm mt-1 mb-2"></span> 
                                <span v-else class=" text-black font-roboto text-left text-xxs md:text-sm mt-1 mb-2">"{{todo.quotes}}"</span> 
                              </div>
                              <div class=" flex flex-col items-end mr-5 md:mx-5">
                                <span class=" text-black text-right font-roboto text-xxxs md:text-xs">{{todo.jabatan}} ({{ todo.panggilan }} IoT’{{ todo.potong }})</span>
                              </div>
                            </span>
                        </div>
                    </section>
                </Slide>
            </Carousel>
            <Carousel id="thumbnails" :items-to-show="4" :breakpoints="breakpoints" :wrap-around="true" v-model="currentSlide" ref="carousel" class=" mx-1" >
                <Slide v-for="(todo) in todos" :key="todo.id" class="w-full"> 
                    <div class="carousel__item cursor-default  h-full w-full justify-center items-center mx-5  rounded-xl flex flex-col ">
                        <span class=" w-full h-full justify-center rounded-t-xl items-center flex py-6">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img :src="getUrl(todo.id)" alt="" class="aspect-square md:h-32 rounded-full border-4 border-yellow-300">
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
                        <div class=" flex flex-col w-full h-full py-4 rounded-b-xl">
                            <div class="font-semibold md:font-bold text-sm md:text-xl font-roboto ">{{todo.nama}}</div> 
                            <span class=" font-roboto text-xs md:text-sm">IoT {{todo.angkatan}}</span>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <navigation class=" bg-white bg-opacity-80 shadow-md rounded-full" />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { collection } from 'firebase/firestore'
import db from '../utilities/firebase.js'
import { defineComponent } from 'vue'
import { useCollection } from 'vuefire'
import VueLoadImage from 'vue-load-image'
//import {storage} from "../utilities/firebase.js"
//import { ref, getDownloadURL} from "firebase/storage"

export default defineComponent({
    name: "pageAlumni",
    components: {
    Carousel,
    Slide,
    Navigation,
    'vue-load-image': VueLoadImage,
    },
    setup(){
      const todos = useCollection(collection(db, 'alumni'));
      return{todos, }
    },
    data() {
        return {
            currentSlide: 0,
            length: '',
            breakpoints: {
              // 700px and up
              0: {
                itemsToShow: 2.5,
                snapAlign: 'center',
              },
              // 1024 and up
              768: {
                itemsToShow: 4,
                snapAlign: 'center',
              },
            },
            windowWidth: window.innerWidth,
        };
    },  
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      } 
    },
    methods: {
        getUrl(w){
            return 'https://firebasestorage.googleapis.com/v0/b/iot-website-38452.appspot.com/o/alumni%2F' +w+ '?alt=media&token=2008a584-039b-4de2-a2f0-a8248aea0758'
        },
        slideTo(val) {
            this.currentSlide = val
        },
    },
})
</script>

<style scoped>
.carousel__slide {
  padding: 0px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

#galery{
    transform: scale(0.99) ;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 10px;
    margin-top: 5px;
}

.carousel__slide {
    background-color: #001E6C; 
    margin: 0px;
    transform: scale(0.85) ;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: yellow;
    border-radius: 15px;
}

.carousel__slide >  div > div > span{
    color: white;
}

.carousel__slide--prev {
  opacity: 1;
  background-color: #001E6C;
}

.carousel__slide--next {
  opacity: 1;
  background-color: #001E6C;
}

.carousel__slide--active {
  opacity: 1;
  background-color: white;
  color:#001E6C ;
  
}

.carousel__slide--active >  div > div > span{
    color: #001E6C ;
}

.carousel__slide--active > div > span > vue-load-image > template > img {
  border-color: black
}
</style>