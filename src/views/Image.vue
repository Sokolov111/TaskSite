<script>
import axios from 'axios';

export default{
  data(){
    return{
      images: null,
      mod_image:null,
    }
  },
  computed:{
    
    image_n(){
      return 
    }
  },
  methods:{
    getImages(){
        axios.get(`https://api.unsplash.com/photos/${this.$route.params.id}?&client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y`)
            .then(res => (this.mod_image = res.data) )
    },
  },
   
  // Автовызов ф-ии getImages
  mounted(){
      this.getImages()
  }
}
</script>

<template>
    
        <div class="header">
            <img class="header_logo" src="../assets/imgs/logo.png">
            <div class="header_link">
                <router-link to='/Favorites'><button class="header_btn">Избранные</button></router-link>
            </div>
        </div>
    <div class="container">
        <div class="img_descr">
            <div v-if="mod_image" class="img_descr_box">
            <img :src="mod_image.user.profile_image.small">
                <div>
                    <h3>{{ mod_image.user.name }}</h3>
                    <p>@{{ mod_image.user.instagram_username }}</p>
                </div>
            </div>
            <div class="img_descr_links">
                <button><i class="fa-regular fa-heart"></i></button>
                <button><i class="fa-solid fa-download"></i> Download</button>
            </div>
        </div>
        <div v-if="mod_image" class="imags_box">
            <img width="200" height="200" :src="mod_image.urls.raw">         
        </diV>

        
    </div>

</template>




<style>
    .img_descr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:30px 0;
    }
    .img_descr_box{
        display: flex;
        align-items: center;
    }

    .img_descr_box img{
        width: 60%;
        border-radius: 10px;
    }

    .img_descr_box h3,.img_descr_box p{
        margin: 7px;
    }

    .img_descr_links button{
        margin: 0 10px;
        color: #000;
        padding: 8px;
        border-radius: 10px;
        border:none;
    }
    .img_descr_links button:nth-child(1){
        background-color: #f1f0f0;
    }
    .img_descr_links button:nth-child(2){
        background-color: rgb(255, 251, 0);
    }

    .imags_box{
        width:100%;
        height: 60vh;
        
    }

    .imags_box img{
        border-radius: 20px;
        width: 100%;
        height: 100%;
    }

    
    @media screen and (max-width: 376px) {
        .imags_box img{
            width: 77%;
            height:50%;
        }
        .img_descr_box{
            display: block;
        }
    }

    
</style>