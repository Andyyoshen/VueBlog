<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top "  :style="ShowNavColor" >
  <a class="navbar-brand" href="#" style="margin-left:250px;">Andy's Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

   <div class="navbar-collapse collapse  order-2" id="collapsingNavbar" style="margin-left:650px;">
    <ul class="navbar-nav ">
      <li class="nav-item active mr-5">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <!-- <li class="nav-item mr-5">
        <a class="nav-link" href="#">Link</a>
      </li> -->
      <li class="nav-item mr-5">
         <a class="nav-link" href="#">Project</a>
      </li>
      <li class="nav-item mr-5">
        <router-link class="nav-link" to="/PostLog">Blog</router-link>
      </li>
      <li class="nav-item mr-5">
        <a class="nav-link" href="#">About</a>
      </li>

    </ul>
  </div>
</nav>
<div class="view intro-2 mb-3" style="height:360px;color:white;">
         <div class="row pt-4 " style="">
            <div class="col" style="margin-left:250px;margin-top:180px;">
                <h2 class="mb-4" style="font-weight:bold; font-size:40px">部落格</h2>
                <!-- <h5>用鍵盤寫下屬於自己的故事</h5>  -->
                <h5>認真的求知者，必有收穫的寶庫</h5>
            </div>
        </div>
    </div>
<!-- <div class="mb-3" style="height:150px; background-color:#C16060; color:white; ">
        <div class="row pt-4">
            <div class="col" style="margin-left:180px;">
                <h2 class="mb-4" style="font-weight:bold; font-size:40px">部落格</h2>
                <h5>在這裡分享了一些文章，程式教學，開發過程筆記</h5>
            </div>
        </div>
    </div> -->
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
      return {
        ShowNavColor:""
      }

    },
    created(){
        window.addEventListener("scroll", this.handleScroll)
      },
    methods:{
      handleScroll:function(){
        if (window.pageYOffset >10) {
          this.ShowNavColor = "background-color: #0992a4";
        } else {
          this.ShowNavColor = "";
        }
    }
      }

}
</script>
<style scoped>
.intro-2 {
    background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("https://mdbootstrap.com/img/Photos/Others/img (51).jpg");
    background-size: cover;
}
/* style="background-color: #0992a4;" */
</style>