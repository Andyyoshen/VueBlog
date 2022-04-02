<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark  fixed-top "  :style="ShowNavColor" >
  <a class="navbar-brand" href="#">Andy的窩</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

   <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/PostLog">Project</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/PostLog">Blog</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
<div class="view intro-2 mb-3" style="height:360px;color:white;">
         <div class="row pt-4 " style="">
            <div class="col" style="margin-left:280px;margin-top:50px;">
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