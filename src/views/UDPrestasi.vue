<template>
    <div class="md:w-1/2">
      <div class=" pt-10 pb-5">
        <section class=" text-3xl">PRESTASI</section>
      </div>
      <div>
        <section class=" text-lg font-bold py-2">Tambahkan Prestasi Baru</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col">
            <div class=" my-1 flex justify-between">
              <span>nama: <span class=" text-xs">(max 50 char)</span> </span>
               <input v-model="nama" type="text" maxlength="50" placeholder="nama1, nama2, nama3, ..." class="px-1 border border-black" alt="">
            </div>
            <div class=" my-1 flex justify-between">
              <span>lomba: <span class=" text-xs">(max 40 char)</span></span>
               <input v-model="lomba" type="text" maxlength="41" placeholder="masukkan nama lomba...." class="px-1 border border-black" alt="">
            </div>
            <div class=" my-1 flex justify-between flex-col">
              <div>
                <span>upload foto </span> <span class=" text-sm text-red-600 font-semibold"> (foto persegi 1:1, <span class="text-black text-xs">MAX 800Kb</span>) </span>
              </div>
              <input type="file" accept="image/*" class=" border border-black" ref="prestasibaru">
            </div>
            <button @click="addPrestasi" :disabled="uploading == true" class=" bg-gray-300 px-2 py-1 mt-10 border-black border my-1 hover:bg-slate-200">
              <span v-if="uploading == true">loading...</span>
              <span v-if="uploading == false">upload</span> 
            </button>
          </div>
        </section>
      </div>
      <div class="mt-6 md:mt-20">
        <section class=" text-lg font-bold py-2">Hapus Prestasi</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col w-1/2">
            <div v-for="todo in todos" :key="todo.id" class="w-full border border-black my-4 p-1 flex flex-col justify-start items-start">
              <div>
                <span>nama: </span>
                <span>{{ todo.nama }}</span>
              </div>
              <div>
                <span>lomba: </span>
                <span>{{ todo.lomba }}</span>
              </div>
               <button @click="deletePrestasi(todo.id, todo.lomba)" class=" w-3/4 self-center text-center bg-red-300 hover:bg-red-400">hapus</button>
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
    name:'UDPrestasi',
    components:{
  
    },
    setup(){
      const todos = useCollection(collection(db, 'prestasi'));
      console.log(Object.keys(todos).length);
      return{todos}
    },

    data(){
      return{
        jumlahPrestasi: '',
        nama: '',
        lomba: '',
        uploading: false,
      };
    },
    created() {
      this.getPrestasi()
    },
    
    methods:{
      getPrestasi(){
        onSnapshot(doc(db, "jumlah", "jumlah_prestasi"), (doc) => {
          this.jumlahPrestasi = doc.data().jumlah;
        });
      },

      async addPrestasi() {
          this.uploading = true;
          if (this.nama == '' || this.lomba == '' || this.$refs.prestasibaru.value == null || this.$refs.prestasibaru.value == "") {
            alert('nilai tidak dapat kosong');
            this.uploading = false
          }else if (this.$refs.prestasibaru.files[0].size > 800 * 800) {
            //e.preventDefault();
            alert('File terlalu besar (> 800Kb)');
            this.uploading = false
          }else{
            // add new alumni 
            await setDoc(doc(db, "jumlah", "jumlah_prestasi"), {
                jumlah: this.jumlahPrestasi + 1
            }, { merge: true });
          
            let x = (this.jumlahPrestasi).toString();
            await setDoc(doc(db, "prestasi", x), {
                nama: this.nama,
                lomba: this.lomba
            }, { merge: true });
          
            const storageRef = ref(storage, 'prestasi/'+x);
            uploadBytes(storageRef, this.$refs.prestasibaru.files[0]).then(()=>{console.log("new prestasi uploaded")})
            this.nama= "",
            this.lomba= '',
            this.$refs.prestasibaru.value = null;

            alert('new prestasi uploaded')
            this.uploading = false
          } 
      },
      async deletePrestasi(y, lomba){  
        if (confirm('menghapus:  ' + lomba.toUpperCase()) == true) {
          let z = y.toString()
          await deleteDoc(doc(db, "prestasi", z))
          deleteObject(ref(storage, 'prestasi/'+z)).then(() => {
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