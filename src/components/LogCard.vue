<template>
        <div class="card single_post">
                    <div class="body">
                        <div class="img-post">
                            <img class="d-block img-fluid" src="https://via.placeholder.com/800x280/FFB6C1/000000" alt="First slide">
                        </div>
                        <h3><a href="blog-details.html">{{LogCardData.Title}}</a></h3>
                        <p>{{LogCardData.content}}</p>
                    </div>
                    <div class="footer">
                        <div class="actions">
                            <button  class="btn btn-outline-secondary" @click="Into(LogCardData.id)">Continue Reading</button>
                        </div>
                        <ul class="stats">
                            <li><a href="javascript:void(0);">General</a></li>
                            <li><a href="javascript:void(0);" class="fa fa-heart">28</a></li>
                            <li><a href="javascript:void(0);" class="fa fa-comment">128</a></li>
                        </ul>
                    </div>
        </div>                                  

</template>
<script>
export default {
    name:'LogCard',
    components:{
        
    },
    props:['LogCardData'],
    data(){
        return {
       
        }
    },
  mounted(){
      
     // console.log($('#tree').buildTree())
     
     
  },
  methods:{
      Into:function(data){
          this.$store.commit('ChangArticle',data)
          this.$router.push({path:'/Article_content'})
      }
    // aa: function(){
    //     this.
    //     //alert("d")
    // }
  },
  beforeCreate () {
  document.querySelector('body').setAttribute('style', 'background-color:#f4f7f6;')
},
 
beforeDestroy () {
  document.querySelector('body').removeAttribute('style')
}
}
</script>
<style scoped>
.single_post {
    -webkit-transition: all .4s ease;
    transition: all .4s ease
}

.single_post .body {
    padding: 30px
}

.single_post .img-post {
    position: relative;
    overflow: hidden;
    max-height: 500px;
    margin-bottom: 30px
}

.single_post .img-post>img {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: -webkit-transform .4s ease, opacity .4s ease;
    transition: transform .4s ease, opacity .4s ease;
    max-width: 100%;
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transform: scale(1.01)
}

.single_post .img-post:hover img {
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
    opacity: .7;
    filter: gray;
    -webkit-filter: grayscale(1);
    -webkit-transition: all .8s ease-in-out
}

.single_post .img-post:hover .social_share {
    display: block
}

.single_post .footer {
    padding: 0 30px 30px 30px
}

.single_post .footer .actions {
    display: inline-block
}

.single_post .footer .stats {
    cursor: default;
    list-style: none;
    padding: 0;
    display: inline-block;
    float: right;
    margin: 0;
    line-height: 35px
}

.single_post .footer .stats li {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    display: inline-block;
    font-weight: 400;
    letter-spacing: 0.25em;
    line-height: 1;
    margin: 0 0 0 2em;
    padding: 0 0 0 2em;
    text-transform: uppercase;
    font-size: 13px
}

.single_post .footer .stats li a {
    color: #777
}

.single_post .footer .stats li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0
}

.single_post h3 {
    font-size: 20px;
    text-transform: uppercase
}

.single_post h3 a {
    color: #242424;
    text-decoration: none
}

.single_post p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
    margin: 0
}

.single_post .blockquote p {
    margin-top: 0 !important
}

.single_post .meta {
    list-style: none;
    padding: 0;
    margin: 0
}

.single_post .meta li {
    display: inline-block;
    margin-right: 15px
}

.single_post .meta li a {
    font-style: italic;
    color: #959595;
    text-decoration: none;
    font-size: 12px
}

.single_post .meta li a i {
    margin-right: 6px;
    font-size: 12px
}
</style>
