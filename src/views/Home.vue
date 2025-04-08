<template>
    <div v-if=" isLoaded == false" class=" w-screen overflow-y-hidden scroll-x scrollbar-none h-screen bg-gray-200 fixed z-50 ">
      <div class=" w-full h-full flex justify-center items-center">
        <svg aria-hidden="true" class="inline w-14 h-14 mr-0 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 text-center justify-center items-center" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
    </div>
    <topBarResponsive v-if="windowWidth <= 767" @scrollto="goto"/>
    <topBar v-else @scrollto="goto"/>
    <div ref="beranda" class="absolute z-10 w-screen h-screen bg-gradient-to-bl from-blue-800 from-30% via-yellow-200 via-50% opacity-25"></div>
    <div class="absolute w-screen h-screen">
      <Carousel :wrap-around="true" :breakpoints="breakpoints" :transition="500" :autoplay="5000">
        <Slide v-for="todo in todos" :key="todo.id" >
          <img :src="getUrl(todo.id)" @load="onImgLoad" alt="Carousel Slide" class="carousel__item brightness-[0.65] w-screen h-screen object-cover object-top opacity-70" />
        </Slide>  
        <template #addons>
        </template>
      </Carousel>
    </div>  
    <div class="z-20 absolute w-full md:w-5/6 h-screen flex items-center justify-center md:justify-end">
      <div class="flex flex-col justify-center md:justify-start items-center md:items-start w-full md:w-auto text-black text-left">
        <div class="w-full font-extrabold text-center md:text-left md:text-black text-white text-3xl">Internet of Things</div>
        <div class="w-full text-center md:text-left text-xl md:text-black text-white">Developing for Humankind</div>
        <div @click="goto('aboutus')" class=" cursor-pointer w-1/2 bg-slate-50 text-center py-3 rounded-2xl mt-5 text-sm hover:bg-slate-300 text-gray-400 transition-colors">Get Started</div>
      </div>
    </div>
    <div class="w-screen h-screen"></div>
    <div ref="aboutus">
      <aboutUs />
      <visiMisi /> 
    </div>
    <div>
      <Struktur/>
    </div>
    <div>
      <divisiDivisi/>
    </div>
    <div>
      <pageAlumni/>
    </div>
    <div ref="roadmap">
      <roadmapRiset />
    </div>
    <div ref="prestasi">
      <pagePrestasi />
    </div>
    <div ref="kontak">
      <pageFooter/>
    </div>
</template>

<script>
import topBar from '@/components/topbar.vue'
import topBarResponsive from '@/components/topbarResponsive.vue'
import aboutUs from '@/components/aboutus.vue'
import visiMisi from '@/components/visimisi.vue'
import Struktur from '@/components/struktur.vue'
import divisiDivisi from '@/components/divisi.vue'
import pageAlumni from '@/components/alumni.vue'
import roadmapRiset from '@/components/roadmap.vue'
import pagePrestasi from '@/components/prestasi.vue'
import pageFooter from '@/components/footer.vue'
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import db from '../utilities/firebase.js'

export default defineComponent({
  name: 'HomeView',
  components: {
    topBar,
    topBarResponsive,
    aboutUs,
    visiMisi,
    Struktur,
    divisiDivisi,
    pageAlumni,
    roadmapRiset,
    pagePrestasi,
    pageFooter,
    Carousel,
    Slide,
    //Navigation,
  },
  setup(){
    const todos = useCollection(collection(db, 'home'));
    return{todos}
    
  },
  data() {
      return {
          windowWidth: window.innerWidth,
          images: [
        '../assets/BG_CANGAR.jpg',
        '../assets/BGABI.png',
        // Add more image URLs here
          ],
          isLoaded: false
      }
  },
  updated(){
    console.log(this.isLoaded);
  },
  mounted() {
      window.onresize = () => {
          this.windowWidth = window.innerWidth
      } 
  },
  methods: {
    getUrl(w){
        return 'https://firebasestorage.googleapis.com/v0/b/iot-website-38452.appspot.com/o/home%2F' +w+ '?alt=media&token=f13564b6-10cc-46ab-9c07-01f929902bcf'
    },
    goto(refName) {
      //console.log(refName);
      if (refName == 'aboutus') {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo({top:top-70, behavior: 'smooth'});
      } else {
        var element1 = this.$refs[refName];
        var top1 = element1.offsetTop;
        window.scrollTo({top:top1-50, behavior: 'smooth'});
      }
    },
    onImgLoad () {
      this.isLoaded = true
    }
  }
})
</script>
