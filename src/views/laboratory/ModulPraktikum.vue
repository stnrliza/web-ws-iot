<template>
    <topBarResponsive v-if="windowWidth <= 767" @scrollto="goto" class=" fixed top-0"/>
    <topBar v-else @scrollto="goto" class=" fixed top-0"/>
    <p class=" mb-10 pt-20 w-full text-center text-xl font-semibold">Modul Praktikum Internet of Things 2024/2025 Ganjil</p>
    <iframe src="https://drive.google.com/embeddedfolderview?id=187-7v1I4VTfuPM2iF12EA-mAd36YINLH#grid" style="width:100%; height:27rem; border:0;" class=" w-full flex items-center origin-center content-center justify-center">Memuat...</iframe>
    <!--https://drive.google.com/drive/folders/187-7v1I4VTfuPM2iF12EA-mAd36YINLH?usp=drive_link-->
    
    <div ref="kontak">
      <pageFooter class="bottom-0 fixed"/>
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
  