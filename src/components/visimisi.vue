<template>
      <div>
    <div class="bg-white">
      <div>
      <section class=" md:mb-50 flex flex-row justify-between w-full">
        <h1 class="textvisi text-center md:text-left w-full px-12 mt-3 font-roboto font-bold text-4xl md:text-6xl"> Vision </h1>
        <div v-if="windowWidth >= 768" class="flex flex-col justify-end w-[55%] sm:w-[60%] md:w-[100%]">
          <hr class=" border-yellow-400 border-2 md:border-4 mb-4">
          <hr class="border-yellow-400 absolute right-0 mb-8 w-[35%] sm:w-[40%] md:w-[60%] border-2 md:border-4">
        </div>
      </section>
      </div>
      <section class="visi mx-5 md:mx-12 pt-[1rem] md:pt-[2rem] pb-[1rem] md:pb-[0rem]">
        <p class=" font-roboto text-center md:text-left text-sm md:text-lg lg:text-xl justify-between">Creating the IoT Department as a place for students to develop soft skills and hard skills in the field of IoT and apply Internet of Things knowledge effectively, efficiently, based on kinship and YME divinity for the creation of superior organizations in the social and science and technology fields in the 4.0 revolution era</p>
      </section>
        <section class="flex">
          <div v-if="windowWidth >= 768" class="flex flex-col justify-end items-end w-[60%] sm:w-[70%] md:w-[110%]">
            <hr class=" border-yellow-400 border-2 md:border-4 mb-4 md:mb-10 w-full">
            <hr class="border-yellow-400 absolute left-0 mb-14 w-[45%] sm:w-[60%] md:w-[60%] border-2 md:border-4">
          </div>
          <h1 class="textmisi w-full text-center md:text-right font-roboto mr-0 md:mr-12 px-5 py-5  font-bold text-4xl md:text-6xl"> Mision </h1>
        </section>
        <section class="misi2 px-4 md:px-12 mb-10 md:mb-12">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 " style="grid-template-columns: auto, auto" >
            <div class="kotakmisi hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-3xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Religion.png">
              <h1 class=" font-bold md:py-1 text-lg md:text-2xl">Religion</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Strengthening the Faith of each member to God Almighty</p>
            </div>
            <div class="kotakmisi  hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-3xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Research.png">
              <h1 class=" font-bold md:py-1 text-xl md:text-2xl">Research</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Creating the IoT Department as a scientific research, research & development center</p>
            </div>
            <div class="kotakmisi hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-3xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Solidarity.png">
              <h1 class=" font-bold md:py-2 text-lg md:text-2xl">Solidarity</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Increase loyalty in order to create a sense of ownership of the IoT Workshop by each member.</p>
            </div>
            <div class="kotakmisi hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-3xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Social.png">
              <h1 class=" font-bold md:py-2 text-lg md:text-2xl">Social</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Maintain harmony and high empathy between members</p>
            </div>
            <div class="kotakmisi hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-2xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Relation.png">
              <h1 class=" font-bold md:py-2 text-lg md:text-2xl">Relation</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Maintain coordination, cooperation and collaboration between internal and external agencies</p>
            </div>
            <div class="kotakmisi hover:text-white md:p-7 w-30 h-auto border px-1 py-2 rounded-3xl shadow-xl text-center">
              <img class="logo w-14 h-14 md:w-24 md:h-24" alt="Logo" src="../assets/Competition.png">
              <h1 class=" font-bold md:py-2 text-lg md:text-2xl">Competition</h1>
              <p class=" font-roboto px-1 md:px-4 text-xxs md:text-md lg:text-lg xl:text-xl">Improving Achievement by contributing to National and International competitions</p>
            </div>
          </div>
        </section>
    </div>
    </div> 
</template>

<script>

export default {
  name: 'visiMisi',
  data() {
      return {
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


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.garis {
  width: 80%;
  height: 30px;
  margin-top: 2.8rem;
  padding-left: 3rem;
}

.garis1 {
  width: 80%;
  height: 30px;
  margin-top: 2.5rem;
}


.textvisi {
  color: #233172;
}

.textmisi {
  color: #233172;
  margin-right:3rem;
}

.kotakmisi {
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.kotakmisi:hover {
  background-color: #091344;
}

.logo {
  width: 100px;
  height: 100px;
  margin: auto;

}

body {
  font-family: "Roboto", sans-serif;
  background: #fff;
  padding-bottom: 0rem;
}

@media (max-width: 1024px) {
  .garis {
  width: 60%;
  height: 30px;
  margin-top: 2.8rem;
  padding-left: 3rem;
}

.garis1 {
  width: 60%;
  height: 30px;
  margin-top: 2.5rem;
}
}
</style>