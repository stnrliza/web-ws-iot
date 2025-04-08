<template>
    <topBarResponsive v-if="windowWidth <= 767" @scrollto="goto" class=" fixed top-0 z-30"/>
    <topBar v-else @scrollto="goto" class=" fixed top-0 z-40"/>
    <div v-if="this.login == false" class=" overflow-hidden">
        <div class=" fixed w-screen z-10">
          <p class=" mb-10 w-full text-center">Daftar Peserta Praktikum</p>
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzlE-1aIACtQEcWmeHoSfvdICaXPUAdmCmfiZ-hfdPli1PiztB06rIiOp5up6BOupwfXVpHFyRnUqv/pubhtml?gid=108142687&amp;single=true&amp;widget=true&amp;headers=false" style="filter: blur(0.6rem);" class=" w-full h-full">Memuat...</iframe>
        </div>
        <div class=" bg-slate-600 absolute z-10 opacity-70 w-screen h-full"></div>
        <div class=" z-30 w-screen h-screen fixed flex items-center justify-center">
          <div class=" bg-yellow-300 p-5 rounded-lg md:w-auto w-3/4"> 
            <div class=" md:text-xl text-base md:font-semibold">Kamu memerlukan akses untuk masuk :( </div>
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
  
      <div v-else class=" h-full">
        
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQzlE-1aIACtQEcWmeHoSfvdICaXPUAdmCmfiZ-hfdPli1PiztB06rIiOp5up6BOupwfXVpHFyRnUqv/pubhtml?gid=108142687&amp;single=true&amp;widget=false&amp;headers=false" class=" w-full flex items-center h-screen justify-center pt-16"></iframe>
        <!--https://drive.google.com/drive/folders/187-7v1I4VTfuPM2iF12EA-mAd36YINLH?usp=drive_link-->
      </div>
    
    
    <div ref="kontak" v-if="login == true" class="">
      <pageFooter class=" absolute bottom-0 z-40"/>
    </div>
  </template>
  
  <script>
  import topBar from '@/components/laboratory/topbar.vue'
  import topBarResponsive from '@/components/laboratory/topbarResponsive.vue'
  import pageFooter from '@/components/laboratory/footer.vue'
  export default {
    components: {
      topBar,
      topBarResponsive,
  
      pageFooter,
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
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  