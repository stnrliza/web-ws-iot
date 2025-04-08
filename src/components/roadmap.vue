<template>
    <div>
   <section class="roadmap">
          <div class="flex w-full justify-between md:mb-8 md:mt-3 h-full garisroadmap">
            <div class="flex flex-col justify-end items-end w-[50%] sm:w-[60%] md:w-[60%]">
              <hr class=" border-yellow-400 border-2 md:border-4 mb-5 md:mb-8 w-full">
              <hr class="border-yellow-400 absolute left-0 mb-3 md:mb-4 w-[35%] sm:w-[50%] md:w-[50%] border-2 md:border-4">
            </div>
            <h2 class=" md:mr-12 text-center md:text-right px-5 pt-2 mt-5 md:mt-8 font-roboto font-bold text-2xl md:text-4xl title">RoadMap</h2>
          </div>
          <div class="kotakroadmap ">
            <div class=" text-white faq overflow-hidden flex flex-col">
                <div @click="open1 = !open1" :class="[open1 ? 'rounded-t-lg' : 'rounded-lg']" class="question transition-all duration-700 pr-5 z-20">
                    <h3 class="font-bold text-sm md:text-2xl py-3.5 md:py-6">Smartflood Research</h3>
                    <svg :class="[open1 == true ? 'rotate-180 transition-all duration-200' : 'rotate-0 transition-all duration-200']" :width="[windowWidth <= 767 ? '30' : '50']" height="40" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.75 50H16.25C7.7 50 2 45.7647 2 35.8824V16.1176C2 6.23529 7.7 2 16.25 2H44.75C53.3 2 59 6.23529 59 16.1176V35.8824C59 45.7647 53.3 50 44.75 50Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.75 17.5293L35.8295 24.5881C32.894 26.9034 28.0775 26.9034 25.142 24.5881L16.25 17.5293" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <transition name="slide-fade">
                  <div v-if="open1 == true" class=" text-black bg-y z-0 px-6 md:px-7 text-left bg-yellow-400 rounded-b-lg" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
                    <p class="font-bold mt-3 text-xxs md:text-base">Packages C and E</p>
                    <p class="text-xxs md:text-base mb-2">Research on communication systems suitable to be implemented in the Pacitan area regarding the transmission of data from the field to IoT applications.</P>
                    <p class="font-bold text-xxs md:text-base">Package B</p>
                    <p class="text-xxs md:text-base mb-2">Research on the reliability of water level sensor readings in detecting a situation on the field.</P>
                    <p class="font-bold text-xxs md:text-base">Package A</P>
                    <p class="mb-3 text-xxs md:text-base ">Research on efficiency of solar panel battery charging for sensor and microcontroller power supply.</P>
                  </div>
                </transition>
              </div>
            <div class="faq  overflow-hidden flex flex-col">
                <div @click="open2 = !open2" :class="[open2 ? 'rounded-t-lg' : 'rounded-lg']" class="question  transition-all duration-700 pr-5 z-20">
                    <h3 class="text-white text-sm md:text-2xl font-bold py-3.5 md:py-6">Smart Parking Research</h3>
                    <svg :class="[open2 == true ? 'rotate-180 transition-all duration-200' : 'rotate-0 transition-all duration-200']" :width="[windowWidth <= 767 ? '30' : '50']" height="40" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.75 50H16.25C7.7 50 2 45.7647 2 35.8824V16.1176C2 6.23529 7.7 2 16.25 2H44.75C53.3 2 59 6.23529 59 16.1176V35.8824C59 45.7647 53.3 50 44.75 50Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.75 17.5293L35.8295 24.5881C32.894 26.9034 28.0775 26.9034 25.142 24.5881L16.25 17.5293" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                </div>
                <transition name="slide-fade">
                <div v-if="open2 == true" class=" text-black bg-y px-6 md:px-7 text-left z-0 bg-yellow-400 rounded-b-lg" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
                    <p class="font-bold mt-3 text-xxs md:text-base text-left">Package C</p>
                    <p class="text-xxs md:text-base mb-2">Research on communication systems suitable for implementation regarding the transmission of data from parking lots to parking application.</P>
                    <p class="font-bold text-xxs md:text-base">Package B</P>
                    <p class="text-xxs md:text-base mb-2">Research on the reliability of RFID or similar sensor readings in counting vehicles and authentication systems.</P>
                    <p class="font-bold text-xxs md:text-base">Package E</P>
                    <p class="mb-3 text-xxs md:text-base ">Research on the database used to collect parking user data at UB.</P>
                </div>
                </transition>
            </div>


            <div class="faq overflow-hidden flex flex-col">
                <div @click="open3 = !open3" :class="[open3 ? 'rounded-t-lg' : 'rounded-lg']" class="question transition-all duration-700 pr-5 z-20">
                    <h3 class="text-white text-sm md:text-2xl font-bold py-3.5 md:py-6">IoT WS Website Research</h3>
                    <svg :class="[open3 == true ? 'rotate-180 transition-all duration-200' : 'rotate-0 transition-all duration-200']" :width="[windowWidth <= 767 ? '30' : '50']" height="40" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.75 50H16.25C7.7 50 2 45.7647 2 35.8824V16.1176C2 6.23529 7.7 2 16.25 2H44.75C53.3 2 59 6.23529 59 16.1176V35.8824C59 45.7647 53.3 50 44.75 50Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.75 17.5293L35.8295 24.5881C32.894 26.9034 28.0775 26.9034 25.142 24.5881L16.25 17.5293" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                </div>
                <transition name="slide-fade">
                <div v-if="open3 == true" class=" text-black md:px-7 bg-y z-0 px-6 bg-yellow-400 rounded-b-lg" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
                    <p class="font-bold mt-3 text-xxs md:text-base text-left">Package E</p>
                    <p class="text-xxs md:text-base text-left mb-2">Research on best UI/UX (Frontend) to be implemented in a Web platform.</P>
                    <P class="font-bold text-xxs md:text-base text-left">Package E</P>
                    <p class="mb-3 text-xxs md:text-base text-left">Research on the Admin side (Backend) for easy and efficient management of the Web platform.</P>
                </div>
                </transition>
            </div>
            <div></div>
            <div class="faq overflow-hidden flex flex-col">
              <div class=" absolute bg-yellow-400"></div>
                <div @click="open4 = !open4" :class="[open4 ? 'rounded-t-lg' : 'rounded-lg']" class="question transition-all duration-700 pr-5 z-20">
                    <h3 class="text-white text-sm md:text-2xl font-bold py-3.5 md:py-6">IoT Module Research</h3>
                    <svg :class="[open4 == true ? 'rotate-180 transition-all duration-200' : 'rotate-0 transition-all duration-200']" :width="[windowWidth <= 767 ? '30' : '50']" height="40" viewBox="0 0 61 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44.75 50H16.25C7.7 50 2 45.7647 2 35.8824V16.1176C2 6.23529 7.7 2 16.25 2H44.75C53.3 2 59 6.23529 59 16.1176V35.8824C59 45.7647 53.3 50 44.75 50Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M44.75 17.5293L35.8295 24.5881C32.894 26.9034 28.0775 26.9034 25.142 24.5881L16.25 17.5293" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                </div>
                <transition name="slide-fade" class="">
                  <div v-if="open4 == true" class=" text-black text-left px-6 md:px-7 bg-y z-0 bg-yellow-400 rounded-b-lg" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
                    <p class="font-bold mt-3 text-xxs text-left md:text-base">Package C </p>
                    <p class="text-xxs md:text-base text-left mb-2">Research on IoT hardware. Studying sensors commonly used in the IoT world, such as Ultrasonic sensors, DHT sensors, and others.</P>
                    <P class="font-bold text-xxs md:text-base text-left">Package B</p>
                    <p class="text-xxs md:text-base mb-2">Research on IoT software. Studying software commonly used in IoT applications, such as Arduino IDE, Python, and more.</P>
                    <P class="font-bold text-xxs md:text-base text-left">Package E</P>
                    <p class="mb-3 text-xxs md:text-base text-left">Research on Frontend and Backend for IoT. This involves learning about creating user interfaces for applications and setting up cloud-based databases.</P>
                  </div>
                </transition>
            </div>
          </div>
        </section>
      </div>
</template>

<script>
export default {
  name: 'roadmapRiset',
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
.slide-fade-enter-active {
  transition: all 0.6s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.6s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-250px);
  opacity: 1;
}

@keyframes bounce-in {
  from{
      opacity: 1;
      transform: translateY(-10px);
  }
  to {
      opacity: 1;
      transform: translateY(0px);
  }
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.garis2 {
  width: 70%;
  height: 33px;
  margin-top: 7.5rem;
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

.roadmap {
  
  width: 100%;
  margin: 1px auto;
  align-items: center;
}

.title {
  padding-top: 1rem;
  color: #233172;
}

.faq{
  
  width: 80%;
  
  margin: 15px auto;
  cursor: pointer;
  
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #091344;
}

.question h3 {
  
  margin-left: 1.5rem;
}


.answer p {
  line-height: 1.6;
  margin-left: 2.5rem;
  margin-right:0.5rem;
  color: #1c1c1c;
}

.faq.active .answer {
  max-height: 300px;
  animation: fade 1s ease-in-out;

}

.faq.active svg {
  transform: rotate(-180deg);
}


@media (max-width: 1024px) {
  .garis2 {
  width: 60%;
  height: 20px;
  margin-top: 1rem;
  }
}
@media (max-width: 810px) {
  .garis2 {
  width: 60%;
  height: 15px;
  margin-top: 1rem;
  }
}


</style>