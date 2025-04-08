<template>
<topBarResponsive v-if="windowWidth <= 767" @scrollto="goto"/>
<topBar v-else @scrollto="goto"/>
<div class=" bg-bg-struktur bg-center pt-28 pb-10">
    <div class="container w-11/12 md:w-10/12 mx-auto py-7 bg-bgcolor-struktur bg-opacity-70 backdrop-blur-sm rounded-3xl shadow-inner shadow-white">
        <div class=" pt-2 pb-5">
            <span class=" text-3xl font-bold drop-shadow-xl">Struktur Laboratorium</span>
        </div>
        <div class="flex justify-around py-5 gap-5 px-5">
            <div class="card bg-blue-800 rounded-lg w-1/2 md:w-auto pb-2 px-4 text-white text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_kalab.png" alt="" class="object-cover  rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxs md:text-sm font-bold">KEPALA LABORATORIUM</div>
                <div class="text-xxs md:text-sm">Dr. Fakhriy Hario P.</div>
                <div class="text-xxs md:text-sm">S.T.,M.T.,IPM.</div>
            </div>
            <div class="card bg-blue-800  rounded-lg w-1/2 md:w-auto pb-2 px-4 text-white text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_pranata.png" alt="" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxs md:text-sm font-bold">PRANATA LABORATORIUM</div>
                <div class="text-xxs md:text-sm">Rakhmad Romadhoni</div>
                <div class="text-xxs md:text-sm">S.ST</div>
            </div>
        </div>
        <div class="flex justify-around py-5 px-7 md:px-0">
            <div class="card bg-blue-800 w-1/2 md:w-auto rounded-lg pb-2 px-4 text-white text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_koorlab.png" alt="zaidan muhammad rafi" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxs md:text-sm font-bold">KOORDINATOR ASISTEN</div>
                <div class="text-xxs md:text-sm">Zaidan Muhammad Rafi</div>
                <div class="text-xxs md:text-sm">215060301111026</div>
            </div>
        </div>
        <div class="flex justify-start md:justify-around py-3 px-5 gap-4 overflow-x-scroll w-full  md:w-auto ">
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_felix.png" alt="felix wijaya" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Felix Wijaya</div>
                <div class="text-xxxs md:text-sm">215060300111027</div>
            </div>
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_dilent.png" alt="steffany dilent" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Steffany Dilent</div>
                <div class="text-xxxs md:text-sm">215060307111036</div>
            </div>
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_lukman.png" alt="lukman hidayat" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Lukman Hidayat</div>
                <div class="text-xxxs md:text-sm">215060300111008</div>
            </div>
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_faruq.png" alt="farouq aldy akbar" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Farouq Aldy Akbar</div>
                <div class="text-xxxs md:text-sm">225060300111052</div>
            </div>
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_adin.png" alt="adining rahayu" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Adining Rahayu</div>
                <div class="text-xxxs md:text-sm">225060307111012</div>
            </div>
            <div class="card bg-blue-800  rounded-lg pb-2 px-3 text-white min-w-[130px] md:min-w-fit text-center shadow-md shadow-gray-500" style="border-radius: 20px; background-color: #1F4761;">
                <img src="./struktur/foto_dito.png" alt=" ariza alfendito" class="object-cover aspect-w-1 aspect-h-1 rounded border-4 border-yellow-400 mx-auto  mt-4 mb-2" style="border-radius: 15px;">
                <div class="text-xxxs md:text-sm font-bold">ASISTEN LABORATORIUM</div>
                <div class="text-xxxs md:text-sm">Ariza F. Alfendito</div>
                <div class="text-xxxs md:text-sm">225060307111018</div>
            </div>
        </div>
    </div>
  </div>
  <pageFooter/>
</template>

<script>
import topBar from '@/components/laboratory/topbar.vue'
import topBarResponsive from '@/components/laboratory/topbarResponsive.vue'
import pageFooter from '@/components/laboratory/footer.vue'
export default {
  name: 'visiMisi',
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

}
</script>

<style>

</style>