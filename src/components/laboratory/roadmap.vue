<template>
<topBarResponsive v-if="windowWidth <= 767" @scrollto="goto"/>
<topBar v-else @scrollto="goto"/>
<div class="absolute md:relative md:pt-0 pt-10 w-full object-cover">
      <img src="./back.png" alt="Laboratorium Internet of Things" class="mb-4 pt-5 md:h-auto h-56 object-cover">
    </div> 
  <div class="h-auto min-h-screen md:min-h-0 w-full pt-36 md:pt-14 pb-10 flex flex-col md:items-center items-start  overflow-x-scroll md:overflow-visible" >
      <div class="flex md:flex-wrap md:w-screen px-5 md:px-3 md:-mt-28 h-auto gap-5 md:gap-y-28 justify-start md:justify-around">
          
        <div class=" relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%] justify-self-start">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./daftar.png" alt="laboratorium iot" class="mx-auto md:pt-4 ml-1 md:ml-2 pt-3 p-3 md:p-4">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Pendataan Sesi Praktikum IoT</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Pendataan Praktikum Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <router-link to="/laboratory/practicum/register" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</router-link>
                <!--<a @click="peringatan()" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</a> -->
              </div> 
            </div>
          </div>

          <div class="hidden relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 rounded-3xl shadow-md basis-[30%]">
            <div class="flex md:inline justify-center">
               <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./1.png" alt="laboratorium iot" class="mx-auto p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold md:text-left mb-9">Jadwal Peserta <br>Praktikum</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Jadwal Praktikum Dasar Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <a @click="peringatan()" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</a>
              </div>
            </div>
          </div>
  
          <div class="hidden relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%]">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./2.png" alt="laboratorium iot" class="mx-auto md:pt-2 pt-4 p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Daftar Nama Peserta Praktikum</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Daftar Peserta Praktikum Dasar Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <router-link to="/laboratory/practicum/registrant" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</router-link>
              </div> 
            </div>
          </div>
  
          <div class="relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 rounded-3xl shadow-md basis-[30%]">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./3.png" alt="laboratorium iot" class="mx-auto pt-4  md:pt-2.5 p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Modul Praktikum Internet of Things</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Modul Praktikum Mata Kuliah Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <router-link to="/laboratory/practicum/module" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</router-link>
              </div>
            </div>
          </div>

          <div class="hidden  relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%] justify-self-start">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./exam.png" alt="laboratorium iot" class="mx-auto md:pt-4 pt-2 p-3 md:p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Informasi Posttest Praktikum IoT</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Informasi Posttest Dosen Praktikum IoT</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <a href="#" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</a>
              </div> 
            </div>
          </div>

          <div class="hidden relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%] justify-self-start">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./exam.png" alt="praktikum laboratorium iot ub" class="mx-auto md:pt-4 pt-2 p-3 md:p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Informasi Evaluasi Praktikum IoT</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Informasi Evaluasi/Jilid Praktikum IoT</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <router-link to="/laboratory/practicum/evaluation" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</router-link>
              </div> 
            </div>
          </div>

          <div class=" hidden relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%] justify-self-start">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./medal.png" alt="IoT UB" class="mx-auto md:pt-5 pt-3 p-3 md:p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center  text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Nilai Praktikum Internet of Things</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Nilai Praktikum Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <a href="#" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</a>
              </div> 
            </div>
          </div>

          
          <div class=" relative bg-bgcolor-praktikum pt-24 px-3 md:px-7 pb-14 h-auto rounded-3xl shadow-md basis-[30%] justify-self-start">
            <div class="flex md:inline justify-center">
              <div class="absolute h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 -top-10 md:-top-16 bg-kuning-praktikum rounded-3xl">
                  <img src="./shopping-bag.png" alt="laboratorium iot" class="mx-auto md:pt-5 pt-2 p-3 md:p-5">
              </div>
              <div class=" -mt-5 lg:mt-0 w-full flex flex-col items-center md:items-start justify-start">
                <h1 class="text-white text-center text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-9 md:text-left">Pembelian Modul Praktikum IoT</h1>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Pembelian Praktikum Internet of Things</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-4">Tahun 2024</p>
                <p class="text-white  text-center text-xs md:text-sm lg:text-sm 2xl:text-base md:text-left mb-14">Semester Ganjil 2024/2025</p>
                <router-link to="/laboratory/practicum/purchase" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</router-link>
                <!-- <div @click="peringatan()" class="text-xs md:textlg lg:text-lg 2xl:text-xl font-semibold bg-kuning-praktikum py-2 md:py-2 lg:py-4 mx-7 md:mx-0 px-6 md:px-4 lg:px-9 cursor-pointer rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Selengkapnya</div> -->
              </div> 
            </div>
          </div>
          
      </div>
      <pageFooter class=" md:hidden fixed bottom-0 " />
  </div>
  
  <pageFooter class=" hidden md:inline " />
</template>

<script>
import topBar from '@/components/laboratory/topbar.vue'
import topBarResponsive from '@/components/laboratory/topbarResponsive.vue'
import pageFooter from '@/components/laboratory/footer.vue'
export default {
  name: 'roadmapRiset',
  components: {
    topBar,
    topBarResponsive,
    pageFooter,
  },
  data() {
    return {
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        windowWidth: window.innerWidth
    }
  },
  mounted() {
      window.onresize = () => {
          this.windowWidth = window.innerWidth
      } 
  },
  methods:{
   peringatan(){
       alert('formulir ditutup');      
   }
  },
}
</script>

<style>

</style>