<template class="">
  <div class="">
    <topBarResponsive v-if="windowWidth <= 767" @scrollto="goto" class=" fixed top-0 z-40"/>
    <topBar v-else @scrollto="goto" class=" fixed top-0 z-40"/>
    <div v-if="this.login == false" class=" overflow-hidden">
      <div class=" fixed w-screen z-10">
        <iframe src="https://forms.gle/wfnhBUq4AkXTbBwY6" class=" w-full h-screen overflow-hidden" frameborder="0" marginheight="0" marginwidth="0" style="filter: blur(0.6rem);">Memuat…</iframe>
      </div>
      <div class=" bg-slate-600 absolute z-10 opacity-70 w-screen h-full"></div>
      <div class=" z-30 w-screen h-screen fixed flex items-center justify-center">
        <div class=" bg-yellow-300 p-5 rounded-lg md:w-auto w-3/4"> 
          <div class=" md:text-xl text-base md:font-semibold">Kamu memerlukan akses untuk mendaftar :( </div>
          <div class=" mt-10 flex flex-col items-center">
            <div class=" mb-3 md:text-xl text-lg font-bold">Token</div>
            <input @keydown.enter="doLogin()" type="text" id="token" name="token" placeholder="masukkan token..." v-model="input" class=" bg-gray-200 w-full rounded-sm md:text-xl text-md p-2 text-center  hover:bg-gray-300 transition-colors duration-200">
            <div @click="doLogin" class=" mt-8 bg-blue-500 w-2/3 py-2 rounded-md cursor-pointer hover:bg-blue-300 transition-colors duration-200">Submit</div>
            <hr class=" border-1 w-full mt-16 mb-2 border-gray-500">
            <div class=" md:text-sm text-xxs md:font-normal font-semibold md:mt-5">tidak punya token?<br><span class="font-normal md:text-xs text-xxs">hubungi asisten laboratorium untuk mendapatkan token</span></div>
          </div>
        </div>
      </div>
      
    </div>
    <div v-else>
      <iframe src="https://forms.gle/wfnhBUq4AkXTbBwY6" class=" w-full h-screen pt-16 overflow-hidden" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>


    </div>
    
  </div>
  
</template>

<script>
import topBar from '@/components/laboratory/topbar.vue'
import topBarResponsive from '@/components/laboratory/topbarResponsive.vue'
//import pageFooter from '@/components/footer.vue'
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
  methods:{
    doLogin(){
      if (this.token == '' || this.token == null || this.token ==  "") {
        alert('isi token!')
      }
      else{
        if(this.input == this.token){
          this.login = true;
        }
        else{
          alert('token salah!')
        }
      }
    },
  },
}


</script>

<style>

</style>