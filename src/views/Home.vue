
<script>
import axios from 'axios';

export default{
  data(){
    return{
      find_image:"",
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
    navigate(img_id){
        this.$router.push({name:'image',params:{id:img_id}})
    },
    // 9 изображений на гл. стр.
    getImages(){
      
         axios.get('https://api.unsplash.com/photos/random?collections=228275&count=9&client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y')
            .then(res => (this.images = res.data) )
    },

    // Вывод поиска 9 изобр.
    findImages(){
      axios.get(`https://api.unsplash.com/photos/random?collections=228275&orientation=${this.find_image}&count=9&client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y`)
                .then(res => (this.images = res.data) )
      console.log('FindImgs')
    },

    // Ф-я модального окна
    openModal(id){
      axios.get(`https://api.unsplash.com/photos/DKix6Un55mw?&client_id=J71SpWX80GhODDkJfqRwCXGHyfiKRg231UhRbfGc2_Y`)
                .then(res => (this.mod_image = res.data) )
      console.log(id)
      this.isActive = !this.isActive
    },

    // goToFav(){
    //   console.log('push')
    //   this.$router.push({path:'/Favorites'})
    // },
  },
// Переход на вкладку "избранные"
    
  // Автовызов ф-ии getImages
  mounted(){
      this.getImages()
  }
}
// const App = new Vue({
//     router
// }).$mount('#app')
</script>

<template>
    <div class="header">
        <img class="header_logo" src="../assets/imgs/logo.png">
        <div class="header_link">
            <router-link to='/Favorites'><button class="header_btn"><i class="fa-regular fa-heart"></i> Избранные</button></router-link>
        </div>
    </div>
    <div class="block_search container">
        <div>
            <p>Найти фотографии по теме: {{ find_image }}</p>
            <input type="text" placeholder="Поиск" id="inp_photo" @input="this.find_image = $event.target.value  ">
            <button type="submit" @:click="findImages()"><i class="fa-solid fa-magnifying-glass"></i> Найти</button>
        </div>
    </div>
    <div v-if="find_image" class="block_images container">
      <div class='image_block' v-for="img in images">
            <img :src="img.urls.raw"/>
      </div>
    </div>
    <div class="block_images container">
        <div class='image_block' v-for="img in images">
            <img :src="img.urls.raw" @click="navigate(img.id)"/>
        </div>
    </div>

  <!-- <div v-if="isActive" class="modal_win ">
    <img :src="mod_image.urls.raw">
    <h1>User name: {{ mod_image.user.name }}</h1>
    <p>Likes: {{ mod_image.likes }}</p>
    <button @click="isActive=false">X</button>
  </div> -->
    <!-- <p>{{ mod_image }}</p> -->
</template>

<style >
    *{
      margin:0;
      padding:0;
      font-family:Sans-serif;
    }
    .block_images{
      display:flex;
      flex-wrap: wrap;
      justify-content:center;
      align-items:center;
      
    }
    .image_block{
      width:30%;
      height:30%;
      margin:20px;
    }
    .image_block>img{
      height: auto;
      width: 100%;
    }

    .container{
        padding:0 7%;
        background-color: rgba(0, 0, 0, 0.05);
    }

    .header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:5vh;
        background-color:#000;
        padding:50px 7%;
        
    }

    .header_logo{
        width:10%;
    }

    .header_link>a{
        color:#fff;
        text-decoration:none;
    }

    .block_search{
        background-image: url("https://images.unsplash.com/photo-1683375328541-b96a645857ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw1QWs3cWNsek9CZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60");
        padding: 4% 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        width: 100%;;
    }
    .block_search>div{
        width: 90%;
    }
    .block_search>div>input{
        width: 90%;
        padding:10px;
    }

    .block_search>div>button,
    .header_btn{
        padding: 10px;
        background-color: #fff;
        color: #000;
        border: none;
        transition: .4s;
    }
    .block_search>div>button:hover,
    .header_btn:hover{
        background-color: transparent;
        transition: .4s;
        color:#fff;   
        border: 2px solid #fff;
    }

    /* Модальное окно*/
    .modal_win{
      top:12%;
      left:25%;
      width:100vh;
      height:70vh;
      border-radius:20px;
      background-color: #ccc;
      position:fixed;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

    }

    .modal_win img{
      width:50%;
      height:50%;
      border-radius:20px;
    }

    .modal_win h1{
      margin:40px 0;
    }

    .modal_win button{
      position:absolute;
      top:20px;
      right:20px;
      background-color:red;
      color:#fff;
      padding:5px;
      border-radius:10px;
      border:none;
      transition:.4s;
    }

    .modal_win button:hover{
      transition:.4s;
      background-color:#000;
    }

    .mod_active{
      display:flex;
    }

    @media screen and (max-width: 376px) {
         .header_logo{
        width:30%;
    }

        .image_block{
            width:90%;
        }

        .block_search>div>input{
        width: 65%;
    }
    }

</style>
