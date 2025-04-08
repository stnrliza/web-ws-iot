<template>
    <div class="flex justify-center flex-col items-center w-full">
      <div class=" pt-10 pb-5">
        <section class=" text-3xl">GAMBAR HOME PAGE</section>
      </div>
      <div>
        <section class=" text-lg font-bold py-2">Tambahkan Foto Home Baru</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col">
            <div class=" my-1 flex justify-between">
              <span>label foto: </span>
               <input v-model="nama" type="text" placeholder="foto cangar 2022 ..." class="px-1 border border-black" alt="">
            </div>
            <div class=" my-1 flex justify-between flex-col">
              <div>
                <span>upload foto </span> <span class=" text-sm text-red-600 font-semibold"> (foto rasio 3:2, <span class="text-black text-xs">MAX 1Mb</span>) </span>
              </div>
              <input type="file" accept="image/*" class=" border border-black" ref="homebaru">
            </div>
            <button @click="addHome" :disabled="uploading == true" class=" bg-gray-300 px-2 py-1 mt-7 border-black border my-1 hover:bg-slate-200">
              <span v-if="uploading == true">loading...</span>
              <span v-if="uploading == false">upload</span> 
            </button>
          </div>
        </section>
      </div>
      <div class="mt-6 md:mt-10 md:w-3/4 w-full">
        <section class=" text-lg font-bold py-2">Hapus Foto</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col w-1/2">
            <div v-for="todo in todos" :key="todo.id" class="w-full border border-black my-4 p-1 flex flex-col justify-start items-start">
              <div>
                <span>nama gambar: </span>
                <span>{{ todo.nama }}</span>
              </div>
               <button @click="deleteHome(todo.id, todo.nama)" class="mt-4 w-3/4 self-center text-center bg-red-300 hover:bg-red-400">hapus</button>
            </div>
        </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { doc, onSnapshot, setDoc, deleteDoc, collection } from 'firebase/firestore'
  import db from '../utilities/firebase.js'
  import {storage} from "../utilities/firebase.js"
  import { ref, uploadBytes, deleteObject} from "firebase/storage"
  import { useCollection } from 'vuefire'
  
  export default{
    name:'UDHome',
    components:{
  
    },
    setup(){
      const todos = useCollection(collection(db, 'home'));
      console.log(Object.keys(todos).length);
      return{todos}
    },

    data(){
      return{
        jumlahHome: '',
        nama: '',
        uploading: false,
      };
    },
    created() {
      this.getHome()
    },
    
    methods:{
      getHome(){
        onSnapshot(doc(db, "jumlah", "jumlah_home"), (doc) => {
          this.jumlahHome = doc.data().jumlah;
        });
      },

      async addHome() {
          this.uploading = true;
          if (this.nama == '' || this.$refs.homebaru.value == null || this.$refs.homebaru.value == "") {
            alert('nilai tidak dapat kosong');
            this.uploading = false
          }else if (this.$refs.homebaru.files[0].size > 1100 * 1100) {
            //e.preventDefault();
            alert('File terlalu besar (> 1Mb)');
            this.uploading = false
          }else{
            // add new alumni 
            await setDoc(doc(db, "jumlah", "jumlah_home"), {
                jumlah: this.jumlahHome + 1
            }, { merge: true });
          
            let x = (this.jumlahHome).toString();
            await setDoc(doc(db, "home", x), {
                nama: this.nama,
            }, { merge: true });
          
            const storageRef = ref(storage, 'home/'+x);
            uploadBytes(storageRef, this.$refs.homebaru.files[0]).then(()=>{console.log("new home image uploaded")})
            this.nama= "",
            this.$refs.homebaru.value = null;

            alert('new home image uploaded')
            this.uploading = false
          } 
      },
      async deleteHome(y, home){  
        if (confirm('menghapus:  ' + home.toUpperCase()) == true) {
          let z = y.toString()
          await deleteDoc(doc(db, "home", z))
          deleteObject(ref(storage, 'home/'+z)).then(() => {
              // File deleted successfully
          }).catch((error) => {
              console.log(error);
              alert('gagal, silahkan coba lagi');
          });
        }
      }
    }
  }
  </script>