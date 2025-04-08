<template>
<div class="flex justify-center items-center min-h-screen bg-indigo-950">
        <div class="relative w-full h-full bg-contain bg-no-repeat bg-center bg-bg-iot bg-opacity-80">
            <div class=" mx-4 md:mx-12 my-5 w-full flex justify-between items-center flex-row md:items-center">
              <h1 class="text-white text-center font-bold md:text-left sm:text-xl md:text-4xl lg:text-5xl md:ml-2 md:mr-3">Organization Structure</h1>
              <div class="flex flex-col justify-end items-end w-[45%] sm:w-[55%] md:w-[45%]">
                <hr class=" border-yellow-400 border-2 md:border-4 mb-4 md:mb-6 w-full">
                <hr class="border-yellow-400 absolute right-0 mb-2 w-[30%] sm:w-[45%] md:w-[35%] border-2 md:border-4">
              </div>
            </div>
            <div class="container w-[55%] md:w-full mx-auto px-6 pb-5 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center md:gap-10">
              <div class="rounded-xl px-2 pt-5 pb-1 md:p-5 shadow-lg bg-white mb-4 md:mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <div class="p-2">
                  <img src="../assets/super.png" alt="gambar kadep" class="bg-cover rounded-full bg-zinc-800">
                </div>
                <div class="md:px-6 text-center md:w-auto py-4">
                  <div class="font-bold text-base md:text-xl mb-2 text-center">Supervisor</div>
                  <p class="text-xs md:text-sm text-center">Fakhriy Hario Patrio, S.T, M.T.</p>
                </div>
              </div>
            </div>
            <div class="container flex gap-9 mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center md:gap-10">
              <div class="rounded-xl px-2 pt-5 pb-1 md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <div class="p-2">
                  <img src="../assets/kadep.png" alt="gambar kadep" class="rounded-full bg-zinc-800">
                </div>
                <div class=" py-4 md:w-auto">
                  <div class="font-bold text-base md:text-xl mb-2 text-center">Head of Department</div>
                  <p class="text-xs md:text-sm text-center">Fajrul Fallah H.</p>
                </div>
              </div>
              <div class="rounded-xl px-2 pt-5 pb-1 md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <div class="p-2">
                  <img src="../assets/wakadep.png" alt="gambar kadep" class="rounded-full bg-zinc-800">
                </div>
                <div class=" py-4 md:w-auto">
                  <div class="font-bold text-base md:text-xl mb-2 text-center">Deputy Head of Department</div>
                  <p class="text-xs md:text-sm text-center">Shadeka Putratama F.</p>
                </div>
              </div>
            </div>
            <!--DIVISI-->
            <div class=" mx-auto my-5 flex items-center justify-between flex-row md:items-center">
              <div class="flex flex-col justify-end items-end w-[70%] sm:w-[70%] md:w-[65%]">
                <hr class=" border-yellow-400 border-2 md:border-4 mb-4 md:mb-6 w-full">
                <hr class="border-yellow-400 absolute left-0 mb-2 w-[50%] sm:w-[60%] md:w-[55%] border-2 md:border-4">
              </div>
              <h1 class="text-white text-center font-bold mx-4 sm:text-left sm:text-xl md:text-4xl lg:text-5xl md:mx-9">Division</h1>
            </div>
            <div class="container gap-5 my-5 mx-auto flex w-full overflow-x-scroll md:overflow-auto px-6 sm:flex sm:gap-6 sm:justify-center md:gap-3">
              <div class="rounded-xl px-2 flex flex-col items-center md:w-full pt-5 pb-1 md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                
                <img src="../assets/hr.png" alt="gambar kadep" class="rounded-full w-24 md:w-full border-4 md:border-8 border-zinc-800">
                <div class=" w-32 py-4 md:w-auto">
                  <div class="font-bold md:text-xl mb-2 text-center">Human Resource</div>
                  <h1 class="text-xs md:text-sm text-center mb-3">Ilham F. Hamzah</h1>
                  <p class=" font-light text-xxs md:text-base text-center">Division that focuses on increasing the ability of lot members in hard skills and soft skills</p>
                </div>
              </div>
              <div class="rounded-xl px-2  md:w-full pt-5 pb-1 flex flex-col items-center md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <img src="../assets/pr.png" alt="gambar kadep" class="bg-cover rounded-full w-24 md:w-full border-4 md:border-8 border-zinc-800">
                <div class=" w-32 py-4 md:w-auto">
                  <div class="font-bold md:text-xl mb-2 text-center px-2">Public Relation</div>
                  <h1 class="text-xs md:text-sm text-center mb-3">Felix Wijaya & Naufal Hilmiy</h1>
                  <p class=" font-light text-xxs md:text-base text-center">Division that focuses on the relationship between the IoT department and external parties in project implementation</p>
                </div>
              </div>
              <div class="rounded-xl px-2  md:w-full pt-5 pb-1 flex flex-col items-center md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <img src="../assets/rnd.png" alt="gambar kadep" class="rounded-full w-24 md:w-full border-4 md:border-8 border-zinc-800">
                <div class=" w-32 py-4 md:w-auto">
                  <div class="font-bold md:text-xl mb-2 text-center">Research and Development</div>
                  <h1 class="text-xs md:text-sm text-center mb-3">Lukman Hidayat & Abi Hurairah</h1>
                  <p class=" font-light text-xxs md:text-base text-center">Division that focuses on designing, manufacturing and developing systems in the field of Internet of Things.</p>
                </div>
              </div>
              <div class="rounded-xl px-2  md:w-full pt-5 pb-1 flex flex-col items-center md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <img src="../assets/adm.png" alt="gambar kadep" class="bg-cover rounded-full w-24 md:w-full border-4 md:border-8 border-zinc-800">
                <div class=" w-32 py-4 md:w-auto">
                  <div class="font-bold md:text-xl mb-2 pt-2 md:pt-0 text-center">Administration</div>
                  <h1 class="text-xs md:text-sm text-center pt-6 mb-3">Steffany Dilent</h1>
                  <p class=" font-light text-xxs md:text-base text-center">Division that focuses on cash management, member absences, and IOT department correspondence</p>
                </div>
              </div>
              <div class="rounded-xl px-2  md:w-full pt-5 pb-1 flex flex-col items-center md:p-5 shadow-lg bg-white mb-10 w-full border sm:mb-0 sm:w-64 md:72">
                <img src="../assets/mp.png" alt="gambar kadep" class="bg-cover rounded-full w-24 md:w-full border-4 md:border-8 border-zinc-800">
                <div class=" w-32 py-4 md:w-auto">
                  <div class="font-bold md:text-xl mb-2 text-center">Media and Publication</div>
                  <h1 class="text-xs md:text-sm text-center mb-3">Zaidan M Rafi & Sarah Aqila L.</h1>
                  <p class=" font-light text-xxs md:text-base text-center">The division that focuses on the Branding Dept. lot on social media so that it can be better known by the public</p>
                </div>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'visiMisi',

}
</script>

<style>

</style>