<template>
    <div class=" md:w-1/2">
      <div class=" pt-10 pb-5">
        <section class=" text-3xl">ALUMNI</section>
      </div>
      <div>
        <section class=" text-lg font-bold py-2">Tambahkan Alumni Baru</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col">
            <div class=" my-1 flex justify-between">
              <span>nama: </span>
               <input v-model="this.nama" type="text" placeholder="masukkan nama lengkap...." class="px-1 border border-black text-sm" alt="">
            </div>
            <div class=" my-1 flex justify-between">
              <span>panggilan: </span>
               <input v-model="this.panggilan" type="text" placeholder="masukkan nama panggilan...." class="px-1 border border-black text-sm" alt="">
            </div>
            <div class=" my-1 flex justify-between">
              <span>angkatan: </span>
               <input v-model="angkatan" type="number" placeholder="masukkan tahun keluar...." class="px-1 border border-black text-sm" alt="">
            </div>
            <div class=" my-1 flex justify-between flex-col">
              <span>kesan pesan</span>
               <textarea v-model="kesan" type="" placeholder="masukkan quotes...." class="px-1 border border-black text-sm" alt=""></textarea>
            </div>
            <div class=" my-1 flex justify-between flex-col">
              <span>quotes </span>
               <textarea v-model="quotes" type="" placeholder="masukkan quotes...." class="px-1 border border-black text-sm" alt=""></textarea>
            </div>
            <div class=" my-1 flex justify-between">
              <span>jabatan: </span>
               <input v-model="jabatan" type="text" placeholder="(jabatan) at (perusahaan)" class="px-1 border border-black text-sm" alt="">
            </div>
            <div class=" my-1 flex justify-between flex-col">
              <div>
                <span>upload foto </span> <span class=" text-sm text-red-600 font-semibold"> (foto persegi 1:1, <span class="text-black text-xs">MAX 800Kb</span>) </span>
              </div>
              <input type="file" accept="image/*" class=" border border-black" ref="alumnibaru">
            </div>
            <button @click="addAlumni" :disabled="uploading == true" class=" bg-gray-300 px-2 py-1 mt-10 border-black border my-1 hover:bg-slate-200">
              <span v-if="uploading == true">loading...</span>
              <span v-if="uploading == false">upload</span> 
            </button>
          </div>
        </section>
      </div>
      <!---->
      <div class="mt-6 md:mt-20">
        <section class=" text-lg font-bold py-2">Hapus Alumni</section>
        <section class="flex flex-col items-center justify-center">
          <div class="flex flex-col w-1/2">
            <div v-for="todo in todos" :key="todo.id" class="w-full border border-black my-4 p-1 flex flex-col justify-start items-start">
              <div>
                <span>nama: </span>
                <span>{{ todo.nama }}</span>
              </div>
              <div>
                <span>angkatan: </span>
                <span>{{ todo.angkatan }}</span>
              </div>
               <button @click="deleteAlumni(todo.id, todo.nama)" class=" w-3/4 self-center text-center bg-red-300 hover:bg-red-400">hapus</button>
            </div>
        </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import { doc, setDoc, deleteDoc, collection, onSnapshot } from 'firebase/firestore'
  import db from '../utilities/firebase.js'
  import {storage} from "../utilities/firebase.js"
  import { ref, uploadBytes, deleteObject} from "firebase/storage"
  import { useCollection } from 'vuefire'

  
  export default{
    name:'UDAlumni',
    components:{

    },
    setup(){
      const todos = useCollection(collection(db, 'alumni'));
      console.log(Object.keys(todos).length);
      return{todos}
    },

    data(){
      return{
        jumlahAlumni: '',
        nama: '',
        panggilan: '',
        angkatan: '',
        kesan: '',
        quotes: '',
        jabatan: '',
        uploading: false,

      }
    },

    created() {
      this.getAlumni()
    },

    methods:{
      getAlumni(){
        onSnapshot(doc(db, "jumlah", "jumlah_alumni"), (doc) => {
          this.jumlahAlumni = doc.data().jumlah;
        });
      },
        
      async addAlumni() {
          this.uploading = true;
          if(this.nama == " " ||this.panggilan == ''|| this.angkatan == ''|| this.kesan == ''|| this.$refs.alumnibaru.value == null || this.$refs.alumnibaru.value == ""){
            alert('nilai tidak dapat kosong');
            this.uploading = false
          }else if (this.$refs.alumnibaru.files[0].size > 800 * 800) {
            //e.preventDefault();
            alert('File terlalu besar (> 800Kb)');
            this.uploading = false
          }else{
            // add new alumni 
            await setDoc(doc(db, "jumlah", "jumlah_alumni"), {
                jumlah: this.jumlahAlumni + 1
            }, { merge: true });
          
            let x = (this.jumlahAlumni).toString();
            await setDoc(doc(db, "alumni", x), {
                nama: this.nama,
                panggilan: this.panggilan,
                angkatan: this.angkatan,
                potong: this.angkatan.toString().slice(-2),
                kesan: this.kesan,
                quotes: this.quotes,
                jabatan: this.jabatan
            }, { merge: true });
          
            const storageRef = ref(storage, 'alumni/'+x);
            uploadBytes(storageRef, this.$refs.alumnibaru.files[0]).then(()=>{console.log("uploaded")})
            this.nama= "",
            this.panggilan= '',
            this.angkatan= ''
            this.kesan= ''
            this.quotes= ''
            this.jabatan= ''
            this.$refs.alumnibaru.value = null;

            alert('new alumni uploaded')
            this.uploading = false
          }
      },
      async deleteAlumni(y, nama){  
        if (confirm('menghapus:  ' + nama.toUpperCase()) == true) {
          let z = y.toString()
          await deleteDoc(doc(db, "alumni", z))
          deleteObject(ref(storage, 'alumni/'+z)).then(() => {
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