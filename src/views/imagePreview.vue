<template>
  <img :src="url" alt="" class=" w-52">
</template>

<script>
import {storage} from "../utilities/firebase.js"
import { ref, getDownloadURL} from "firebase/storage"
export default {
    name: "tesPreview",
    data:()=>{
        return{
            url:'https://placehold.co/140x100',
            
        };
    },
    mounted(){
        getDownloadURL(ref(storage, 'alumni/1')).then((download_url) => (this.url = download_url))
    }
}
</script>

<style>

</style>