<template>
  <div class="absolute w-full mt-5">
    <div>
      <router-link to="/" class="mt-5 bg-slate-300 px-2 py-1 rounded-sm hover:bg-black hover:text-white transition-colors duration-150">back to home</router-link>
    </div>
  </div>
  <div v-if="login == false" class="flex flex-col w-screen h-screen items-center justify-center">
    <div class=" border-2 border-black md:w-4/12 flex flex-col px-5 py-9 rounded-xl">
      <section>
        <div class=" font-bold text-lg">LOGIN TO CONTINUE</div>
      </section>
      <section class=" flex flex-col mt-10 justify-center items-center">
        <div class=" flex- flex-col justify-center items-center ">
          <div class=" flex mb-4">
            <div class=" mr-3">Username: </div>
            <input @keydown.enter="doLogin" type="text" placeholder="username..." v-model="username" class=" px-2 w-full border-2 hover:border-gray-400 transition-colors duration-100 rounded">
          </div>
          <div class=" flex mb-7">
            <div class="mr-3">Password:  </div>
            <input @keydown.enter="doLogin" type="password" placeholder="password..." v-model="password" class=" px-2 w-full border-2 hover:border-gray-400 transition-colors duration-100 rounded">
          </div>
          <div class="flex items-center justify-center">
            <button @click="doLogin" class=" w-full bg-gray-300 py-1 hover:bg-slate-500 hover:text-gray-50 duration-100 transition-colors">LOGIN</button>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div v-if="login == true" class="pt-20">
    <h1>This is an aboutzz page</h1>
    <UDHome />
    <div class="flex flex-col md:flex-row">
      <UDAlumni />
      <UDPrestasi />
    </div>
  </div>
</template>

<script>
import UDHome from '@/views/UDHome.vue'
import UDAlumni from '@/views/UDAlumni.vue'
import UDPrestasi from '@/views/UDPrestasi.vue'
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
export default{
  name:'App',
  components:{
    UDHome,
    UDAlumni,
    UDPrestasi,
  },
  data(){
    return{
      login: false,
      username: "",
      password: "",
    }
  },
  unmounted(){
    this.doLogout
  },
  methods:{
    doLogin(){
      if (this.username == '' || this.password == "") {
        alert('isi username dan password!')
      }
      else{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.username, this.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(user.uid == 'sp7Dz3RH9WU7O0Yp2WHzHkgb3og2'){
            this.login = true;
          }
          // ...
        })
        .catch(() => {
          this.username = '';
          this.password = '';
          alert('password salah!');
        });
      }
    },
    doLogout(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        this.login = false;
      }).catch(() => {
        // error
      });
    }
  }
}
</script>