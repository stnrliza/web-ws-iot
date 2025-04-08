<template>
  <topBarResponsive v-if="windowWidth <= 767" @scrollto="goto" class=" fixed top-0 z-30"/>
  <topBar v-else @scrollto="goto" class=" fixed top-0 z-40"/>
  <div class=" w-screen">
    <div class=" z-30 w-screen h-screen fixed flex items-center justify-center bg-gray-300">
          <div class=" bg-yellow-300 p-5 rounded-lg md:w-auto w-3/4"> 
            <div class=" md:text-2xl text-lg font-bold">Evaluasi</div>
            <div class=" mt-10 pb-5 flex flex-col items-center">
              <router-link to="/laboratory/practicum/evaluation/register" class=" mt-8 bg-blue-400 w-2/3 md:w-full p-2 md:px-32 py-2 rounded-md cursor-pointer hover:bg-blue-500 transition-colors duration-200">Pilih sesi</router-link>
              <router-link to="/laboratory/practicum/evaluation/list" class=" mt-8 bg-blue-400 w-2/3 md:w-full p-2 md:px-32 py-2 rounded-md cursor-pointer hover:bg-blue-500 transition-colors duration-200">Cek sesi</router-link>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import topBar from '@/components/laboratory/topbar.vue'
  import topBarResponsive from '@/components/laboratory/topbarResponsive.vue'
export default {
  components: {
      topBar,
      topBarResponsive,
  
      //pageFooter,
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            login:false,
            input:"",
            token:"93024",
        }
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    },
}
</script>

<style>

</style>