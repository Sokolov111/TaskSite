<template>
    <div class="header">
        <img class="header_logo" src="../assets/imgs/logo.png">
        <div class="header_link">
            <router-link to='/Favorites'><button class="header_btn">Избранные</button></router-link>
        </div>
    </div>
    <div class="container">
      <h1 style="text-align:center; padding:30px 0;">Избранные</h1>
    
      <div class="block_images ">
        <div class='image_block'  v-for="img in images">
            <img :src="img.urls.raw" @click="openModal(img.id)"/>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      images: null,
      mod_image: null,
      user:"",
      isActive:false
    }
  },
  computed:{
    
    image_n(){
      return 
    }
  },
  methods:{
    // 9 изображений на гл. стр.
    getImages(){
      
         axios.get('https://api.unsplash.com/users/Discover11/likes?client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y')
            .then(res => (this.images = res.data) )
    },


    // Ф-я модального окна
    openModal(id){
      axios.get(`https://api.unsplash.com/photos/DKix6Un55mw?&client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y`)
                .then(res => (this.mod_image = res.data) )
      console.log(id)
      this.isActive = !this.isActive
    },
  },
   
  // Автовызов ф-ии getImages
  mounted(){
      this.getImages()
  }
}
</script>
